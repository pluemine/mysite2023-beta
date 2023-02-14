import React, { useState, useLayoutEffect } from "react";
import "../components/Public.css";

import Themesettingscard from "../components/Themesettingscard";

function Settings(props) {
  const {
    themeSettingsData,
    themeMode,
    handleChange_setThemeMode,
    wallpaper,
    handleChange_setWallpaper,
    wallpaperList,
  } = props;

  return (
    <div style={{ paddingTop: "104px", paddingBottom: "32px" }}>
      <div className="container">
        <Themesettingscard
          themeSettingsData={themeSettingsData}
          themeMode={themeMode}
          handleChange_setThemeMode={handleChange_setThemeMode}
          wallpaper={wallpaper}
          handleChange_setWallpaper={handleChange_setWallpaper}
          wallpaperList={wallpaperList}
        />
      </div>
    </div>
  );
}

export default Settings;
