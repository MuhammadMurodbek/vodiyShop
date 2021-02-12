import React,{useState,useEffect,useRef, useContext} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {StoreContext} from '../Store/StoreG' 
import {NavLink} from 'react-router-dom'
import Data from './Data.json'

const Category = () => {
    
    const [selectItem, setSelectItem] = useState('')
    const {checkCategory} = useContext(StoreContext)
    useEffect(()=>{
        console.log(selectItem)
    },[selectItem])

    let products=Data.products
    let proFilter = products.map(item=>item.category)
    let checkProFilter=[], lastFilter=[]

    proFilter.forEach(item=>{
        if(!checkProFilter.includes(item)){checkProFilter.push(item)}
    })
    checkProFilter.forEach(last=>{
        lastFilter.push(products.filter(item=>item.category===last)[0])
    })
    // console.log(lastFilter)
    
    return (
        <div className="category">
            <div className="category-items">
                <h4><i className="fa fa-shopping-basket fa-fw"></i> Mahsulotlar kategoriyasi</h4>
                <span className="category-items-sort">
                    <h4>Saralash</h4>
                    <select 
                        className="selection" 
                        onClick={(e)=>{setSelectItem(e.target.value)}}
                    >
                        <option value="new">Yangi</option>
                        <option value="old">Eski</option>
                    </select>
                </span>
            </div>

            <ul className="category-wrapper">
                {
                    lastFilter.map((item,index)=>(
                        <li key={index}>
                             <div className="cat-box-wrapper">
                                <img src={item.image} alt={item.title}/>
                                <NavLink 
                                    to="/products" 
                                    className="navlink-text"
                                    onClick={()=>checkCategory(item.category)}
                                >
                                    {item.title}
                                </NavLink>
                             </div>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
    
}

export default Category
