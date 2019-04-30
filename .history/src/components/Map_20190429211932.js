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

        return (
            <div>
                <ReactMapGL
                    mapboxApiAccessToken={Error: no source code supplied to jspretty!}
                    {...this.state.viewport}
                    onViewportChange={(viewport) => this.setState({viewport})}/>
            </div>
        )

    }
}

const mapStateToProps = state => {
    const {loading, fulldata} = state.drone;

    return {loading, fulldata, error: state.error};
};

const mapDispatch = dispatch => ({
    onViewportChange: (setState) => dispatch({setState})
});

export default connect(mapStateToProps, mapDispatch)(Map);