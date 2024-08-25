
import { MdOutlineEmail } from "react-icons/md";
import { IoLocation } from "react-icons/io5";
import { BsCart3 } from "react-icons/bs";
import { Button } from "./button";
import { FaFacebook, FaInstagram, FaTiktok, FaTwitter } from "react-icons/fa";
import logo from "../../img/Logo (3).png"
import { FiPhoneCall } from "react-icons/fi";
import { NavLink } from "react-router-dom";
const Navbar = () => {
    const menuItem = [
        {
            path: "/",
            route: "Home"
        },
        {
            path: "/about-us",
            route: "About Us"
        },
        {
            path: "/booking",
            route: "Booking"
        },
        {
            path: "/cars",
            route: "Cars"
        },
        {
            path: "/contact",
            route: "Contact"
        },
    ]
    return (
        <nav>
            {/* top side */}
            <section className=" bg-blue-800 py-3 px-10  w-full text-white flex items-center justify-between">
                <div className=" flex gap-5 items-center">
                    <p className=" flex items-center gap-2 hover:border-b hover:border-orange-500 duration-300"><span><MdOutlineEmail /></span> programin.saifulislam@gamil.com</p>
                    <p className=" flex items-center gap-2"><span><IoLocation /></span>karnafully. chittagong. bangaldesh</p>
                </div>
                <div className=" flex items-center gap-3">
                    <p className=" relative  mx-8"><BsCart3 /> <span className=" absolute -top-4 left-4 bg-orange-500 text-white px-2 rounded-full">0</span></p>
                    <Button className=" bg-blue-800 hover:bg-white hover:border hover:border-orange-500 hover:text-orange-400">Login</Button>
                    <Button className="bg-orange-500 hover:bg-white hover:border hover:border-orange-500 hover:text-orange-400 mx-2">Sing Up</Button>
                    <div className=" flex items-center gap-5">
                        <p className=" hover:text-orange-500"><FaTiktok /></p>
                        <p className=" hover:text-orange-500"><FaFacebook /></p>
                        <p className=" hover:text-orange-500"><FaTwitter /></p>
                        <p className=" hover:text-orange-500"><FaInstagram /></p>
                    </div>
                </div>
            </section>
            {/* bottom side */}
            <section className=" flex items-center justify-between  border-b-2 border-orange-500 bg-white">
                <div className=" flex items-center gap-20 p-5">
                    <img className=" w-36" src={logo} alt="navbar-logo" />
                    <ul className=" flex gap-10 items-center">
                        {
                            menuItem.map((menu, index) => <li key={index}><NavLink to={menu.path} className={({ isActive }) => isActive ? "border-b-2 border-orange-500 text-orange-500 text-lg " : "hover:text-orange-500 text-lg pb-0 hover:border-b-2 hover:border-orange-500 "}>{menu.route}</NavLink></li>)
                        }
                    </ul>
                </div>
                    <div className=" flex items-center gap-5 p-5 ">
                        <p className=" p-4 rounded-full text-orange-500 shadow-lg text-2xl"><FiPhoneCall /></p>
                        <div>
                            <p>Call Anytime</p>
                            <p className=" text-lg font-semibold">880-1857-318520</p>
                        </div>
                    </div>
                    <div className=" flex items-center gap-5 p-10 bg-orange-500 text-white font-semibold text-xl hover:bg-blue-950">
                        <p>Find A Car</p>
                    </div>
               
            </section>
           
        </nav>
    );
};

export default Navbar;