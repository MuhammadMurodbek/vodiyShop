import React,{useState,useEffect,useContext} from 'react'
import TextTruncate from 'react-text-truncate'; 
import FadeIn from 'react-fade-in';
import {StoreContext} from '../Store/StoreG'
import { LazyLoadImage } from 'react-lazy-load-image-component';

function Main({data}) {

  useEffect(() =>{
    document.title="VodiyParfum | Mahsulotlar"
  },[])

  const {clickChange, setSnackbarCheck, shopCart} = useContext(StoreContext)
  const [searchInfo, setSearchInfo] = useState([])
  const [inputValue, setInputValue] = useState('')
 
  ///SELECT OPTION MENU
  const [selectValue, setSelectValue] = useState('')
 
  if(selectValue==='cheap'){
    searchInfo.sort((a,b)=>a.price-b.price)
  }
  else if(selectValue==='exp'){
    searchInfo.sort((a,b)=>b.price-a.price)
  }

  ///SEARCH FILTER
  const inputChange=(e)=>{
    setInputValue(e)
  }
  useEffect(() =>{
    const newData = data.filter(value=>{
      if(inputValue=='') 
        return value
      else
        return value.title
          .toLowerCase()
          .includes(inputValue.toLocaleLowerCase())
    })
    setSearchInfo(newData)
  },[inputValue])

  const handleChangeCLick = (product) =>{
    clickChange(product)
    setSnackbarCheck(true)
  }
  return (
    <div className="main">
      <div className="search">
        <span>
          <div className="search-icon">
            <i className="fa fa-search"></i>
          </div>
          <input 
            type="search" 
            value={inputValue}
            placeholder="izlash..."
            onChange={(e)=>inputChange(e.target.value)}
          />
        </span>
        <span>
          <h4>Saralash</h4>
          <select onChange={(e)=>{setSelectValue(e.target.value)}}>
            <option style={{color:"#333"}} value="exp">Qimmat</option>
            <option style={{color:"#333"}} value="cheap">Arzon</option>
          </select>
        </span>
      </div>

      <div className="main-items">
        <ul>
            {
              searchInfo.map((product)=>(
                <li key={product._id}>
                  <FadeIn > 
                    <div className="main-items-box">
                      <span className="main-items-box-img">
                        <LazyLoadImage
                          src={product.image} 
                          alt={product.name}
                          width="100%"
                          height="200px"
                          effect="blur"
                        />
                      </span>
                      <span className="main-items-box-text">
                        <h5>{product.title}</h5>
                        <TextTruncate
                          line={1}
                          element="h5"
                          truncateText="…"
                          text={product.description}
                        />
                        <span className="cost-btn">
                          <h6 style={{display: "block"}}>Miqdor: {product.miqdor}</h6>
                          <h6>Narx: ${product.price}</h6>
                
                          <button 
                            onClick={() => handleChangeCLick(product)}
                            style={shopCart.find(item => item._id === product._id) ? {backgroundColor:"lightGreen"}:{backgroundColor:"transparent"}}
                          >
                            Add
                          </button>
                        </span>
                      </span>
                    </div>
                  </FadeIn>
                </li>
              ))
            }
        </ul>
      </div>
      
    </div>
  )
}

export default Main
