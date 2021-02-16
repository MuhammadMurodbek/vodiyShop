import React,{createContext,useState,useEffect} from 'react'
import Data from '../component/Data.json'
import axios from 'axios'

export const StoreContext = createContext()

const StoreG = (props) => {
    var dataStore = Data.products

    // //states for slick carousel in Category.js
     const [slickData, setSlickData] = useState([])
    // // console.log(slickData)
   
    /// this part lets you to open products menu which are selected 
    const [checkItem, setCheckItem] = useState()
    const [dataChecked, setDataChecked] = useState([])
   
    const checkCategory=(item)=>{setCheckItem(item)}
    
    useEffect(() =>{
        if(checkItem!==null){
            setDataChecked(dataStore.filter(data=>data.category===checkItem))
        }
    },[checkItem])

    /// using axios to get data for our slick-carousel
    // useEffect(() =>{
    //     axios.get('https://reqres.in/api/users?page=2')
    //         .then(response => setSlickData(response.data.data))
    //         .catch(error => console.log(error))
    // },[])
    /// !using axios to get data for our slick-carousel
   
    return (
        <StoreContext.Provider 
            value={
                {
                    dataStore,
                    checkCategory,
                    dataChecked,
                    // slickData
                }
            }
        >
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreG
