import React from "react";
import { Currency } from "../services/CurrenciesService";
import { texts } from "../../common/texts";
import ListHeader from "./ListHeader";

interface Props {
    children?: React.ReactNode;
    quantityOfPages: number;
    currencies: Currency[];
    pageNumber: Number | undefined;
}

const DataController: React.FC<Props> = ({
    currencies,
    children,
    pageNumber,
    ...props
}) => {
    let result;
    let quantityOfPages = props.quantityOfPages === 0 ? 1 : props.quantityOfPages;
    let isPageNumberError: Boolean =
        !pageNumber || pageNumber > quantityOfPages || pageNumber < 1;

    if (isPageNumberError) {
        result = <h1 style={{ margin: "100px 0" }}>{texts.pageNumberIsWrong}</h1>;
    } else if (!currencies.length && !isPageNumberError) {
        result = <h1 style={{ margin: "100px 0" }}>{texts.noResults}</h1>;
    } else result = children;

    return (
        <React.Fragment>
            {!isPageNumberError && <ListHeader />}
            {result}
        </React.Fragment>
    );
};

export default DataController;
