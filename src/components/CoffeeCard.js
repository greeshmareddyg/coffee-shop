const CoffeeCard = (props) => {

    const { coffee } = props;
    // console.log(props);

    return (<div className="coffee-card">
        <img className="coffee-card-image" src={coffee.image} alt="coffee-image" />
        <h3>{coffee.title}</h3>
        <p>{coffee.ingredients.join(', ')}</p>
    </div>)
}

export default CoffeeCard;