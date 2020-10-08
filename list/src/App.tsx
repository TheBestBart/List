import React from 'react';
import './App.css';
import Title from './components/ui/Titile';
import { Pagination } from './components/ui/Pagination';

const App: React.FC = () => {
  return (
    <div className="App">
      <Title />
      <Pagination 
        initialPage={1}
        pageCount={5} 
        pageRangeDisplayed={3} 
        marginPagesDisplayed={2} 
        onPageChange={() => console.log('tutaj')}
      />
    </div>
  );
}

export default App;
