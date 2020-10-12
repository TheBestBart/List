import React from "react";
import Container from "./Container";
import Navbar from "./Navbar";
import { texts } from "../../common/texts";
import NavbarService from "../services/NavbarService";

export interface TitleProps {
    filterCurrencies: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Title: React.SFC<TitleProps> = props => {
    return (
        <Container
            styles={{
                marginTop: "20px",
                marginBottom: "50px",
                flexDirection: "column",
                justifyContent: "flex-end",
                height: "auto",
                backgroundColor: "lightslategray"
            }}
        >
            <p className="title-text">{texts.title}</p>
            <NavbarService
                render={({ isOpen, toggleClick }) => (
                    <Navbar
                        isOpen={isOpen}
                        toggleClick={toggleClick}
                        handleChange={props.filterCurrencies}
                    />
                )}
            />
        </Container>
    );
};

export default Title;
