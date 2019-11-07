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

    componentDidMount() {
        // axios("http://localhost:8000/restaurant/nearby?lat=37&lng=127")
        //     .then(res => {
        //         console.log(res)
        //         this.setState({stores : res.data.restaurants})
        //     })
        // this.setState({stores : this.state.stores})
    }

    render() {

        let markers = ""

        if(this.state.stores) {
            markers = this.state.stores.map((el,idx) => 
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
    width : '800px',
    height : '350px',
}