import parchmentBackground from "../images/Dark Textured Parchment Background.png";
import flowerLineart from "../images/Portfolio Flower Lineart.png";
import olivia1 from "../images/Olivia-1-Square.png"

function SplashPage() {

    return <>
    <div className="splash-outer-container">
    <div className="splash-inner-container">
        <div>
        <img id="flower-lineart" className="splash" src={flowerLineart}></img>
        </div>

        <div id="splash-text-container">
            <h3 className="splash-title">Hi. My name is...</h3>
            <h1 id="splash-h1" className="splash-title">Olivia K. Franken</h1>
        </div>

        <div>
            <img id="olivia-img-1" className="splash" src={olivia1}></img>
        </div>

    </div>
    </div>
    

        
    
     


    </>
}

export default SplashPage;