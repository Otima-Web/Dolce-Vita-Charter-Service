import './Section2.css'

function Section2(){

    return(
        <div id='section2'>
            <section>
                <div className='vidContainer'>
                    <video src="Video/Yacht.mp4" autoPlay={true} loop={true} controls={false} playsInline muted></video>
                </div>
                <div className='menu'>
                    <div className='header'>
                        <h3>Base Package</h3>
                        <p className='sub'>$3,500</p>
                    </div>
                    <ul className='list'>
                        <li className='listItem'><p>75 Feet</p></li>
                        <li className='listItem'><p>4 Hour Yacht Charter</p></li>
                        <li className='listItem'><p>Capcity of up to 12 Guests</p></li>
                        <li className='listItem'><p>3 Bedroom & 3 Bathroom</p></li>
                    </ul>
                </div>
            </section>
        </div>
    )
}

export default Section2;