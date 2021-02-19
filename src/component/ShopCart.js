import React from 'react'
import TextTruncate from 'react-text-truncate'; 



const ShopCart = () => {
   
    return (
        <div className="store-shop">
            <div className="store-shop-cart">
                <div className="title-header">
                    <h3>Mahsulotlar savatchasi</h3>
                    <h3>3 ta mahsulot</h3>
                </div>
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
                        <tr className="product-item">
                            <td className="product-item-first">
                                <div>
                                    <img src="https://picsum.photos/120" alt=""/>
                                    <span>
                                    <TextTruncate
                                        line={2}
                                        element="h5"
                                        truncateText="…"
                                        text="Shampun"
                                    />
                                        <h5>kategoriya</h5>
                                        <button className="btn-style">
                                            <i className="fa fa-trash"></i>
                                        </button>
                                    </span>
                                </div>
                            </td>
                            <td className="product-item-second">
                                <button>-</button>
                                <span>2</span>
                                <button>+</button>
                            </td>
                            <td className="product-item-third">$44</td>
                            <td className="product-item-fourth">$44</td>
                        </tr>

                        <tr className="product-item">
                            <td className="product-item-first">
                                <div>
                                    <img src="https://picsum.photos/100" alt=""/>
                                    <span>
                                       <TextTruncate
                                        line={2}
                                        element="h5"
                                        truncateText="…"
                                        text="Shampun"
                                    />
                                        <h5>kategoriya</h5>
                                        <button className="btn-style">
                                            <i className="fa fa-trash"></i>
                                        </button>
                                    </span>
                                </div>
                            </td>
                            <td className="product-item-second">
                                <button>-</button>
                                <span>2</span>
                                <button>+</button>
                            </td>
                            <td className="product-item-third">$44</td>
                            <td className="product-item-fourth">$44</td>
                        </tr>
                       
                    </tbody>
                </table>
                <div className="title-footer">
                    <button className="btn-style"><i className="fa fa-circle"></i> Savatchani tozalash</button>
                    <h3 className="btn-style">Umumiy hisob: $234</h3>
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
                  <button className="btn-style"><i className="fa fa-send"></i> Buyurtmani jo'natish</button>
                </form>
            </div>
        </div>
    )
}

export default ShopCart
