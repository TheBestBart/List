import { Currency } from "../services/CurrenciesService";
import React from "react";
import ListElement from "./ListElement";

export interface ListProps {
    currencies?: Currency[]
}
 
const List: React.SFC<ListProps> = ({ currencies = [] }) => {
    return (  
        <React.Fragment>
            {
                currencies.map(({ currency, code, mid }, index) => {
                    return <ListElement 
                        currency={currency}
                        code={code}
                        mid={mid}
                        backgroundColor={index % 2  === 0 ? 'lightgray' : '#FFFFFF'}
                        key={code}
                    />
                })
            }
        </React.Fragment>
    );
}
 
export default List ;