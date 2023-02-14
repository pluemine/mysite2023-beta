import "./Public.css";
import Showrow from "./Showrow";

function Datacard(props) {
  const { cardData, cardId } = props;

  const outer = cardData[0].data[0].outercolumn
    ? cardData[0].data[0].outercolumn
    : "col-12";
  const inner = cardData[0].data[0].innercolumn
    ? cardData[0].data[0].innercolumn
    : "col-12";

  return (
    <div
      className="normal-card"
      style={{ marginBottom: "32px", scrollMarginTop: "92px" }}
      id={cardId}
    >
      <div className="normal-card-container">
        <div className="row" style={{ marginTop: "-32px" }}>
          <div className="col" style={{ marginTop: "32px" }}>
            <div className="font-header font-colormain">
              {cardData[0].data[0].title}
            </div>
            <div className="font-body font-colorsub">
              {cardData[0].data[0].subtitle}
            </div>
          </div>
          <div className={outer}>
            {cardData[0].list.map((data, index) => {
              return (
                <div
                  style={data.title ? { marginTop: "32px" } : undefined}
                  key={"data-profile" + index}
                >
                  {data.title ? (
                    <div className="font-bodybold font-colormain">
                      {data.title}
                    </div>
                  ) : undefined}
                  <div className="row">
                    {data.list.map((item, index) => {
                      return (
                        <div
                          className={inner}
                          style={{ marginTop: "32px" }}
                          key={"data-items" + index}
                        >
                          <Showrow data={item} />
                        </div>
                      );
                    })}
                  </div>
                  {index < cardData[0].list.length - 1 ? (
                    <hr
                      className="line"
                      style={{ width: "100%", marginTop: "32px" }}
                    />
                  ) : undefined}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Datacard;
