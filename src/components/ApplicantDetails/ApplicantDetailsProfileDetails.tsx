export default function ApplicantDetailsProfileDetails() {
  return (
    <div
      className="profile-details-flex"
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 21,
        width: "33%",
        height: 633,
      }}
    >
      <div
        className="AppliedJobs"
        style={{
          width: 313,
          height: 90,
          padding: 16,
          background: "#F8F8FD",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          gap: 10,
          display: "inline-flex",
        }}
      >
        <div
          className="Title"
          style={{
            alignSelf: "stretch",
            justifyContent: "space-between",
            alignItems: "flex-start",
            display: "inline-flex",
          }}
        >
          <div
            className="AppliedJobs"
            style={{
              color: "#25324B",
              fontSize: 14,
              fontWeight: "400",
              wordWrap: "break-word",
            }}
          >
            Applied Jobs
          </div>
          <div
            className="DaysAgo"
            style={{
              textAlign: "right",
              color: "#7C8493",
              fontSize: 14,
              fontWeight: "400",
              wordWrap: "break-word",
            }}
          >
            2 days ago
          </div>
        </div>
        <div
          className="Line"
          style={{ alignSelf: "stretch", height: 1, background: "#D6DDEB" }}
        />
        <div
          className="Jobs"
          style={{
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            gap: 2,
            display: "flex",
            paddingTop: 5,
          }}
        >
          <div
            className="ProductDevelopment"
            style={{
              color: "#25324B",
              fontSize: 16,
              fontWeight: "600",
              wordWrap: "break-word",
            }}
          >
            Cyber Security Architect
          </div>
          <div
            className="CompanyNameLocationJobType"
            style={{
              justifyContent: "center",
              alignItems: "center",
              gap: 8,
              display: "inline-flex",
            }}
          >
            <div
              className="Marketing"
              style={{
                color: "#515B6F",
                fontSize: 14,
                fontWeight: "400",
                wordWrap: "break-word",
              }}
            >
              Cyber Security
            </div>
            <div
              className="Ellipse4"
              style={{
                width: 4,
                height: 4,
                background: "#515B6F",
                borderRadius: 9999,
              }}
            />
            <div
              className="FullTime"
              style={{
                color: "#515B6F",
                fontSize: 14,
                fontWeight: "400",
                wordWrap: "break-word",
              }}
            >
              Full-Time
            </div>
          </div>
        </div>
      </div>
      <div
        className="AppliedJobs"
        style={{
          width: 313,
          height: 50,
          padding: 16,
          background: "#F8F8FD",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          gap: 16,
          display: "inline-flex",
        }}
      >
        <div
          className="Title"
          style={{
            alignSelf: "stretch",
            justifyContent: "space-between",
            alignItems: "flex-start",
            display: "inline-flex",
          }}
        >
          <div
            className="Stage"
            style={{
              color: "#25324B",
              fontSize: 14,
              fontWeight: "400",
              wordWrap: "break-word",
            }}
          >
            Stage
          </div>
          <div
            className="Frame1257"
            style={{
              justifyContent: "flex-start",
              alignItems: "center",
              gap: 8,
              display: "flex",
            }}
          >
            <div
              className="Ellipse103"
              style={{
                width: 10,
                height: 10,
                background: "#D2051E",
                borderRadius: 9999,
              }}
            />
            <div
              className="Interview"
              style={{
                textAlign: "right",
                color: "#D2051E",
                fontSize: 14,
                fontWeight: "400",
                wordWrap: "break-word",
              }}
            >
              Interview
            </div>
          </div>
        </div>
        <div
          className="Frame1258"
          style={{
            alignSelf: "stretch",
            height: 11,
            justifyContent: "flex-start",
            alignItems: "flex-start",
            gap: 2,
            display: "inline-flex",
          }}
        >
          <div
            className="Line"
            style={{
              flex: "1 1 0",
              alignSelf: "stretch",
              background: "#D2051E",
            }}
          />
          <div
            className="Line"
            style={{
              flex: "1 1 0",
              alignSelf: "stretch",
              background: "#D2051E",
            }}
          />
          <div
            className="Line"
            style={{
              flex: "1 1 0",
              alignSelf: "stretch",
              background: "#D2051E",
            }}
          />
          <div
            className="Line"
            style={{
              flex: "1 1 0",
              alignSelf: "stretch",
              background: "#D6DDEB",
            }}
          />
        </div>
      </div>

      <div
        className="Button"
        style={{
          width: 295,
          height: 50,
          paddingLeft: 24,
          paddingRight: 24,
          paddingTop: 12,
          paddingBottom: 12,
          border: "1px #F57E7E solid",
          justifyContent: "center",
          alignItems: "center",
          gap: 10,
          display: "inline-flex",
        }}
      >
        <div
          className="Caption"
          style={{
            textAlign: "center",
            color: "#D2051E",
            fontSize: 16,
            fontWeight: "700",
            wordWrap: "break-word",
          }}
        >
          Schedule Interview
        </div>
      </div>

      <div
        className="Line"
        style={{ width: 343, height: 1, background: "#D6DDEB" }}
      />
    </div>
  );
}
