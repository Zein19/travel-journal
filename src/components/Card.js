function Card(props){
    return(
        <div className="card">
           <div className="flex">
                <img className="image" src={props.item.imageUrl} alt={props.item.title} />
                <div className="card-info">
                    <h3><span>{props.item.location.toUpperCase()}</span> <br></br> <a href={props.item.googleMapsUrl} target="_blank" rel="noreferrer">View on Google Maps</a></h3>
                    <h1 className="card-title">{props.item.title}</h1>
                    <h4 className="card-date"> {props.item.startDate} - {props.item.endDate}</h4>
                    <p> {props.item.description}</p>   
                </div>
            </div>
            <hr />
        </div>
    )
}

export default Card