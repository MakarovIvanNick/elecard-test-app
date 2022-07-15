import React, {useEffect, useState} from 'react';
import './data-page-style.css';
import {useDispatch, useSelector} from "react-redux";
import {getDataAsync, setFilters} from "../store/actions";
import {CardContainer} from "../component/CardContainer/CardContainer";
import {Filter} from "../component/filters/Filter";
import {checkSize} from "../utils/utils";

export const DataPage = props => {
    const [filter, setFilter] = useState('');
    const [showRestore, setShowRestore] = useState(checkSize());
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getDataAsync());
    }, []);
    useEffect(() => {
        dispatch(setFilters(filter));
    }, [filter]);
    const data = useSelector(state => state.data.dataByCategory);
    const loading = useSelector(state => state.data.loading);
    const error = useSelector(state => state.data.error);
    useEffect(() => {
        setShowRestore(checkSize());
    }, [data]);
    if(loading) {
        return (
            <div className="loading">
                <div className="donut"/>
            </div>
        )
    }
    if(error) {
        return (
            <div className="loading">
                <code className="title">Network Error...</code>
            </div>
        )
    }
    return (
        <div>
            <div>
                <Filter changer={setFilter} showRestore={showRestore}/>
            </div>
            <div className="page">
                {
                    Object.keys(data).map(item => <CardContainer data={data[item]} name={item} key={item}/>)
                }
            </div>
        </div>
    );
}
