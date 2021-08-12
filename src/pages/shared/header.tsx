import React, {useState, useCallback} from 'react';
import {Link} from "react-router-dom";
import { X, Menu } from 'react-feather';
//import './header.scss';

function Header() {
    const logoUrl = process.env.PUBLIC_URL + '/img/brand.svg';
    // @ts-ignore
    const [collapsed, setCollapsed] = useState(false);

    const toggle = useCallback(
        () => {
            setCollapsed(!collapsed);
        },
        [collapsed],
    );

    return (
        <header>
            <nav className={`navbar top-index`}>
                <div className="container">
                    <Link className={`navbar-brand`}>
                        <img src={logoUrl}/>
                    </Link>
                    <button  onClick={toggle} className={`navbar-toggler`} >
                        <span className={`navbar-toggler-icon `}>
                            <Menu  />
                        </span>
                    </button>
                    <div className={`navbar-collapse ${collapsed ? "" : "collapse"}`}>
                        <button onClick={toggle}
                                className={`navbar-toggler top-index`} >
                            <X className={`fe fe-x`}/>
                        </button>
                        <ul className={`navbar-items-container`}>
                            <li className={`nav-item-group dropdown mb-2`}>
                                <h3>
                                   Navigate
                                </h3>
                            </li>
                            <li>
                                <h6 className={`dropdown-header`}>
                                    <Link onClick={toggle} to={`/`}
                                          className="dropdown-item">Home</Link>
                                </h6>
                            </li>
                            <li>
                                <h6 className={`dropdown-header`}>
                                    <Link onClick={toggle}  to={`/services`}
                                          className="dropdown-item">Services</Link>
                                </h6>
                            </li>
                            <li>
                                <h6 className={`dropdown-header`}>
                                    <Link onClick={toggle}
                                          className="dropdown-item" to={`/about`}>About</Link>
                                </h6>
                            </li>
                            <li>
                                <h6 className={`dropdown-header`}>
                                    <Link onClick={toggle}
                                          className="dropdown-item" to={`/contact`}>Contact</Link>
                                </h6>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;
