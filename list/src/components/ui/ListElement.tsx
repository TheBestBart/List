import React from "react";
import { Currency } from "../services/CurrenciesService";
import Container from "./Container";

export interface ListElementProps extends Currency{
    backgroundColor?: string
}
 
const ListElement: React.SFC<ListElementProps> = ({ currency, code, mid, backgroundColor = 'white' }) => {
    return (
        <Container styles={{ backgroundColor: backgroundColor }}>
            <p>{currency}</p>
            <p>{code}</p>
            <p>{mid}</p>
        </Container>
    );
}
 
export default ListElement;