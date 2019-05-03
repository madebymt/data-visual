import React, {Component} from "react";
import * as actions from "../store/actions";
import {connect} from "react-redux";
import ReactMapGL, {Marker, NavigationControl} from 'react-map-gl'
import SvgIcon from '@material-ui/core/SvgIcon';
console.log()
const TOKEN = "pk.eyJ1IjoiYzE5ODkwNjExIiwiYSI6ImNqdjM1NTk3ejJjYTI0ZGxhb2hoaWt5ZDAifQ.vY1y3SmbZWIvBpdetSk-sw"

class Map extends Component {
    // componentDidMount() {
    //     this
    //       .props
    //       .onLoad();
    // }

    render() {
        const {viewport} = this.props;
        // console.log(viewport.latitude);
        
        
        function PinIcon(props) {
            return (
              <SvgIcon {...props}>
                <path d="M18 8c0-3.31-2.69-6-6-6S6 4.69 6 8c0 4.5 6 11 6 11s6-6.5 6-11zm-8 0c0-1.1.9-2 2-2s2 .9 2 2-.89 2-2 2c-1.1 0-2-.9-2-2zM5 20v2h14v-2H5z" />
              </SvgIcon>
            );
          }
          

        return (
            <ReactMapGL  {...this.props.viewport} 
                        dragPan={true}
                        touchZoom={true}
                        mapboxApiAccessToken={TOKEN} 
                        latitude={29.761993} 
                        longitude={-95.366302} 
                        zoom={7}
                        >
                        <Marker latitude={viewport.latitude} longitude={viewport.longitude} offsetLeft={-20} offsetTop={-10}>
                          <div>You are here</div>
                        </Marker>
            {/* <Marker latitude={this.props.viewport.latitude} longitude={this.props.viewport.longitude}> */}
            <PinIcon color="primary" fontSize="large"/>
          
          </ReactMapGL>
        )
    }
}

const mapStateToProps = state => {
    const {viewport} = state.drone
    console.log('viewport',viewport);  

    return {viewport, error: state.error};
};

const mapDispatch = dispatch => ({
    onViewportChange: () => dispatch({type: actions.FETCH_DRONE}),
    //onLoad:() => dispatch({type:actions.MAP_VIEW_CHANGE})
});

export default connect(mapStateToProps,mapDispatch)(Map);