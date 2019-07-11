import React, { PureComponent } from 'react';
import { ResponsiveContainer, PieChart, Pie, Tooltip, Legend } from 'recharts'
import MockData from './mock_data.json'

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042']

export default class ChartPie extends PureComponent {

    render() {
        return (
            <div style = {{display:"grid", width:"50rem", height:"50rem" }}>
                <div style = {{display:"inline-flex"}}>
                    {MockData.map((dataDetail, index) => {
                        return (
                            <div style={{padding:"0 15px"}}>
                                <p> {dataDetail.name} </p>
                                <p> {dataDetail.min_value} </p>
                            </div>
                        )
                    })}
                </div>
                <ResponsiveContainer style={{display:"flex"}}>
                    <PieChart>
                        <Pie dataKey="min_value" data={MockData} isAnimationActive={true} outerRadius={"80%"}
                        innerRadius={"40%"} fill={colors[[0]]} label />
                        <Tooltip/>
                    </PieChart>
                </ResponsiveContainer>
            </div>
        )
    }
};