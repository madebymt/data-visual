import React, {Component} from "react";
import * as actions from "../store/actions";
import {connect} from "react-redux";
import ReactMapGL from 'react-map-gl';

class Map extends Component {

    render() {
        const {mapData} = this.props;

        return (
        <ReactMapGL
            mapboxApiAccessToken={mapData.token}
            {...this.props.mapData}
            onViewportChange={(viewport) => this.setState({viewport})}/>)
    }
}

const mapStateToProps = state => {
    const {viewport} = state.map
    const {latitude, longitude} = state.drone;
    const mapData = {...viewport, latitude, longitude};   
    console.log(mapData);
    return {error: state.error};
};

const mapDispatch = dispatch => ({
    onViewportChange: () => dispatch({type: actions.MAP_CALL_SUCCESS})
});

export default connect(mapStateToProps,mapDispatch)(Map);