import React, { useState, useEffect, useContext } from 'react'
import TextTruncate from 'react-text-truncate';
import { StoreContext } from '../Store/StoreG'
import FadeIn from 'react-fade-in';
import ScrollAnimation from 'react-animate-on-scroll';
import SimpleModal from './Modalbtn';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
const ShopCart = () => {

    useEffect(() => {
        document.title = "VodiyParfum | Savatcha"
    }, [])

    const initialState = 0
    const { shopCart, setShopCart, getValueForm, checkSendData } = useContext(StoreContext)
    const [loader, setLoader] = useState(false)
    const [productError, setProductError] = useState(false)
    const [collect, setCollect] = useState()
    const [formData, setFormData] = useState({ firstname: '' })

    const deleteFunc = (item) => {
        setShopCart([...shopCart].filter(prev => prev._id !== item))
    }

    const addCount = (val, miqdor) => {
        if([...shopCart].find(item => item._id === val).count<miqdor){
            [...shopCart].find(item => item._id === val).count += 1
            setShopCart([...shopCart])
        }
        console.log(miqdor)
    }
    const devCount = (val) => {
        if ([...shopCart].find(item => item._id === val).count > 1) {

            [...shopCart].find(item => item._id === val).count -= 1
            setShopCart([...shopCart])

        }
    }

    useEffect(() => {
        shopCart.length ? (
            setCollect(shopCart
                .map((item) => item.price * item.count)
                .reduce((a, b) => a + b)
            )
        ) : (
            setCollect(initialState)
        )

    }, [shopCart])

    useEffect(() => {
        if (checkSendData === 'SUCCESS') setShopCart([])
    }, [checkSendData])

    //WORKING WITH FORM 
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }
    const submitChange = (e) => {
        e.preventDefault()
        if (loader) {
            getValueForm(formData)
        } else {
            setProductError(true)
        }
    }
    const loading = () => {
        if (!(formData.firstname === '') && shopCart.length) setLoader(true)
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
                                <th>Ombor</th>
                                <th>Miqdor</th>
                                <th>Narx</th>
                                <th>Umumiy</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                shopCart.length === 0 ? (
                                    <tr className="shopcart-empty">
                                        <td>
                                            <img src="/images/undraw.svg" alt="sadfds" />
                                        </td>
                                    </tr>
                                ) : (
                                    shopCart.map((item, index) => (
                                        <tr key={index} className="product-item">
                                            <td className="product-item-first">

                                                <div className="product-item-first-div">
                                                    <img src={item.image} alt={item.title} />
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
                                                            onClick={() => { deleteFunc(item._id) }}
                                                        >
                                                            <i className="fa fa-trash"></i>
                                                        </button>

                                                    </span>

                                                </div>

                                            </td>
                                            <td className="product-item-third">{item.miqdor}</td>
                                            <td className="product-item-second">
                                                <button onClick={() => { devCount(item._id) }}>-</button>
                                                <span>{item.count}</span>
                                                <button onClick={() => { addCount(item._id, item.miqdor) }}>+</button>
                                            </td>
                                            <td className="product-item-third">${item.price}</td>
                                            <td className="product-item-fourth">${item.price * item.count}</td>
                                        </tr>

                                    ))
                                )
                            }

                        </tbody>
                    </table>
                </div>
                <div className="title-footer">
                    <SimpleModal />
                    {/* ************************** */}
                    <h3
                        className="btn-style"
                    >
                        Umumiy hisob: ${collect}
                    </h3>
                </div>
            </div>
            <div className="store-shop-form">
                <FadeIn>
                    <p>Xabar junatish!!</p>
                </FadeIn>
                <form method="POST" onSubmit={submitChange}>
                    <ScrollAnimation animateIn="fadeInUp">
                        <TextareaAutosize
                            name="firstname"
                            className="message-text-form"
                            rowsMin={3}
                            rowsMax={14}
                            resize="vertical"
                            placeholder="Xabar yozish..."
                            onChange={handleChange}
                            minLength="4"
                            autosize={false}
                        />
                        {
                            checkSendData === 'READY' ? (
                                <button
                                    className="btn-style"
                                    onClick={loading}
                                    style={{ color: 'rgba(0,0,0,0.5)' }}
                                >
                                    {loader ?
                                        (
                                            <i className="fa fa-spin fa-spinner"></i>
                                        ) : (
                                            <i className="fa fa-send"></i>
                                        )
                                    }
                                    Buyurtmani jo'natish
                                </button>
                            ) : checkSendData === 'SUCCESS' ? (
                                <p className="btn-style"
                                    style={{ color: 'darkgreen', cursor: 'text' }}
                                >
                                    <i className="fa fa-check" style={{ color: 'darkgreen' }}></i>
                                    Buyurtmangiz jo'natildi
                                </p>
                            ) : (
                                <p className="btn-style"
                                    style={{ color: 'darkred', cursor: 'text' }}
                                >
                                    <i className="fa fa-exclamation" style={{ color: 'darkred' }}></i>
                                    Buyurtmangiz jo'natilmadi
                                </p>
                            )
                        }
                    </ScrollAnimation>
                </form>
                {
                    productError ?
                        (
                            <h5 style={{ color: 'red' }}>
                                Mahsulot tanlanmadi !!!
                            </h5>
                        ) : null
                }
                <div>
                    <hr/>
                </div>
            </div>
        </div>
    )
}

export default ShopCart
