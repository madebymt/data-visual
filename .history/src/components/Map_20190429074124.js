import React, {Component} from "react";
import {connect} from "react-redux";
import ReactMapGL from 'react-map-gl';

class Map extends Component {
    constructor(props) {
        super(props);
        this.state = {
            viewport: {
                width: 400,
                height: 400,
                latitude: 29.7604,
                longitude: -95.3698,
                zoom: 8
            }
        };
    };

    render() {
        return (
            <div>
                <ReactMapGL
                    {...this.state.viewport}
                    onViewportChange={(viewport) => this.setState({state})}/>
            </div>
        )

    }
}

const mapStateToProps = state => {
    const {loading, fulldata} = state.drone;

    return {loading, fulldata, error: state.error};
};

const mapDispatch = dispatch => ({
    onViewportChange: () => dispatch({setState})
});

export default connect(mapStateToProps, mapDispatch)(Map);