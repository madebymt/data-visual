import React, {Component} from "react";
import {connect} from "react-redux";
import ReactMapGL from 'react-map-gl';

class Map extends Component {

    state = {
        viewport: {
            width: 800,
            height: 400,
            latitude: 29.7604,
            longitude: -95.3698,
            zoom: 8
        }
    };

    render() {

        return (<ReactMapGL
            mapboxApiAccessToken={TOKEN}
            {...this.state.viewport}
            onViewportChange={(viewport) => this.setState({viewport})}/>)

    }
}

const mapStateToProps = state => {
    const {latitude, longitude} = state.drone
    return {loading, fulldata, error: state.error};
};

const mapDispatch = dispatch => ({
    onViewportChange: () => dispatch({setState})
});

export default connect(mapStateToProps, mapDispatch)(Map);