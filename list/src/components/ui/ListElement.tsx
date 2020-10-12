import React from "react";
import { Currency } from "../services/CurrenciesService";
import Container from "./Container";

export interface ListElementProps extends Currency {
    backgroundColor?: string;
}

const ListElement: React.FC<ListElementProps> = ({
    currency,
    code,
    mid,
    backgroundColor = "white"
}) => {
    return (
        <Container
            className={"pagination-single-text pagination-box fade-in"}
            styles={{
                backgroundColor: backgroundColor,
                justifyContent: "space-around"
            }}
        >
            <p style={{ flex: 1 }}>{currency}</p>
            <p style={{ flex: 1 }}>{code}</p>
            <p style={{ flex: 1 }}>{mid}</p>
        </Container>
    );
};

export default ListElement;
