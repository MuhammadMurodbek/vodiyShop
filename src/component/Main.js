import React,{useContext, useState, useEffect} from 'react'
import TextTruncate from 'react-text-truncate'; 
import SearchIcon from '@material-ui/icons/Search';
import Data from './Data.json'
import {StoreContext} from '../Store/StoreG'
function Main() {
    const {checkItem} = useContext(StoreContext)
    // const products = Data.products.filter(item=>item.category===checkItem)
    
    return (
        <div className="main">
            <span className="search">
                <SearchIcon className="search-icon" style={{color: '#426696'}}/>
                <input type="search" placeholder="Search..."/>
            </span> 
            <div className="main-items">
                <ul>
                    {
                        checkItem.map((product)=>(
                            <li key={product._id}>
                                <div className="main-items-box">
                                    <span className="main-items-box-img">
                                        <img src={product.image} alt="sd"/>
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
                                            <button>Add</button>
                                        </span>
                                    </span>
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default Main
