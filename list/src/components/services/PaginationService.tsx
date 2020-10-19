import { Currency } from "./CurrenciesService";
import { useRouteMatch, useHistory } from "react-router-dom";
import React, { useState, useEffect, useCallback } from "react";
import { RouteInfo } from "../../common/Interfaces";
import { url } from "../../common/URL";

interface PaginationServiceProps {
    currencies: Currency[];
    render: (data: ReturnedData) => JSX.Element;
}

interface ReturnedState {
    activePage: number;
    quantityOfPages: number;
}

interface State extends ReturnedState {
    quantityElementsOnPage: number;
}

export interface ReturnedData extends ReturnedState {
    decrementPage: () => void;
    incrementPage: () => void;
    handleClick: (page: number) => void;
    currencies: Currency[];
    pageNumber: number | undefined;
}

const PaginationService: React.FC<PaginationServiceProps> = ({
    currencies,
    render,
}) => {
    const match = useRouteMatch<RouteInfo>();
    const history = useHistory();
    const pageNumber = parseInt(match.params.pageNumber, 10);
    const initialState: State = {
        quantityElementsOnPage: 5,
        quantityOfPages:
            currencies.length % 5 > 0
                ? currencies.length / 5 + 1
                : currencies.length / 5,
        activePage: 1
    };
    const [state, setState] = useState<State>({ ...initialState });
    const { quantityOfPages, quantityElementsOnPage, activePage } = state;
    const getPartOfCurrencies = () => {
        if (
            currencies.length &&
            pageNumber &&
            pageNumber >= 1 &&
            pageNumber <= quantityOfPages
        ) {
            let page: number = pageNumber;
            let start: number = 0 + quantityElementsOnPage * (page - 1);
            let end: number = 0 + quantityElementsOnPage * page;
            let array = currencies.slice(start, end);

            return array;
        }

        return [];
    };

    const handleClick = useCallback((number: number): void => {
        history.push(url.CURRENCIES + number)
    }, [history]);

    const decrementPage = useCallback(() => {
        console.log('decrement')
        if (pageNumber > 1) {
            history.push(url.CURRENCIES + (pageNumber - 1));
        }
    }, [pageNumber, quantityOfPages, history]);

    const incrementPage = useCallback(() => {
        console.log('icrement')
        if (pageNumber < quantityOfPages) {
            history.push(url.CURRENCIES + (pageNumber + 1));
        }
    }, [pageNumber, quantityOfPages, history]);

    useEffect(() => {
        console.log('tutaj jestem')
        setState({
            ...state,
            quantityOfPages:
                currencies.length % quantityElementsOnPage > 0
                    ? currencies.length / quantityElementsOnPage + 1
                    : currencies.length / quantityElementsOnPage
        });
        pageNumber &&
            pageNumber >= 1 &&
            pageNumber <= quantityOfPages &&
            history.push(url.CURRENCIES + "1");
    }, [currencies.length]);

    useEffect(() => {
        setState({
            ...state,
            activePage: pageNumber
        });
    }, [pageNumber]);

    return render({
        activePage: activePage,
        currencies: getPartOfCurrencies(),
        quantityOfPages: quantityOfPages === 0 ? 1 : quantityOfPages,
        decrementPage,
        incrementPage,
        handleClick,
        pageNumber: pageNumber ? pageNumber : undefined
    });
};

export default React.memo(PaginationService);
