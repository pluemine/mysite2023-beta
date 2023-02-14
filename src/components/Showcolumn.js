import "./Public.css";

function Showcolumn(props) {
  const { data } = props;

  return (
    <div className="show-flex-column">
      <div className="iconframe" style={{ marginBottom: "8px" }}>
        {data.icon}
      </div>
      <div style={{ textAlign: "center" }}>
        <div className="font-bodybold font-colormain">{data.title}</div>
        <div className="font-subbody font-colorsub">{data.subtitle}</div>
      </div>
    </div>
  );
}

export default Showcolumn;
