import React,{useState, useEffect, useRef} from 'react' 
import StoreG from './Store/StoreG'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import LinearProgress from '@material-ui/core/LinearProgress';
import {FullPage} from './component/FullPage'
import {Navbar} from './component/Navbar'
import Footer from './component/Footer';
import Category from './component/Category'
const App = () => {
  const [progress, setProgress] = useState(0);
  const [buffer, setBuffer] = useState(10);
  const progressRef = useRef(() => {});

  useEffect(() => {
      progressRef.current = () => {
      if (progress > 100) {
          setProgress(0);
          setBuffer(10);
      } else {
          const diff = Math.random() * 10;
          const diff2 = Math.random() * 10;
          setProgress(progress + diff);
          setBuffer(progress + diff + diff2);
      }
      };
  });

  useEffect(() => {
      const timer = setInterval(() => {
      progressRef.current();
      }, 100);

      return () => {
      clearInterval(timer);
      };
  }, []);

  return (
    <StoreG>
      <LinearProgress 
        className="progLine"
        variant="buffer" 
        value={progress} 
        valueBuffer={buffer} 
      />
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
