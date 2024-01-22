import './Footer.css'

function Footer(){
return(
    <div id='footer'>
        <section>
            <h3>Dolce Vita - Charter Service</h3>
            <a href="" className='insta'><i className="fa-brands fa-instagram"></i></a>
        </section>
        <section>
            <a href="">561 - XXX - XXXX</a>
        </section>
        <section>
                <div className='creator'>
                    <a href='https://brianfarias.info'>BF</a>
                    <div className='seperator'></div>
                    <p>Created by Brian Farias</p>
                </div>
        </section> 
    </div>
)
}

export default Footer;