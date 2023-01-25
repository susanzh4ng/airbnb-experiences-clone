function Card(props){
    let badgeText
    if (props.openSpots===0){
        badgeText="SOLD OUT"
    } else if (props.location==="Online"){
        badgeText="ONLINE"
    }

    return(
        <div className="CardSection">
            <img src={`../images/${props.coverImg}`} alt="Hero" className="cardImage"/>
            <div className="cardStat">
                {badgeText && <div className="cardBadge">
                    {badgeText}
                </div>}
                <img src={require('../star.png')} alt="Rating star" className="starImage"/>
                <span>{props.stats.rating}</span>
                <span className="gray">({props.stats.reviewCount}) • </span>
                <span className="gray">{props.location}</span>
            </div>
            <p className="cardTitle">{props.title}</p>
            <p className="cardPrice"><span className="bold">From ${props.price}</span> / person</p>
        </div>
    )
}

export default Card
//<img src={`../images/${props.img}`} alt="Hero1" className="cardImage"/>
//<img src={props.img} alt="Hero" className="cardImage"/>