import "../App.css"
import '../ReactLogo.css';
import '../styles/Maps.css';

import { Map, TileLayer} from 'react-leaflet';
import React, {Component} from 'react';

class MapContainer extends Component {


    
    render(){

        const center = [13.003032987095256,77.63759854312903];
        console.log("Map rendered")
        const zoom=20;
        console.log("Any thing here props - " , this.props)
            return(
                <div>
                    {/* <div className="map-container-nav">
                        <a className="map-container-goback" href="/mymaps"> Go Back </a>
                    </div> */}

                    <div>
                            <Map className="map" center={center} zoom={zoom} >
                            {/*  */}

                                <TileLayer
                                attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                />

                            </Map>

                    </div>
                    {/* Hey there - {this.props.origin} - {this.props.destination}  */}
                </div>
            )
    }
}



export default MapContainer;
