import React,{createContext,useState,useEffect} from 'react'
import Data from '../component/Data.json'
export const StoreContext = createContext()
const StoreG = (props) => {
    
    var dataStore = Data.products

    const [checkItem, setCheckItem] = useState()
    const [dataChecked, setDataChecked] = useState([])
    const checkCategory=(item)=>{setCheckItem(item)}

    useEffect(() =>{
        // console.log(checkItem)
        if(checkItem!==null){
            setDataChecked(dataStore.filter(data=>data.category===checkItem))
        }
    },[checkItem])

    return (
        <StoreContext.Provider value={{checkCategory,dataChecked}}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreG
