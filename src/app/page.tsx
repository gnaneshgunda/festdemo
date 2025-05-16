import "./styles/home.css";
import Link from "next/link";
const Home= () => {
    return ( 
        <div id="home">
            <div style={{height:"2vh"}}></div>
            <div id="home-content">
                <h1>Welcome to the Asia's largest Astro-tech fest</h1>   
                <Link href="/Schedule" className="links" >explore Events</Link>
                <br/>
                <Link href="/signup" className="links">Register Now</Link>

                <div className="social-icons">
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-youtube"></i>
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-linkedin-in"></i>
                    </a>
                </div>
                <div id="rocket-launch">
                  <p> A space-ship waiting for you....</p>
                </div>


             </div>   
            </div>
     );
}
 
export default Home;