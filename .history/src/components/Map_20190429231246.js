import React, {Component} from "react";
import * as actions from "../store/actions";
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
    const {viewport, token} = state.map
    const {latitude, longitude} = state.drone;
    const v = {...viewport, latitude, longitude};

    console.log("checking stuff out");
    console.log(viewport);
    
    return {error: state.error};
};

const mapDispatch = dispatch => ({
    onViewportChange: () => dispatch({type: actions.MAP_CALL_SUCCESS})
});

export default connect(mapStateToProps, mapDispatch)(Map);