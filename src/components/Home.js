import React from "react";
import Typewriter from "typewriter-effect";
import Picture from "../images/-5870854633457564738_121 (2).jpg"

export default function Home(){
    return(
        <div id="home" className="text-center dark:text-white"> 
            <img src={Picture} className="m-auto rounded-full "/>
            <h1 className="text-5xl font-bold mt-5">Hi there, I'm Marvelous.</h1>
            <h1 className="text-4xl mt-8">I am a Frontend Web Developer</h1>
            <p className="text-2xl mt-5 font-bold">and</p>
            <h1 className="text-4xl mt-7 text-blue-800 dark:text-yellow-500"><Typewriter 
            options={{
                loop: true,
              }}
            onInit={(typewriter) => {
                    typewriter
                        .typeString("A Mathematician.")
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString("A Public Speaker.")
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString("A Volleyball Player.")
                        .start();
                }}/></h1>
            <h2 className="w-[60%] lg:w-[40%] m-auto mt-8 text-3xl" >Solving problems is an hobby. I also love learning, unlearning and relearning, this helps me to keep up regularly with the trends in the tech world.</h2>    
        </div>
    )
}