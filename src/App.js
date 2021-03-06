import React, { Component } from 'react';
import NavBar from './Component/NavBar';
import Footer from './Component/footerComp';
import AboutComp from './Component/AboutComp';
import ProjectComponent from './Component/ProjectsComp';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/store';
const store = ConfigureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <NavBar />
          <AboutComp />
          <ProjectComponent />
          <Footer />
        </div>
      </Provider>
    );
  }
}

export default App;
