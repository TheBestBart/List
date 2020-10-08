import React from 'react';
import './App.css';
import Title from './components/ui/Titile';
import { Pagination } from './components/ui/Pagination';
import Navbar from './components/ui/Navbar';

const App: React.FC = () => {
  return (
    <div className="App">
      <Title />
      <Pagination 
        initialPage={1}
        pageCount={10} 
        pageRangeDisplayed={2} 
        marginPagesDisplayed={1} 
        onPageChange={() => console.log('tutaj')}
      />
    </div>
  );
}

export default App;
