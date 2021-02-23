import React,{useState, useContext} from 'react'
import IconButton from '@material-ui/core/IconButton'
import Badge from '@material-ui/core/Badge'
import { Sling as Hamburger } from 'hamburger-react'
import {Link, NavLink} from 'react-router-dom'
import {StoreContext} from '../Store/StoreG'

function Navbar() {
    const {shopCart} = useContext(StoreContext)
    
    const [check, setCheck] = useState(true)
    
    //Hamburger Menu
    const [isOpen, setOpen] = useState(false)
    return (
        <div>
            <div className="navbar">
            <div className="navbar-part">
               <span className={check ? "navbar-part-info checkNavbarFalse":"navbar-part-info checkNavbarTrue" } >
                    <span className="nav-br-btn">
                        <a href="/" className="nav-br-btn-link">
                            <img src="/images/soap.png" alt="ds"/>
                            Vodiy Parfum</a>
                        <button 
                            className="nav-btn"
                            onClick={() =>{setCheck(!check)}}
                        > 
                            <Hamburger  
                                toggled={isOpen} 
                                toggle={setOpen} 
                            />
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
                   <Link to="/store">
                        <IconButton 
                            style={{color:"#426696"}} 
                            aria-label="add to shopping cart"
                        >
                            <Badge 
                                badgeContent={shopCart.length} 
                                color="secondary"
                            >
                                <img 
                                    src="/images/groc.png" 
                                    alt="asd"
                                />
                            </Badge>   
                        </IconButton>
                   </Link>
                </span>
            </div>
        </div> 
        </div>
    )
}
export default Navbar