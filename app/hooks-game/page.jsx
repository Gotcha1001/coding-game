// app/hooks-game/page.jsx

import GameContainer from "../components/Game/GameContainer";
import GameProvider from "../context/GameProvider";

export default function HooksGame() {
    return (
        <GameProvider>
            <GameContainer />
        </GameProvider>
    );
}

