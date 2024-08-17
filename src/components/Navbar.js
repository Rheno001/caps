import { useState } from "react";
import { Link } from "react-scroll";

function Navbar() {

    const[isMenuOpen, setIsMenuOpen] = useState(false)

    return (  
        <header className="bg-green-800 flex  items-center justify-between text-white py-2 px-28 md:px-52 drop-shadow-md md:fixed w-full top-0">
            <div className="flex items-center justify-center"><a href="#"><img src="./assets/logo.jpg" alt="" className="w-12 hover:scale-105 transition-all"/></a><p className="font-bold">CAPS</p></div>
            <ul className="hidden xl:flex items-center gap-10 font-medium text-base">
                <li className="p-3 hover:underline underline-offset-2 cursor-pointer transition-all"><Link activeClass="active" 
      to="home" 
      spy={true} 
      smooth={true} 
      offset={50} 
      duration={500}>
      Home
    </Link>
</li>
                <li className="p-3 hover:underline underline-offset-2 cursor-pointer transition-all"><Link activeClass="active" 
      to="about" 
      spy={true} 
      smooth={true} 
      offset={50} 
      duration={500}>
      About
    </Link></li>
                <li className="p-3 hover:underline underline-offset-2 cursor-pointer transition-all"><Link activeClass="active" 
      to="contact" 
      spy={true} 
      smooth={true} 
      offset={50} 
      duration={500}>
      Contact
    </Link></li>
                <li className="p-3 hover:underline underline-offset-2 cursor-pointer transition-all"><Link activeClass="active" 
      to="gallery" 
      spy={true} 
      smooth={true} 
      offset={50} 
      duration={500}>
      Gallery
    </Link></li>
                <li className="p-3 hover:underline underline-offset-2 cursor-pointer transition-all"><Link activeClass="active" 
      to="newsletter" 
      spy={true} 
      smooth={true} 
      offset={50} 
      duration={500}>
      Newsletter
    </Link></li>
            </ul>
            <i className="bx bx-menu xl:hidden block text-3xl cursor-pointer" onClick={() => setIsMenuOpen(!isMenuOpen)}></i>
            <div className={`absolute xl:hidden top-14 left-0 w-full bg-white text-green-800 flex flex-col items-center gap-6 font-medium text-lg transform transition-transform 
            ${isMenuOpen ? "opcaity-100" : "opacity-0"}`} style={{transition: "transform 0.3s ease,opacity 0.3s ease"}}>
                 <li className="list-none p-2 hover:underline underline-offset-2 cursor-pointer transition-all"><Link activeClass="active" 
      to="home" 
      spy={true} 
      smooth={true} 
      offset={50} 
      duration={500}>
      Home
    </Link>
</li>
                <li className="list-none p-2 hover:underline underline-offset-2 cursor-pointer transition-all"><Link activeClass="active" 
      to="about" 
      spy={true} 
      smooth={true} 
      offset={50} 
      duration={500}>
      About
    </Link></li>
                <li className="list-none p-2 hover:underline underline-offset-2 cursor-pointer transition-all"><Link activeClass="active" 
      to="contact" 
      spy={true} 
      smooth={true} 
      offset={50} 
      duration={500}>
      Contact
    </Link></li>
                <li className="list-none p-2 hover:underline underline-offset-2 cursor-pointer transition-all"><Link activeClass="active" 
      to="gallery" 
      spy={true} 
      smooth={true} 
      offset={50} 
      duration={500}>
      Gallery
    </Link></li>
                <li className="list-none p-2 hover:underline underline-offset-2 cursor-pointer transition-all"><Link activeClass="active" 
      to="newsletter" 
      spy={true} 
      smooth={true} 
      offset={50} 
      duration={500}>
      Newsletter
    </Link></li>
            </div>
        </header>
    );
   
}

export default Navbar