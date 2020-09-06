import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchHistoricalData } from '../redux/actions';
import './Home.css';
import {
    BarChart,
    Bar,
    CartesianGrid,
    Legend,
    XAxis,
    YAxis,
    Tooltip
} from 'recharts';

const Home = () => {
    const dispath = useDispatch();
    const { historicalData } = useSelector(state => state.market);
    useEffect(() => {
        dispath(fetchHistoricalData('?interval=1'));
    }, []);
    const getIndexData = index => {
        dispath(fetchHistoricalData(`?interval=${index}`));
    }
    useEffect(() => {
    }, [historicalData]);
    return (
        <div>
            <div>Home</div>
            {historicalData ?
                <BarChart
                    width={1180}
                    height={500}
                    data={historicalData}
                    margin={{
                        top: 5, right: 30, left: 20, bottom: 5,
                    }}
                >
                    <XAxis dataKey="time" />
                    <YAxis/>
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="open" fill="#26a69a" />
                    <Bar dataKey="high" fill="#66bb6a" />
                    <Bar dataKey="low" fill="#b3e5fc" />
                    <Bar dataKey="close" fill="#757575" />
                    <Bar dataKey="volume" fill="#ffff00" />
                </BarChart> : <div className="gifImg" />}
                {[1,2,3,4,5,6,7,8,9,10].map((item, index) => {
                    return (
                        <button key={index} onClick={getIndexData.bind(null, index)}>{item}</button>
                    );
                })}
        </div>
    );
};
export default Home;