import React from "react";
import Typewriter from "typewriter-effect";

export default function About(){
    return(
        <div id="about" className="dark:text-[#e7e7e7] my-12 mx-10">
            <div>
                <h1 className="text-3xl font-bold mb-3">Get to know me.</h1>
                <p className="text-xl ml-4 mb-2">My name is Aliyu Marvelous Temitope, my friends call me "Marvytee" which is gotten from combining the first few letters of my firstname and middlename.</p>
                <p className="text-xl ml-4 mb-2">My interest in web development began when I saw my sister's friend solve problems. This opened my eyes to world problems and also exposed me to my ability to solve them.</p>
                <p className="text-xl ml-4 mb-2">Apart from this, my inquistiveness got the best of me as I soon found myself trying to get information about what web development was.</p>
                <p className="text-xl ml-4 mb-2">I was also blessed with a loving community which is Stutern that was able to fuel my passion for web development.</p>
            </div>
            <div className=" lg:flex lg:flex-row justify-evenly text-center mt-4">
                <div>
                    <h1 className="text-2xl font-bold">Languages I have been working with:</h1>
                    <p className="text-xl mt-3 text-blue-800 dark:text-yellow-500"><Typewriter 
                options={{
                    loop: true,
                }}
                onInit={(typewriter) => {
                        typewriter
                            .typeString("HTML/CSS")
                            .pauseFor(1000)
                            .deleteAll()
                            .typeString("Tailwind")
                            .pauseFor(1000)
                            .deleteAll()
                            .typeString("Javascript")
                            .pauseFor(1000)
                            .deleteAll()
                            .typeString("ReactJS")
                            .pauseFor(1000)
                            .deleteAll()
                            .typeString("Bootstrap")
                            .start();
                    }}/></p>
                </div>
                    <div>
                    <h1 className="text-2xl font-bold">Tools I have been working with:</h1>
                    <p className="text-xl mt-3 text-blue-800 dark:text-yellow-500"><Typewriter 
                options={{
                    loop: true,
                }}
                onInit={(typewriter) => {
                        typewriter
                            .typeString("Github")
                            .pauseFor(1000)
                            .deleteAll()
                            .typeString("Git")
                            .pauseFor(1000)
                            .deleteAll()
                            .typeString("Terminal")
                            .pauseFor(1000)
                            .deleteAll()
                            .typeString("Visual Studio")
                            .pauseFor(1000)
                            .deleteAll()
                            .typeString("Atom")
                            .start();
                    }}/></p>
                </div>
            </div>
        </div>
    )
}