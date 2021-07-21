import React, { useEffect } from "react";

export default function Scroll() {
    useEffect(function mount() {
        function onScroll() {
            console.log("scroll!");

            if (window.scrollY >= 400) {
                document.querySelector("nav").classList.add("bg-bgblack-500");
            } else {
                document.querySelector("nav").classList.remove("bg-bgblack-500");
            }

        }

        window.addEventListener("scroll", onScroll);

        return function unMount() {
            window.removeEventListener("scroll", onScroll);
        };
    });

    return null;
}