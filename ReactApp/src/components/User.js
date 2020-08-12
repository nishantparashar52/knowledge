import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../redux/actions'

export default () => {
    const dispath = useDispatch();
    const { userData } = useSelector(state => state.user);
    useEffect(() => {
        dispath(fetchData());
    }, []);
    return (
    <div>User</div>
    )
};