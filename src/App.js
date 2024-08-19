
import { motion } from "framer-motion";
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import {ContactUs} from './components/ContactUs';


function App() {
    let slides = [
        "./assets/IMG1.jpg",
        "./assets/IMG2.jpg",
        "./assets/IMG3.jpg",
        "./assets/IMG4.jpg",
        "./assets/IMG5.jpg",
        "./assets/IMG6.jpg",
        
    ];
    const text = "Welcome to Christian Assets Private Schools".split(" ");
    const text1 = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, id optio voluptate temporibus ab veniam magni vitae totam molestiae accusamus!".split(" ");
  return (
    <div>
      <Navbar/>
        <section id="home" className="py-6 px-8 sm:py-10 md:px-28 bg-white sm:mt-10 border-b-2">
            <div className="flex flex-col-reverse items-center justify-center px-12 lg:flex-row lg:px-28 pt-12 pb-16">
                <div className="flex flex-col items-center justify-center sm:flex lg:items-start writeup mr-4">
                    <div className="text-center lg:text-start">
                      <div className="text-2xl md:text-5xl font-bold my-2 text-green-800">
                        {text.map((el, i) => (<motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                        transition={{duration: 3, delay: i / 10 }} key={i}>{el}{" "}</motion.span>))}</div>
                        <div className="my-2 text-green-600 text-sm md:text-lg">
                        {text1.map((el, i) => (<motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                        transition={{duration: 4, delay: i / 10 }} key={i}>{el}{" "}</motion.span>))}</div>
                    </div>
                    <div className="btn">
                        <button className="btn rounded-3xl py-4 px-6 self-center duration-300 bg-green-800 text-white font-bold hover:text-green-800 hover:bg-white hover:scale-105 text-sm md:text-lg">Contact Us</button>
                    </div>
                </div>
                <div className="cartoon"><img src="./assets/smiling-cartoon-character-riding-giant-pencil-holding-book-surrounded-by-school-supplies_1294240-29136.jpg" alt="caps logo" className="rounded-3xl h-50"/></div>
            </div>
            
        </section>
    
        <section id="about" className="px-12 md:px-52 py-10 border-b-2">
            <div className="flex flex-wrap lg:flex items-center justify-evenly">
                <div className="num flex flex-col mt-3 md:mt-0 items-center justify-center"><span className="text-3xl lg:text-5xl text-green-600 font-extrabold">50+</span><p className="text-center font-bold text-sm md:text-lg text-gray-500">Students</p></div>
                <div className="num flex flex-col mt-3 md:mt-0 items-center justify-center"><span className="text-3xl lg:text-5xl text-green-600 font-extrabold">10+</span><p className="text-center font-bold text-sm md:text-lg text-gray-500">Fun Activities</p></div>
                <div className="num flex flex-col mt-3 md:mt-0 items-center justify-center"><span className="text-3xl lg:text-5xl text-green-600 font-extrabold">10+</span><p className="text-center font-bold text-sm md:text-lg text-gray-500">Years</p></div>
            </div>
            <div className="curriculum">
                <article className="flex flex-col items-center justify-between rounded-lg px-10 py-14 mt-4 lg:flex-row">
                    <div><img src="./assets/school-time-fun-colorful-school-supplies-characters-vector-illustration-cartoon-clipart_1256803-1052.jpg" alt=""/></div>
                    <div>
                        <h1 className="text-center text-2xl md:text-3xl font-bold my-2 text-green-800">Our Curriculum</h1>
                        <p className="text-sm md:text-lg text-center text-black">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat possimus omnis iure saepe sint ab molestias facilis dolorum praesentium voluptas.</p>
                    </div>
                </article>
            </div>
            <div>
                <div className="flex flex-col items-center xl:flex-row">
                    <div className="bg-green-800 rounded-lg p-10 mx-5 my-2 md:my-5 xl:-mt-5 flex flex-col duration-300 hover:scale-105"><span class="text-white font-bold">Mission</span><p class="text-wrap text-gray-200">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, esse.</p></div>
                    <div className="bg-green-800 rounded-lg p-10 mx-5 my-2 md:my-5 xl:-mt-5 flex flex-col duration-300 hover:scale-105"><span class="text-white font-bold">Vision</span><p class="text-wrap text-gray-200">Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, consectetur!</p></div>
                    <div className="bg-green-800 rounded-lg p-10 mx-5 my-2 md:my-5 xl:-mt-5 flex flex-col duration-300 hover:scale-105"><span class="text-white font-bold">Aim and Objectives</span><p class="text-wrap text-gray-200">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, laborum.</p></div>
                    
                </div>
            </div>
        </section>

        <section id="contact" className="px-12 md:px-52 py-10 border-b-2 flex flex-col-reverse md:flex-row items-center justify-center">
            <div>
                <h2 className="text-2xl md:text-3xl font-bold text-green-800">Book an Appointment</h2>
                <ContactUs/>
            </div>  
            <div><img src="./assets/back-school-clipart_703032-4663.jpg" alt=""/></div>
        </section>

        <section id="gallery" className="border-b-2 px-0 pb-0 pt-0 md:pt-2 flex flex-col items-center justify-center">
            <h2 className="hidden md:block text-2xl md:text-3xl font-bold text-green-800">Gallery</h2>
            <div className='w-[100%] md:w-[95%] mx-auto mt-0 md:mt-2 duration-300'>
                <Carousel slides={slides}/>
            </div>        
        </section>
        <section id="newsletter" className="px-12 md:px-52 py-10 flex flex-col items-center justify-center">
            <div className="flex flex-col items-center justify-center">
                <h2 className="text-center text-2xl md:text-3xl font-bold my-2 text-green-800">Subscribe to our newsletter</h2>
                <p>COMING SOON!!!</p>
            </div>
            <div><img src="./assets/school-time-fun-colorful-school-supplies-characters-vector-illustration-cartoon-clipart_1256803-1036.jpg" alt=""/></div>
    
        </section>
        <footer>
            <section id="footerlinks" className="bg-green-800 flex flex-col lg:flex-row items-center justify-between md:justify-evenly px-8 md:px-52 py-10">
                <div className="flex flex-col items-center">
                    <div className="flex items-center text-white font-bold text-xl justify-start"><img src="./assets/logo.jpg" alt="caps logo" className="w-10 rounded-2xl mr-3"/>CAPS</div>
                    <ul>
                        <li className="flex items-center mx-5 duration-300 text-white hover:underline underline-offset-2"><BsFillTelephoneFill />-08037142291</li>
                        <li className="flex items-center mx-5 duration-300 text-white hover:underline underline-offset-2"><a href="https://www.google.com/maps/place/9%C2%B055'59.6%22N+8%C2%B054'45.5%22E/@9.933217,8.9080306,17z/data=!3m1!4b1!4m12!1m7!3m6!1s0x10537224a1b29681:0x1a757fa6b0b02791!2sBush+Bar!8m2!3d9.9336187!4d8.9148117!16s%2Fg%2F11by_p3wgt!3m3!8m2!3d9.933217!4d8.912644?entry=ttu"><FaLocationDot /></a>-Address</li>
                    </ul>
                </div>
                <div className="newsletter flex flex-col items-center justify-between my-3 sm:mt-0">
                    <h2 className="hidden sm:block  text-white text-lg font-medium">Newsletter</h2>
                    <div className="flex items-center justify-between">
                    <button className="flex items-center justify-center w-[30%] btn rounded-3xl py-2 px-4 self-center duration-300 bg-white text-green-800 font-bold hover:text-green-800 hover:bg-gray-100 hover:scale-105 text-sm mt-2 mb-2"><MdEmail />Subscribe</button>
                    <input type="email" className="px-2 py-2 ml-2 w-[70%] rounded-md" placeholder="Enter your Email..."  id="" />
                    </div>
                   
                </div>
                <div className="hours text-white text-center">
                    <h3 className="text-center text-xl md:text-2xl">Opening Hours</h3>
                    <ul className="opening">
                        <li>Monday - Thursday: 8AM-2PM</li>
                        <li>Friday: 8AM-1PM</li>
                    </ul>
                </div>
            </section>
            <div className="copyright bg-green-800 flex flex-col items-center justify-center text-white pb-8">
                <p className="text-sm text-center">Copyright 2024 Christian Assets Private School. All rights reserved</p>
            </div>
        </footer>
    </div>
  );
}

export default App;
