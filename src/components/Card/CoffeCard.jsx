import '../Card/CoffeCard.css';

export const CoffeCard = ({coffe}) => {

    return(
        <div className='coffeCard'>
            <img src={coffe.image} className='coffeCard__img' alt={coffe.name} />
            <section className='coffeCard__info'>
                <h5 className='coffeCard__name'>{coffe.name}</h5>
                <p className='coffeCard__price'>{coffe.price}</p>
            </section>

        </div>
    )
}