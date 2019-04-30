import React, {Component} from "react";
import {connect} from "react-redux";
import ReactMapGL from 'react-map-gl';

class Map extends Component {
    componentDidMount(){

    }
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
    const {latitude, longitude} = state.drone;
    

    return {error: state.error};
};

const mapDispatch = dispatch => ({
    onViewportChange: () => dispatch({type: MAP_CALL_SUCCESS})
});

export default connect(mapStateToProps, mapDispatch)(Map);