import '../Card/CoffeCard.css';
import { useState } from 'react';


export const CoffeCard = ({coffe}) => {

    // const votos = coffe.votes
    // const [ votes, setVotes ] = useState(votos)
    const [ star, setStar ] = useState(false)
    const starLine = <img src="../../src/assets/Star.svg" className='coffeStar' alt="star" />;
    const starFill = <img src="../../src/assets/Star_fill.svg" className='coffeStar_fill' alt="star fill" />;



    const toggleStar = () => {
        setStar((starL) => !starL);
    }

    return(
        <div className='coffeCard'>
            <img src={coffe.image} className='coffeCard__img' alt={coffe.name} />
            <section className='coffeCard__info'>
                <h5 className='coffeCard__name'>{coffe.name}</h5>
                <p className='coffeCard__price'>{coffe.price}</p>
            </section>
            <section className='coffeRating' >
                <span onClick={toggleStar} className='coffeStar'>{
                    !star ? starLine : starFill
                }</span>
                <p>{coffe.rating}</p>
                <p>({coffe.votes} votes)</p>
            
            </section>
        </div>
    )
}
