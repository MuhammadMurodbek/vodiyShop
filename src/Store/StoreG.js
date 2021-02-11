import React,{createContext,useState,useEffect} from 'react'
import Data from '../component/Data.json'
export const StoreContext = createContext()
const StoreG = (props) => {
    var dataStore = Data.products
    const initialState = JSON.parse(localStorage.getItem('product'))
    const [checkItem, setCheckItem] = useState(initialState)
    useEffect(()=>{
        checkCategory()
    },[checkItem])
    function checkCategory(item){
        if(item!==''){
            // setCheckItem(item)
            // setCheckItem(dataStore.filter(product => product.category===item))
            localStorage.setItem('product',JSON.stringify(dataStore.filter(product => product.category===item)))
        }
    }

    console.log(checkItem)
    return (
        <StoreContext.Provider value={{checkCategory,checkItem}}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreG
