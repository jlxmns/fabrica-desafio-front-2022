import subPageBg from "../assets/subPageBg.jpg";
import AnimalCard from "../components/animalCard";


const AnimalCardPage = () => {
    return  <main className="main-flex" style={{backgroundImage: `url(${subPageBg})` }}>
                <AnimalCard />
            </main>
}

export default AnimalCardPage;