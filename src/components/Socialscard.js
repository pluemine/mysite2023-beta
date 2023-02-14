import "./Public.css";
import Showcolumn from "./Showcolumn";

function Socialscard(props) {
  const { socialsData } = props;

  return (
    <div className="normal-card" style={{ marginBottom: "32px" }}>
      <div className="normal-card-container">
        <div>
          <div className="font-header font-colormain">
            {socialsData[0].data[0].title}
          </div>
          <div className="font-body font-colorsub">
            {socialsData[0].data[0].subtitle}
          </div>
        </div>
        <div className="row" style={{ width: "100%" }}>
          {socialsData[0].list.map((data, index) => {
            return (
              <div
                className="col-md-6 col-lg-3"
                style={{ marginTop: "32px" }}
                key={"data-socials" + index}
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

export default Socialscard;
