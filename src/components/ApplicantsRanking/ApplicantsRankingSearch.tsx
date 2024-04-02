import { BiSearch } from "react-icons/bi";

export default function ApplicantsRankingSearch() {
  return (
    <div>
      <div
        className="CompanyDashboardSearchFilterDesktop"
        style={{
          width: 1168,
          height: 60,
          paddingLeft: 32,
          paddingRight: 32,
          paddingTop: 24,
          paddingBottom: 24,
          background: "white",
          justifyContent: "space-between",
          alignItems: "center",
          display: "inline-flex",
        }}
      >
        <div
          className="TopApplicants19"
          style={{
            color: "#25324B",
            fontSize: 25,
            fontWeight: "700",
            wordWrap: "break-word",
          }}
        >
          Top Applicants : 19
        </div>
        <div
          className="Filter"
          style={{
            justifyContent: "center",
            alignItems: "center",
            gap: 16,
            display: "flex",
          }}
        >
          <div
            className="Frame5175"
            style={{
              justifyContent: "center",
              alignItems: "center",
              gap: 8,
              display: "flex",
            }}
          >
            <div
              className="Input"
              style={{
                height: 30,
                paddingLeft: 16,
                paddingRight: 16,
                paddingTop: 12,
                paddingBottom: 12,
                background: "white",
                border: "1px #D6DDEB solid",
                justifyContent: "flex-start",
                alignItems: "center",
                gap: 16,
                display: "flex",
              }}
            >
              <div
                className="Icon"
                style={{
                  width: 24,
                  height: 24,
                  paddingTop: 2.78,
                  paddingBottom: 2,
                  paddingLeft: 2.78,
                  paddingRight: 2.46,
                  justifyContent: "center",
                  alignItems: "center",
                  display: "flex",
                }}
              >
                <div
                  className="Search"
                  style={{ width: 18.76, height: 19.22, position: "relative" }}
                >
                  <BiSearch size={20} style={{ color: "#A8ADB7" }} />
                </div>
              </div>
              <div
                className="ThisIsPlaceholder"
                style={{
                  color: "#A8ADB7",
                  fontSize: 16,
                  fontWeight: "400",
                  wordWrap: "break-word",
                }}
              >
                Search Applicants
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
