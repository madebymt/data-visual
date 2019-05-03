import React, {Component} from "react";
import * as actions from "../store/actions";
import {connect} from "react-redux";
import ReactMapGL, {Marker} from 'react-map-gl';

class Map extends Component {

    render() {
        const {mapData} = this.props;

        return (
            <ReactMapGL  {...this.props.mapData} mapboxApiAccessToken={mapData.token} latitude={37.78} longitude={-122.41} zoom={4}>
            <Marker latitude={37.78} longitude={-122.41} offsetLeft={-20} offsetTop={-10}>
              <div>You are here</div>
            </Marker>
          </ReactMapGL>
        // <ReactMapGL
        //     mapboxApiAccessToken={mapData.token}
        //     {...this.props.mapData}
        //     onViewportChange={(viewport) => this.setState({viewport})}/>
        //     <Marker latitude={map.latitude} longitude={mapData} offsetLeft={-20} offsetTop={-10}>
        //     <div>You are here</div>
        //     </Marker>
        //     </ReactMapGL>
            )
    }
}

const mapStateToProps = state => {
    const {viewport} = state.map
    const {latitude, longitude} = state.drone;
    const mapData = {...viewport, latitude, longitude};   

    return {mapData, error: state.error};
};

const mapDispatch = dispatch => ({
    onViewportChange: () => dispatch({type: actions.MAP_CALL_SUCCESS})
});

export default connect(mapStateToProps,mapDispatch)(Map);