import React from "react";
import Omega from "../images/Screenshot 2023-07-14 225010.png"
import StarWars from "../images/Screenshot 2023-07-14 224757.png"
import Acme from "../images/Screenshot 2023-07-14 225326.png"

export default function Projects(){
    return(
        <div id="projects" className="dark:text-[#e7e7e7]">
            <h1 className="text-4xl font-bold ml-10">My Projects</h1>
            <div className="px-10 py-14">
                <div className="mb-10 lg:flex lg:flex-row lg:gap-9">
                   <img src={Omega} alt="project-img" className="lg:w-[50%]"/>
                   <div className="mt-6">
                    <h1 className="text-2xl font-bold">Omega</h1>
                    <p className="text-lg mt-3">Omega Loan Prediction Software provides a way to know if a loan applicant is eligible for a loan. This helps financial institutions to make more accurate lending decisions.</p>
                    <div className="flex flex-row gap-6 mt-4 font-semibold mb-6">
                        <p>ReactJS</p>
                        <p>TailwindCSS</p>
                        <p>Git</p>
                        <p>NodeJS</p>
                        <p>Netlify</p>
                    </div>
                    <a href="https://omega-prediction-app.netlify.app/" target="_blank" className="font-bold">Go to Website <i class="fa-solid fa-arrow-right hover:text-blue-800 hover:dark:text-yellow-500"></i></a>
                   </div>
                </div>
                <div className="mb-10 lg:flex lg:flex-row-reverse lg:gap-9 mt-20">
                   <img src={StarWars} alt="project-img" className="lg:w-[50%]"/>
                   <div className="mt-6">
                    <h1 className="text-2xl font-bold">Star Wars Movie App</h1>
                    <p className="text-lg mt-3">This is a recreation of the starwars movie page. It contains a list of different movies and their details. All these informations were gotten from the Star API.</p>
                    <div className="flex flex-row gap-8 mt-4 font-semibold mb-6">
                        <p>ReactJS</p>
                        <p>CSS</p>
                        <p>Git</p>
                        <p>Netlify</p>
                    </div>
                    <a href="https://marvy-star-wars-movie.netlify.app/" target="_blank" className="font-bold">Go to Website <i class="fa-solid fa-arrow-right hover:text-blue-800 hover:dark:text-yellow-500"></i></a>
                   </div>
                </div>
                <div className="mb-10 lg:flex lg:flex-row lg:gap-9 mt-20">
                   <img src={Acme} alt="project-img" className="lg:w-[50%]"/>
                   <div className="mt-6">
                    <h1 className="text-2xl font-bold">Acme Rockets</h1>
                    <p className="text-lg mt-3">Acme Rockets introduced different types of rockets alongside with the prices. A single page application that contains Rockets and their prices, testimonials and a contact form.</p>
                    <div className="flex flex-row gap-8 mt-4 font-semibold mb-6">
                        <p>HTML5</p>
                        <p>TailwindCSS</p>
                        <p>Git</p>
                        <p>Render</p>
                    </div>
                    <a href="https://acme-rockets-m6j4.onrender.com/" target="_blank" className="font-bold">Go to Website <i class="fa-solid fa-arrow-right hover:text-blue-800 hover:dark:text-yellow-500"></i></a>
                   </div>
                </div>
            </div>
        </div>
    )
}