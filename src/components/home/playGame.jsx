import { Fragment } from "react";
import { Link } from "react-router-dom";
import playGame from "../../assets/playGame.jpg"

function PlayGame() {
    return(
        <Fragment>
            <section className="play-game" style={{backgroundImage: `url(${playGame})` }}>
                <div>
                    <h1>Which animal are you?</h1>
                    <p>
                        Play a game where a random animal is given to you! Join your friends and see which animal you are.<br />
                        <Link to="/play-game"><button type="button">Play Game</button></Link>
                    </p>
                    
                </div>
            </section>
        </Fragment>
    );
}

export default PlayGame;