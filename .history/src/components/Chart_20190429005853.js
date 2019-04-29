import React, {Component} from "react";
import {connect} from "react-redux";
import {
    LineChart,
    Line,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer
} from 'recharts';

class Chart extends Component {

    render() {
        const style = {
            margin: '0 auto',
            textAlign: 'center'
        }

        const {loading, fulldata} = this.props;

        let data = fulldata;

        /* loop through data timestamps and update them to hour, mins and second
           pass the timestap to JS Date object to convert readable time line.
        */
        data.forEach(el => {
            let d = new Date(el.timestamp);
            el.timestamp = `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`
        });
        return (
            <div>
                <ResponsiveContainer width='100%' minHeight="400px">
                    <LineChart
                        data={data}
                        margin={{
                        top: 5,
                        right: 80,
                        bottom: 5,
                        left: 80
                    }}>
                        <Line type="monotone" dataKey="longitude" stroke="#8884d8"/>
                        <CartesianGrid stroke="#ccc" strokeDasharray="5 5"/>
                        <XAxis dataKey="timestamp"/>
                        <YAxis/>
                        <Tooltip/>
                    </LineChart>
                </ResponsiveContainer>
            </div>
        )

    }
}

const mapStateToProps = state => {
    const {loading, fulldata} = state.drone;
    //console.log('fulldata-state:', fulldata);
    return {loading, fulldata, error: state.error};
};

export default connect(mapStateToProps)(Chart);