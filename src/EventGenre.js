import React, { useEffect, useState } from 'react';
import { PieChart, Pie, ResponsiveContainer } from 'recharts';

const EventGenre = ({events}) => {
    const [data, setData] = useState([]);

    /* const mock_data = [
        { name: 'Group A', value: 400 },
        { name: 'Group B', value: 300 },
        { name: 'Group C', value: 300 },
        { name: 'Group D', value: 200 },
    ]; */

    useEffect(() => { 
        function getData() {
            const genres = ['React', 'JavaScript', 'Node', 'jQuery', 'AngularJS'];
            const data = genres.map((genre) => {
                const value = events.filter((event) => event.summary.includes(genre)).length;                
                return { name: genre, value };
            })
            return data.filter((genre) => genre.value !== 0);
        };
        setData(getData());
    }, [events]); // listen for changes to the events prop

    return (
        <ResponsiveContainer height={400} >
            <PieChart width={300} height={400}>
                <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    // label={renderCustomizedLabel}
                    label={({ name, percent}) => `${name} ${(percent * 100).toFixed(0)}%`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                >
                    {// data.map((entry, index) => ( <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} /> ))
                    }
                </Pie>
            </PieChart>
        </ResponsiveContainer>
    )
}
export default EventGenre;
