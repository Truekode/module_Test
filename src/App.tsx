import React, {useEffect, useRef, useState} from 'react';
import {Resizable} from "re-resizable";
import {Button, Col, Row} from 'antd';
import SearchSelect from "./components/SearchSelect";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import MyMap from "./components/MyMap";
import MySupply from "./components/MySupply";
import {useTypedSelector} from "./hooks/useTypedSelector";
import {useDispatch} from "react-redux";
import {fetchSupplyRoute} from "./store/actions/supplyActions";

function App() {
    const [active, setActive] = useState('');
    const dispatch = useDispatch();
    const supplyRoute = useTypedSelector(state => state.supplyRoute.supplyRoute);
    const resize = useRef();
    useEffect(() => {
        dispatch(fetchSupplyRoute())
    }, [])

    return (
        <div className="App">
            <Resizable
                ref={resize}
                style={{
                    display: 'flex',
                    flexDirection: "column",
                    borderRight: '1px solid #0000002e',
                    paddingTop: '10px',
                    overflow: 'scroll',
                }}
                minWidth="160"
                maxWidth="600"
                defaultSize={{
                    width: 320,
                    height: '100%',
                }}
            >
                {
                    supplyRoute.map(item =>
                        <MySupply
                            key={item.id}
                            supplyName={item.title}
                            index={item.id}
                            active={item.id === active ? 'box-active' : ''}
                            setActive={setActive}
                            startCheckPoint={item.startCheckPoint}
                            finishCheckPoint={item.finishCheckPoint}
                        />)
                }
            </Resizable>
            <MyMap/>
        </div>
    );
}

export default App;
