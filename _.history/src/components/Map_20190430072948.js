import React, {Component} from "react";
import * as actions from "../store/actions";
import {connect} from "react-redux";
import ReactMapGL, {Marker} from 'react-map-gl'
import SvgIcon from '@material-ui/core/SvgIcon';

class Map extends Component {

    render() {
        const {mapData} = this.props;

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
                        mapboxApiAccessToken={mapData.token} 
                        latitude={mapData.latitude} 
                        longitude={mapData.longitude} 
                        zoom={7}
                        onViewportChange={(viewport) => {
                            const {width, height, latitude, longitude, zoom} = viewport;
                            // call `setState` and use the state to update the map.
                          }}>
            <Marker latitude={29.7604} longitude={-95.3698} offsetLeft={-10} offsetTop={-10}>
            <PinIcon color="primary" fontSize="large"/>
            </Marker>
          </ReactMapGL>
        )
    }
}

const mapStateToProps = state => {
    const {viewport} = state.map
    const {latitude, longitude} = state.drone;
    const mapData = {...viewport, latitude: 29.7604, longitude: -95.3698};   

    return {mapData, error: state.error};
};

const mapDispatch = dispatch => ({
    onViewportChange: () => dispatch({type: actions.MAP_CALL_SUCCESS})
});

export default connect(mapStateToProps,mapDispatch)(Map);