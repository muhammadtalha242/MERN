import React, { useEffect, useRef } from 'react'
import mapboxgl from 'mapbox-gl/dist/mapbox-gl.js';

import "./Map.css"

function Map(props) {
    const mapRef = useRef();

    const { center, zoom } = props;
    useEffect(() => {

        mapboxgl.accessToken = 'pk.eyJ1IjoiaW10YWxoYSIsImEiOiJja3I5NHRhcjcxM3llMnBscDhlaTQxOTI5In0.B5pBy-TSFYLZ50juqm0hXQ';
        var map = new mapboxgl.Map({
            container: mapRef.current,
            center: center,
            zoom: 2,
            style: 'mapbox://styles/mapbox/streets-v11'
        });
            // Set options
            new mapboxgl.Marker({
                color: "#FFFFFF",
                draggable: true
            }).setLngLat(center)
                .addTo(map);
    }, [center, zoom])

    return (
        <div ref={mapRef} id="map" className={`map ${props.className}`} style={props.style}>

        </div>
    )
}

export default Map
