import { FaFacebookF, FaTwitter, FaLinkedinIn, FaBehance, FaGoogle, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-400 p-10">
            <div className="container mx-auto px-4 ">
                <div className="flex space-x-2 justify-center mt-8 mb-12  ">
                    <p className=' p-3 rounded-full bg-gray-700 text-white'><FaFacebookF className= "hover:text-orange-500 cursor-pointer" /></p>
                    <p className=' p-3 rounded-full bg-gray-700 text-white'><FaBehance className= "hover:text-orange-500 cursor-pointer" /></p>
                    <p className=' p-3 rounded-full bg-gray-700 text-white'><FaInstagram className= "hover:text-orange-500 cursor-pointer" /></p>
                    <p className=' p-3 rounded-full bg-gray-700 text-white'><FaGoogle className= "hover:text-orange-500 cursor-pointer" /></p>
                    <p className=' p-3 rounded-full bg-gray-700 text-white'><FaLinkedinIn className= "hover:text-orange-500 cursor-pointer" /></p>
                    <p className=' p-3 rounded-full bg-gray-700 text-white'><FaTwitter className= "hover:text-orange-500 cursor-pointer" /></p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* About Us */}
                    <div>
                        <h2 className="text-white font-bold mb-4 text-2xl">About Us</h2>
                        <p className="text-gray-400">
                            Ceipisicing elit sed do eiusmod tempor labore dolore magna aliqua.
                        </p>
                        <div className="mt-4">
                            <h3 className="text-white font-bold text-2xl mb-4">Contact Info</h3>
                            <p className="text-gray-400">3135 Oliver St, Fort Worth TX 76134</p>
                            <p className="text-gray-400">support@domain.com</p>
                            <p className="text-gray-400">Phone: + (123) 456 74700</p>
                        </div>
                    </div>

                    {/* Customer Links */}
                    <div >
                        <h2 className="text-white font-bold mb-4 text-2xl">Customer Links</h2>
                        <div className=' flex gap-5'>
                            <ul className="text-gray-400 space-y-2">
                                <li>Latest Cars</li>
                                <li>Featured Cars</li>
                                <li>Sell Your Car</li>
                                <li>Buy a Car</li>
                                <li>Reviews</li>
                                <li>Latest News</li>
                            </ul>
                            <ul>
                                <li>Services</li>
                                <li>About Us</li>
                                <li>Inventory</li>
                                <li>Parts Shop</li>
                                <li>Contacts</li>
                            </ul>
                        </div>
                    </div>

                    {/* Subscribe Newsletter */}
                    <div>
                        <h2 className="text-white font-bold mb-4 text-2xl">Subscribe Newsletter</h2>
                        <p className="text-gray-400 mb-4">
                            Get our weekly newsletter for the latest car news, exclusive offers, and deals.
                        </p>
                        <div className="flex">
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="p-2 w-full rounded-l text-white focus:outline-none"
                            />
                            <button className="p-2 bg-orange-500 text-white rounded-r hover:bg-orange-700 transition-colors">
                                SUBSCRIBE
                            </button>
                        </div>
                    </div>
                </div>

                <div className="mt-8 flex justify-center items-center border-t border-gray-800 pt-6">
                    <p className="text-gray-400 ">
                        Copyrights © 2023 Revus - Auto Dealer Theme. All rights reserved.
                    </p>

                </div>
            </div>
        </footer>
    );
};

export default Footer;
