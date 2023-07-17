import React from "react";

export default function Contact(){
    return(
        <div id="contact" className="dark:bg-[#f3f3f3] bg-slate-900 text-[#e7e7e7] dark:text-slate-900 py-8 text-center">
            <h1 className="font-bold text-4xl pt-10">Get in touch, let's work together.</h1>
            <p className="text-xl mt-2">We can change the world with the magic we create.</p>
            <div className="flex flex-row justify-center gap-8 pb-6 mt-6">
                <a href="mailto:marvelousaliyu850@gmail.com" target="_blank"><i class="fa-solid fa-envelope fa-2x"></i></a>
                <a href="https://www.linkedin.com/in/aliyu-marvelous-113810225" target="_blank"><i class="fa-brands fa-linkedin fa-2x"></i></a>
                <a href="https://github.com/Marvytee" target="_blank"><i class="fa-brands fa-github fa-2x"></i></a>
            </div>
            <p className="text-[13px]">Made with ❤ by Marvelous Aliyu &copy; 2023.</p>
        </div>
    )
}