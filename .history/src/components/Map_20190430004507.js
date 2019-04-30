import React, {Component} from "react";
import * as actions from "../store/actions";
import {connect} from "react-redux";
import ReactMapGL from 'react-map-gl';

class Map extends Component {

    render() {
    
        const {viewport, TOKEN} = this.props;
        return <p>hi!</p>
        // return (
        // <ReactMapGL
        //     mapboxApiAccessToken={TOKEN}
        //     {...this.state.viewport}
        //     onViewportChange={(viewport) => this.setState({viewport})}/>)
    }
}

const mapStateToProps = state => {
    console.log(state);

    const {viewport} = state.map
    const {latitude, longitude} = state.drone;
    const v = {...viewport, latitude, longitude};    
    return {error: state.error};
};

const mapDispatch = dispatch => ({
    onViewportChange: () => dispatch({type: actions.MAP_CALL_SUCCESS})
});

export default connect(mapStateToProps,mapDispatch)(Map);