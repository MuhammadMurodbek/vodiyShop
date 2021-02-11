import React,{useState,useContext} from 'react'
import {NavLink} from 'react-router-dom'
import Data from './Data.json'
import {StoreContext} from '../Store/StoreG' 
const Category = () => {
    
    const {checkCategory} = useContext(StoreContext)

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
