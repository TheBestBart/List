import React from 'react';
import Container from './Container';
import Navbar from './Navbar';

export interface TitleProps {
    filterCurrencies: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const Title: React.SFC<TitleProps> = props => {
    return ( 

        <Container styles={{ flexDirection: 'column', justifyContent: 'flex-end', height: 'auto' }}>
            <p>Kurs Walut</p>
            <Navbar handleChange={props.filterCurrencies} />
        </Container>
    );
}
 
export default Title;