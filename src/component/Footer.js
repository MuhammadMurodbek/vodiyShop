import React, {useEffect} from 'react'
import {useLocation} from 'react-router-dom'
import FadeIn from 'react-fade-in';

const Footer = () => {
    const location = useLocation()
    // useEffect(() => {
    //     console.log(location.pathname)
    // },[])
    return (
        <>
        {
             location.pathname === "/" ? null : (
                <div className="footer">
                    <div className="footer-about">
                        <FadeIn animateIn="fadeInRight">
                            <h3>Biz haqimizda</h3>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla quam dolorem, labore repellat expedita est rerum quos doloremque, odit in quasi culpa, maxime voluptates accusamus aperiam corporis pariatur officiis ut.</p>
                            <span className="footer-about-span">
                                <a href="#"><i className="fa fa-fw fa-telegram"></i></a>
                                <a href="#"><i className="fa fa-fw fa-youtube"></i></a>
                                <a href="#"><i className="fa fa-fw fa-facebook-f"></i></a>
                                <a href="#"><i className="fa fa-fw fa-instagram"></i></a>
                            </span>
                        </FadeIn>
                    </div>
                    <div className="footer-contact">
                        <FadeIn animateIn="fadeInRight">
                            <h3>Biz bilan aloqa</h3>
                            <span>
                                <p>Farg'ona viloyati, Qoqon </p>
                                <p>+99899343434</p>
                                <p>vodiyShopOnline@gmail.uz</p>
                            </span>
                        </FadeIn>
                    </div>
                    <div className="footer-news">
                        <FadeIn animateIn="fadeInRight">
                            <h3>Yangiliklar</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae nesciunt facilis ut provident modi laudantium aliquam, labore natus amet ex quo facere. Quisquam maiores sit totam suscipit et, in deserunt!</p>
                        </FadeIn>
                    </div>
                </div>
             )
        }
       
        </>
    )
}

export default Footer
