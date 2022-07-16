import React, {useState} from 'react';
import './toggle-list-style.css';
import {firstLetterUpper} from "../../utils/utils";
import {DataList} from "./DataList";

export const ToggleList = ({data, title}) => {
    const [open, setOpen] = useState(true);
    return (
      <div className="list">
          <ul className="main-ul"><code className="title" onClick={() => setOpen(!open)}>{firstLetterUpper(title)+`(${data.length})`}</code>
          {
              open ? data.map((item, index) => <DataList data={item} index={index} key={item.timestamp}/> )
                  : null
          }
          </ul>
      </div>
    );
}
