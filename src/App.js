import React from 'react' 
import StoreG from './Store/StoreG'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {FullPage} from './component/FullPage'
import {Navbar} from './component/Navbar'
import Footer from './component/Footer';
import Category from './component/Category'
const App = () => {
  return (
    <StoreG>
       <Router>
          <Navbar/>
          <Switch>
              <Route path="/" exact component={Category} />
              <Route path="/products" component={FullPage} />
          </Switch>
          <Footer/>
      </Router>
    </StoreG>
  );
}

export default App
