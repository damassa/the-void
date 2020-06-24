import React, { useState } from 'react';

import { NavbarWrapper, Container, Menu, Links, Logo, NavMobile } from './style';

const Navbar = () => {

    const [menu, setMenu] = useState(false);
    const closeOnClick = () => {
        setMenu(false);
    }

    return (
        <NavbarWrapper>
            <Container>
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
            </Container>
        </NavbarWrapper>
    )
}

export default Navbar;