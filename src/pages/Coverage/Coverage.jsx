import React, { useRef } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useLoaderData } from 'react-router';

const Coverage = () => {

    const serviceCenters = useLoaderData();
    console.log(serviceCenters);
    const mapRef = useRef(null);

    // Default center (Dhaka)
    const position = [23.8103, 90.4125];
    const handleSearch = (e) => {
        e.preventDefault();
        const searchText = e.target.search.value;
        const district = serviceCenters.find(center => center.district.toLowerCase().includes(searchText.toLowerCase()));
        const coord = [district.latitude, district.longitude];
        console.log(district.district, coord);

        if (district) {
            mapRef.current.flyTo(coord, 13);
        }
    }
    return (
        <div>
            <h2 className='text-5xl text-secondary'>We are available in 64 districts</h2>

            <div>
                <form onSubmit={handleSearch}>
                    <label className="input">
                        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <g
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                strokeWidth="2.5"
                                fill="none"
                                stroke="currentColor"
                            >
                                <circle cx="11" cy="11" r="8"></circle>
                                <path d="m21 21-4.3-4.3"></path>
                            </g>
                        </svg>
                        <input type="search" className="grow" placeholder="Search" name='search' />

                    </label>
                </form>
            </div>

            <div className='border w-full h-[800px] mt-6'>
                <MapContainer
                    center={position}
                    zoom={7}
                    scrollWheelZoom={false}
                    className='h-[800px] w-full'
                    ref={mapRef}
                >
                    <TileLayer
                        attribution='&copy; OpenStreetMap contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />

                    {serviceCenters.map((center, index) => (
                        <Marker
                            key={index}
                            position={[center.latitude, center.longitude]}
                        >
                            <Popup>
                                <strong>{center.city}</strong> <br />
                                Covered Area: {center.covered_area.join(", ")}
                            </Popup>
                        </Marker>
                    ))}
                </MapContainer>
            </div>
        </div>
    );
};

export default Coverage;
