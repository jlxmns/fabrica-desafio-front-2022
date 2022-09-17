import { Fragment } from "react";
import { Link } from "react-router-dom";
import ourAnimals from "../../assets/ourAnimals.jpg"

function OurAnimals() {
    return(
        <Fragment>
            <section className="our-animals" style={{backgroundImage: `url(${ourAnimals})` }}>
                <div>
                    <h1>Our Animals</h1>
                    <p>
                        Interested in knowing more about our animals? Visit our animal information page to get to know about some of the fauna in our shelter.<br />
                        <button type="button"><Link to="/our-animals">Learn More</Link></button>
                    </p>
                    
                </div>
            </section>
        </Fragment>
    );
}

export default OurAnimals;