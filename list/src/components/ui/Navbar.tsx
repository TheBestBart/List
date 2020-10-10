import React, { SyntheticEvent } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom'
import { LocationDescriptor } from 'history';
import { url } from '../../common/URL';
import { placeholders } from '../../common/PLACEHOLDERS';

export interface NavbarProps extends RouteComponentProps {
    handleChange?: (event: SyntheticEvent) => void,
    inputValue?: string
} 

const Navbar: React.FC<NavbarProps> = ({ history, handleChange, inputValue = '' }) => {
    const redirect = (path: LocationDescriptor<unknown>): void => {
       history.push(path);
    }

    return (
        <div className='nav-element-box'>
            <input onChange={handleChange} value={inputValue} className="search-input" type='text' placeholder={placeholders.navbarInputPlaceholder} />
            <button onClick={() => redirect(url.CURRENCIES + '1')} className='button'>Currencies</button>
            <button onClick={() => redirect(url.ABOUT_US)} className='button'>About us</button>
        </div>
    );
}
 
export default withRouter(Navbar);

