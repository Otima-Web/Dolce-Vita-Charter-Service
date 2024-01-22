import './Section6.css'
import { useState } from 'react';

function Section6(){
const [selected, setSelected] = useState(1);

    function set(num) {
        setSelected(num)
    } 

    return(
        <section id='section6'>
            <div className='pictures'>
                <h1>The SunSeeker</h1>

                <dl className={selected === 1 ? 'selected' : 'unselected'}onClick={() => set(1)}>
                    <img src="Images/info1.jpg" alt="" />
                    <p>Bedroom 1</p>
                </dl>

                <dl className={selected === 2 ? 'selected' : 'unselected'} onClick={() => set(2)}>
                    <img src="Images/info2.jpg" alt="" />
                    <p>Bedroom 2</p>
                </dl>

                <dl className={selected === 3 ? 'selected' : 'unselected'} onClick={() => set(3)}>
                    <img src="Images/info3.jpg" alt="" />
                    <p>Lounge</p>
                </dl>

                <dl className={selected === 4 ? 'selected' : 'unselected'} onClick={() => set(4)}>
                    <img src="Images/info4.jpg" alt="" />
                    <p>Covered Deck</p>
                </dl>

            </div>
        </section>
    )
}

export default Section6;