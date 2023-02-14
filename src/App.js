import React, { useState, useLayoutEffect } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import {
  selfData,
  featuresData,
  skillsData,
  projectsData,
  profileData,
  socialsData,
  versionData,
  themeSettingsData,
  wallpaperList,
} from "./components/Globalvar";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Settings from "./pages/Settings";

function App() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [themeColor, setThemeColor] = useState();
  const [themeMode, setThemeMode] = useState();
  const [wallpaper, setWallpaper] = useState(0);
  const [wallpaperEnable, setWallpaperEnable] = useState(true);
  const [accentColor, setAccentColor] = useState(0);
  const [accentIcon, setAccentIcon] = useState(false);
  const [page, setPage] = useState();

  const handleClickScroll = () => {
    const element = document.getElementById("Profile");
    if (element) {
      element.scrollIntoView({behavior: "smooth"});
    }
  }

  var e = window.matchMedia("(prefers-color-scheme: dark)");

  function chkdefault(x) {
    if (x.matches && localStorage.getItem("theme") === "default") {
      setThemeColor("dark");
      document.documentElement.setAttribute("data-theme", "dark");
    } else if (!x.matches && localStorage.getItem("theme") === "default") {
      setThemeColor("light");
      document.documentElement.setAttribute("data-theme", "light");
    }
  }

  function setNewThemeMode(value) {
    localStorage.setItem("theme", value);
    setThemeMode(value);
    if (value !== "default") {
      setThemeColor(value);
      e.removeEventListener("change", chkdefault);
      document.documentElement.setAttribute("data-theme", value);
    } else {
      e.addEventListener("change", chkdefault);
      chkdefault(e);
    }
  }

  function setNewWallpaper(value) {
    localStorage.setItem("wallpaper", value);
    setWallpaper(value);
  }

  useLayoutEffect(() => {
    const currentTheme = localStorage.getItem("theme")
      ? localStorage.getItem("theme")
      : null;
    if (currentTheme === "light" || currentTheme === "dark") {
      document.documentElement.setAttribute("data-theme", currentTheme);
      setNewThemeMode(currentTheme);
    } else {
      setNewThemeMode("default");
    }

    window.addEventListener("resize", resizeScreenWidth);
    resizeScreenWidth(screenWidth);

    const currentWallpaper = localStorage.getItem("wallpaper")
      ? parseInt(localStorage.getItem("wallpaper"))
      : null;

    if (
      currentWallpaper &&
      currentWallpaper >= 0 &&
      currentWallpaper < wallpaperList.length
    ) {
      setNewWallpaper(currentWallpaper);
    } else {
      setNewWallpaper(0);
    }

  });

  const handleChange_setThemeMode = (event) => {
    setNewThemeMode(event);
  };

  function resizeScreenWidth(x) {
    setScreenWidth(window.innerWidth);
  }

  const handleChange_setWallpaper = (event) => {
    setNewWallpaper(event);
  };

  function wallpaperNow() {
    if (1) {
      return {
        backgroundImage: wallpaperList[wallpaper].bgsf,
      };
    } else {
      return undefined;
    }
  }

  return (
    <div className="body" style={wallpaperNow()}>
      <HashRouter>
        <Navbar screenWidth={screenWidth} themeMode={themeMode} />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Home
                selfData={selfData}
                featuresData={featuresData}
                skillsData={skillsData}
                projectsData={projectsData}
                profileData={profileData}
                socialsData={socialsData}
                versionData={versionData}
                screenWidth={screenWidth}
                themeMode={themeMode}
                handleChange_setThemeMode={handleChange_setThemeMode}
                handleClickScroll={handleClickScroll}
              />
            }
          />
          <Route
            exact
            path="settings"
            element={
              <Settings
                themeSettingsData={themeSettingsData}
                themeMode={themeMode}
                handleChange_setThemeMode={handleChange_setThemeMode}
                wallpaper={wallpaper}
                handleChange_setWallpaper={handleChange_setWallpaper}
                wallpaperList={wallpaperList}
              />
            }
          />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
