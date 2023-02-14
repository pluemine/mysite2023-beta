import "./Public.css";
import Showrow from "./Showrow";

function Versioncard(props) {
  const { versionData } = props;

  return (
    <div className="normal-card" style={{ marginBottom: "32px" }}>
      <div className="normal-card-container">
        <div className="row">
          <div className="col-12">
            <Showrow data={versionData} />
          </div>
        </div>
        <div
          className="d-flex justify-content-end font-body font-colormain"
          style={{ width: "100%" }}
        >
          {versionData.copyright}
        </div>
      </div>
    </div>
  );
}

export default Versioncard;
