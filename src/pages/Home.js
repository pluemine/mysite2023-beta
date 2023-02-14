import React, { useState, useLayoutEffect } from "react";
import "../components/Public.css";

import Selfcard from "../components/Selfcard";
import Datacard from "../components/Datacard";
import Socialscard from "../components/Socialscard";
import Versioncard from "../components/Versioncard";

function Home(props) {
  const {
    selfData,
    featuresData,
    skillsData,
    projectsData,
    profileData,
    socialsData,
    versionData,
    themeMode,
    handleChange_setThemeMode,
    handleClickScroll,
  } = props;

  return (
    <div style={{ paddingTop: "92px", paddingBottom: "32px" }}>
      <div className="container">
        <Selfcard selfData={selfData} handleClickScroll={handleClickScroll} />
        <Datacard cardData={featuresData} cardId="Features" />
        <Datacard cardData={skillsData} cardId="Skills" />
        <Datacard cardData={projectsData} cardId="Projects" />
        <Datacard cardData={profileData} cardId="Profile" />
        <Socialscard socialsData={socialsData} />
        <Versioncard versionData={versionData} />
      </div>
    </div>
  );
}

export default Home;
