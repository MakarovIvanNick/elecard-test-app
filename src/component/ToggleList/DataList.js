import React, {useEffect, useRef, useState} from 'react';
import {ArrowRight} from "../arrow/arrowRight";
import {Modal} from "../Modal/Modal";

export const DataList = ({data, index}) => {
    const [dataOpen, setDataOpen] = useState(false);
    const [activeModal, setActiveModal] = useState(false);
    const arrow = useRef(null);
    useEffect(() => {
        dataOpen ? arrow.current.style = 'transform: scale(0.8) rotate(90deg); transition: 0.25s' : arrow.current.style = 'transform: scale(0.8) rotate(0deg); transition: 0.25s'
    }, [dataOpen]);
    return (
        <div className="data-list">
            <ul className="data-ul" key={data.timestamp}>
                <div style={{display: 'flex', alignItems: 'center'}}>
                    <div ref={arrow}>
                        <ArrowRight handler={() => setDataOpen(!dataOpen)}/>
                    </div>
                    <div key={data} className="img-container"><img className="img" onClick={() => setActiveModal(!activeModal)} src={data.image}/></div>
                </div>
                {dataOpen?
                    <div className="description-data">
                        <li className="data-li"><code>{Math.round(data.filesize/1024) + ' KB'}</code></li>
                        <li className="data-li"><code>{new Date(data.timestamp).toLocaleDateString('en-US')}</code></li>
                    </div>:
                    null}
            </ul>
            <Modal active={activeModal} setActive={setActiveModal} img={data.image}/>
        </div>
    )
}
