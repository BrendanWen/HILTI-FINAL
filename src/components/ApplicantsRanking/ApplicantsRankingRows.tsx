interface Props {
  name: string;
  score: string;
  stage: string;
  date: string;
}

export default function ApplicantsRankingRows(user: Props) {
  return (
    // <div>
    //   <div
    //     className="ApplicantList"
    //     style={{
    //       width: "93%",
    //       height: 78,
    //       padding: 16,
    //       background: "#F8F8FD",
    //       justifyContent: "space-around",
    //       alignItems: "center",
    //       display: "flex",
    //       marginLeft: "32px",
    //       gap: 40,
    //     }}
    //   >
    //     <div
    //       className="Checkbox"
    //       style={{
    //         justifyContent: "flex-start",
    //         alignItems: "center",
    //         gap: 16,
    //         display: "flex",
    //       }}
    //     >
    //       <div
    //         className="CheckboxFalse"
    //         style={{
    //           padding: 10,
    //           borderRadius: 4,
    //           overflow: "hidden",
    //           border: "2px #D6DDEB solid",
    //           flexDirection: "column",
    //           justifyContent: "flex-start",
    //           alignItems: "flex-start",
    //           gap: 10,
    //           display: "inline-flex",
    //         }}
    //       />
    //     </div>
    //     <div
    //       className="Name"
    //       style={{
    //         height: 40,
    //         justifyContent: "flex-start",
    //         alignItems: "center",
    //         gap: 0,
    //         display: "flex",
    //       }}
    //     >
    //       <div
    //         className="Frame1267"
    //         style={{
    //           justifyContent: "flex-start",
    //           alignItems: "center",
    //           gap: 16,
    //           display: "flex",
    //         }}
    //       >
    //         <div
    //           className="JakeGyll"
    //           style={{
    //             color: "#25324B",
    //             fontSize: 16,
    //             fontWeight: "500",
    //             wordWrap: "break-word",
    //           }}
    //         >
    //           John Mayer
    //         </div>
    //       </div>
    //     </div>
    //     <div
    //       className="Frame1263"
    //       style={{
    //         height: 26,
    //         justifyContent: "flex-start",
    //         alignItems: "center",
    //         gap: 8,
    //         display: "flex",
    //       }}
    //     >
    //       <div
    //         className="0"
    //         style={{
    //           color: "#25324B",
    //           fontSize: 16,
    //           fontWeight: "500",
    //           wordWrap: "break-word",
    //         }}
    //       >
    //         5.0
    //       </div>
    //     </div>
    //     <div
    //       className="Label"
    //       style={{
    //         width: 183,
    //         flexDirection: "column",
    //         justifyContent: "flex-start",
    //         alignItems: "flex-start",
    //         gap: 10,
    //         display: "inline-flex",
    //       }}
    //     >
    //       <div
    //         className="Label"
    //         style={{
    //           paddingLeft: 10,
    //           paddingRight: 10,
    //           paddingTop: 6,
    //           paddingBottom: 6,
    //           borderRadius: 80,
    //           border: "1px #FFB836 solid",
    //           justifyContent: "center",
    //           alignItems: "center",
    //           gap: 8,
    //           display: "inline-flex",
    //         }}
    //       >
    //         <div
    //           className="Caption"
    //           style={{
    //             color: "#FFB836",
    //             fontSize: 14,
    //             fontWeight: "600",
    //             wordWrap: "break-word",
    //           }}
    //         >
    //           In Review
    //         </div>
    //       </div>
    //     </div>
    //     <div
    //       className="July2021"
    //       style={{
    //         width: 205,
    //         alignSelf: "center",
    //         color: "#25324B",
    //         fontSize: 16,
    //         fontWeight: "500",
    //         wordWrap: "break-word",
    //       }}
    //     >
    //       13 July, 2021
    //     </div>
    //     <div
    //       className="Frame1265"
    //       style={{
    //         justifyContent: "center",
    //         alignItems: "center",
    //         gap: 16,
    //         display: "flex",
    //       }}
    //     >
    //       <div
    //         className="ButtonSecondaryFilledSmallNoIcon"
    //         style={{
    //           padding: "10px",
    //           background: "#FCD4D4",
    //           border: "1px #D2051E solid",
    //           justifyContent: "center",
    //           alignItems: "center",
    //           gap: 10,
    //           display: "flex",
    //         }}
    //       >
    //         <div
    //           className="Caption"
    //           style={{
    //             textAlign: "center",
    //             color: "#D2051E",
    //             fontSize: 14,
    //             fontWeight: "700",
    //             wordWrap: "break-word",
    //           }}
    //         >
    //           See Application
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
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
          marginLeft: "32px",
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
              border: "2px #D6DDEB solid",
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
                color: "#7C8493",
                fontSize: 16,
                fontWeight: "400",
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
              color: "#7C8493",
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
              color: "#7C8493",
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
              color: "#7C8493",
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
              color: "#7C8493",
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
