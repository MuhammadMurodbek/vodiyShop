import React,{useEffect} from 'react'
import {NavLink} from 'react-router-dom'
import {Animated} from "react-animated-css";
const About = () => {
    useEffect(() =>{
        document.title="VodiyParfum | Biz haqimizda"
    },[])
    return (
        <div className="about">
           <div className="about-text">
                <Animated animationIn="fadeInRight" animationOut="fadeOut" isVisible={true}>
                    <h3>Biz haqimizda</h3>
                </Animated>
                <Animated animationIn="fadeInUp" animationOut="fadeOut" isVisible={true}>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est tempora iure aspernatur eligendi maiores facilis numquam unde, beatae ducimus reiciendis fugiat obcaecati quam ea quia neque voluptatum commodi perspiciatis iusto?</p>
                </Animated>

                <NavLink to="/connect">
                   <button className="btn-style">
                        <i className="fa fa-phone"></i>
                        {"  "}Aloqa
                   </button>
                </NavLink>
           </div>

           <div className="about-image">
               <img src="./images/team_3.svg" alt="adsd"/>
           </div>
          
        </div>
    )
}

export default About
