import "./Public.css";

function Showrow(props) {
  const { data } = props;

  return (
    <div className="show-flex-row">
      <div className="iconframe" style={{ marginRight: "8px" }}>
        {data.icon}
      </div>
      <div
        className="d-flex flex-column"
        style={{
          gap: "8px",
          flex: 1,
        }}
      >
        <div>
          <div className="font-bodybold font-colormain">{data.title}</div>
          <div className="font-subbody font-colormain">{data.subtitle}</div>
        </div>
        {data.tag ? (
          <div className="tag">
            <div className="font-subbody">{data.tag}</div>
          </div>
        ) : undefined}
        {data.detail ? (
          <div className="font-subbody font-colorsub">
            <div>{data.detail}</div>
          </div>
        ) : undefined}
        {data.link
          ? data.link.map((data, index) => {
              return (
                <div
                  className="font-subbody font-colorselect"
                  key={"data-link" + index}
                >
                  {data.name}
                </div>
              );
            })
          : undefined}
      </div>
    </div>
  );
}

export default Showrow;
