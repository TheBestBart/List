import React from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { Currency } from "./CurrenciesService";
import { url } from "../../common/URL";
import { RouteInfo } from "../../common/Interfaces";

export interface PaginationServiceData extends State {
    currencies: Currency[];
}

export interface PaginationServiceProps extends RouteComponentProps<RouteInfo> {
    currencies: Currency[];
    render: (data: PaginationServiceData) => JSX.Element;
}

interface State {
    quantityElementsOnPage: number;
    quantityOfPages: number;
}

class PaginationService extends React.PureComponent<
    PaginationServiceProps,
    State
    > {
    constructor(props: PaginationServiceProps) {
        super(props);

        this.state = {
            quantityElementsOnPage: 5,
            quantityOfPages: 1
        };
    }

    componentDidMount() {
        let { currencies } = this.props;
        let { quantityElementsOnPage } = this.state;

        this.setState({
            quantityOfPages:
                currencies.length % quantityElementsOnPage > 0
                    ? currencies.length / quantityElementsOnPage + 1
                    : currencies.length / quantityElementsOnPage
        });
    }

    componentDidUpdate(prevProps: PaginationServiceProps, prevState: State) {
        if (prevProps.currencies !== this.props.currencies) {
            let { currencies } = this.props;
            let { quantityElementsOnPage } = this.state;

            this.props.history.push(url.CURRENCIES + "1");
            this.setState({
                quantityOfPages:
                    currencies.length % quantityElementsOnPage > 0
                        ? currencies.length / quantityElementsOnPage + 1
                        : currencies.length / quantityElementsOnPage
            });
        }
    }

    getPartOfCurrencies = (): Currency[] => {
        let { currencies, match } = this.props;
        let { quantityElementsOnPage } = this.state;
        let page: number = parseInt(match.params.pageNumber);
        let start: number = 0 + quantityElementsOnPage * (page - 1);
        let end: number = 0 + quantityElementsOnPage * page;
        let array = currencies.slice(start, end);
        return array;
    };

    render() {
        let { render } = this.props;

        return render({ currencies: this.getPartOfCurrencies(), ...this.state });
    }
}

export default withRouter(PaginationService);
