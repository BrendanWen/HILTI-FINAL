export default function ApplicantDetailsDashboard() {
  return (
    <div>
      <div
        className="CompanyDashboardApplicantProfileDesktop"
        style={{
          width: "100%",
          height: 810,
          padding: 24,
          paddingTop: 0,
          background: "white",
          border: "1px #D6DDEB solid",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
          gap: 24,
          display: "inline-flex",
          paddingRight: 24,
        }}
      >
        <div
          className="Tab"
          style={{
            paddingTop: 16,
            background: "white",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            gap: 10,
            display: "flex",
            borderBottom: "1px #D6DDEB solid",
            marginLeft: 32,
          }}
        >
          <div
            className="Tabs"
            style={{
              width: 456,
              paddingLeft: 24,
              background: "white",
              boxShadow: "0px -1px 0px #D6DDEB inset",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              gap: 40,
              display: "inline-flex",
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
                Applicant Profile
              </div>
              <div
                className="Rectangle173"
                style={{
                  alignSelf: "stretch",
                  height: 4,
                  background: "#D2051E",
                }}
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
                Compatibility
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
                Hiring Progress
              </div>
            </div>
          </div>
        </div>
        <div
          className="Content"
          style={{
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            gap: 24,
            display: "flex",
          }}
        >
          <div
            className="PersonalInfo"
            style={{
              height: 220,
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              gap: 16,
              display: "flex",
            }}
          >
            <div
              className="PersonalInfo"
              style={{
                color: "#25324B",
                fontSize: 18,
                fontWeight: "600",
                wordWrap: "break-word",
              }}
            >
              Personal Info
            </div>
            <div
              className="Content"
              style={{
                width: 456,
                justifyContent: "space-between",
                alignItems: "flex-start",
                display: "inline-flex",
              }}
            >
              <div
                className="Col1"
                style={{
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  gap: 16,
                  display: "inline-flex",
                }}
              >
                <div
                  className="Name"
                  style={{
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
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
                  <div
                    className="JeromeBell"
                    style={{
                      color: "#25324B",
                      fontSize: 16,
                      fontWeight: "500",
                      wordWrap: "break-word",
                    }}
                  >
                    Jonathon J. Mayer
                  </div>
                </div>
                <div
                  className="Dob"
                  style={{
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                    display: "flex",
                  }}
                >
                  <div
                    className="DateOfBirth"
                    style={{
                      color: "#7C8493",
                      fontSize: 16,
                      fontWeight: "400",
                      wordWrap: "break-word",
                    }}
                  >
                    Date of Birth
                  </div>
                  <div className="March23199526YO">
                    <span
                      style={{
                        color: "#25324B",
                        fontSize: 16,
                        fontWeight: "500",
                        wordWrap: "break-word",
                      }}
                    >
                      March 23, 1995{" "}
                    </span>
                    <span
                      style={{
                        color: "#A8ADB7",
                        fontSize: 16,
                        fontWeight: "500",
                        wordWrap: "break-word",
                      }}
                    >
                      (26 y.o)
                    </span>
                    <span
                      style={{
                        color: "#25324B",
                        fontSize: 16,
                        fontWeight: "500",
                        wordWrap: "break-word",
                      }}
                    >
                      {" "}
                    </span>
                  </div>
                </div>
              </div>
              <div
                className="Col2"
                style={{
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  gap: 16,
                  display: "inline-flex",
                }}
              >
                <div
                  className="Gender"
                  style={{
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                    display: "flex",
                  }}
                >
                  <div
                    className="Gender"
                    style={{
                      color: "#7C8493",
                      fontSize: 16,
                      fontWeight: "400",
                      wordWrap: "break-word",
                    }}
                  >
                    Gender
                  </div>
                  <div
                    className="Male"
                    style={{
                      color: "#25324B",
                      fontSize: 16,
                      fontWeight: "500",
                      wordWrap: "break-word",
                    }}
                  >
                    Male
                  </div>
                </div>
                <div
                  className="Language"
                  style={{
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                    display: "flex",
                  }}
                >
                  <div
                    className="Language"
                    style={{
                      color: "#7C8493",
                      fontSize: 16,
                      fontWeight: "400",
                      wordWrap: "break-word",
                    }}
                  >
                    Language
                  </div>
                  <div
                    className="EnglishFrenchBahasa"
                    style={{
                      color: "#25324B",
                      fontSize: 16,
                      fontWeight: "500",
                      wordWrap: "break-word",
                    }}
                  >
                    English, French, Malay
                  </div>
                </div>
              </div>
            </div>
            <div
              className="Address"
              style={{
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                display: "flex",
              }}
            >
              <div
                className="Address"
                style={{
                  color: "#7C8493",
                  fontSize: 16,
                  fontWeight: "400",
                  wordWrap: "break-word",
                }}
              >
                Address
              </div>
              <div
                className="WashingtonAveManchesterKentucky39495"
                style={{
                  width: 232,
                  color: "#25324B",
                  fontSize: 16,
                  fontWeight: "500",
                  wordWrap: "break-word",
                }}
              >
                4517 Washington Ave. Manchester, Kentucky 39495
              </div>
            </div>
          </div>
          <div
            className="Rectangle2758"
            style={{ alignSelf: "stretch", height: 1, background: "#D6DDEB" }}
          />
          <div
            className="ProfessionalInfo"
            style={{
              height: 421,
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              gap: 16,
              display: "flex",
            }}
          >
            <div
              className="ProfessionalInfo"
              style={{
                color: "#25324B",
                fontSize: 18,
                fontWeight: "600",
                wordWrap: "break-word",
              }}
            >
              Professional Info
            </div>
            <div
              className="AboutMe"
              style={{
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                gap: 8,
                display: "flex",
              }}
            >
              <div
                className="AboutMe"
                style={{
                  color: "#7C8493",
                  fontSize: 16,
                  fontWeight: "400",
                  wordWrap: "break-word",
                }}
              >
                About Me
              </div>
              <div
                className="AboutMe"
                style={{
                  height: 198,
                  background: "white",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  gap: 16,
                  display: "flex",
                }}
              >
                <div
                  className="IMAProductDesignerFilmmakerCurrentlyWorkingRemotelyAtTwitterFromBeautifulManchesterUnitedKingdomIMPassionateAboutDesigningDigitalProductsThatHaveAPositiveImpactOnTheWorld"
                  style={{
                    alignSelf: "stretch",
                    color: "#25324B",
                    fontSize: 16,
                    fontWeight: "500",
                    wordWrap: "break-word",
                  }}
                >
                  I'm a cybersecurity analyst currently working remotely to
                  protect digital assets at Twitter. With a decade of experience
                  in cybersecurity, I specialize in threat detection, incident
                  response, and security strategy development.{" "}
                </div>
                <div
                  className="For10YearsIVeSpecialisedInInterfaceExperienceInteractionDesignAsWellAsWorkingInUserResearchAndProductStrategyForProductAgenciesBigTechCompaniesStartUps"
                  style={{
                    alignSelf: "stretch",
                    color: "#25324B",
                    fontSize: 16,
                    fontWeight: "500",
                    wordWrap: "break-word",
                  }}
                >
                  My passion lies in securing digital environments to ensure a
                  positive impact on the world by safeguarding sensitive
                  information and preventing cyber threats. I've worked with
                  various organizations to strengthen their cybersecurity
                  posture and mitigate risks effectively.
                </div>
              </div>
            </div>
            <div
              className="Content"
              style={{
                alignSelf: "stretch",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                gap: 65,
                display: "inline-flex",
              }}
            >
              <div
                className="Col1"
                style={{
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  gap: 16,
                  display: "inline-flex",
                }}
              >
                <div
                  className="CurrentJob"
                  style={{
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                    display: "flex",
                  }}
                >
                  <div
                    className="CurrentJob"
                    style={{
                      color: "#7C8493",
                      fontSize: 16,
                      fontWeight: "400",
                      wordWrap: "break-word",
                    }}
                  >
                    Current Job
                  </div>
                  <div
                    className="ProductDesigner"
                    style={{
                      color: "#25324B",
                      fontSize: 16,
                      fontWeight: "500",
                      wordWrap: "break-word",
                      paddingTop: 5,
                    }}
                  >
                    Cyber Security Analyst
                  </div>
                </div>
                <div
                  className="HighestQualification"
                  style={{
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                    display: "flex",
                  }}
                >
                  <div
                    className="HighestQualificationHeld"
                    style={{
                      color: "#7C8493",
                      fontSize: 16,
                      fontWeight: "400",
                      wordWrap: "break-word",
                    }}
                  >
                    Highest Qualification Held
                  </div>
                  <div
                    className="BachelorsInEngineering"
                    style={{
                      color: "#25324B",
                      fontSize: 16,
                      fontWeight: "500",
                      wordWrap: "break-word",
                      paddingTop: 5,
                    }}
                  >
                    Bachelor of Computer Sci
                  </div>
                </div>
              </div>
              <div
                className="Col2"
                style={{
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  gap: 16,
                  display: "inline-flex",
                }}
              >
                <div
                  className="ExperienceInYears"
                  style={{
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                    display: "flex",
                  }}
                >
                  <div
                    className="ExperienceInYears"
                    style={{
                      color: "#7C8493",
                      fontSize: 16,
                      fontWeight: "400",
                      wordWrap: "break-word",
                    }}
                  >
                    Experience in Years
                  </div>
                  <div
                    className="Years"
                    style={{
                      color: "#25324B",
                      fontSize: 16,
                      fontWeight: "500",
                      wordWrap: "break-word",
                      paddingTop: 5,
                    }}
                  >
                    4 Years
                  </div>
                </div>
                <div
                  className="SkillSet"
                  style={{
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                    display: "flex",
                  }}
                >
                  <div
                    className="SkillSet"
                    style={{
                      color: "#7C8493",
                      fontSize: 16,
                      fontWeight: "400",
                      wordWrap: "break-word",
                      paddingBottom: 5,
                    }}
                  >
                    Skill set
                  </div>
                  <div
                    className="Frame1259"
                    style={{
                      justifyContent: "flex-start",
                      alignItems: "flex-start",
                      gap: 4,
                      display: "inline-flex",
                    }}
                  >
                    <div
                      className="Tag"
                      style={{
                        paddingLeft: 12,
                        paddingRight: 12,
                        paddingTop: 4,
                        paddingBottom: 4,
                        background: "#F8F8FD",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: 16,
                        display: "flex",
                      }}
                    >
                      <div
                        className="Caption"
                        style={{
                          color: "#D2051E",
                          fontSize: 16,
                          fontWeight: "400",
                          wordWrap: "break-word",
                        }}
                      >
                        Penetration Testing
                      </div>
                    </div>
                    <div
                      className="Tag"
                      style={{
                        paddingLeft: 12,
                        paddingRight: 12,
                        paddingTop: 4,
                        paddingBottom: 4,
                        background: "#F8F8FD",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: 16,
                        display: "flex",
                      }}
                    >
                      <div
                        className="Caption"
                        style={{
                          color: "#D2051E",
                          fontSize: 16,
                          fontWeight: "400",
                          wordWrap: "break-word",
                        }}
                      >
                        Risk Assessment
                      </div>
                    </div>
                    <div
                      className="Tag"
                      style={{
                        paddingLeft: 12,
                        paddingRight: 12,
                        paddingTop: 4,
                        paddingBottom: 4,
                        background: "#F8F8FD",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: 16,
                        display: "flex",
                      }}
                    >
                      <div
                        className="Caption"
                        style={{
                          color: "#D2051E",
                          fontSize: 16,
                          fontWeight: "400",
                          wordWrap: "break-word",
                        }}
                      >
                        Threat Analyst
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
