import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css'
const Navigation = () => {
    return (
        <ul className='unorder_list'>
            <li>
                <NavLink to="/author" className='author_route link'>Author</NavLink>
            </li>
            <li>
                <NavLink to="/quotes" className='quote_route link'>Quotes</NavLink>
            </li>
            <li>
            <NavLink to="/quote_of_the_day" className='quote_of_the_day_route link'>Quote of the Day</NavLink>
            </li>
        </ul>
    );
}

export default Navigation;
