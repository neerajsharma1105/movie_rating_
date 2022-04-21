import React from 'react';
import {BrowserRouter as Router , Route, Switch} from "react-router-dom";
import './App.scss';
import Header from './components/Header/Header';
import MovieDetails from './components/MovieDetails/MovieDetails';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import PageNotFound from './components/PageNotFound/PageNotFound';


function App() {
  return (
    <div className="App">
       <Router>
         <Header></Header>
         <div className='container'>
            <Switch>
              <Route path="/" exact component={Home}/>
              <Route path="/movie/:imdbID" component={MovieDetails}/>
              <Route component={PageNotFound}/>
            </Switch>
         </div>
         <Footer/>
       </Router>
    </div>
  );
}
App.defaultProps = {
};


export default App;
