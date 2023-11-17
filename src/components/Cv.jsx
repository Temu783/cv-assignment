import dp from "../images/dp.jpg"
const Cv = () => {
    return (
        <>
            <div className="container">
                <div className="left-side">
                    <img src={dp} className="dp" alt="dp" />
                    <h1 >Tehreem Rani</h1>
                    <h5>Graphic Designer</h5>
                    <div className="line"></div>
                    <h3>About me:</h3>
                    <p>A graphic designer is a professional within <br /> the graphic design
                        and graphic art industry who assambles images.</p>
                    <h3>Skills:</h3>
                    <div className="skill-list">
                        <li>HTML/CSS</li>
                        <li>Logo Design</li>
                        <li>Flyer/Poster</li>
                        <li>Social Media</li>
                        <li>Layout Design</li>
                        <li>Color theory</li>
                    </div>
                </div>
                <div className="right-side">
                    <h1 className="obj">Objectives:</h1>
                    <p>To pursue a challenging career in a dynamic
                        organization that offers extensive opportunity for
                        career development and where my creative initiative
                        ideas and a genuine enthusiasm allow me to progress. </p>
                    <div className="line">
                    </div>
                    <h1 className="exp">Experince:</h1>
                    <div className="exp-list">
                        <li>1 Year Experience As a Data Entry</li>
                        <li>1.5 Year Experience As a customer service/Team Management </li>
                        <li>2 Year Experience In a Graphics Designing</li>
                    </div>
                    <h1 className="lang">Language:</h1>
                    <div className="lang-list">
                        <li>English</li>
                        <li>Urdu</li>
                        <li>Panjabi</li>
                    </div>
                    <h1 className="hobby">Hobbies:</h1>
                    <div className="hobby-list">
                        <li>Vollybal</li>
                        <li>Searching</li>
                    </div>
                    <h1 className="cont">Contact:</h1>
                    <div className="contact-list">
                        <p>Lahore Pakistan shalimar town <br /> tehreemrani783@gmail.com</p>
                        <p>03463420678</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Cv;
