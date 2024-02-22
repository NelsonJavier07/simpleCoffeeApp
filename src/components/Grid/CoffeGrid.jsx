import axios from 'axios';
import { CoffeCard } from '../Card/CoffeCard'
import { useEffect, useState } from 'react';
import '../Grid/CoffeGrid.css'

export const CoffeGrid = () => {

    const [coffes, setCoffes] = useState([]);
    const [availables, setAvailables] = useState(true);

    const urlBase = 'https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json';

    useEffect(()=>{
        axios.get(urlBase)
        .then((res) => {
            setCoffes(res.data)})
        .catch((err) => console.log(err))
        },[])


    const handleShowAvailablesCoffee = () =>{
        setAvailables(false);
}
    const handleShowAllCoffee = () =>{
        setAvailables(true);
    }

    const activeColor = () => { return availables ? 'btnActive' : 'btnInactive'};
    const activeColorB = () => { return !availables ? 'btnActive' : 'btnInactive'};

    // const imgCoffee = import.meta.env.VITE_URL_IMAGEN_COFFEE
    // const imgDecoration = import.meta.env.VITE_URL_IMAGEN_COFFEE_DECORATION

    const imgCoffee = "public/bg-cafe.jpg"
    const imgDecoration = "images/vector.svg"

    return (
        <div className='background'>
            <img src={imgCoffee} className="background__Img" alt="Fondo Coffe" />
            <div className="coffeGridBack">
                <img src={imgDecoration} className='decoration' alt="Decoración" />
                <section className='coffeeSection'>
                    <h1 className="coffeTitle">Our Collection</h1>
                    <p className="coffeText">
                        Introducing our Coffe Collection, a selection of unique coffees
                        from differents roast types an origins, expertly roasted in small
                        batches and shipped fresh weekly.
                    </p>
                </section>
                <section className='coffeBtn'>
                    <button className={`btnProduct ${activeColor()}`} onClick={handleShowAllCoffee} >All Products</button>
                    <button className={`btnAvailable ${activeColorB()}`} onClick={handleShowAvailablesCoffee} >Available Now</button>
                </section>
            </div>
            <div className='coffeGrid'>
                {
                    availables ? coffes.map((coffe) =>{return <CoffeCard key={coffe.id} coffe={coffe} />}) 
                    : 
                    coffes.filter((coffe) =>{return coffe.available === true}).map((coffe) => { return <CoffeCard key={coffe.id} coffe={coffe} />})
                }
            </div>
        </div>
    )}

