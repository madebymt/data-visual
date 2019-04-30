import React, {Component} from "react";
import {connect} from "react-redux";
import ReactMapGL from 'react-map-gl';

class Map extends Component {
    constructor(props) {
        super(props);
        this.state = {
            viewport: {
                width: 800,
                height: 800,
                latitude: 29.7604,
                longitude: -95.3698,
                zoom: 8
            }
        };
    };

    render() {
        const TOKEN = "pk.eyJ1IjoiYzE5ODkwNjExIiwiYSI6ImNqdjM1NTk3ejJjYTI0ZGxhb2hoaWt5ZDAifQ.vY1y3SmbZW" +
                "IvBpdetSk-sw";
        return (
            <div>
                <ReactMapGL
                    mapboxApiAccessToken={TOKEN}
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