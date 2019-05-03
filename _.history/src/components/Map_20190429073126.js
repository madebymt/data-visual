import React, {Component} from "react";
import {connect} from "react-redux";
import ReactMapGL from 'react-map-gl';

class Map extends Component {

    state = {
        viewport: {
            width: 400,
            height: 400,
            latitude: 29.7604,
            longitude: -95.3698,
            zoom: 8
        }
    };

    render() {
        const style = {
            margin: '0 auto',
            textAlign: 'center'
        }

        //const {fulldata} = this.props;

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
    //console.log('fulldata-state:', fulldata);
    return {loading, fulldata, error: state.error};
};

export default connect(mapStateToProps)(Map);