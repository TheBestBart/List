import React from 'react';
import Container from './Container';
import Navbar from './Navbar';

const Title: React.SFC = () => {
    return ( 
        // <div className='title'>
        //     Kurs Walut

        // </div>

        <Container styles={{ flexDirection: 'column', justifyContent: 'flex-end', height: 'auto' }}>
            <p>Kurs Walut</p>
            <Navbar />
        </Container>
    );
}
 
export default Title;