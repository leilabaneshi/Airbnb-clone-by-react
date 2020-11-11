import React from 'react';
import './Header.css';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import LanguageIcon from '@material-ui/icons/Language';
import SearchIcon from '@material-ui/icons/Search';
import { Avatar } from '@material-ui/core';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className='header'>
            <Link to='/'>
                <img className='header__icon' src="https://www.ifsport.is/skrar/frettamyndir/airbnblogo.jpg"
                    alt="airbnb" />
            </Link>

            <div className="header__center">
                <input type="" />
                <SearchIcon />
            </div>
            <div className="header__right">
                <p>Become a host</p>
                <LanguageIcon />
                <ExpandMoreIcon />
                <Avatar />
            </div>

        </div>
    )
}

export default Header
