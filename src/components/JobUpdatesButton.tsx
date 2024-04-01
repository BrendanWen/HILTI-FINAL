function JobUpdatesButton() {
  <div
    className="JobList"
    style={{
      width: 246.5,
      height: 269,
      padding: 24,
      background: "white",
      border: "1px #D6DDEB solid",
      flexDirection: "column",
      justifyContent: "flex-start",
      alignItems: "flex-start",
      gap: 22,
      display: "inline-flex",
    }}
  >
    <div
      className="Content"
      style={{
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        gap: 16,
        display: "flex",
      }}
    >
      <div
        className="Header"
        style={{
          width: 205,
          justifyContent: "space-between",
          alignItems: "flex-start",
          display: "inline-flex",
        }}
      >
        <div
          className="Label"
          style={{
            paddingLeft: 10,
            paddingRight: 10,
            paddingTop: 6,
            paddingBottom: 6,
            background: "rgba(255, 238, 240, 0.10)",
            borderRadius: 80,
            justifyContent: "flex-end",
            alignItems: "center",
            gap: 8,
            display: "flex",
          }}
        >
          <div
            className="Caption"
            style={{
              color: "#D2051E",
              fontSize: 14,
              fontWeight: "600",
              wordWrap: "break-word",
            }}
          >
            Full-Time
          </div>
        </div>
      </div>
      <div
        className="JobTitle"
        style={{
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          gap: 2,
          display: "flex",
        }}
      >
        <div
          className="SocialMediaAssistant"
          style={{
            color: "#25324B",
            fontSize: 18,
            fontWeight: "600",

            wordWrap: "break-word",
          }}
        >
          Social Media Assistant
        </div>
        <div
          className="Location"
          style={{
            justifyContent: "center",
            alignItems: "center",
            gap: 8,
            display: "inline-flex",
          }}
        >
          <div
            className="Nomad"
            style={{
              color: "#7C8493",
              fontSize: 16,
              fontWeight: "400",

              wordWrap: "break-word",
            }}
          >
            Nomad
          </div>
          <div
            className="Ellipse4"
            style={{
              width: 4,
              height: 4,
              background: "#A8ADB7",
              borderRadius: 9999,
            }}
          />
          <div
            className="ParisFrance"
            style={{
              color: "#7C8493",
              fontSize: 16,
              fontWeight: "400",
              wordWrap: "break-word",
            }}
          >
            Paris, France
          </div>
        </div>
      </div>
    </div>
    <div
      className="Labels"
      style={{
        justifyContent: "flex-start",
        alignItems: "flex-start",
        gap: 8,
        display: "inline-flex",
      }}
    >
      <div
        className="Label"
        style={{
          paddingLeft: 10,
          paddingRight: 10,
          paddingTop: 6,
          paddingBottom: 6,
          borderRadius: 80,
          border: "1px #FFB836 solid",
          justifyContent: "center",
          alignItems: "center",
          gap: 8,
          display: "flex",
        }}
      >
        <div
          className="Caption"
          style={{
            color: "#FFB836",
            fontSize: 14,
            fontWeight: "600",
            wordWrap: "break-word",
          }}
        >
          Marketing
        </div>
      </div>
      <div
        className="Label"
        style={{
          paddingLeft: 10,
          paddingRight: 10,
          paddingTop: 6,
          paddingBottom: 6,
          borderRadius: 80,
          border: "1px #F77307 solid",
          justifyContent: "center",
          alignItems: "center",
          gap: 8,
          display: "flex",
        }}
      >
        <div
          className="Caption"
          style={{
            color: "#F77307",
            fontSize: 14,
            fontWeight: "600",
            wordWrap: "break-word",
          }}
        >
          Design
        </div>
      </div>
    </div>
    <div
      className="Frame1186"
      style={{
        alignSelf: "stretch",
        height: 36,
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        gap: 8,
        display: "flex",
      }}
    >
      <div
        className="ProgressBar"
        style={{
          alignSelf: "stretch",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          display: "inline-flex",
        }}
      >
        <div
          className="Rectangle2744"
          style={{ flex: "1 1 0", height: 6, background: "#D2051E" }}
        />
        <div
          className="Rectangle2745"
          style={{ flex: "1 1 0", height: 6, background: "#D2051E" }}
        />
        <div
          className="Rectangle2746"
          style={{ flex: "1 1 0", height: 6, background: "#D6DDEB" }}
        />
        <div
          className="Rectangle2747"
          style={{ flex: "1 1 0", height: 6, background: "#D6DDEB" }}
        />
        <div
          className="Rectangle2743"
          style={{ flex: "1 1 0", height: 6, background: "#D6DDEB" }}
        />
      </div>
      <div className="AppliedOf10Capacity" style={{ textAlign: "center" }}>
        <span
          style={{
            color: "#25324B",
            fontSize: 14,
            fontWeight: "600",
            wordWrap: "break-word",
          }}
        >
          5 applied
        </span>
        <span
          style={{
            color: "black",
            fontSize: 14,
            fontWeight: "400",
            wordWrap: "break-word",
          }}
        >
          {" "}
        </span>
        <span
          style={{
            color: "#7C8493",
            fontSize: 14,
            fontWeight: "400",
            wordWrap: "break-word",
          }}
        >
          of 10 capacity
        </span>
      </div>
    </div>
  </div>;
}

export default JobUpdatesButton;
