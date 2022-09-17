import subPageBg from "../assets/subPageBg.jpg";
import PlayingGame from "../components/playingGame";

const PlayGamePage = () => {
    return  <main className="main-flex" style={{backgroundImage: `url(${subPageBg})` }}>
                <PlayingGame />
            </main>
}

export default PlayGamePage;