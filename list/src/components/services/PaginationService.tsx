import { Currency } from "./CurrenciesService";
import { RouteComponentProps, withRouter } from "react-router-dom";
import React, { useState, useEffect, useCallback, useMemo } from "react";
import { RouteInfo } from "../../common/Interfaces";
import { url } from "../../common/URL";

interface PaginationServiceProps extends RouteComponentProps<RouteInfo> {
    currencies: Currency[],
    render: (data: ReturnedData) => JSX.Element
}

interface ReturnedState {
    activePage: number,
    quantityOfPages: number,
}

interface State extends ReturnedState {
    quantityElementsOnPage: number,
}

export interface ReturnedData extends ReturnedState {
    decrementPage: () => void,
    incrementPage: () => void,
    handleClick: (page: number) => void,
    currencies: Currency[],
    pageNumber: number | undefined
}

const PaginationService: React.FC<PaginationServiceProps> = ({ currencies, render, match, history }) => {

    const pageNumber = parseInt(match.params.pageNumber, 10);

    const initialState: State = {
        quantityElementsOnPage: 5,
        quantityOfPages: currencies.length % 5 > 0
            ? currencies.length / 5 + 1
            : currencies.length / 5,
        activePage: 1
    }

    const [state, setState] = useState<State>({ ...initialState });

    const getPartOfCurrencies = (): Currency[] => {
        let { quantityOfPages } = state;

        if (currencies.length && pageNumber && pageNumber >= 1 && pageNumber <= quantityOfPages) {
            let { quantityElementsOnPage } = state;
            let page: number = pageNumber;
            let start: number = 0 + (quantityElementsOnPage * (page - 1));
            let end: number = 0 + (quantityElementsOnPage * page)
            let array = currencies.slice(start, end);

            return array;
        }

        return [];
    }

    const handleClick = (number: number): void => history.push(url.CURRENCIES + number);

    const decrementPage = () => {
        if (pageNumber > 1) {
            history.push(url.CURRENCIES + (pageNumber - 1))
        }
    }

    const incrementPage = () => {
        if (pageNumber < state.quantityOfPages) {
            history.push(url.CURRENCIES + (pageNumber + 1))
        }
    }

    useEffect(() => {
        let { quantityElementsOnPage, quantityOfPages } = state;

        console.log('tutaj działam')
        setState({
            ...state,
            quantityOfPages: currencies.length % quantityElementsOnPage > 0
                ? currencies.length / quantityElementsOnPage + 1
                : currencies.length / quantityElementsOnPage
        });
        (pageNumber && pageNumber >= 1 && pageNumber <= quantityOfPages) && history.push(url.CURRENCIES + '1')
    }, [currencies.length])

    useEffect(() => {
        console.log('teraz tutaj jestem')
        setState({
            ...state,
            activePage: pageNumber,
        })
    }, [pageNumber])

    return render({
        activePage: state.activePage,
        currencies: getPartOfCurrencies(),
        quantityOfPages: state.quantityOfPages === 0 ? 1 : state.quantityOfPages,
        decrementPage,
        incrementPage,
        handleClick,
        pageNumber: pageNumber ? pageNumber : undefined
    });
}

export default withRouter(PaginationService);