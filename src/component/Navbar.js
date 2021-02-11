import React,{useState} from 'react'
import IconButton from '@material-ui/core/IconButton'
import Badge from '@material-ui/core/Badge'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import {NavLink} from 'react-router-dom'

export  function Navbar() {
    const [check, setCheck] = useState(true)
    return (
        <div>
            <div className="navbar">
            <div className="navbar-part">
               <span className={check ? "navbar-part-info checkNavbarFalse": "navbar-part-info checkNavbarTrue" } >
                    <span className="nav-br-btn">
                        <a href="#">Online Market</a>
                        <button 
                            className="nav-btn"
                            onClick={() =>{setCheck(!check)}}
                        >
                            {check ? <i className="fa fa-2x fa-bars"></i>:<i className="fa fa-2x fa-times"></i>}
                            
                        </button>
                    </span>
                    <ul className="nav-list">
                        <li><NavLink to="/">Asosiy</NavLink></li>
                        <li><NavLink to="/about">Biz haqimizda</NavLink></li>
                        <li><NavLink to="/connect">Aloqa</NavLink></li>
                        <li><NavLink to="/advice">Taklifnomalar</NavLink></li>
                    </ul>
               </span>
                <span className="navbar-part-shop">
                    <IconButton style={{color:"#426696"}} aria-label="add to shopping cart">
                        <Badge badgeContent={4} color="secondary">
                            <AddShoppingCartIcon />
                        </Badge>   
                    </IconButton>
                </span>
            </div>
        </div> 
        </div>
    )
}
