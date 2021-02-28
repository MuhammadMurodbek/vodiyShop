import React,{Component} from 'react'
import GoogleMaps from 'simple-react-google-maps'

export default class Map extends Component {
    render() {
        return (
            <div className="map-container">
                <GoogleMaps
                    apiKey={"AIzaSyCz3ZgWrMOGgZfYhOYBb-cf2MUdXhy_V48"}
                    style={{height: '370px', width: '500px'}}
                    zoom={12}
                    center={
                        {
                            lat:40.4127335,
                            lng: -3.695428
                        }
                    }
                    markers={{lat:40.4127335,lng: -3.695428}}
                />
            </div>
        )
    }
}


