import React, {Component} from "react";
import * as actions from "../store/actions";
import {connect} from "react-redux";
import ReactMapGL, {Marker} from 'react-map-gl';
import SvgIcon from '@material-ui/core/SvgIcon';

class Map extends Component {

    render() {
        const {mapData} = this.props;

        return (
            <ReactMapGL  {...this.props.mapData} draggable={true} mapboxApiAccessToken={mapData.token} latitude={29.7604} longitude={-95.3698} zoom={4}>
            <Marker latitude={mapData.latitude} longitude={mapData.longitude} offsetLeft={-20} offsetTop={-10}>
            <SvgIcon>
                <path d="M0 0h24v24H0z" />
            </SvgIcon>
            </Marker>
          </ReactMapGL>
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