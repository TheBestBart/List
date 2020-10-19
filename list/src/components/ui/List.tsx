import { Currency } from "../services/CurrenciesService";
import React from "react";
import ListElement from "./ListElement";
import { withRouter, RouteComponentProps } from "react-router";

export interface ListProps extends RouteComponentProps<any> {
    currencies?: Currency[];
}

const List: React.FC<ListProps> = ({ currencies = [] }) => {
    return (
        <React.Fragment>
            {currencies.map(({ currency, code, mid }, index) => {
                return (
                    <ListElement
                        currency={currency}
                        code={code}
                        mid={mid}
                        backgroundColor={index % 2 === 0 ? "#E6E7FF" : "#D6D6FF"}
                        key={code}
                    />
                );
            })}
        </React.Fragment>
    );
};

export default withRouter(List);
