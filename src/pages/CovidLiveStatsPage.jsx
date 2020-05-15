import React from 'react';
import { Link } from 'react-router-dom';
import DodhnutChart from '../components/DodhnutChart';

import Countries from '../components/Countries';
import Footer from '../components/Footer';

import { GoHome } from "react-icons/go";

import '../styles/CovidLiveStatsPage.scss';

const CovidLiveStatsPage = () => {
  return (
    <div className="CovidLiveStatsPage">
      <Link to='/' >
        <GoHome className="homeIcon" />
      </Link>
      <br />
      <h1>Global CVD Live Stats</h1>
      <DodhnutChart />
      <br />
      <Countries />
      <br />
      <Footer />
    </div>
  );
};

export default CovidLiveStatsPage;