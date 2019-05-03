import React, {Component} from "react";
import * as actions from "../store/actions";
import {connect} from "react-redux";
import ReactMapGL, {Marker, NavigationControl} from 'react-map-gl'
import SvgIcon from '@material-ui/core/SvgIcon';
const TOKEN = "pk.eyJ1IjoiYzE5ODkwNjExIiwiYSI6ImNqdjM1NTk3ejJjYTI0ZGxhb2hoaWt5ZDAifQ.vY1y3SmbZWIvBpdetSk-sw"

class Map extends Component {
    // componentDidMount() {
    //     this
    //       .props
    //       .onLoad();
    // }

    render() {
        const {longitude, latitude} = this.props;
        
        function PinIcon(props) {
            return (
              <SvgIcon {...props}>
                <path d="M18 8c0-3.31-2.69-6-6-6S6 4.69 6 8c0 4.5 6 11 6 11s6-6.5 6-11zm-8 0c0-1.1.9-2 2-2s2 .9 2 2-.89 2-2 2c-1.1 0-2-.9-2-2zM5 20v2h14v-2H5z" />
              </SvgIcon>
            );
          }
          

        return (
            <ReactMapGL  {...this.props.mapData} 
                        dragPan={true}
                        touchZoom={true}
                        mapboxApiAccessToken={TOKEN} 
                        latitude={latitude} 
                        longitude={longitude} 
                        zoom={7}
                        onViewportChange={updateViewport}>
                        <NavigationControl onViewportChange={updateViewport} />
            <Marker latitude={29.7604} longitude={-95.3698} offsetLeft={-10} offsetTop={-10}>
            <PinIcon color="primary" fontSize="large"/>
            </Marker>
          </ReactMapGL>
        )
    }
}

const mapStateToProps = state => {
    const {longitude, latitude} = state.drone
    console.log(longitude, latitude);
    //const {latitude, longitude} = state.drone;
    //const mapData = {...viewport, latitude: 29.7604, longitude: -95.3698};   

    return {longitude, latitude, error: state.error};
};

const mapDispatch = dispatch => ({
    onViewportChange: () => dispatch({type: actions.FETCH_DRONE}),
    //onLoad:() => dispatch({type:actions.MAP_VIEW_CHANGE})
});

export default connect(mapStateToProps,mapDispatch)(Map);