import '../Card/CoffeCard.css';

export const CoffeCard = (props) => {

    return(
        <div className='coffeCard'>
            <img src={props.image} className='coffeCard__img' alt={props.name} />
            <section className='coffeCard__info'>
                <h5 className='coffeCard__name'>{props.name}</h5>
                <p className='coffeCard__price'>{props.price}</p>
            </section>

        </div>
    )
}