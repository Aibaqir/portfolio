import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
    return (
        <Typewriter
            options={{
                strings: [
                    "Software Engineer",
                    "MERN Stack Developer",
                    "Full Stack Developer",
                    "Frontend Vue.js",
                    "Frontend React.js",
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
            }}
        />
    );
}

export default Type;
