import React, { useState, useEffect } from 'react';
import windowScrollPosition from '@rehooks/window-scroll-position';

import './style.css';
import { Menu, Links, Logo, NavMobile } from './style.js';

const Navbar = () => {
    const [menu, setMenu] = useState(false);
    const [hold, setHold] = useState(false);
    let position = windowScrollPosition();

    const closeOnClick = () => {
        setMenu(false);
    }

    useEffect(() => {
        if(position.y > 0) {
            setHold(true);
        }else {
            setHold(false);
        }
    }, [position, hold])

    return (
        <div className="NavbarWrapper">
            <div className="NavbarContent">
                <div className="LogoWrapper">
                    <Logo to="/"/>
                </div>
                <NavMobile onClick={() => setMenu(!menu)}/>
                <Menu onClick={closeOnClick} Open={menu}>
                    <Links activeClassName="active" exact={true} to="/">
                        Home
                    </Links>
                    <Links activeClassName="active" to="/champions">
                        Champions
                    </Links>
                    <Links activeClassName="active" to="/lore">
                        Lore
                    </Links>
                    <Links activeClassName="active" to="/other_regions">
                        Other Regions
                    </Links>    
                </Menu>
            </div>
        </div>
    )
}

export default Navbar;