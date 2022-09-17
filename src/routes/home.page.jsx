import HomeBanner from "../components/home/homeBanner";
import OurAnimals from "../components/home/ourAnimals";
import PlayGame from "../components/home/playGame";

const HomePage = () => {
    return  <main>
                <HomeBanner />
                <section className="sub-banners">
                    <OurAnimals />
                    <PlayGame />
                </section>
            </main>
}

export default HomePage;