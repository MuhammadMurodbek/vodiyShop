import React,{useState,useEffect,useContext} from 'react'
import TextTruncate from 'react-text-truncate'; 
import {StoreContext} from '../Store/StoreG'

const ShopCart = () => {
    const {shopCart, setShopCart} = useContext(StoreContext)

    const [collect, setCollect] = useState()

    const deleteFunc = (item) =>{
        setShopCart([...shopCart].filter(prev=>prev._id !== item))
    }

    const addCount = (val) =>{
        [...shopCart].find(item=>item._id === val).count+=1
        setShopCart([...shopCart])
    }
    const devCount = (val) =>{
        if([...shopCart].find(item=>item._id === val).count>1){
            [...shopCart].find(item=>item._id === val).count-=1
            setShopCart([...shopCart])
        }
    }
    useEffect(() =>{
        setCollect(shopCart
            .map((item)=>item.price*item.count)
            .reduce((a,b)=>a+b)
        )
    },[shopCart])
    return (
        <div className="store-shop">
            <div className="store-shop-cart">
                <div className="title-header">
                    <h3>Mahsulotlar savatchasi</h3>
                    <h3>3 ta mahsulot</h3>
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
                            }
                        
                        </tbody>
                    </table>
                </div>
                <div className="title-footer">
                    <button className="btn-style"><i className="fa fa-circle"></i> Savatchani tozalash</button>
                    <h3 
                        className="btn-style"
                    >
                        Umumiy hisob: ${collect}
                    </h3>
                </div>
            </div>
            <div className="store-shop-form">
                <p>Buyurtmalarni junatish uchun quyidagilarni to'ldiring!!</p>
                <form method="post">
                    <input 
                        type="text" 
                        placeholder="Ism" 
                        name="firstname"
                    />
                    <input 
                        type="text" 
                        placeholder="Familiya" 
                        name="lastname"
                    />
                    <input 
                        type="text" 
                        placeholder="Login" 
                        name="login"
                    />
                    <input 
                        type="password" 
                        placeholder="Password" 
                        name="password"
                    />
                    <button className="btn-style">
                      <i className="fa fa-send"></i> 
                      Buyurtmani jo'natish
                    </button>
                </form>
            </div>
        </div>
    )
}

export default ShopCart
