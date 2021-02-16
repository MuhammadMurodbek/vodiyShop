import React from 'react'

const ShopCart = () => {
    return (
        <div className="store-shop">
            <div className="store-shop-wrapper">
                
                <div className="product-part">
                    <div className="product-part-title">
                        <h3>Mahsulotlar savatchasi</h3>
                        <h4>3 ta mahsulot</h4>
                    </div>
                    <hr/>
                    <div className="product-part-list">
                        <ul className="list-info-column">
                            <li>Mahsulot</li>
                            <li>Miqdor</li>
                            <li>Narx</li>
                            <li>Umumiy</li>
                        </ul>
                        <ul className="list-item-column">
                            <li>
                                <div>
                                    <img src="https://picsum.photos/150" alt="asd"/>
                                    <span>
                                        <h5>Sovun</h5>
                                        <button>remove</button>
                                    </span>   
                                </div>

                                <div>
                                    <button>-</button>
                                    <h5>2</h5>
                                    <button>-</button>
                                </div>

                                <div>
                                    $44
                                </div>

                                <div>
                                    $44 * 2 = $88
                                </div>
                            </li>
                        </ul>
                    </div> 
                </div>    {/*  product-part */}

                <div className="checkout-store">

                </div>
            </div>
        </div>
    )
}

export default ShopCart
