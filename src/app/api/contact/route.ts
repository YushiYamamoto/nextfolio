import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';
import SMTPTransport from 'nodemailer/lib/smtp-transport';

const transporter = nodemailer.createTransport({
host: process.env.SMTP_SERVER,
port: Number(process.env.SMTP_PORT), // 明示的に数値へ変換
secure: false, // 587番ポートの場合はfalseにする
auth: {
user: process.env.USER, // 送信元メールアカウント
pass: process.env.SMTP_PWD, // パスワード（機密情報）
},
} as SMTPTransport.Options);

export async function POST(req: Request) {
const body = await req.json();
const { formData } = body;
const { name, email, message } = formData;

// SMTPサーバー接続確認（オプション）
transporter.verify((error) => {
    if (error) {
        console.error("SMTP接続エラー:", error);
    } else {
        console.log("サーバーはメッセージを受け取る準備ができています");
    }
});

try {
    await transporter.sendMail({
        from: process.env.USER,
        to: process.env.RECIPIENT,
        subject: `Contact Form Submission from ${name}`,
        text: `Message from ${name} (${email}):\n\n${message}`,
        replyTo: email,
    });

    return NextResponse.json({ message: 'メッセージ送信が完了しました!' }, { status: 200 });
} catch (error) {
    console.error("送信エラー:", error);
    return NextResponse.json({ message: 'メッセージの送信に失敗しました' }, { status: 500 });
}
}

export async function GET() {
try {
// SMTPサーバー接続確認
await transporter.verify();
return NextResponse.json({ message: "SMTPサーバーへの接続が成功しました!" }, { status: 200 });
} catch (error) {
console.error("GET接続エラー:", error);
return NextResponse.json({ message: error }, { status: 500 });
}
}