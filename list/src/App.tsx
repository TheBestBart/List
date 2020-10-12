import React from 'react';
import './App.css';
import Title from './components/ui/Titile';
import Pagination  from './components/ui/Pagination';
import { CurrenciesData } from './components/services/CurrenciesService';
import List from './components/ui/List';
import { Switch, Route, Redirect } from 'react-router-dom';
import { withRouter, RouteComponentProps } from 'react-router-dom'
import { url } from './common/URL';
import PaginationServices from './components/services/PaginationService';
import DataController from './components/ui/DataController';


interface RouteInfo {
  pageNumber: string;
}
export interface AppProps extends RouteComponentProps, CurrenciesData {}


const App: React.FC<AppProps> = props => {
  let { filterCurrencies } = props;

  return (  
    <div className="App">
      <Title filterCurrencies={filterCurrencies}/>
      <Switch>
        <Route path={url.CURRENCIES + ':pageNumber'} exact>
          <PaginationServices currencies={props.currencies} render={paginationProps =>
            <React.Fragment>
              <DataController pageNumber={paginationProps.pageNumber} currencies={props.currencies} quantityOfPages={paginationProps.quantityOfPages}>
                <List currencies={paginationProps.currencies} />
              </DataController>
              <Pagination
                { ...paginationProps }
              />
            </React.Fragment>}
          />
        </Route>
        <Route path={url.ABOUT_US} exact>
          <h1>About us</h1>
        </Route>
        <Route path='/' exact render={() => <Redirect to={url.CURRENCIES + '1'} exact/>} />
        <Route exact path={url.NOT_FOUND} status={404}>
          <div>
            <h1>Not Found</h1>
          </div>
        </Route>

        <Route render={() => <Redirect to={`${url.NOT_FOUND}`}/>} />
      </Switch>
    </div>
  );
}

export default withRouter(App);

