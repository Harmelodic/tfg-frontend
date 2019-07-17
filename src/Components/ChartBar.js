import React, { PureComponent } from 'react';
import { ResponsiveContainer, BarChart, Bar, Cell,
    XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts'
import MockData from '../mock_data.json'

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042']

export default class ChartPie extends PureComponent {

    render() {
        return (
            <div className="charts" style = {{display:"block"}}>
                <h4> Bar Chart </h4>
                <p> {this.props.description} </p>
                <div style = {{display:"inline-flex"}}>
                    {MockData.map((dataDetail, index) => {
                        return (
                            <div style={{padding:"0 15px"}}>
                                <p> {dataDetail.name} </p>
                                <p> {dataDetail.max_value} </p>
                            </div>
                        )
                    })}
                </div>
                <div style={{width:"65%", height:"65%", display:"block"}}>
                    <ResponsiveContainer>
                        <BarChart width={500} height={300}
                        data={MockData} margin={{top:20, right:30, left:20, bottom:5}}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="max_value" stackId="a" fill={colors[[0]]} />
                            <Bar dataKey="min_value" stackId="a" fill={colors[[1]]} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
        )
    }
};