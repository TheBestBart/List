import Container from "./Container";
import React from "react";
import { texts } from "../../common/texts";

export interface ListHeaderProps { }

const ListHeader: React.FC<ListHeaderProps> = () => {
    return (
        <Container
            className={"pagination-single-text pagination-box"}
            styles={{
                backgroundColor: "lightsteelblue",
                justifyContent: "space-around"
            }}
        >
            <p style={{ flex: 1 }}>{texts.currency}</p>
            <p style={{ flex: 1 }}>{texts.code}</p>
            <p style={{ flex: 1 }}>{texts.mid}</p>
        </Container>
    );
};

export default ListHeader;
