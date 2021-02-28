import React,{useState,useEffect,useContext} from 'react'
import TextTruncate from 'react-text-truncate'; 
import SearchIcon from '@material-ui/icons/Search'
import {StoreContext} from '../Store/StoreG'
import ScrollAnimation from 'react-animate-on-scroll';

function Main({data}) {
  const {clickChange} = useContext(StoreContext)
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

  return (
    <div className="main">

      <div className="search">
        <span>
          <SearchIcon className="search-icon"/>
          <input 
            type="search" 
            value={inputValue}
            placeholder="Search..."
            onChange={(e)=>inputChange(e.target.value)}
          />
        </span>
        <span>
          <h4>Saralash</h4>
          <select onChange={(e)=>{setSelectValue(e.target.value)}}>
            <option value="exp">Qimmat</option>
            <option value="cheap">Arzon</option>
          </select>
        </span>
      </div>

      <div className="main-items">
        <ul>
            {
              searchInfo.map((product)=>(
                <li key={product._id}>
                  <ScrollAnimation animateIn="fadeInUp">
                  <div className="main-items-box">
                    <span className="main-items-box-img">
                      <img src={product.image} alt={product.name}/>
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
                        <h5>${product.price}</h5>
                        <button 
                          onClick={() => clickChange(product)}
                        >
                          Add
                        </button>
                      </span>
                    </span>
                  </div>
                  </ScrollAnimation>
                </li>
              ))
            }
        </ul>
      </div>
    </div>
  )
}

export default Main
