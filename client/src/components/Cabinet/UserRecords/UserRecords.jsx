import React from "react";
import { useState, useEffect } from "react";

const findScore = (scores, gameName) => {
  return scores.find((score) => {
    return score.gameName === gameName;
  })?.totalscore;
};

export function UserRecords() {
  const [highScores, setHighScores] = useState([]);
  const [yourScores, setYourScores] = useState([]);

  useEffect(() => {
    (async () => {
      const highScoresResponse = await fetch("/scores/high-scores");
      const yourScoresResponse = await fetch("/scores/user");
      const highScoresResult = await highScoresResponse.json();
      const yourScoresResult = await yourScoresResponse.json();
      setHighScores(highScoresResult.data);
      setYourScores(yourScoresResult.data);
    })();
  }, []);

  return (
    <div className="mt-8 bg-black pt-4 text-white pb-8">
      <h1 className="text-9xl font-bold text-center border-y-4 pb-1.5 text-witcher-gold">
        HIGH SCORES
      </h1>
      <ol className=" flex flex-col items-center text-4xl my-6">
        {highScores.map((score) => {
          return (
            <li key={score.userId} className="py-3 w-96 flex justify-between">
              <span>{score.name}</span>
              <span>{score.totalscore}</span>
            </li>
          );
        })}
      </ol>
      <h2 className="text-7xl font-bold text-center border-y-4 pb-1.5 text-witcher-gold mb-4">
        YOUR SCORES
      </h2>
      <ol className="flex justify-around">
        <li className="flex flex-col items-center">
          <img src="/img/wolf.jpg" />
          <h3 className="font-bold uppercase text-2xl">Minesweeper</h3>
          <span>{findScore(yourScores, "minesweeper")}</span>
        </li>
        <li className="flex flex-col items-center">
          <img className="" src="/img/cat.jpg" />
          <h3 className="font-bold uppercase text-2xl">Quiz</h3>
          <span>{findScore(yourScores, "quiz")}</span>
        </li>
        <li className="flex flex-col items-center">
          <img src="/img/dragon.jpg" />
          <h3 className="font-bold uppercase text-2xl">Memory</h3>
          <span>{findScore(yourScores, "memorygame")}</span>
        </li>
        <li className="flex flex-col items-center">
          <img src="/img/lion.jpg" />
          <h3 className="font-bold uppercase text-2xl">X O X</h3>
          <span>{findScore(yourScores, "xox")}</span>
        </li>
        <li className="flex flex-col items-center">
          <img src="/img/snake.jpg" />
          <h3 className="font-bold uppercase text-2xl">Snake</h3>
          <span>{findScore(yourScores, "snake")}</span>
        </li>
      </ol>
    </div>
  );
}
