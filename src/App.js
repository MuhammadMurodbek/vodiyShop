import React,{useState, useEffect, useContext} from 'react' 
import {
  BrowserRouter as Router, 
  Switch, 
  Route,
} from 'react-router-dom'
import Auth from './component/Auth'
import Category from './component/Category'
import Navbar from './component/Navbar'
import Footer from './component/Footer';
import StoreG from './Store/StoreG'
import Main from './component/Main'
import ShopCart from './component/ShopCart'
import About from './component/About';
import Connect from './component/Connect';
import CustomizedSnackbars from './component/Snackbar'

const App = () => {

  const intialState = JSON.parse(localStorage.getItem('newApp')) || []
  const [data, setData] = useState(intialState)
  useEffect(() =>{
    localStorage.setItem('newApp', JSON.stringify(data))
  },[data])

  useEffect(() =>{
    document.title="VodiyParfum"
  },[])

  
  return (
    <>
    <StoreG>
      <Router>
        <Navbar/>
        <Switch>
          <Route path="/" exact>
            <Auth/>
          </Route>
          <Route path="/main">
            <Category setData={setData} />
          </Route>
          <Route path="/products">
            <Main data={data} />
          </Route>
          <Route path="/store">
            <ShopCart/>
          </Route>
          <Route path="/about">
            <About/>
          </Route>
          <Route path="/connect">
            <Connect/>
          </Route>
        </Switch>
        <Footer/>
        <CustomizedSnackbars/>
      </Router>
    </StoreG>
    </>
  );
}

export default App
