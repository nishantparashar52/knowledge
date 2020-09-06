import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchHistoricalData } from '../redux/actions';

const Home = () => {
    const dispath = useDispatch();
    const { historicalData } = useSelector(state => state.market);
    useEffect(() => {
        dispath(fetchHistoricalData());
    }, []);
    return (
    <div>
        {historicalData && historicalData.map((item,index) => {
        const splitData = item.split(',');
        return (
            <>{splitData.map((item, index) => <div key={index}>{item}</div>)}</>
        ); 
    })};

    </div>
    )
};
export default Home;