import ContactBtn from "../ui/navigation/menu/elements/ContactBtn";
import Service from "../ui/content/Service";

export default function Services() {
  return (<div id="Services" className="flex h-fit text-white flex-col items-center bg-slate-800">

    <img className="w-full h-44" src="/transitions/transition_gradient.svg" alt="transition" />
    <p className="text-4xl mb-8 mt-8  text-white font-bold">サービス</p>
    <div className="flex desktop:flex-row mobile:flex-col flex-wrap mobile:items-center pb-8 justify-center text-center h-full">
      <Service hl="インタラクティブWebサイト制作" desc="Three.jsやGSAPを活用し、動きのある高品質なWebサイトを制作" img="/icons/SPA_Icon.svg" />
      <Service hl="カスタムWebアプリ開発" desc="ReactやVueを使ったオーダーメイドのWebアプリを構築" img="/icons/API_Icon.svg" />
      <Service hl="動画×Web融合サービス" desc="動画制作とWebデザインを組み合わせたプロモーションサイト制作" img="/icons/SEO_Icon.svg" />
    </div>
    <p className="desktop:text-[40px] mobile:text-[24px] font-bold my-4 text-center">お気軽にご連絡ください</p>
    <ContactBtn title={"お問い合わせ"} />
  </div>);
}