import React, {useRef} from "react";
import { useInterval } from "../useInterval";
import {
    CANVAS_SIZE,
    SNAKE_START,
    APPLE_START,
    SCALE,
    SPEED,
    DIRECTIONS
} from "../constants";

import StartBtn from '../StartBtn/StartBtn'

export default function Canvas() {
    const canvasRef = useRef();
    const startGame = () => {
    }
    return (
        <div>
            <canvas
                style={{ border: "1px solid black" }}
                ref={canvasRef}
                width={`${CANVAS_SIZE[0]}px`}
                height={`${CANVAS_SIZE[1]}px`}
            />
            <StartBtn startGame={startGame} />
        </div>
    )
}


