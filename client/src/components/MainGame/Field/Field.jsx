import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// Logic of overlaping rectangles lives here
function rectsOverlap(a, b) {
  const leftOverlaps = a.x > b.x && a.x < b.x + b.width;
  const rightOverlaps = a.x + a.width > b.x && a.x + a.width < b.x + b.width;
  const topOverlaps = a.y > b.y && a.y < b.y + b.height;
  const bottomOverlaps =
    a.y + a.height > b.y && a.y + a.height < b.y + b.height;

  return (leftOverlaps || rightOverlaps) && (topOverlaps || bottomOverlaps);
}

export default function Field() {
  const navigate = useNavigate();
  //Geralt's position
  const [position, setPosition] = useState({ x: 620, y: 100 });

  //Everytime position is updated - useEffect runs
  useEffect(() => {
    const geralt = document.querySelector(`.geralt`);
    //Receiving Geralt's exact position on the screen
    const geraltRect = geralt.getBoundingClientRect();
    //Selecting all animals =>dom node list, looks like array
    const animals = document.querySelectorAll(".animals a");
    // Looping to check for overlap with each animal and navigate to their game if so
    for (let i = 0; i < animals.length; i++) {
      const animalRect = animals[i].getBoundingClientRect();
      if (rectsOverlap(geraltRect, animalRect)) {
        const url = new URL(animals[i].href);
        navigate(url.pathname);
        break;
      }
    }
  }, [position]);

  useEffect(() => {
    const keyHandler = (e) => {
      if (e.key === "ArrowDown") {
        setPosition((prevPosition) => {
          return { ...prevPosition, y: prevPosition.y + 20 };
        });
      }
      if (e.key === "ArrowUp") {
        setPosition((prevPosition) => {
          return { ...prevPosition, y: prevPosition.y - 20 };
        });
      }

      if (e.key === "ArrowLeft") {
        setPosition((prevPosition) => {
          return { ...prevPosition, x: prevPosition.x - 20 };
        });
      }

      if (e.key === "ArrowRight") {
        setPosition((prevPosition) => {
          return { ...prevPosition, x: prevPosition.x + 20 };
        });
      }
    };
    document.addEventListener("keydown", keyHandler);
    //Remove the eventListener on the Main Page when we unmount,
    //To prevent double Listening when we remount
    //We remount every time when we navigate to the Home Page
    return () => {
      document.removeEventListener("keydown", keyHandler);
    };
  }, []);

  return (
    <div className="relative">
      <p className="absolute top-10 left-0 right-0 uppercase font-bold text-witcher-gold text-3xl flex justify-center">
        <span className="block bg-black p-4 border-2 border-witcher-gold">
          Choose your adventure
        </span>
      </p>
      <img
        //Moving Geralt around
        style={{ top: position.y, left: position.x }}
        className="geralt absolute w-40"
        src="/img/geralt.png"
      />
    </div>
  );
}
