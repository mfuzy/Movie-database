import React from "react";
import "./App.css";
import Header from "../containers/header";
import Detail from "../containers/detail";
import Favourite from "../containers/favourite";
import { BrowserRouter, Route } from "react-router-dom";
import Search from "../containers/search";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route path="/" component={Header} />
          <main>
            <Route path="/" exact component={Search} />
            <Route path="/detail" component={Detail} />
            <Route path="/favourite" component={Favourite} />
          </main>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
