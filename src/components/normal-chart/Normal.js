import React from 'react'
import './normal.scss'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Normal = ({aspect, title}) => {

    const data = [
        {
            name: "January", Total: 22000
        },
        {
            name: "February", Total: 11232
        },
        {
            name: "March", Total: 34322
        },
        {
            name: "April", Total: 22322
        },
        {
            name: "May", Total: 42000
        },
        {
            name: "June", Total: 8000
        },
    ];



    return (
        <div className="chart">
            <h4 className="w-100 text-center">{title}</h4>
            <ResponsiveContainer width="100%" aspect={aspect}>
                <AreaChart width={730} height={250} data={data}
                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                    <defs>
                        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="blue" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="blue" stopOpacity={0.1} />
                        </linearGradient>
                        
                    </defs>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Tooltip />
                    <Area type="monotone" dataKey="Total" stroke="#8884d8" fillOpacity={0.5} fill="url(#colorUv)" />
                    
                </AreaChart>
            </ResponsiveContainer>
        </div>
    )
}

export default Normal
