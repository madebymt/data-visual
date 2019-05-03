import React, {Component} from "react";
import {connect} from "react-redux";

import {
    LineChart,
    Line,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    ReferenceLine,
    ResponsiveContainer
} from 'recharts';

class Chart extends Component {

    render() {
        const {chartData} = this.props;
        let data = chartData;

        /* loop through data timestamps and update them to hour, mins and second
           pass the timestap to JS Date object to convert readable time line.
        */
        data.forEach(el => {
            let d = new Date(el.timestamp);
            el.timestamp = `${d.getHours()}:${d.getMinutes()}`
        });

        return (
            <div>
                <ResponsiveContainer width="100%" minHeight="400px">
                    <LineChart
                        data={data}
                        margin={{
                        top: 5,
                        right: 80,
                        bottom: 5,
                        left: 80
                    }}>
                        <Line type="monotone" 
                              dataKey="metric" 
                              stroke="#8884d8" 
                              dot={false} 
                              isAnimationActive={false} />
                        <CartesianGrid stroke="#ccc" 
                                       strokeDasharray="5 5"/>
                        <XAxis dataKey="timestamp" 
                               interval={80} // spacing
                               allowDataOverflow={true}/>
                        <YAxis domain={['auto', 'auto']} 
                               scale="linear" 
                               padding={{ top: 10, bottom: 10 }}/>
                        
                        <Tooltip/>
                    </LineChart>
                </ResponsiveContainer>
            </div>
        )

    }
}

const mapStateToProps = state => {
    const {chartData} = state.chart;
    console.log(chartData);
    return {chartData, error: state.error};
};

export default connect(mapStateToProps)(Chart);