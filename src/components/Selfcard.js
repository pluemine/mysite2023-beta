import "./Public.css";
import Showcolumn from "./Showcolumn";

function Selfcard(props) {
  const { selfData, handleClickScroll } = props;

  return (
    <div className="self-card" style={{ marginBottom: "32px" }}>
      <div className="self-card-container">
        <div className="self-card-name-container">
          <img
            src={selfData[0].data[0].photo}
            style={{ borderRadius: "160px", width: "160px" }}
          />
          <div>
            <div className="text-center font-header font-colormain">
              {selfData[0].data[0].name}
            </div>
            <div className="text-center font-body font-colorsub">
              {selfData[0].data[0].position}
            </div>
          </div>
          <div className="button font-body" onClick={handleClickScroll}>
            Scroll to Profile
          </div>
        </div>
        <hr className="line" style={{ width: "100%" }} />
        <div style={{ marginBottom: "-32px" }}>
          <div style={{ marginBottom: "16px" }}>
            <div className="text-center font-subbodybold font-colormain">
              {selfData[0].data[0].title}
            </div>
            <div className="text-center font-subbody font-colorsub">
              {selfData[0].data[0].subtitle}
            </div>
          </div>
          <div className="text-center font-subbody font-colorsub">
            {selfData[0].data[0].inform}
          </div>
        </div>
        <div className="row" style={{ width: "100%" }}>
          {selfData[0].list.map((data, index) => {
            return (
              <div
                className="col-md-6 col-lg-3"
                style={{ marginTop: "32px" }}
                key={"data-selfcard" + index}
              >
                <Showcolumn data={data} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Selfcard;
