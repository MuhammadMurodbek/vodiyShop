import React,{useState, useEffect} from 'react' 
import {
  BrowserRouter as Router, 
  Switch, 
  Route
} from 'react-router-dom'
import Category from './component/Category'
import Navbar from './component/Navbar'
import Footer from './component/Footer';
import StoreG from './Store/StoreG'
import Main from './component/Main'
import ShopCart from './component/ShopCart'

const App = () => {
  
  const intialState = JSON.parse(localStorage.getItem('newApp')) || []
  const [data, setData] = useState(intialState)
  useEffect(() =>{
    localStorage.setItem('newApp', JSON.stringify(data))
  },[data])

  return (
    <StoreG>
      <Router>
        <Navbar/>
        <Switch>
          <Route path="/" exact>
            <Category setData={setData} />
          </Route>
          <Route path="/products">
            <Main data={data} />
          </Route>
          <Route path="/store">
            <ShopCart/>
          </Route>
        </Switch>
        <Footer/>
      </Router>
    </StoreG>
  );
}

export default App
