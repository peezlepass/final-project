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

    const startGame = () => {
        setHero(HERO_START);
        setDir([0, -1]);
        setSpeed(SPEED);
    }

        const moveHero = ({ keyCode }) =>
        keyCode >= 37 && keyCode <= 40 && setDir(DIRECTIONS[keyCode]);

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
    // console.log(canvasRef.current.getContext("2d"))

    return (
        <div role="button" tabIndex="0" onKeyDown={e => moveHero(e)}>
            <canvas
                style={{
                    border: "3px solid black",
                    backgroundColor: "green",
                }}
                ref={ canvasRef }
                width={`${CANVAS_SIZE[0]}px`}
                height={`${CANVAS_SIZE[1]}px`}
            />
            <button onClick={startGame}>Клик</button>
        </div>


    )
}
