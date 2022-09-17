import { Fragment, useEffect, useState } from "react";

function PlayingGame() {

    const [animals, setAnimals] = useState('Animal Here');

    useEffect(() => {
        getAnimals();
      }, []);

    const getAnimals = async () => {
        const response = await fetch('https://zoo-animal-api.herokuapp.com/animals/rand');
        const data = await response.json();
        setAnimals(data);
    }

    return (
        <Fragment>
          <article className="container">
              <div className="animal-image" style={{backgroundImage: `url(${animals.image_link})`}}>
              </div>
              <h1>{animals.name}</h1>
              <h2>({animals.latin_name})</h2>
              <p><span>Natural Habitat: </span>{animals.habitat}.</p>
              <p><span>Diet: </span>{animals.diet}.</p>
              <p><span>Geological Range: </span>{animals.geo_range}.</p>
              <button type="button" onClick={getAnimals}>Another One!</button>
          </article>
        </Fragment>
      );
}

export default PlayingGame;