import './Section5.css'

function Section5(){

    return(
        <div id="section5">
            <img src="Images/bg2.jpg" alt="" />
            <div className='container'>
                <section className='info'>
                    <h2>Add-On Services</h2>

                    <dl className='service'>
                        <h5>Exclusive Mixologist Experience ~ $750</h5>
                        <p>Elavate your Voyage with our Exclusive Mixologist Experience, featuring a bespoke selection of
                            World-Class Concotctions tailored to your taste
                        </p>
                    </dl>
                    <dl className='service'>
                        <h5>Professinoal Photography Service ~ $450</h5>
                        <p>Capture your special moments with our skilled Photographer, ensuring timeless memories
                        </p>
                    </dl>
                    <dl className='service'>
                        <h5>Professinoal Videography Service  ~ $550</h5>
                        <p>High Quality video coverage, capturing the essence of your event in stunning detail (Video Recap)
                        </p>
                    </dl>
                    <dl className='service'>
                        <h5>Live DJ Entertainment~ $400</h5>
                        <p>A Live DJ set to create the perfect ambiance, Taylored to your preferences and event theme
                        </p>
                    </dl>
                    <dl className='service'>
                        <h5>Exclusive Italian Catering ~ $1,750</h5>
                        <div className='foods'>
                            <p> <strong>Antipasto:</strong> A selection of fine Italian cheeses, charcuterie, marinated olives.</p>
                            <p><strong>Primo:</strong> Freshly made Pasta Dishes, including a rich truffle tagliatelle and a classic seafood
                            linguine.
                            </p>
                            <p><strong>Secondo:</strong> Choice of succulent osso buco or grilled sea bass, accompanied by seasonal sides.</p>
                            <p><strong>Dolce:</strong>A dessert assortment featuring tiramisu, panna cotta, and lemon sorbet.</p>
                            <p><strong>Beverages:</strong>Includes italian wines, sparkling water, and artisanal coffee.</p>
                        </div>
                    </dl>
                    
                </section>
            </div>
        </div>
    )
}

export default Section5;