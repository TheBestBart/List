import React from 'react';
import './App.css';
import Title from './components/ui/Titile';
import { Pagination } from './components/ui/Pagination';
import Navbar from './components/ui/Navbar';
import CurrenciesService, { CurrenciesData } from './components/services/CurrenciesService';
import List from './components/ui/List';
import { PaginationServiceData } from './components/services/PaginationService';
import { Switch, Route } from 'react-router-dom';
import { withRouter, RouteComponentProps } from 'react-router-dom'
import { url } from './common/URL';

interface RouteInfo {
  pageNumber: string;
}
export interface AppProps extends RouteComponentProps, PaginationServiceData {}


const App: React.FC<AppProps> = ({ currencies, filterCurrencies, setPage, activePage, quantityOfPages }) => {
  return (
    <div className="App">
      <Title />
      
      <Switch>
        <Route path='/currencies/:pageNumber/' exact>
          <List currencies={currencies}/>
          <Pagination 
            initialPage={activePage}
            pageCount={quantityOfPages} 
            pageRangeDisplayed={7} 
            marginPagesDisplayed={1} 
            onPageChange={setPage}
          />
        </Route>
        <Route path='/about-us/:id/'>
          <h1>About us</h1>
        </Route>
      </Switch>
      
    </div>
  );
}

export default withRouter(App);
