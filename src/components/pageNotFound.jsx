import { Link } from "react-router-dom";
import pageNotFound from "../assets/pageNotFound.png"

function PageNotFound() {
    return (
        <main style={{backgroundImage: `url(${pageNotFound})` }}>
            <article className="not-found">
                <h1>Page Not Found <br />Error 404</h1>
                <Link to="/"><button>Go Back</button></Link>
            </article>
        </main>
      );
}

export default PageNotFound;