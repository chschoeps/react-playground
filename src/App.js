import './App.css';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import {BrowserRouter as Router} from "react-router-dom";
import React, {Suspense} from "react";

const App = () => {
  return (
      <Router>
          <Suspense fallback="loading...">
            <div className="App">
              <Header className="header"/>
              <Content className="content"/>
              <Footer className="footer"/>
            </div>
          </Suspense>
      </Router>
  );
}

export default App;
