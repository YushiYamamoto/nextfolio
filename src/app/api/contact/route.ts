import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';
import { verify } from 'hcaptcha';
import SMTPTransport from 'nodemailer/lib/smtp-transport';

const secret = process.env.HCAPTCHA_SECRET!;

const transporter = nodemailer.createTransport({
host: process.env.NEXT_PUBLIC_SMTP_SERVER,
port: Number(process.env.NEXT_PUBLIC_SMTP_PORT), // 明示的に数値へ変換
secure: false, // 587番ポートの場合はfalseにする
auth: {
user: process.env.NEXT_PUBLIC_USER, // 送信元メールアカウント
pass: process.env.SMTP_PWD, // パスワード（機密情報）
},
} as SMTPTransport.Options);

export async function POST(req: Request) {
const body = await req.json();
const { formData, token } = body;
const { name, email, message } = formData;

// SMTPサーバー接続確認（オプション）
transporter.verify((error) => {
    if (error) {
        console.error("SMTP接続エラー:", error);
    } else {
        console.log("Server is ready to take our messages");
    }
});

try {
    // hCaptchaトークンの検証
    const result = await verify(secret, token);
    if (!result.success) {
        return NextResponse.json({ message: 'Invalid captcha!' }, { status: 500 });
    }
    await transporter.sendMail({
        from: process.env.NEXT_PUBLIC_USER,
        to: process.env.NEXT_PUBLIC_RECIPIENT,
        subject: `Contact Form Submission from ${name}`,
        text: `Message from ${name} (${email}):\n\n${message}`,
        replyTo: email,
    });

    return NextResponse.json({ message: 'Message sent successfully!' }, { status: 200 });
} catch (error) {
    console.error("送信エラー:", error);
    return NextResponse.json({ message: 'Failed to send message!' }, { status: 500 });
}
}

export async function GET() {
try {
// SMTPサーバー接続確認
await transporter.verify();
return NextResponse.json({ message: "Connection to SMTP server successful!" }, { status: 200 });
} catch (error) {
console.error("GET接続エラー:", error);
return NextResponse.json({ message: error }, { status: 500 });
}
}