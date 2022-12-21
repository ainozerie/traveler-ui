import React from 'react';
import MenuOption from './MenuOption';
import './navigation.css';

function Navigation() {
    return (
        <nav>
            <MenuOption name='SEARCH'/>
            <MenuOption name='HOME'/>
            <MenuOption name='MORE'/>
        </nav>
    );
}

export default Navigation;