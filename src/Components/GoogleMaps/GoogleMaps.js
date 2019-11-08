import React, {Component} from "react"
import { Map, GoogleApiWrapper, Marker} from "google-maps-react"
import axios from "axios"
import {API_KEY} from "../../my_settings"

class GoogleMaps extends Component {

    constructor(props) {
        super(props)
        
        this.state = {
            stores: ""
        }
    }

    render() {

        let markers = ""

        if(this.props.restaurants) {
            markers = this.props.restaurants.map((el,idx) => 
                <Marker key={idx} id={idx} position={{
                    lat: el.lat,
                    lng: el.lng
                }}
                onClick={() => console.log("You clicked it!")}
                />
            )
        }

        return(
            <Map
                google = {this.props.google}
                zoom = {16}
                style = {mapStyles}
                initialCenter={{ lat : 37.503278499933, lng : 127.036854400000 }}>

                {markers}
            </Map>
        )
    }
}

export default GoogleApiWrapper({
    apiKey : API_KEY
})(GoogleMaps)

const mapStyles = {
    width : '1200px',
    height : '350px',
}