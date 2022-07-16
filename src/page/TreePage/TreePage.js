import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {ToggleList} from "../../component/ToggleList/ToggleList";
import './tree-style.css';

export const TreePage = () => {
    const dispatch = useDispatch();
    const data = useSelector(state => state.data.dataByCategory);
    const loading = useSelector(state => state.data.loading);
    const error = useSelector(state => state.data.error);

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
        <div className="tree-page">
            {
                Object.keys(data).map(item => <ToggleList data={data[item]} title={item} key={item}/>)
            }
        </div>
    );
}
