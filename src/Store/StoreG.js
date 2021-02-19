import React,{createContext,useState,useEffect} from 'react'
import Data from '../component/Data.json'

export const StoreContext = createContext()

const StoreG = (props) => {
    var dataStore = Data.products

    /// this part lets you to open products menu which are selected 
    const [checkItem, setCheckItem] = useState()
    const [dataChecked, setDataChecked] = useState([])
    const checkCategory=(item)=>{setCheckItem(item)}
    
    useEffect(() =>{
        if(checkItem!==null){
            setDataChecked(dataStore.filter(data=>data.category===checkItem))
        }
    },[checkItem])


    //ShopCart.js save products to Cart
    const [shopCart, setShopCart] = useState([])
    useEffect(() =>{
        console.log(shopCart)
    },[shopCart])


    return (
        <StoreContext.Provider 
            value={
                {
                    dataStore,
                    checkCategory,
                    dataChecked,
                    setShopCart
                }
            }
        >
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreG
