import React, { useState, useEffect } from 'react';

import './Header.css';

import Logo from '../../assets/logo.png';
import Bars from '../../assets/bars.png';
import { Link } from 'react-scroll';

const Header = () => {
    const [mobile, setMobile] = useState(window.innerWidth <= 768);
    const [menuOpened, setMenuOpened] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="header" id='header'>
            <img src={Logo} alt="Logo" className="logo" />
            {menuOpened === false && mobile === true ? (
                <div
                    style={{
                        backgroundColor: 'var(--appColor)',
                        padding: '0.5rem',
                        borderRadius: '5px',
                    }}
                    onClick={() => setMenuOpened(true)}
                >
                    <img src={Bars} alt="Menu" style={{ width: '1.5rem', height: '1.5rem' }} />
                </div>
            ) : (
                <ul className="header-menu">
                    <li>
                        <Link
                            onClick={() => setMenuOpened(false)}
                            activeClass='active'
                            to='header'
                            spy={true}
                            smooth={true}
                        >Home</Link>
                    </li>
                    <li>
                        <Link
                            onClick={() => setMenuOpened(false)}
                            activeClass='active'
                            to='programs'
                            spy={true}
                            smooth={true}
                        >Program</Link>
                    </li><li>
                        <Link
                            onClick={() => setMenuOpened(false)}
                            activeClass='active'
                            to='reason'
                            spy={true}
                            smooth={true}
                        >Why Us</Link>
                    </li><li>
                        <Link
                            onClick={() => setMenuOpened(false)}
                            activeClass='active'
                            to='plan'
                            spy={true}
                            smooth={true}
                        >Plan</Link>
                    </li>
                    <li><Link
                        onClick={() => setMenuOpened(false)}
                        to='testimonials'
                        span={true}
                        smooth={true}
                    >Testimonials</Link>
                    </li>
                </ul>
            )}
        </div>
    );
};

export default Header;
