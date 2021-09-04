import React from "react";

import DashBoard from "./../../Components/DashBoard";
import WelcomeBanner from "./../../Components/WelcomeBanner/index";
import DashboardAvatars from "../../partials/dashboard/DashboardAvatars";
import FilterButton from "../../partials/actions/FilterButton";
import Datepicker from "../../partials/actions/Datepicker";

import DashboardCard04 from '../../partials/dashboard/DashboardCard04';
import DashboardCard05 from '../../partials/dashboard/DashboardCard05';

function Home() {
  return (
    <DashBoard>
      <WelcomeBanner>
        <h1 className="text-2xl md:text-3xl text-gray-800 font-bold mb-1">
          Bienvenido a el administrador de Piuts 👋
        </h1>
        <p>Somos la siguiente generación en la formalización de citas</p>
      </WelcomeBanner>
      {/* Dashboard actions */}
      <div className="sm:flex sm:justify-between sm:items-center mb-8">
        {/* Left: Avatars */}
        <DashboardAvatars />

        {/* Right: Actions */}
        <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
          {/* Filter button */}
          <FilterButton />
          {/* Datepicker built with flatpickr */}
          <Datepicker />
          {/* Add view button */}
          <button className="btn bg-indigo-500 hover:bg-indigo-600 text-white">
            <svg
              className="w-4 h-4 fill-current opacity-50 flex-shrink-0"
              viewBox="0 0 16 16"
            >
              <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
            </svg>
            <span className="hidden xs:block ml-2">Add view</span>
          </button>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-6">
              {/* Bar chart (Direct vs Indirect) */}
              <DashboardCard04 />
              {/* Line chart (Real Time Value) */}
              <DashboardCard05 />
      </div>
    </DashBoard>
  );
}

export default Home;
