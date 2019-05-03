import React, {Component} from "react";
import * as actions from "../store/actions";
import {connect} from "react-redux";
import ReactMapGL, {Marker} from 'react-map-gl'
import SvgIcon from '@material-ui/core/SvgIcon';

const TOKEN = "pk.eyJ1IjoiYzE5ODkwNjExIiwiYSI6ImNqdjM1NTk3ejJjYTI0ZGxhb2hoaWt5ZDAifQ.vY1y3SmbZWIvBpdetSk-sw"

class Map extends Component {

    render() {
        const {viewport} = this.props;
        //console.log('latitude',viewport.latitude);
        
        
        function PinIcon(props) {
            return (
              <SvgIcon {...props}>
                <path d="M18 8c0-3.31-2.69-6-6-6S6 4.69 6 8c0 4.5 6 11 6 11s6-6.5 6-11zm-8 0c0-1.1.9-2 2-2s2 .9 2 2-.89 2-2 2c-1.1 0-2-.9-2-2zM5 20v2h14v-2H5z" />
              </SvgIcon>
            );
          }
          

        return (
        <div>
            <ReactMapGL  {...this.props.viewport} 
                        mapboxApiAccessToken={TOKEN} 
                        zoom={5}
                        onViewportChange={(viewport) => this.setState({viewport})}
                        >
              <Marker latitude={viewport.latitude} longitude={viewport.longitude} offsetLeft={-20} offsetTop={-10}>
                <PinIcon color="primary" fontSize="large"/>
              </Marker>
          </ReactMapGL>
        </div>
        )
    }
}

const mapStateToProps = state => {
    const {viewport} = state.drone;
    return {viewport, error: state.error};
};

const mapDispatch = dispatch => ({
    onViewportChange: () => dispatch({type: actions.FETCH_DRONE}),

});

export default connect(mapStateToProps,mapDispatch)(Map);