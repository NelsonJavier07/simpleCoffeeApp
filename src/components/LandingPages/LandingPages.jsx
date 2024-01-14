import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { CoffeGrid } from '../Grid/CoffeGrid.jsx';
import { CoffeCard } from '../Card/CoffeCard.jsx';


export const LandingPages = () => {

    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={ <CoffeGrid /> } />
                <Route path='/card' element={ <CoffeCard /> } />
            </Routes>
        </BrowserRouter>
    )
}