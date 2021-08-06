import React, { useEffect, useState } from 'react';
import { PieChart, Pie, ResponsiveContainer, Cell } from 'recharts';

const EventGenre = ({ events }) => {
    const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#aa33ff'];
    const [data, setData] = useState([]);
    useEffect(() => { setData(() => getData()); }, [events]);

    const getData = () => {
        const events = this.state.events;
        const genres = ['React', 'JavaScript', 'Node', 'jQuery', 'AngularJS'];
        const data = genres.map((genre) => {
            const value = events.filter((event) => event.summary.split('').includes(genre)).length;
            return { name: genre, value };
        })
        return data;
    };



    return (
        <ResponsiveContainer height={400}>
            <PieChart width={400} height={400}>
                <Pie
                    data={data}
                    cx={200}
                    cy={200}
                    labelLine={true}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                    {
                        data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={colors[index]} />
                        ))
                    }
                </Pie>
            </PieChart>
        </ResponsiveContainer>
    );

}

export default EventGenre;