import { Fragment, useEffect, useState } from "react";

function AnimalCard() {

    const [animals, setAnimals] = useState([]);

    useEffect(() => {
        fetch('https://zoo-animal-api.herokuapp.com/animals/rand/6')
            .then((response) => response.json())
            .then((data) => setAnimals(data))
      }, []);

    return (
        <Fragment>
            {animals?.map((objeto) => {
                return <article className="container" key={objeto.id}>
                <div className="animal-image" style={{backgroundImage: `url(${objeto.image_link})`}}>
                </div>
                <h1>{objeto.name}</h1>
                <h2>({objeto.latin_name})</h2>
                <p><span>Natural Habitat: </span>{objeto.habitat}.</p>
                <p><span>Diet: </span>{objeto.diet}.</p>
                <p><span>Geological Range: </span>{objeto.geo_range}.</p>
            </article>
            })}
        </Fragment>
      );
}

export default AnimalCard;