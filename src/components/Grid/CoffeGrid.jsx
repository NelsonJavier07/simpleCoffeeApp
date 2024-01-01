import axios from 'axios';
import { CoffeCard } from '../Card/CoffeCard'
import { useEffect, useState } from 'react';
import '../Grid/CoffeGrid.css'



export const CoffeGrid = () => {

    const [coffes, setCoffes] = useState([]);

    const urlBase = 'https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json';
    useEffect(()=>{

        axios.get(urlBase)
        .then((res) => {
            setCoffes(res.data);
            console.log(res.data);})
        .catch((err) => console.log(err))
        },[])

    return(
        <div className='background'>
            <img src="src\assets\bg-cafe.jpg" className="background__Img" alt="Fondo Coffe" />
        <div className="coffeGridBack">
                <h1 className="">Our Collection</h1>
                <p className="coffeText">
                    Introducing our Coffe Collection, a selection of unique coffees
                    from differents roast types an origins, expertly roasted in small
                    batches and shipped fresh weekly.
                </p>
                <section>
                    <button className='btnProduct'>All Products</button>
                    <button className='btnAvailable'>Available Now</button>
                </section>
        </div>
        <div className='coffeGrid'>
            {
                coffes.map((coffe) => {return <CoffeCard key={coffe.id} props={coffe.props} />})
            }
        </div>
        </div>
)}