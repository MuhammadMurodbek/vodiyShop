import React, { useEffect, useContext } from 'react'
import { StoreContext } from '../Store/StoreG'
const Snackbar = () => {

    const { snackbarCheck, setSnackbarCheck } = useContext(StoreContext)
    
    useEffect(() => {
        const interval = setInterval(() => {
            setSnackbarCheck(false)
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    return (
        <>
            {
                snackbarCheck ? (
                    <div className="snackbar">
                        <i className="fa fa-check"></i>
                        Mahsulot qo'shildi
                    </div>) : null
            }
        </>
    )
}

export default Snackbar