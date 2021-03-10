import React,{useState,useEffect,useContext} from 'react'
import TextTruncate from 'react-text-truncate'; 
import {StoreContext} from '../Store/StoreG'
import ScrollAnimation from 'react-animate-on-scroll';
const ShopCart = () => {

    useEffect(() =>{
        document.title="VodiyParfum | Savatcha"
    },[])

    const initialState = 0
    const {shopCart, setShopCart, getValueForm, checkSendData} = useContext(StoreContext)
    const [loader, setLoader] = useState(false)
    const [productError, setProductError] = useState(false)
    const [collect, setCollect] = useState()
    const [formData, setFormData] = useState({
        firstname:'',
        lastname:'',
        login:'',
        password:'',
    })

    const deleteFunc = (item) =>{
        setShopCart([...shopCart].filter(prev=>prev._id !== item))
    }

    const addCount = (val) =>{
        [...shopCart].find(item=>item._id === val).count+=1
        setShopCart([...shopCart])
    }
    const devCount = (val) =>{
        if([...shopCart].find(item=>item._id === val).count>1)
        {
            [...shopCart].find(item=>item._id === val).count-=1
            setShopCart([...shopCart])
        }
    }
    
    useEffect(() =>{
       shopCart.length ? (
        setCollect(shopCart
            .map((item)=>item.price*item.count)
            .reduce((a,b)=>a+b)
        )
        ):(
           setCollect(initialState)
        )

    },[shopCart])

    //WORKING WITH FORM 
    const handleChange = (e)=>{
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }
    const submitChange = (e)=>{
        e.preventDefault()
        if(loader){
            getValueForm(formData)
        }else{
            setProductError(true)
        }
    }
    const loading = () => {
        if(
            !(
                formData.firstname==='' 
                && formData.lastname==='' 
                && formData.login==='' 
                && formData.password===''
            )
            && shopCart.length
        )
        setLoader(true)
    }
    return (
        <div className="store-shop">
            <div className="store-shop-cart">
                <div className="title-header">
                    <h3>Mahsulotlar savatchasi</h3>
                    <h3>{shopCart.length} ta mahsulot</h3>
                </div>
                <div className="table-wrapper">
                    <table>
                        <thead>
                            <tr>
                                <th>Mahsulotlar</th>
                                <th>Miqdor</th>
                                <th>Narx</th>
                                <th>Umumiy</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                shopCart.length===0 ? (
                                    <tr className="shopcart-empty">
                                        <td>
                                            <img src="/images/undraw.svg" alt="sadfds"/>
                                        </td>
                                    </tr>
                                ):(
                                    shopCart.map((item,index) =>(
                                        <tr key={index} className="product-item">
                                            <td className="product-item-first">
                                               
                                                <div>
                                                    <img src={item.image} alt={item.title}/>
                                                    <span>
                                                    <TextTruncate
                                                        line={2}
                                                        element="h5"
                                                        truncateText="…"
                                                        text={item.title}
                                                    />
                                                        <h5>{item.category}</h5>
                                                        <button 
                                                            className="btn-style"
                                                            onClick={()=>{deleteFunc(item._id)}}
                                                        >
                                                            <i className="fa fa-trash"></i>
                                                        </button>
                                                    </span>
                                                </div>
                                                
                                            </td>
                                            <td className="product-item-second">
                                                <button onClick={()=>{devCount(item._id)}}>-</button>
                                                <span>{item.count}</span>
                                                <button onClick={()=>{addCount(item._id)}}>+</button>
                                            </td>
                                            <td className="product-item-third">${item.price}</td>
                                            <td className="product-item-fourth">${item.price*item.count}</td>
                                        </tr>
        
                                    ))
                                )
                            }
                        
                        </tbody>
                    </table>
                </div>
                <div className="title-footer">
                    <button 
                        className="btn-style"
                        onClick={()=>setShopCart([])}
                    >
                        <i className="fa fa-circle"></i> 
                        Savatchani tozalash
                    </button>
                    <h3 
                        className="btn-style"
                    >
                        Umumiy hisob: ${collect}
                    </h3>
                </div>
            </div>
            <div className="store-shop-form">
                <ScrollAnimation animateIn="fadeInDown">
                    <p>Buyurtmalarni junatish uchun quyidagilarni to'ldiring!!</p>
                </ScrollAnimation>
                <form method="POST" onSubmit={submitChange}>
                <ScrollAnimation animateIn="fadeInUp">
                    <input 
                        type="text" 
                        placeholder="Ism" 
                        name="firstname"
                        onChange={handleChange}
                        minLength="4"
                        required
                    />
                    <input 
                        type="text" 
                        placeholder="Familiya" 
                        name="lastname"
                        onChange={handleChange}
                        minLength="4"
                        required
                    />
                    <input 
                        type="number" 
                        placeholder="Telefon raqam" 
                        name="login"
                        onChange={handleChange}
                        minLength="7"
                        required
                    />
                    <input 
                        type="password" 
                        placeholder="Password" 
                        name="password"
                        onChange={handleChange}
                        minLength="4"
                        required
                    />
                   
                    {
                        checkSendData==='READY' ? (
                            <button 
                                className="btn-style"
                                onClick={loading}
                                style={{color:'rgba(0,0,0,0.5)'}}
                            >
                               {loader ? (
                                    <i className="fa fa-spin fa-spinner"></i>
                                ):(
                                    <i className="fa fa-send"></i>
                                )}  
                                Buyurtmani jo'natish
                            </button>
                        ):checkSendData==='SUCCESS' ? (
                            <button className="btn-style"
                                style={{color: 'darkgreen'}}
                            >
                                <i className="fa fa-check" 
                                    style={{color: 'darkgreen'}}
                                ></i> 
                                Buyurtmangiz jo'natildi
                            </button>
                        ):(
                            <button className="btn-style"
                                style={{color: 'darkred'}}
                            >
                                <i className="fa fa-exclamation" 
                                    style={{color: 'darkred'}}
                                ></i> 
                                Buyurtmangiz jo'natilmadi
                            </button> 
                        )
                    }
                    </ScrollAnimation>
                </form>
                {
                    productError ? 
                        (
                            <h5 style={{color:'red'}}>
                                Mahsulot tanlanmadi !!!
                            </h5>
                        ):null
                }
            </div>
        </div>
    )
}

export default ShopCart
