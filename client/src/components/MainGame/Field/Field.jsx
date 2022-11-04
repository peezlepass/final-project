import React from 'react'
import styles from "./field.module.css";
import { Layer, Rect, Stage, Group } from 'react-konva';
import { useState, useRef, useEffect } from 'react';

import {
    CANVAS_SIZE,
    HERO_START, 
    SCALE,
    SNAKE_GAME,
    DIRECTIONS,
    SPEED
} from "../constants";

import { useInterval } from "../useInterval";


export default function Field({ height = 600, width = 800 }) {
    // const field = [
    //     ['1row', '1row', '1row', '1row', '1row', '1row'],
    //     ['2row', '2row', '2row', '2row', '2row', '2row'],
    //     ['3row', '3row', '3row', '3row', '3row', '3row']
    // ]

    // const hero = '🐺';

    const canvasRef = useRef();
    const [hero, setHero] = useState(HERO_START);
    const [snakeGame, setSnakeGame] = useState(SNAKE_GAME);
    const [dir, setDir] = useState([0, -1]);
    const [speed, setSpeed] = useState(null);

    useInterval(() => gameLoop(), speed);

    const startGame = () => {
        setHero(HERO_START);
        setDir([0, -1]);
        setSpeed(SPEED);
    }

    const gameLoop = () => {
        const heroCopy = JSON.parse(JSON.stringify(hero));
        const newHeroHead = [heroCopy[0][0] + dir[0], heroCopy[0][1] + dir[1]];
        heroCopy.unshift(newHeroHead);
        setHero(heroCopy);
        console.log(heroCopy)
    };


    useEffect(() => {
        const context = canvasRef.current.getContext("2d");
        context.fillStyle = "blue";
        context.setTransform(SCALE, 0, 0, SCALE, 0, 0);
        context.clearRect(0, 0, window.innerWidth, window.innerHeight);
        hero.forEach(([x, y]) => context.fillRect(x, y, 1, 1));
        console.log('Работает!', context.fillRect)

        context.fillStyle = "black";
        snakeGame.forEach(([x,y]) => context.fillRect(x,y, 1, 1))

        // const tile = [[0, 0]];
        // context.fillStyle = "red";
        // tile.forEach(([x,y]) => context.fillRect(x,y, 2, 2))
    }, [hero]);

    return (
        <div id="container" className={styles.container} role="button" tabIndex="0" onKeyDown={e => moveHero(e)}>
            <canvas
                style={{
                    border: "3px solid black",
                    backgroundColor: "",
                }}
                ref={ canvasRef }
                width={`${CANVAS_SIZE[0]}px`}
                height={`${CANVAS_SIZE[1]}px`}
            />
            <button onClick={startGame}>Клик</button>
        </div>


    )
}
