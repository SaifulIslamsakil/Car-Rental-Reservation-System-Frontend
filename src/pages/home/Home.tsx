import Welcome from "../../components/ui/Welcome";
import Hero from "../../components/ui/Hero";
import Services from "../../components/ui/Services";

const Home = () => {
    return (
        <div>
            <Hero />
            <Welcome />

            <Services/>
        </div>
    );
};

export default Home;