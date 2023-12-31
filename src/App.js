
import './App.css';
import Footer from './components/layouts/Footer';
import Header from './components/layouts/Header';
import Home from './components/layouts/Home';
import { Route, BrowserRouter as Router, Routes} from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'

function App() {
  return (
    <Router>
    <div classNameName="App">
      <HelmetProvider>
       <Header/>
          <Routes>
             <Route path='/' element={<Home/>}/>
          </Routes>
       <Footer/>
       </HelmetProvider>
    </div>
    </Router>
  );
}

export default App;
