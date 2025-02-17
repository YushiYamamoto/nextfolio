// ContactForm.tsx

import React from "react";

export default function ContactForm() {
return (
<section className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 desktop:w-1/3 ultra:w-1/4 mobile:w-full mobile:px-4 mobile:max-w-3xl">
<div className="px-2 mx-auto">
{/* ※必要であればロゴや画像を上部に配置 */}
<div className="flex justify-center w-full mb-4">
<img className="h-20 w-20" src="/images/pigeon.webp" alt="Carrier Pigeon" />
</div>
<form className="contact__form" action="https://docs.google.com/forms/d/e/1FAIpQLSfkFFYE3yg0qeeJBMLOsAtTwIgpUUKBhmurYvGGtyzYzhhpOg/formResponse" method="post" target="_self" >
<div className="contact__form-group mb-4">
<label htmlFor="name" className="block mb-2 text-sm font-medium text-white" >
Name:
</label>
<input type="text" id="name" name="entry.901089898" required placeholder="山田 太郎" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5" />
</div>
<div className="contact__form-group mb-4">
<label htmlFor="email" className="block mb-2 text-sm font-medium text-white" >
Email:
</label>
<input type="email" id="email" name="entry.1050091942" required placeholder="your@mail.com" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5" />
</div>
<div className="contact__form-group mb-4">
<label htmlFor="message" className="block mb-2 text-sm font-medium text-white" >
Message:
</label>
<textarea id="message" name="entry.1423970631" rows={5} required placeholder="本文を入力" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5" ></textarea>
</div>
<button type="submit" className="contact__button mt-4 w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition" >
Send
</button>
</form>
</div>
</section>
);
}