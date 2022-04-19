
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Author from './Components/Author';
import Navigation from './Components/Navigation/Navigation';
import Notfound from './Components/NotFound';
import Quoteoftheday from './Components/QuoteOFtheDay';
import Quotes from './Components/Quotes';

function App() {
  return (
    <div className="App">
    <h1>Software Quotes</h1>
    <Navigation />
    <Routes>
      <Route exact path ="/" element={""}/>
      <Route exact path="/author" element={<Author />} />
      <Route exact path="/quotes" element={ <Quotes />} />
      <Route exact path="/quote_of_the_day" element={<Quoteoftheday />} />
      <Route path ="*" element ={<Notfound />} />
    </Routes> 
    </div>
  );
}

export default App;
