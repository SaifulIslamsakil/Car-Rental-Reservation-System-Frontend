import Container from "./Container";
import Hadding from "./Hadding";
import img from "../../img/download (20).jfif"
import img2 from "../../img/download (4).png"
import img3 from "../../img/download (5).png"
import carImage from "../../img/car-min.png"

const Welcome = () => {
    return (
        <Container>
            <Hadding
                mainHadding="Welcome to"
                subHadding="Elps You To Find Your Next Car Easily"
                colorTage="Remons" />

            <section className="flex flex-col-reverse md:flex-col ">
                <div className=" grid md:grid-cols-3">
                    <div className="space-y-4 text-center p-4 lg:p-10 border-b md:border-b-0 md:border-r">
                        <img className=" w-16 mx-auto" src={img2} alt="" />
                        <h2 className=" text-2xl font-bold">We Offers Lower <br /> Cars Prices</h2>
                        <p>Fruitful seed female multiply lights blessed above Bearing in so two every together forth so can't seas darkness years rule.</p>
                    </div>
                    <div className="space-y-4 text-center p-4 lg:p-10 border-b md:border-b-0 md:border-r">
                        <img className=" w-12 mx-auto" src={img} alt="" />
                        <h2 className=" text-2xl font-bold">Largest cars <br /> Dealership</h2>
                        <p>Evening together evening given fill upon darkness, i were lesser first fly. Had divide him called seas first after night god.</p>
                    </div>
                    <div className="space-y-4 text-center p-4 lg:p-10 border-b md:border-b-0 md:border-r">
                        <img className=" w-16 mx-auto" src={img3} alt="" />
                        <h2 className=" text-2xl font-bold">Multipoint Safety <br />Checks offers</h2>
                        <p>Also sixth be replenish third our also their moving unto hath whales beginning unto set you'll us let above dry shall greater.</p>
                    </div>
                </div>
                <img className="mx-auto w-[900px]" src={carImage} alt="" />
            </section>
        </Container>
    );
};

export default Welcome;