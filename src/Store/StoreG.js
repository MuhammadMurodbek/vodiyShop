import React,{createContext,useState,useEffect} from 'react'
import Data from '../component/Data.json'
import axios from 'axios'

export const StoreContext = createContext()

const StoreG = (props) => {
    var dataStore = Data.products

    /// Selected items from Category.js to Main.js
    const [checkItem, setCheckItem] = useState()
    const [dataChecked, setDataChecked] = useState([])
    const [snackbarCheck, setSnackbarCheck] = useState(false)
    console.log(snackbarCheck)
    const checkCategory=(item)=>{setCheckItem(item)}
    
    useEffect(() =>{
        if(checkItem!==null){
            setDataChecked(dataStore.filter(data=>data.category===checkItem))
        }
    },[checkItem])

    //SHOPCART.JS TO SAVE PRODUCTS IN TO CART
    const shopCartState = JSON.parse(localStorage.getItem('shopCart')) || []
    const [shopCart, setShopCart] = useState(shopCartState)
    useEffect(() =>{
        console.log(shopCart)
        localStorage.setItem('shopCart', JSON.stringify(shopCart))
    },[shopCart])
    
    const clickChange=(item)=>{
        if(!shopCart.includes(item)){
            setShopCart(prev=>[...prev,item])
        }
        else{
            [...shopCart].find(val=>item._id === val._id).count+=1
            setShopCart([...shopCart])
        }
    }
    //SHOPCART, WORKING WITH FORM 
    const [checkSendData, setCheckSendData] = useState('READY')
    const getValueForm=(formData)=>{
        const combinedData = {dataForm:{}, dataProduct:[]}
        combinedData.dataForm = formData
        combinedData.dataProduct = [...shopCart]
        axios.post('https://jsonplaceholder.typicode.com/posts',combinedData)
            .then(response =>{
                console.log(response)
                setCheckSendData('SUCCESS')
            })
            .catch(error =>{
                console.log(error)
                setCheckSendData('ERROR')
            })
    }

    return (
        <StoreContext.Provider 
            value={
                {
                    dataStore,
                    checkCategory,
                    dataChecked,
                    setShopCart,
                    shopCart,
                    getValueForm,
                    checkSendData,
                    clickChange,
                    setSnackbarCheck,
                    snackbarCheck
                }
            }
        >
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreG
