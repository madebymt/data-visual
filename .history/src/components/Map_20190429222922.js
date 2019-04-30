import React, {Component} from "react";
import {connect} from "react-redux";
import ReactMapGL from 'react-map-gl';

class Map extends Component {

    render() {
        const {width, height, latitude, longitude, TOKEN} = this.props;
        return (<ReactMapGL
            mapboxApiAccessToken={TOKEN}
            {...this.state.viewport}
            onViewportChange={(viewport) => this.setState({viewport})}/>)
    }
}

const mapStateToProps = state => {
    const {width, height, latitude, longitude, TOKEN} = state.map.viewport
    return {error: state.error};
};

const mapDispatch = dispatch => ({
    onViewportChange: () => dispatch({setState})
});

export default connect(mapStateToProps, mapDispatch)(Map);