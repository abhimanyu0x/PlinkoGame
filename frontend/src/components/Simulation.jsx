import { useEffect, useRef, useState } from "react";
import { BallManager } from "../game/classes/BallManager.js";
import { WIDTH } from "../game/constants.js";
import { pad } from "../game/padding.js";

export function Simulation() {
    const canvasRef = useRef(null);
    let [outputs, setOutputs] = useState({
        0: [],
        1: [],
        2: [],
        3: [],
        4: [],
        5: [],
        6: [],
        7: [],
        8: [],
        9: [],
        10: [],
        11: [],
        12: [],
        13: [],
        14: [],
        15: [],
        16: [],
        17: []
    });

    async function simulate(ballManager) {
        let i = 0;
        while (true) {
            i++;
            ballManager.addBall(pad(WIDTH / 2 + 20 * (Math.random() - 0.5)));
            await new Promise(resolve => setTimeout(resolve, 1000));
        }
    }

    useEffect(() => {
        if (canvasRef.current) {
            const ballManager = new BallManager(canvasRef.current, (index, startX) => {
                setOutputs((outputs) => {
                    return {
                        ...outputs,
                        [index]: [...outputs[index], startX]
                    }
                });
            });
            simulate(ballManager);

            return () => {
                ballManager.stop();
            };
        }
    }, [canvasRef]);

    return (
        <div style={{ display: "flex" }}>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", minHeight: "100vh" }}>
                {JSON.stringify(outputs, null, 2)}
            </div>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", minHeight: "100vh" }}>
                <canvas ref={canvasRef} width="800" height="800"></canvas>
            </div>
        </div>
    );
}