import { ReturnedData } from "../services/PaginationService";
import { RouteInfo } from "../../common/Interfaces";
import React from "react";
import { Currency } from "../services/CurrenciesService";

interface Props {
    children?: React.ReactNode,
    quantityOfPages: number, 
    currencies: Currency[],
    pageNumber: Number | undefined
}

const DataController: React.FC<Props> = ({ currencies, children, pageNumber, ...props }) => {
    let result;
    let quantityOfPages = props.quantityOfPages === 0 ? 1 : props.quantityOfPages;
    let isPageNumberError: Boolean = !pageNumber || pageNumber > quantityOfPages || pageNumber < 1
    console.log('parseInt', pageNumber, isPageNumberError, currencies.length);

    if(isPageNumberError) {
        result = <h1 style={{ margin: '100px 0'}}>Page Number is wrong...</h1>
    } else if(!currencies.length && !isPageNumberError) {
        result = <h1 style={{ margin: '100px 0'}}>No results...</h1>
    } else result = children

    return <React.Fragment>{result}</React.Fragment>;
}

export default DataController;
