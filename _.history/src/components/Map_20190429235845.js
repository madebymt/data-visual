import React, {Component} from "react";
import * as actions from "../store/actions";
import {connect} from "react-redux";
import ReactMapGL from 'react-map-gl';

class Map extends Component {
    // componentWillMount(){
    //     this.props.store.dispatch({type: actions.MAP_CALL_SUCCESS});
    // }

    render() {
    
        const {width, height, latitude, longitude, token} = this.props;
        return (<ReactMapGL
            mapboxApiAccessToken={token}
            {...this.state.viewport}
            onViewportChange={(viewport) => this.setState({viewport})}/>)
    }
}

const mapStateToProps = state => {
    console.log(state);

    const {latitude,longitude,token} = state.map.viewport
    // const {latitude, longitude} = state.drone;
    // const v = {...viewport, latitude, longitude};
    console.log("checking stuff out");
    
    return {error: state.error};
};

// const mapDispatch = dispatch => ({
//     onViewportChange: () => dispatch({type: actions.MAP_CALL_SUCCESS})
// });

export default connect(mapStateToProps)(Map);