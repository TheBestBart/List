import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom'
import { CurrenciesData, Currency } from './CurrenciesService';
import { url } from '../../common/URL';


export interface PaginationServiceData extends CurrenciesData, State {
    setPage: (pageNumber?: number) => void
}

interface RouteInfo {
    pageNumber: string;
}

export interface PaginationServiceProps extends RouteComponentProps<RouteInfo>, CurrenciesData {
    render: (data: PaginationServiceData) => JSX.Element | null
}

interface State {
    activePage: number,
    quantityElementsOnPage: number,
    quantityOfPages: number
}

class PaginationService extends React.Component<PaginationServiceProps, State> {

    constructor(props: PaginationServiceProps) {
        super(props)

        this.state = {
            activePage: 0,
            quantityElementsOnPage: 5,
            quantityOfPages: 1,
        }
    }

    componentDidMount() {
        let { currencies, match } = this.props;
        let { quantityElementsOnPage } = this.state;

        console.log('tutaj', match.params)

        this.setState({
            quantityOfPages: currencies.length % quantityElementsOnPage > 0 ? currencies.length / quantityElementsOnPage + 1 : currencies.length / quantityElementsOnPage,
            activePage: 1
        })
    }

    componentDidUpdate(prevProps: PaginationServiceProps, presState: State) {
        console.log(this.props.match.params)
        if(prevProps.currencies !== this.props.currencies) {
            let { currencies, match } = this.props;
            let { quantityElementsOnPage } = this.state;

            this.setState({
                quantityOfPages: currencies.length % quantityElementsOnPage > 0 ? currencies.length / quantityElementsOnPage + 1 : currencies.length / quantityElementsOnPage,
                activePage: 1
            })
        }
    }

    setPage = (number?: number) => {
        let { match, history } = this.props;
        // let  pageNumber = match.params.pageNumber;

        // console.log(number);

        // let numberToUrl:number = number ? number : parseInt(pageNumber);

        console.log('NUMBERtOURL ', number)

        history.push(url.CURRENCIES + number)
    }

    getPartOfCurrencies = (): Currency[] => {
        let { currencies } = this.props; 
        let { activePage, quantityElementsOnPage } = this.state;
        let start: number;
        let end:  number;

        return currencies.slice(0, 5) 
    } 

    render() {
        let { render, filterCurrencies } = this.props;

        return render({ filterCurrencies, currencies: this.getPartOfCurrencies(), setPage: this.setPage, ...this.state });
    }
}

export default withRouter(PaginationService);
