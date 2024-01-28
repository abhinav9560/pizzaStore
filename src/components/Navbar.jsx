import React from "react";
import { NavLink as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import './style.css';
const Navigation = () => {
    return (
        <header className="navigation" id="navigation">
            <nav>
                <div className="link-container">
                    <ScrollLink
                        className="link"
                        to="stage"
                        spy={true}
                        smooth={true}
                        offset={-75}
                        duration={500}
                    >
                        Pizza Stages Section
                    </ScrollLink>
                    <ScrollLink
                        className="link"
                        to="main"
                        spy={true}
                        smooth={true}
                        offset={-75}
                        duration={500}
                    >
                        Main Section
                    </ScrollLink>
                    <ScrollLink
                        className="link"
                        to="form"
                        spy={true}
                        smooth={true}
                        offset={-75}
                        duration={500}
                    >
                        Create New Order
                    </ScrollLink>
                </div>
            </nav>
        </header>
    );
};
export default Navigation;
