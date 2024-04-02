export default function ApplicantsRankingTabs() {
  return (
    <div>
      <div
        className="Tabs"
        style={{
          width: "95%",
          height: 37,
          background: "white",
          boxShadow: "0px -1px 0px #D6DDEB inset",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          gap: 40,
          display: "inline-flex",
          marginLeft: "32px",
        }}
      >
        <div
          className="TabMenu"
          style={{
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center",
            gap: 7,
            display: "inline-flex",
          }}
        >
          <div
            className="Caption"
            style={{
              color: "#25324B",
              fontSize: 16,
              fontWeight: "600",
              wordWrap: "break-word",
            }}
          >
            Applicants
          </div>
          <div
            className="Rectangle173"
            style={{ alignSelf: "stretch", height: 4, background: "#D2051E" }}
          ></div>
        </div>
        <div
          className="TabMenu"
          style={{
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center",
            gap: 7,
            display: "inline-flex",
          }}
        >
          <div
            className="Caption"
            style={{
              color: "#7C8493",
              fontSize: 16,
              fontWeight: "600",
              wordWrap: "break-word",
            }}
          >
            Job Details
          </div>
        </div>
        <div
          className="TabMenu"
          style={{
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center",
            gap: 7,
            display: "inline-flex",
          }}
        >
          <div
            className="Caption"
            style={{
              color: "#7C8493",
              fontSize: 16,
              fontWeight: "600",
              wordWrap: "break-word",
            }}
          >
            Analytics
          </div>
        </div>
      </div>
    </div>
  );
}
