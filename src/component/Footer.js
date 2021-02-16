import React from 'react'
const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-about">
                <h3>Biz haqimizda</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla quam dolorem, labore repellat expedita est rerum quos doloremque, odit in quasi culpa, maxime voluptates accusamus aperiam corporis pariatur officiis ut.</p>
                <span>
                    <a href="#"><i className="fa fa-fw fa-telegram"></i></a>
                    <a href="#"><i className="fa fa-fw fa-youtube"></i></a>
                    <a href="#"><i className="fa fa-fw fa-facebook-f"></i></a>
                    <a href="#"><i className="fa fa-fw fa-instagram"></i></a>
                </span>
            </div>
            <div className="footer-contact">
                <h3>Biz bilan aloqa</h3>
                <span>
                    <p>Farg'ona viloyati, Qoqon </p>
                    <p>+99899343434</p>
                    <p>vodiyShopOnline@gmail.uz</p>
                </span>
            </div>
            <div className="footer-news">
                <h3>Yangiliklar</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae nesciunt facilis ut provident modi laudantium aliquam, labore natus amet ex quo facere. Quisquam maiores sit totam suscipit et, in deserunt!</p>
            </div>
        </div>
    )
}

export default Footer
