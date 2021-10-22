import './App.css';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import { BrowserRouter as Router } from "react-router-dom";
import React, { Suspense } from "react";
import UserContext from './context/user';

class App extends React.Component {

  state = {
    user: {
      userName: "userName"
    },
  }

  logger = (value) => {
    console.log("logger: ", value);
  }

  render() {
    return (
      <Router>
        <Suspense fallback="loading...">
          <div className="App">
            <UserContext.Provider value={{ user: this.state.user, logger: this.logger }}>
              <Header className="header" />
              <Content className="content" />
              <Footer className="footer" />
            </UserContext.Provider>
          </div>
        </Suspense>
      </Router>
    );
  }
}

export default App;
