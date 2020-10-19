import React, { useMemo } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { LocationDescriptor } from "history";
import { url } from "../../common/URL";
import { texts } from "../../common/texts";
import { NavbarReturnerData } from "../services/NavbarService";
import HamburgerMenu from "react-hamburger-menu";

export interface NavbarProps extends NavbarReturnerData {
    handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Navbar: React.FC<NavbarProps> = ({
    handleChange,
    toggleClick,
    isOpen,
}) => {
    const location = useLocation();
    const history = useHistory();
    const redirect = useMemo(() => (path: LocationDescriptor<unknown>): void => history.push(path), []);

    return (
        <div className="nav-element-box">
            <div className="hamburger-menu">
                <HamburgerMenu
                    isOpen={isOpen}
                    menuClicked={toggleClick}
                    color={"#464646"}
                    strokeWidth={5}
                    width={25}
                    height={18}
                />
            </div>
            {isOpen && (
                <div className="navbar-elements fade-in">
                    <input
                        onChange={handleChange}
                        className="search-input"
                        type="text"
                        placeholder={texts.navbarInputPlaceholder}
                        style={{
                            display: location.pathname.includes(url.ABOUT_US) ? 'none' : 'block' 
                        }}
                    />
                    <button
                        onClick={() => redirect(url.CURRENCIES + "1")}
                        className="button"
                    >
                        {texts.currenciesButton}
                    </button>
                    <button onClick={() => redirect(url.ABOUT_US)} className="button">
                        {texts.aboutUsButton}
                    </button>
                </div>
            )}
        </div>
    );
};

export default React.memo(Navbar);
