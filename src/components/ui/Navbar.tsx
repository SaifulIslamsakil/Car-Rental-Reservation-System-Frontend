
import { MdOutlineEmail } from "react-icons/md";
import { IoLocation } from "react-icons/io5";
import { BsCart3 } from "react-icons/bs";
import { Button } from "./button";
import { FaFacebook, FaInstagram, FaTiktok, FaTwitter } from "react-icons/fa";
import logo from "../../img/Logo (3).png"
import { FiPhoneCall } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { ImCross } from "react-icons/im";
import { useState } from "react";
const Navbar = () => {
    const [toggel, setToggel] = useState<boolean>(false)
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
        {
            path: "/login",
            route: "Login"
        },
        {
            path: "/signUp",
            route: "Sign Up"
        },
    ]
    return (
        <nav className=" relative">
            {/* top side */}
            <section className=" hidden  bg-blue-800 py-2 px-10  w-full text-white lg:flex items-center justify-between">
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
            <section className=" flex items-center justify-between  border-b-2 border-orange-500 bg-white ">
                <div className="flex items-center gap-10 p-5 ">
                    <img className=" w-32" src={logo} alt="navbar-logo" />
                    <ul className=" hidden lg:flex gap-7 items-center">
                        {
                            menuItem.map((menu, index) => <li className={`${menu.path === "/signUp" || menu.path === "/login" ? "hidden" : ""}`} key={index}><NavLink to={menu.path} className={({ isActive }) => isActive ? "border-b-2 border-orange-500 text-orange-500 text-lg " : "hover:text-orange-500 text-lg pb-0 hover:border-b-2 hover:border-orange-500 "}>{menu.route}</NavLink></li>)
                        }
                    </ul>
                </div>
                <div className=" flex items-center">
                    <div className=" hidden lg:flex items-center gap-5 p-5 ">
                        <p className=" p-4 rounded-full text-orange-500 shadow-lg text-xl"><FiPhoneCall /></p>
                        <div>
                            <p>Call Anytime</p>
                            <p className=" text-lg font-semibold">880-1857-318520</p>
                        </div>
                    </div>
                    <div className=" hidden lg:block  p-10 bg-orange-500 text-white font-semibold text-lg hover:bg-blue-950">
                        <p>Find A Car</p>
                    </div>
                    <div className=" block lg:hidden  p-5">
                        <p onClick={() => setToggel(true)} className=" text-3xl text-orange-500"><AiOutlineMenu /></p>
                    </div>
                </div>
            </section>
            {/* responsive handel */}
            <section className={`bg-blue-950 bg-opacity-60 absolute left-0 top-0 w-full ${toggel ? "block" : "hidden"} lg:hidden `}>
                <div className=" bg-blue-950 p-10 w-full md:w-96 h-full relative">
                    <p onClick={() => setToggel(false)} className=" text-white text-xl absolute top-5 right-5"><ImCross /></p>

                    <ul className=" space-y-5 text-white">
                        {
                            menuItem.map((menu, index) => <li className=" pb-2 border-b" key={index}><NavLink to={menu.path} className={({ isActive }) => isActive ? "border-b-2 border-orange-500 text-orange-500 text-lg " : "hover:text-orange-500 text-lg pb-0 hover:border-b-2 hover:border-orange-500 text-white "}>{menu.route}</NavLink></li>)
                        }

                    </ul>
                    <div className=" items-center p-6 text-center mt-10 rounded-lg bg-orange-500 text-white font-semibold text-xl hover:bg-blue-950">
                        <p>Find A Car</p>
                    </div>

                </div>

            </section>

        </nav>
    );
};

export default Navbar;