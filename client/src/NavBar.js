import React, {Link} from "react";
import './NavBar.css'
function Navbar(){

    function scrollTo(e){
        const section1 = document.getElementById('section1').offsetHeight;
        const section2 = document.getElementById('section2').offsetHeight;
        const section3 = document.getElementById('section3').offsetHeight;
        const section4 = document.getElementById('section4').offsetHeight;
        const section5 = document.getElementById('section5').offsetHeight;

        switch (e.target.value){
            case 'info':
                window.scrollTo({
                    top: section1,
                    left: 0,
                    behavior: "smooth",
                });
                break;
            case 'contact':
                window.scrollTo({
                    top: section1+section2,
                    left: 0,
                    behavior: "smooth",
                  });
                break;
            case 'location':
                window.scrollTo({
                    top: section1+section2+(section3/2),
                    left: 0,
                    behavior: "smooth",
                  });
                break;
            case 'menu':
                window.scrollTo({
                    top: section1+section2+section3+section4,
                    left: 0,
                    behavior: "smooth",
                  });
            break;
            
            default:
                window.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: "smooth",
                  });
            break;
        }

    }

    return(
        <div id="navBar">
            <div className="block">
                <span onClick={scrollTo} value={''} className="material-symbols-outlined">directions_boat</span>
                <button value={'info'} onClick={scrollTo}>Info</button>
                <button value={'contact'} onClick={scrollTo}> Contact </button>
                <button value={'location'} onClick={scrollTo}> Location </button>
                <button value={'menu'} onClick={scrollTo}>Menu</button>
            </div>

        </div>
    );
}

export default Navbar;