import { Fragment } from "react";
import mainBanner from "../../assets/mainBanner.jpg";

function HomeBanner() {
    return(
        <Fragment>
            <section className="main-banner" style={{backgroundImage: `url(${mainBanner})`}}>
                <div>
                    <h1>Aus<span>Zoo</span></h1>
                    <p>
                        Our mission is to save endangered wildlife. <br />
                    We are a conservation zoo that shelters endangered animals and researchs how to support wildlife across the globe.<br />
                        <button>About Us</button>
                    </p>
                </div>
            </section>
        </Fragment>
    );
}

export default HomeBanner;