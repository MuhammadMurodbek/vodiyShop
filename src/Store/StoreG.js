import React,{createContext,useState,useEffect} from 'react'
import Data from '../component/Data.json'

export const StoreContext = createContext()

const StoreG = (props) => {
    var dataStore = Data.products

    /// Selected items from Category.js to Main.js
    const [checkItem, setCheckItem] = useState()
    const [dataChecked, setDataChecked] = useState([])
    const checkCategory=(item)=>{setCheckItem(item)}
    
    useEffect(() =>{
        if(checkItem!==null){
            setDataChecked(dataStore.filter(data=>data.category===checkItem))
        }
    },[checkItem])


    //ShopCart.js save products to Cart
    const shopCartState = JSON.parse(localStorage.getItem('shopCart')) || []
    const [shopCart, setShopCart] = useState(shopCartState)
    useEffect(() =>{
        console.log(shopCart)
        localStorage.setItem('shopCart', JSON.stringify(shopCart))
    },[shopCart])

    return (
        <StoreContext.Provider 
            value={
                {
                    dataStore,
                    checkCategory,
                    dataChecked,
                    setShopCart,
                    shopCart
                }
            }
        >
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreG
