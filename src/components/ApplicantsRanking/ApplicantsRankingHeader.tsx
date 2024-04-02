export default function ApplicantsRankingHeader() {
  return (
    <div>
      <div
        className="Header"
        style={{
          width: "93%",
          height: 30,
          padding: 16,
          paddingLeft: "230px",
          background: "white",
          border: "1px #D6DDEB solid",
          gap: "120px",
          alignItems: "center",
          display: "inline-flex",
          marginLeft: "32px",
          marginRight: "32px",
        }}
      >
        <div
          className="FullName"
          style={{
            height: 26,
            justifyContent: "flex-start",
            alignItems: "center",
            display: "flex",
          }}
        >
          <div
            className="Frame1266"
            style={{
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
            }}
          >
            <div
              className="FullName"
              style={{
                color: "#7C8493",
                fontSize: 16,
                fontWeight: "400",
                wordWrap: "break-word",
              }}
            >
              Full Name
            </div>
          </div>
        </div>
        <div
          className="Score"
          style={{
            height: 26,
            justifyContent: "flex-start",
            alignItems: "center",
            display: "flex",
          }}
        >
          <div
            className="Score"
            style={{
              color: "#7C8493",
              fontSize: 16,
              fontWeight: "400",
              wordWrap: "break-word",
            }}
          >
            Score
          </div>
        </div>
        <div
          className="Stage"
          style={{
            height: 26,
            justifyContent: "flex-start",
            alignItems: "center",
            display: "flex",
          }}
        >
          <div
            className="HiringStage"
            style={{
              color: "#7C8493",
              fontSize: 16,
              fontWeight: "400",
              wordWrap: "break-word",
            }}
          >
            Hiring Stage
          </div>
        </div>
        <div
          className="AppliedDate"
          style={{
            height: 26,
            justifyContent: "flex-start",
            alignItems: "center",
            display: "flex",
          }}
        >
          <div
            className="AppliedDate"
            style={{
              color: "#7C8493",
              fontSize: 16,
              fontWeight: "400",
              wordWrap: "break-word",
            }}
          >
            Applied Date
          </div>
        </div>
        <div
          className="AppliedDate"
          style={{
            justifyContent: "flex-start",
            alignItems: "center",
            display: "flex",
          }}
        >
          <div
            className="Action"
            style={{
              color: "#7C8493",
              fontSize: 16,
              fontWeight: "400",
              wordWrap: "break-word",
            }}
          >
            Action
          </div>
        </div>
      </div>
    </div>
  );
}
