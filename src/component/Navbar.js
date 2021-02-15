import React,{useState} from 'react'
import IconButton from '@material-ui/core/IconButton'
import Badge from '@material-ui/core/Badge'
import { Sling as Hamburger } from 'hamburger-react'
import {NavLink} from 'react-router-dom'

function Navbar() {
    const [check, setCheck] = useState(true)
    
    //Hamburger Menu
    const [isOpen, setOpen] = useState(false)
    return (
        <div>
            <img className="clouds-img"src="/images/clouds.png" alt="asdf"/>
            <img className="circle-img" src="/images/circle.png" alt="asd"/>
            <img id="loading" className="scatter-img" src="/images/scatter.png" alt="asd"/>
            <div className="navbar">
            <div className="navbar-part">
               <span className={check ? "navbar-part-info checkNavbarFalse": "navbar-part-info checkNavbarTrue" } >
                    <span className="nav-br-btn">
                        <a href="#" className="nav-br-btn-link">
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
                    <IconButton style={{color:"#426696"}} aria-label="add to shopping cart">
                        <Badge badgeContent={4} color="secondary">
                            <img src="/images/groc.png" alt="asd"/>
                        </Badge>   
                    </IconButton>
                </span>
            </div>
        </div> 
        </div>
    )
}
export default Navbar