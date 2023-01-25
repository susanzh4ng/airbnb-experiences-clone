import heroImages from '../heroImages.png';

function Hero(){
    return(
        <div className="HeroSection">
            <img src={heroImages} alt="Images of heroes" className="heroImages"/>
            <p className="heroesBold">Online Experiences</p>
            <p className="heroesReg">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </div>
    )
}

export default Hero