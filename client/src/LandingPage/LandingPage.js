import React from 'react';
import Section1 from './Section1'
import Section2 from './Section2'
import Section3 from './Section3'
import Section4 from './Section4'
import Section5 from './Section5'
import Section6 from './Section6'

function LandingPage(){
    
    window.addEventListener('scroll', onScroll);
    function onScroll(){
        const section2 = document.getElementById('section2');
        const section1 = document.getElementById('section1');
        const currHieght = window.innerHeight + window.scrollY;
        
        if(section2.offsetHeight+section1.offsetHeight <= currHieght){
            let items = document.querySelectorAll('.listItem');

            for(var i=0; i<items.length; i++){
                items[i].style.animationPlayState = 'running';
            }
            
        }
        else if(section2.offsetHeight+section1.offsetHeight <= currHieght){

        }
    }
    
    return(
        <>
            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />
            <Section5 />
            <Section6 />
        </>
    )
}

export default LandingPage;