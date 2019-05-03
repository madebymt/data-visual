import React, {Component} from "react";
import * as actions from "../store/actions";
import {connect} from "react-redux";
import ReactMapGL from 'react-map-gl';

class Map extends Component {
    // componentWillMount(){
    //     this.props.store.dispatch({type: actions.MAP_CALL_SUCCESS});
    // }

    render() {
    
        const {viewport} = this.props;
        return (<ReactMapGL
            mapboxApiAccessToken={token}
            {...this.state.viewport}
            onViewportChange={(viewport.token) => this.setState({viewport})}/>)
    }
}

const mapStateToProps = state => {
    console.log(state);

    const {viewport} = state.map
    // const {latitude, longitude} = state.drone;
    // const v = {...viewport, latitude, longitude};
    console.log("checking stuff out");
    
    return {error: state.error};
};

const mapDispatch = dispatch => ({
    onViewportChange: () => dispatch({type: actions.MAP_CALL_SUCCESS})
});

export default connect(mapStateToProps)(Map);