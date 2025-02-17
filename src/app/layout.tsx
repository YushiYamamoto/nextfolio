import { Metadata } from "next"
import { GlobalStateProvider } from "src/contexts/GlobalStateContext"

export const metadata: Metadata = {
    title: 'FullstackLab.net | Dennis-Immanuel Czogalla - Fullstack Developer',
    description: "デザイン、プログラミング、マーケティング、そしてAI技術まで、多岐にわたる分野で活動しているマルチプレイヤー型クリエイターです。これまでのキャリアを通じて、**「エンジニア」「マーケター」「デザイナー」「プロデューサー」**として、それぞれの視点から価値を生み出すことに挑戦してきました。",
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body>
                <GlobalStateProvider >
                    <div id="root">{children}</div>
                </GlobalStateProvider>
            </body>
        </html>
    )
}