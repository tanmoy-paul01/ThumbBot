'use client'
import SectionTitle from "../components/SectionTitle";
import { useEffect, useState } from 'react'

export default function Contact() {
    const [result, setResult] = useState("");
    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        // ----- Enter your Web3 Forms Access key below---------

        formData.append("access_key", "e29071e2-81a6-4dc8-a6ed-f04fb5ba7e01");

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        }).then((res) => res.json());

        if (res.success) {
            console.log("Success", res);
            setResult(res.message);
            event.target.reset();
        } else {
            console.log("Error", res);
            setResult(res.message);
        }
    };

    return (
        <div id="contact" className="w-full px-[12%] py-10 scroll-mt-10 bg-[url('./assets/footer-bg-color.png')] bg-no-repeat bg-[length:90%_auto] bg-center dark:bg-none">
            {/* <SectionTitle text1="Contact" text2="Grow your channel" text3="Have questions about our Thumbnail Generator, Ready to scale your views? Let's talk." /> */}
            <div>
                <p className="text-center font-medium text-indigo-600 mt-28 px-10 py-2 rounded-full bg-indigo-950/70 border border-indigo-800 w-max mx-auto">Contact</p>
                <p className="text-3xl font-semibold text-center mx-auto mt-4">Grow your channel</p>
                <p className="text-slate-300 text-center mt-2 max-w-xl mx-auto">Have questions about our Thumbnail Generator, Ready to scale your views? Let's talk.</p>
            </div>
            <form onSubmit={onSubmit} className="max-w-2xl mx-auto">

                <input type="hidden" name="subject" value="Tanmoy Paul - New form Submission from ThumbBot" />

                <div className="md:flex gap-6 mt-10 mb-8">
                    <input type="text" placeholder="Enter your name" className='focus:border-indigo-500 resize-none w-full p-3 outline-none rounded-lg border border-slate-700 md:mb-0 mb-5'  />
                    <input type="email" placeholder="Enter your email" className='focus:border-indigo-500 resize-none w-full p-3 outline-none rounded-lg border border-slate-700'  required name="email" />
                </div>
                <textarea rows="6" placeholder="Enter your message" className='focus:border-indigo-500 resize-none w-full p-3 outline-none rounded-lg border border-slate-700' ></textarea>
                {/* <div className="h-captcha mb-6 max-w-full" data-captcha="true"></div> */}
                <button type='submit' className='mt-5 w-max flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-10 py-3 rounded-full'>
                Submit now
                </button>
                <p className='mt-4'>{result}</p>
            </form>
        </div>
    )
}