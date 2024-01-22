import './Section3.css'
import React, {useState} from 'react';
function Section3(){
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const updateFN = (e) => {
        setFirstName(e.target.value);
      }
      const updateLN = (e) => {
        setLastName(e.target.value);
      }
      const updateEmail = (e) => {
        setEmail(e.target.value);
      }
      const updatePhone = (e) => {
        setPhone(e.target.value);
      }


    function handleForm(){

        if(firstName == "" || lastName == "" || email == ""){
            return;
        }

        setFirstName("");
        setLastName("");
        setEmail("");
        setPhone("");
        
    }

    return(
        <div id='section3'>
            <img src="Images/bg1.jpg" alt="" />
            <form className='form' action='/' >
                <h2>Contact Form</h2>
                <div className='first'>   
                    <input placeholder='First Name*' type="text" onChange={updateFN}/>
                    <input placeholder='Last Name*' type="text" onChange={updateLN}/>
                </div>

                <div className="selections">
                        <h4> Select Add Ons</h4>
                        <section>
                            <div className="box">
                                <input type="checkbox" name="photo" />
                                <p>Photography Service</p>
                            </div>
                            <div className="box">
                                <input type="checkbox" name="video" />
                                <p>Videography Service</p>
                            </div>
                            <div className="box">
                                <input type="checkbox" name="music" />
                                <p>Live Dj Entertainment</p>
                            </div>
                            <div className="box">
                                <input type="checkbox" name="drinks" />
                                <p>Mixologist Experience</p>
                            </div>
                            <div className="box">
                                <input type="checkbox" name="food" />
                                <p>Italian Catering</p>
                            </div>
                        </section>
                </div>
                <input type="text" placeholder='Email*' className='email' onChange={updateEmail}/>
                <input type="text"placeholder='Phone #' className='phone' pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" onChange={updatePhone}/>
                <textarea name="info" className='addInfo' rows="5" placeholder='Additional Info'></textarea>
                <button type="button" className='sbt-btn' onClick={handleForm}> Send </button>
            </form>
        </div>
    )
}

export default Section3;