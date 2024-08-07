import { useEffect, useRef, useState } from "react"
import { BallManager } from "../game/classes/BallManager.js";
import axios from "axios";

export function Game() {
    const [ballManager, setBallManager] = useState(null);
    const canvasRef = useRef(null);

    useEffect(() => {
        if (canvasRef.current) {
            const ballManagerInstance = new BallManager(canvasRef.current);
            setBallManager(ballManagerInstance);
        }
    }, [canvasRef]);

    return (
        <div>
            <canvas ref={canvasRef} width="800" height="800"></canvas>
            <button onClick={async () => {
                const response = await axios.post("https://backend-947y.onrender.com/game", { data: 1 });
                if (ballManager) {
                    ballManager.addBall(response.data.point);
                }
            }}>Add ball</button>
        </div>
    );
}