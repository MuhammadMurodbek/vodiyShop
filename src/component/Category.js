import React,{useState,useEffect,useContext} from 'react'
import {StoreContext} from '../Store/StoreG' 
import {NavLink} from 'react-router-dom'
import Slider from "react-slick"
import ScrollAnimation from 'react-animate-on-scroll';
const Category = ({setData}) => {

    const settings = {
        autoplay:true,
        autoplaySpeed:400,  
        dots: true,
        lazyLoad:true,
        infinite: true,
        speed: 900,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
        ]
    };

    const {checkCategory,dataStore} = useContext(StoreContext)

    ///data products
    let products=dataStore
    let proFilter = products.map(item=>item.category)
    let checkProFilter=[], lastFilter=[]

    proFilter.forEach(item=>{
        if(!checkProFilter.includes(item)){checkProFilter.push(item)}
    })
    checkProFilter.forEach(last=>{
        lastFilter.push(products.filter(item=>item.category===last)[0])
    })
    
    const getDataProduct =(item)=>{
        const initialState = [...dataStore].filter(data=>data.category==item)
        setData([...initialState].map(val=>{
            return({
                ...val,
                count:1
            })
        }))
        checkCategory(item)
    }
    return (
        <div className="category">
            <div className="category-slick">
                <h2 className="category-title">
                    <img src="/images/newproduct.png" alt="dfdff"/>
                    Yangi mahsulotlar
                </h2>
                <Slider {...settings} className="category-slick-slider">
                   {lastFilter.map((slick,index)=>(
                       <div key={index} className="category-slick-slider-item">
                           <div className="inner">
                                <img src={slick.image} alt={slick.title}/>
                                <h4>{slick.title}</h4>
                           </div>
                       </div>
                   ))}
                </Slider>
            </div>


            <div className="category-items">
                <h4><i className="fa fa-shopping-basket fa-fw"></i> Mahsulotlar kategoriyasi</h4>
            </div>

            <ul className="category-wrapper">
                {
                    lastFilter.map((item,index)=>(
                        <li key={index}>
                            <ScrollAnimation animateIn="fadeInUp">
                                <div className="cat-box-wrapper">
                                    <img src={item.image} alt={item.title}/>
                                    <NavLink 
                                        to="/products" 
                                        className="navlink-text"
                                        onClick={()=>{getDataProduct(item.category)}                                    }
                                    >
                                        {item.title}
                                    </NavLink>
                                </div>
                            </ScrollAnimation>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
    
}

export default Category
