import React, { useState, useEffect } from 'react';
import { GoHome } from "react-icons/go";
import { Link } from 'react-router-dom';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import axios from 'axios';

import '../styles/CovidLocationPage.scss';

const CovidLocationPage = () => {
  const [viewport, setViewport] = useState({
    latitude: 46.227638,
    longitude: 2.213749,
    width: '100vw',
    height: '100vh',
    zoom: 2
  });
  const [results, setResults] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);

  useEffect(() => {
    axios.get('https://corona.lmao.ninja/v2/countries')
      .then(res => {
        setResults(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, []);

  useEffect(() => {
    const listener = e => {
      if (e.key === "Escape") {
        setSelectedCountry(null);
      }
    }
    window.addEventListener("mouseenter", listener);

    return () => {
      window.removeEventListener("mouseleave", listener)
    }
  }, []);

  return (
    <div className="CovidLocationPage">
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
        mapStyle="mapbox://styles/webdav42/cka19nbgu1ytg1ilnpiavlnjs"
        onViewportChange={(viewport) => {
          setViewport(viewport)
        }}
        className="mapGl"
      >
        <Link to='/' >
          <GoHome className="homeIcon" />
        </Link>
        <h1>CVD-byLOC</h1>

        {results.map((data, i) => (
          <Marker
            className="marker"
            key={i}
            latitude={data.countryInfo.lat}
            longitude={data.countryInfo.long}
          >
            <button
              className='marker-btn'
              onMouseEnter={e => {
                e.preventDefault();
                setSelectedCountry(data)
              }}
              onMouseLeave={e => {
                e.preventDefault();
                setSelectedCountry(null)
              }}
            >
              <img
                className="pointer"
                height="10px"
                src="https://i.imgur.com/MK4NUzI.png"
                alt="Flag" />
              <br />
            </button>

          </Marker>
        ))}

        {selectedCountry ? (
          <Popup
            latitude={selectedCountry.countryInfo.lat}
            longitude={selectedCountry.countryInfo.long}
            onClose={() => {
              setSelectedCountry(null);
            }}
            closeButton={false}
          >
            <div>
              <h2>
                <img
                  className="flag"
                  height="10px"
                  src={selectedCountry.countryInfo.flag}
                  alt="Flag" />
                &nbsp;
                {selectedCountry.country}
              </h2>
              <p className="pCases">{selectedCountry.cases} Cases</p>
              <p className="pRecovered">{selectedCountry.recovered} Recovered</p>
              <p className="pDeaths">{selectedCountry.deaths} Deaths</p>
            </div>
          </Popup>
        ) : null}
      </ReactMapGL>
    </div>
  );
};

export default CovidLocationPage;