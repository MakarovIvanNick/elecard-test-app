import React, {useState} from "react";
import './filter-style.css';
import {useDispatch} from "react-redux";
import {restoreData} from "../../store/actions";

export const Filter = ({changer, showRestore}) => {
    const [value, setValue] = useState('');
    const dispatch = useDispatch();
    const change = (e) => {
        setValue(e.target.id);
        changer(e.target.id);
    }
    return (
        <div className="container">
            <code className="title">Filters</code>
            <div className="filters-container">
                <div>
                    <input type="radio" id="date" className="custom-radio" checked={value === "date"} onChange={change}/>
                    <label htmlFor="date"><code>by date</code></label>
                </div>
                <div>
                    <input type="radio" id="filesize" className="custom-radio" checked={value === "filesize"} onChange={change}/>
                    <label htmlFor="filesize"><code>by file size</code></label>
                </div>
                {showRestore ? null: <div className="custom-button" onClick={() => dispatch(restoreData())}><code>Restore images</code></div>}
            </div>
        </div>
    );
}
