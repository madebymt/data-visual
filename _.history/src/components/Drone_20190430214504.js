import React, {Component} from "react";
import {connect} from "react-redux";
import * as actions from "../store/actions";
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
import Chart from './Chart'
import Map from './Map'

class Drone extends Component {
    componentDidMount() {
        this
          .props
          .onLoad();
    }

    render() {
        const {
            loading,
            latitude,
            longitude,
            seconds,
            temperatureinFahrenheit,
            temperatureinCelsius
        } = this.props;

        const style = {
            width: '100%',
            margin: '0 auto',
            textAlign: 'center'
        }

        // if data not back yet, put a spinner
        if (loading) {
            return (
                <div style={style}>
                    <CircularProgress size={100} margin={50}/>
                </div>
            )

        }

        return (
            <div>
                <div style={style}>
                <h1>Drone Data</h1>
                <p>
                    Tempature: {`${temperatureinFahrenheit} °F || ${temperatureinCelsius} °C `}
                </p>
                <p>
                    longitude: {longitude}
                </p>
                <p>
                    Latitude: {latitude}
                </p>
                <p>
                    Last Received: {`${seconds} seconds`}
                </p>
                </div>

                <Grid container spacing={24}>
                    <Grid item xs={6}>
                        <Chart/>
                    </Grid>

                    <Grid item xs={6}>
                        <Map/>
                    </Grid>
                </Grid>
            </div>

        )

    }
}

const mapStateToProps = state => {
    const {loading, latitude, longitude, seconds} = state.drone;
    //Get weather data from weather state
    const {temperatureinFahrenheit, temperatureinCelsius} = state.weather;
    return {
        loading,
        latitude,
        longitude,
        seconds,
        temperatureinFahrenheit,
        temperatureinCelsius,
        error: state.error
    };
};

const mapDispatch = dispatch => ({
    //onLoad: () => dispatch({type: actions.FETCH_DRONE})
  });
  

export default connect(mapStateToProps,mapDispatch)(Drone);