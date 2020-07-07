import React, { useState, useEffect } from 'react';
import windowScrollPosition from '@rehooks/window-scroll-position';

import { 
    NavbarWrapper, 
    Menu, 
    Links, 
    Logo, 
    NavMobile 
} from './style';

const Navbar = () => {
    const [menu, setMenu] = useState(false);
    const [hold, setHold] = useState(false);
    const position = windowScrollPosition();

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
        <NavbarWrapper Hold={hold && !menu}>
            <Logo to="/"/>
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
        </NavbarWrapper>
    )
}

export default Navbar;