import React from "react";
import './DarkMode.css';
import anime from "animejs/lib/anime.es.js";


const moonPath =
"M97 158C97 245.261 129 275 164.5 316C73.6492 316 0 245.261 0 158C0 70.739 73.6492 0 164.5 0C140 23 97 70.739 97 158Z";

const sunPath =
"M329 158C329 245.261 255.351 316 164.5 316C73.6492 316 0 245.261 0 158C0 70.739 73.6492 0 164.5 0C255.351 0 329 70.739 329 158Z";

let toggle = false;
const darkMode = () => {
  const timeline = anime.timeline({
    duration: 750,
    easing: "easeOutExpo"
    // easing: "easeOutSine"

  });
  timeline
    .add({
      targets: ".sun",
      d: [
        { value: toggle ? sunPath : moonPath }
      ],
      fill: [
        { value: toggle ? "#DB545C" : "#EE952E"}
      ]
    })
    .add({
      targets: "#darkMode",
      rotate: 320
    }, "-= 350")
    // .add({
    //   targets: "section",
    //   backgroundColor: toggle ? "rgb(255,255,255)" : "rgb(22,22,22)",
    //   color: toggle ? "rgb(22,22,22)" : "rgb(255,255,255)"
    // }, "-= 700")


  if (!toggle) {
    toggle = true;
  } else {
    toggle = false;
  }
}

function DarkMode() {
    return (
        <div className="dark-mode">
      <section>
      <svg
      id="darkMode"
        width="34"
        height="22"
        viewBox="0 0 165 316"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        onClick={darkMode}
      >
        <path
          className="sun"
          d="M329 158C329 245.261 255.351 316 164.5 316C73.6492 316 0 245.261 0 158C0 70.739 73.6492 0 164.5 0C255.351 0 329 70.739 329 158Z"
          fill="#DB545C"
        />
      </svg>
      </section>
        </div>
    );
    }


export default DarkMode;



{/* <svg width="165" height="316" viewBox="0 0 165 316" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M97 158C97 245.261 129 275 164.5 316C73.6492 316 0 245.261 0 158C0 70.739 73.6492 0 164.5 0C140 23 97 70.739 97 158Z" fill="#EE952E"/>
</svg>

<svg width="329" height="316" viewBox="0 0 329 316" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M329 158C329 245.261 255.351 316 164.5 316C73.6492 316 0 245.261 0 158C0 70.739 73.6492 0 164.5 0C255.351 0 329 70.739 329 158Z" fill="#DB545C"/>
</svg>
 */}
