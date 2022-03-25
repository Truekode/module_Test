import React from 'react';
import {
    Circle,
    MapContainer, Marker,
    Polyline,
    TileLayer,
} from 'react-leaflet'
import {useTypedSelector} from "../hooks/useTypedSelector";
import {Spin} from "antd";


function MyMap() {
    const fillBlueOptions: { fillColor: string } = { fillColor: 'blue' }
    const limeOptions: { color: string } = { color: 'lime' }
    const checkPoints: any = useTypedSelector(state => state.routePoints.routePoints)
    const loading = useTypedSelector(state => state.routePoints.loading)

    if (!checkPoints.length) {
        return <div className="centered-map-loading">
            {loading
                ? <Spin size="large" />
                : <h1>Выберите поставку ...</h1>
            }
        </div>
    }

    return (
        <>
            {loading
                ? <div className="centered-map-loading"><Spin size="large" /></div>
                : <>
                    <MapContainer center={checkPoints[0]} zoom={6}>
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={checkPoints[0]} />
                        <Marker position={checkPoints[checkPoints.length-1]} />
                        <Polyline pathOptions={limeOptions} positions={checkPoints} />
                    </MapContainer>
                </>
            }
            </>
    )
}

export default MyMap;