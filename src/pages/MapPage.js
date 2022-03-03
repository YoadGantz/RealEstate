import React, { useEffect, useRef, useState } from 'react'
import mapboxgl from 'mapbox-gl';
import {
    FormControl,
    InputLabel,
    Input,
    Button
} from '@mui/material';

mapboxgl.accessToken = 'pk.eyJ1IjoieW9hZGdhbnR6IiwiYSI6ImNsMDlyMWwyajBkZGQzYnJxNDlzcDNnZWkifQ.ndXx-oxCszxfQiqfrpSyPA';


const MapPage = () => {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(34.9000);
    const [lat, setLat] = useState(31.8333);
    const [zoom, setZoom] = useState(7);
    useEffect(() => {
        if (map.current) return;
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [lng, lat],
            zoom: zoom
        });
        map.current.on('mouseup', (e) => {
            setLng(e.lngLat.lng)
            setLat(e.lngLat.lat)

        });


    });

    const handleButtonClick = () => {
        map.current.flyTo({ center: [lng, lat], zoom: 12, essential: true })
        setZoom(12)
    }




    return <div className='main-container'>
        <div ref={mapContainer} className="map-container" />
        <div className="sidebar flex align-center justify-end">
            <FormControl sx={{ width: '150px', margin: '20px 25px' }}>
                <InputLabel htmlFor="simple-lng">Longitude</InputLabel>
                <Input id="simple-lng" value={lng} onChange={(event) => setLng(event.target.value)} />
            </FormControl>
            <FormControl sx={{ width: '150px', margin: '20px 25px' }}>
                <InputLabel htmlFor="simple-lat">Latitude</InputLabel>
                <Input id="simple-lat" value={lat} onChange={(event) => setLat(event.target.value)} />
            </FormControl>
            <Button sx={{ height: '55px' }} variant="contained" onClick={handleButtonClick}>Go!</Button>
        </div>
    </div>
}


export default MapPage