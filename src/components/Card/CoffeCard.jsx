import '../Card/CoffeCard.css';
import { useState } from 'react';


export const CoffeCard = ({coffe}) => {

    const [ star, setStar ] = useState(false)
    const starLine = <img src="images/star.svg" className='coffeStar' alt="star" />;
    const starFill = <img src="images/star_fill.svg" className='coffeStar_fill' alt="star fill" />;

    const {image, name, price, rating, votes} = coffe


    const toggleStar = () => {
        setStar((starL) => !starL);
    }

    return(
        <div className='coffeCard'>
            <img src={image} className='coffeCard__img' alt={name} />
            <section className='coffeCard__info'>
                <h5 className='coffeCard__name'>{name}</h5>
                <p className='coffeCard__price'>{price}</p>
            </section>
            <section className='coffeRating' >
                <span onClick={toggleStar} className='coffeStar'>{
                    !star ? starLine : starFill
                }</span>
                <p>{rating}</p>
                <p>({votes} votes)</p>
            
            </section>
        </div>
    )
}
