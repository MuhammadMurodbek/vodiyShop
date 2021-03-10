import React,{useEffect} from 'react'
// import Map from './Map'
const Connect = () => {
    useEffect(() =>{
        document.title="VodiyParfum | Aloqa"
    },[])
    return (
        <div className="connect about">
            <div className="connect-text">
                <h3>Aloqa</h3>
                <div className="wrapper">
                    <div className="info-wrapper">
                        <div>
                            <h4>Administrator</h4>
                            <h4>Farg'ona viloyati</h4>
                            <h4>Mo'ljal</h4>
                        </div>
                        <div>
                            <h4>
                                <i className="fa fa-phone"></i>
                                +998 (99) 998 99 99
                            </h4>
                            <h4>
                                +998 (99) 998 99 99
                            </h4>
                            <h4>
                                <img src="/images/location.png" alt="img"/>
                                Farg'ona viloyati
                            </h4>
                        </div>
                        <div>
                            <img src="/images/location.png" alt="img"/>
                        </div>
                    </div>
                    <div className="map-wrapper">
                        {/* <Map/> */}
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed, possimus ea atque doloremque amet dolor velit, vitae ipsum veritatis quis repudiandae quae a nostrum, similique odit. In exercitationem laborum quibusdam.</p>
                    </div>
                </div>
            </div>
            <div className="connect-image">
                <img src="./images/connectionlast.svg" alt="adsd"/>
            </div>
        </div>
    )
}

export default Connect
