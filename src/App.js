import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <Navbar/>
        <section id="home" className="py-6 px-8 sm:py-10 md:px-28 bg-white sm:mt-10 border-b-2">
            <div className="flex flex-col-reverse items-center justify-center px-12 lg:flex-row lg:px-28 pt-12 pb-16">
                <div className="flex flex-col items-center justify-center sm:flex lg:items-start writeup mr-4">
                    <div className="text-center lg:text-start">
                        <h1 className="text-2xl md:text-5xl font-bold my-2 text-green-800">Christain assets Private schools</h1>
                        <p className="my-2 text-green-600 text-sm md:text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, id optio voluptate temporibus ab veniam magni vitae totam molestiae accusamus!</p>
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
                <form action="https://formcarry.com/s/{Your Form ID}"
method="POST" enctype="multipart/form-data" class="flex flex-col items-center justify-evenly md:flex-wrap border-2 rounded-lg border-green-800 py-2"> 
                    <input className="mt-5 px-5 py-2 border-2" type="text" placeholder="Full Name..."/>
                    <input className="mt-5 px-5 py-2 border-2" type="email" name="" id="" placeholder='Email Address...' />
                    <textarea name="message" placeholder='Type your Message...' className="mt-5 px-5 py-2 border-2"></textarea>
                    <input className="mt-5 px-5 py-2 border-2" type="date" name="" id=""/>
                </form>
            </div>  
            <div><img src="./assets/back-school-clipart_703032-4663.jpg" alt=""/></div>
        </section>

        <section id="gallery" className="border-b-2 px-0 py-10 flex flex-col items-center justify-center">
            <h2 className="text-2xl md:text-3xl font-bold text-green-800">Gallery</h2>
               
<div id="default-carousel" class="relative w-full" data-carousel="slide">
    <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="./assets/IMG1.jpg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="/docs/images/carousel/carousel-2.svg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="/docs/images/carousel/carousel-3.svg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="/docs/images/carousel/carousel-4.svg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="/docs/images/carousel/carousel-5.svg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>
    </div>
    <div class="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
        <button type="button" class="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
    </div>
    <button type="button" class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
        <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
            </svg>
            <span class="sr-only">Previous</span>
        </span>
    </button>
    <button type="button" class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
        <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
            </svg>
            <span class="sr-only">Next</span>
        </span>
    </button>
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
            <section id="footerlinks" className="bg-green-800 px-8 md:px-52 py-10 flex items-center justify-between md:justify-evenly">
                <div className="flex flex-col items-center">
                    <div className="flex items-center text-white font-bold text-xl justify-start"><img src="./assets/logo.jpg" alt="caps logo" className="w-10 rounded-2xl mr-3"/>CAPS</div>
                    <ul>
                        <li className="mx-5 duration-300 text-white hover:underline underline-offset-2"><i className="fa-solid fa-phone mr-2 text-white"></i>08037142291</li>
                        <li className="mx-5 duration-300 text-white cursor-pointer"><a href="#newsletter"><i className="fa-solid fa-envelope mr-2 text-white"></i></a>Newsletter</li>
                        <li className="mx-5 duration-300 text-white hover:underline underline-offset-2"><a href="https://www.google.com/maps/place/9%C2%B055'59.6%22N+8%C2%B054'45.5%22E/@9.933217,8.9080306,17z/data=!3m1!4b1!4m12!1m7!3m6!1s0x10537224a1b29681:0x1a757fa6b0b02791!2sBush+Bar!8m2!3d9.9336187!4d8.9148117!16s%2Fg%2F11by_p3wgt!3m3!8m2!3d9.933217!4d8.912644?entry=ttu"><i className="fa-duotone fa-solid fa-map-pin mr-2 text-white"></i>Address</a></li>
                    </ul>
                </div>
                <div className="hours text-white text-center">
                    <h3 className="text-center text-xl md:text-2xl">Opening Hours</h3>
                    <ul className="opening">
                        <li>Monday: 8AM-2PM</li>
                        <li>Tuesday: 8AM-2PM</li>
                        <li>Wednesday: 8AM-2PM</li>
                        <li>Thursday: 8AM-2PM</li>
                        <li>Friday: 8AM-1PM</li>
                    </ul>
                </div>
            </section>
            <div className="copyright bg-green-800 flex flex-col items-center justify-center text-white pb-8">
                <p className="text-sm text-center">Copyright &#169 2024 Christian Assets Private School. All rights reserved</p>
                <p className="mt-2">Developed by <a href="https://reno-ten.vercel.app/">Reno</a></p>
            </div>
        </footer>
    </div>
  );
}

export default App;
