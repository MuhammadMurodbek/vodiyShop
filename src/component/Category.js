import React,{useState,useEffect,useContext} from 'react'
import {StoreContext} from '../Store/StoreG' 
import {NavLink} from 'react-router-dom'
import Slider from "react-slick"
import Data from './Data.json'
const Category = () => {

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

    const {checkCategory, slickData} = useContext(StoreContext)
   
    const [selectItem, setSelectItem] = useState('') 
    useEffect(()=>{
        console.log(selectItem)
    },[selectItem])

    ///data products
    let products=Data.products
    let proFilter = products.map(item=>item.category)
    let checkProFilter=[], lastFilter=[]

    proFilter.forEach(item=>{
        if(!checkProFilter.includes(item)){checkProFilter.push(item)}
    })
    checkProFilter.forEach(last=>{
        lastFilter.push(products.filter(item=>item.category===last)[0])
    })
  
    return (
        <div className="category">

            <div className="category-slick">
                <h2 className="category-title"><img src="/images/soapa.png" alt=""/> Yangi mahsulotlar</h2>
                <Slider {...settings} className="category-slick-slider">
                   {slickData.map(slick=>(
                       <div key={slick.id} className="category-slick-slider-item">
                           <div className="inner">
                                <img src={slick.avatar} alt={slick.first_name}/>
                                <h4>{slick.first_name+" "+slick.last_name}</h4>
                           </div>
                       </div>
                   ))}
                </Slider>
            </div>


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
                                    onClick={
                                        ()=>{
                                            checkCategory(item.category)
                                        }
                                    }
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
