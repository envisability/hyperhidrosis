import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';
import Header from "./pages/shared/header";
import Home from "./pages/home";
import Contact from "./pages/contact";
import Footer from "./pages/shared/footer";

function App() {
  return (
   <Router>
       <Header />
       <Switch>
           <Route path="/" exact component={Home}></Route>
           <Route path="/contact" exact component={Contact}></Route>
       </Switch>
       <Footer />
   </Router>
  );
}

export default App;
