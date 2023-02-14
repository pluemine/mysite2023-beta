import "./Public.css";
import Showrow from "./Showrow";

import NavigateNextOutlinedIcon from "@mui/icons-material/NavigateNextOutlined";

import NightsStayOutlinedIcon from "@mui/icons-material/NightsStayOutlined";

import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import BrightnessAutoOutlinedIcon from "@mui/icons-material/BrightnessAutoOutlined";

function Themesettingscard(props) {
  const {
    themeSettingsData,
    themeMode,
    handleChange_setThemeMode,
    wallpaper,
    handleChange_setWallpaper,
    wallpaperList,
  } = props;

  return (
    <div className="normal-card" style={{ marginBottom: "32px" }}>
      <div className="normal-card-container">
        <div
          className="d-flex flex-row align-items-center font-bodybold font-colorsub"
          style={{ gap: "16px" }}
        >
          <div>Home</div>
          <NavigateNextOutlinedIcon />
          <div className="font-colormain">Settings</div>
        </div>
        <div>
          <div className="font-header font-colormain">
            {themeSettingsData.title}
          </div>
          <div className="font-body font-colorsub">
            {themeSettingsData.subtitle}
          </div>
        </div>
        <div>
          <div className="row">
            <div className="col-12">
              <Showrow
                data={{
                  icon: <NightsStayOutlinedIcon />,
                  title: "Theme",
                  subtitle: "Light Dark or Default",
                }}
              />
            </div>
          </div>
          <hr className="line" style={{ width: "100%" }} />
          <div
            className="d-flex flex-row align-items-center"
            style={{ margin: "auto", gap: "32px" }}
          >
            <div
              className="iconframe buttonframe"
              onClick={() => {
                handleChange_setThemeMode("light");
              }}
            >
              <LightModeOutlinedIcon
                className={
                  themeMode === "light" ? "font-colorselect" : undefined
                }
              />
            </div>
            <div
              className="iconframe buttonframe"
              onClick={() => {
                handleChange_setThemeMode("dark");
              }}
            >
              <DarkModeOutlinedIcon
                className={
                  themeMode === "dark" ? "font-colorselect" : undefined
                }
              />
            </div>
            <div
              className="iconframe buttonframe"
              onClick={() => {
                handleChange_setThemeMode("default");
              }}
            >
              <BrightnessAutoOutlinedIcon
                className={
                  themeMode === "default" ? "font-colorselect" : undefined
                }
              />
            </div>
          </div>
        </div>
        <div>
          <div className="row">
            <div className="col-12">
              <Showrow
                data={{
                  icon: <NightsStayOutlinedIcon />,
                  title: "Wallpaper",
                  subtitle: "Match your preference",
                }}
              />
            </div>
          </div>
          <hr className="line" style={{ width: "100%" }} />
          <div
            className="d-flex flex-row align-items-center"
            style={{ margin: "auto", gap: "32px" }}
          >
            {wallpaperList.map((data, index) => {
              return (
                <div
                  className="iconframe buttonframe"
                  key={"data" + index}
                  disabled={wallpaper === data.value}
                  onClick={() => {
                    handleChange_setWallpaper(data.value);
                  }}
                  style={{
                    background: data.bg,
                  }}
                ></div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Themesettingscard;
