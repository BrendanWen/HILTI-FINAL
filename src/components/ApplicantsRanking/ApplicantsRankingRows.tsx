interface Props {
  name: string;
  score: string;
  stage: string;
  date: string;
}

export default function ApplicantsRankingRows(user: Props) {
  return (
    <div>
      <div
        className="Header"
        style={{
          width: "93%",
          height: 30,
          padding: 16,
          background: "#F8F8FD",
          justifyContent: "space-around",
          alignItems: "center",
          display: "inline-flex",
          marginLeft: "40px",
          marginRight: "32px",
        }}
      >
        <div
          className="Checkbox"
          style={{
            justifyContent: "flex-start",
            alignItems: "center",
            gap: 16,
            display: "flex",
          }}
        >
          <div
            className="CheckboxFalse"
            style={{
              padding: 10,
              borderRadius: 4,
              overflow: "hidden",
              border: "2px #25324B solid",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              gap: 10,
              display: "inline-flex",
            }}
          />
        </div>
        <div
          className="FullName"
          style={{
            height: 26,
            justifyContent: "flex-start",
            alignItems: "center",
            gap: 24,
            display: "flex",
          }}
        >
          <div
            className="Frame1266"
            style={{
              justifyContent: "center",
              alignItems: "center",
              gap: 8,
              display: "flex",
            }}
          >
            <div
              className="FullName"
              style={{
                color: "#25324B",
                fontSize: 16,
                fontWeight: "500",
                wordWrap: "break-word",
              }}
            >
              {user.name}
            </div>
          </div>
        </div>
        <div
          className="Score"
          style={{
            height: 26,
            justifyContent: "flex-start",
            alignItems: "center",
            gap: 8,
            display: "flex",
          }}
        >
          <div
            className="Score"
            style={{
              color: "#25324B",
              fontSize: 16,
              fontWeight: "400",
              wordWrap: "break-word",
            }}
          >
            {user.score}
          </div>
        </div>
        <div
          className="Stage"
          style={{
            height: 26,
            justifyContent: "flex-start",
            alignItems: "center",
            gap: 8,
            display: "flex",
          }}
        >
          <div
            className="HiringStage"
            style={{
              color: "#25324B",
              fontSize: 16,
              fontWeight: "400",
              wordWrap: "break-word",
            }}
          >
            {user.stage}
          </div>
        </div>
        <div
          className="AppliedDate"
          style={{
            height: 26,
            justifyContent: "flex-start",
            alignItems: "center",
            gap: 8,
            display: "flex",
          }}
        >
          <div
            className="AppliedDate"
            style={{
              color: "#25324B",
              fontSize: 16,
              fontWeight: "400",
              wordWrap: "break-word",
            }}
          >
            {user.date}
          </div>
        </div>
        <div
          className="AppliedDate"
          style={{
            justifyContent: "flex-start",
            alignItems: "center",
            gap: 8,
            display: "flex",
          }}
        >
          <div
            className="Action"
            style={{
              color: "#25324B",
              fontSize: 16,
              fontWeight: "400",
              wordWrap: "break-word",
            }}
          >
            See More
          </div>
        </div>
      </div>
    </div>
  );
}
