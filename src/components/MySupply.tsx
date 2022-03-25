import React, {useState} from 'react';
import {Button, Col, Row} from "antd";
import SearchSelect from "./SearchSelect";
import {useDispatch} from "react-redux";
import {fetchRoutePoints} from "../store/actions/routePoints";

const MySupply = ({ supplyName , startCheckPoint, finishCheckPoint, active, setActive, index}) => {
    const dispatch = useDispatch()
    const [startPoint, setStartPoint] = useState(startCheckPoint)
    const [finishPoint, setFinishPoint] = useState(finishCheckPoint)
    function handleClick(event) {
        setActive(event.currentTarget.parentElement.dataset.index)
        dispatch(fetchRoutePoints([`${startPoint.location}`,`${finishPoint.location}`]))
    }

    return (
        <div className={`transportable ${active}`} data-index={index}>
            <Row>
                <Col span={24}>{supplyName}</Col>
            </Row>
            <Row>
                <Col span={12}>Погрузка</Col>
                <Col span={12}>Разгрузка</Col>
            </Row>
            <Row>
                <Col span={12}>
                    <SearchSelect defaultValue={startPoint.name} setData={setStartPoint}/>
                </Col>
                <Col span={12}>
                    <SearchSelect defaultValue={finishPoint.name} setData={setFinishPoint}/>
                </Col>
            </Row>
            <Button onClick={handleClick} type="primary" block> Выбрать заявку</Button>
        </div>
    );
};

export default MySupply;