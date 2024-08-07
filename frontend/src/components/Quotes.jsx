import { useNavigate } from "react-router-dom";
import { Button } from "./ui/Button.jsx";

export const Quotes = () => {
  const navigate = useNavigate();
  return (
    <div className="flex mx-16 flex-col justify-center pb-10 ">
      <h1 className="text-6xl font-bold">Play Plinko, Earn More!</h1>
      <h3 className="mt-4 text-xl mb-4">
        Experience the excitement of Plinko, where players drop a ball from the top of a triangular pin pyramid to discover a winning route and multiplier. Inspired by the traditional Japanese game Pachinko, Plinko allows you to customize your risk level and multipliers, ensuring a tailored experience for everyone at our online casino.
      </h3>
      <Button className="hover:bg-green-600" onClick={() => navigate("/game")}>
        Play Plinko
      </Button>
    </div>
  );
};