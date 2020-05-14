import React from 'react';
import { Link } from 'react-router-dom';

import { GoHome } from "react-icons/go";

import DodhnutChart from '../components/DodhnutChart';
import Countries from '../components/Countries';

import '../styles/CovidLiveStatsPage.scss';

const CovidLiveStatsPage = () => {
  return (
    <div className="CovidLiveStatsPage">
      <Link to='/' >
        <GoHome className="homeIcon" />
      </Link>
      <br />
      <h1>Global Covid Live Stats</h1>
      <DodhnutChart />
      <br />
      <Countries />
    </div>
  );
};

export default CovidLiveStatsPage;