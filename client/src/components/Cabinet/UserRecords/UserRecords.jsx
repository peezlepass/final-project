import React from "react";

export function UserRecords() {
  return (
    <div className="mt-8 bg-black pt-4 text-white pb-8">
      <h1 className="text-9xl font-bold text-center border-y-4 pb-1.5 text-witcher-gold">
        HIGH SCORES
      </h1>
      <ol className=" flex flex-col items-center text-4xl my-6">
        <li className="py-3 w-96 flex justify-between">
          <span>Geralt</span>
          <span>100,256,870</span>
        </li>
        <li className="py-3 w-96 flex justify-between">
          <span>Geralt</span>
          <span>100,256,870</span>
        </li>
        <li className="py-3 w-96 flex justify-between">
          <span>Geralt</span>
          <span>100,256,870</span>
        </li>
        <li className="py-3 w-96 flex justify-between">
          <span>Geralt</span>
          <span>100,256,870</span>
        </li>
        <li className="py-3 w-96 flex justify-between">
          <span>Geralt</span>
          <span>100,256,870</span>
        </li>
      </ol>
      <h2 className="text-7xl font-bold text-center border-y-4 pb-1.5 text-witcher-gold mb-4">
        YOUR SCORES
      </h2>
      <ol className="flex justify-around">
        <li className="flex flex-col items-center">
          <img src="/img/wolf.jpg" />
          <h3 className="font-bold uppercase text-2xl">Minesweeper</h3>
          <span>1256</span>
        </li>
        <li className="flex flex-col items-center">
          <img className="" src="/img/cat.jpg" />
          <h3 className="font-bold uppercase text-2xl">Quiz</h3>
          <span>1256</span>
        </li>
        <li className="flex flex-col items-center">
          <img src="/img/dragon.jpg" />
          <h3 className="font-bold uppercase text-2xl">Memory</h3>
          <span>1256</span>
        </li>
        <li className="flex flex-col items-center">
          <img src="/img/lion.jpg" />
          <h3 className="font-bold uppercase text-2xl">X O X</h3>
          <span>1256</span>
        </li>
        <li className="flex flex-col items-center">
          <img src="/img/snake.jpg" />
          <h3 className="font-bold uppercase text-2xl">Snake</h3>
          <span>1256</span>
        </li>
        <li className="flex flex-col items-center">
          <img src="/img/wolf.jpg" />
          <h3 className="font-bold uppercase text-2xl">Flashcards</h3>
          <span>1256</span>
        </li>
      </ol>
    </div>
  );
}
