import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom'
import { LocationDescriptor } from 'history';
import { URL } from 'url';
import { url } from '../../common/URL';

const Navbar: React.FC<RouteComponentProps> = ({ history }) => {
    const redirect = (path: LocationDescriptor<unknown>): void => {
        alert(path)
        history.push(path);
    }

    return (
        <div className='nav-element-box'>
            <input className="search-input" type='text' placeholder='Search...' />
            <button onClick={() => redirect(url.CURRENCIES)} className='button'>Currencies</button>
            <button onClick={() => redirect(url.ABOUT_US)} className='button'>About us</button>
        </div>
    );
}
 
export default withRouter(Navbar);

