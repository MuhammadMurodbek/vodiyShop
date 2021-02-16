import React,{useState, useEffect} from 'react' 
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import AnimatedCursor from 'react-animated-cursor'
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
      <AnimatedCursor
        innerSize={17}
        outerSize={17}
        color='3, 72, 150'
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={5}
      />
      
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
