import React from 'react'
import { HashRouter as Router, Route } from "react-router-dom"
import { Container } from "react-bootstrap"
import Header from "./components/Header"
import Footer from "./components/Footer"
import HomeScreen from "./screens/HomeScreen"
import ProductScreen from "./screens/ProductScreen"
import CareersScreen from "./screens/CareersScreen"
const App = () => {
  return (
    <div className="App">
      <Router>
        <Header />
          <main>
            <Container>
                <Route path="/" component={HomeScreen} exact />
                <Route path="/product/:id" component={ProductScreen} />
                <Route path="/careers" component={CareersScreen} />
            </Container>
          </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
