import React from "react";
import { ProgressBar } from "react-bootstrap";
import GaugeComponent from "react-gauge-component";
import DashboardPie from "./DashboardPie";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import blueberry from "../../assets/blueberry.png";
import avocado from "../../assets/avocado.png";
import avatar from "../../assets/Avatar.png";
import "react-circular-progressbar/dist/styles.css";

export default function DashboardHome() {
  return (
    <section className="vh-100">
      <div className="container-fluid h-100">
        <div className="row h-100">
          <div
            className="col-lg-9 d-flex flex-column gap-4 px-4 py-3 text-white"
            style={{ backgroundColor: "#181818" }}
          >
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex flex-column gap-2">
                <p className="p-0 m-0">Good Morning</p>
                <h2 className="p-0 m-0">Welcome Back🎉</h2>
              </div>
              <div className="d-flex align-items-center gap-4">
                <button className="btn btn-danger">Subscribe</button>
                <i className="fa-solid fa-bell"></i>
                <div
                  style={{ width: "30px", height: "30px" }}
                  className="rounded-circle border border-2 border-red d-flex justify-content-center align-items-center"
                >
                  <i className="fa-solid fa-plus text-red"></i>
                </div>
              </div>
            </div>
            <div className="row g-4">
              <div className="col-md-4">
                <div className="bg-dark-red p-3 rounded-3 h-100 d-flex flex-column justify-content-between">
                  <p className="m-0">
                    <i className="fa-solid fa-person-running me-2"></i>
                    <span className="fw-medium">Steps</span>
                  </p>
                  <div className="d-flex align-items-baseline">
                    <p className="fs-2 me-1 fw-semibold">2,500</p>
                    <p className="fw-light">Steps</p>
                  </div>
                  <div>
                    <ProgressBar variant="white" now={60} />
                    <p className="mb-0 mt-2 fw-light">50% of your goals</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="bg-dark-red p-3 rounded-3">
                  <p className="m-0">
                    <i className="fa-solid fa-fire-alt me-2"></i>
                    <span className="fw-medium">Calories</span>
                  </p>
                  <GaugeComponent
                    type="semicircle"
                    style={{ width: "200px", marginInline: "auto" }}
                    arc={{
                      nbSubArcs: 1,
                      colorArray: ["white"],
                      width: 0.3,
                    }}
                    pointer={{
                      color: "grey",
                      length: 0.8,
                      width: 15,
                    }}
                    labels={{
                      valueLabel: {
                        hide: true,
                      },
                      tickLabels: {
                        hideMinMax: true,
                      },
                    }}
                    value={50}
                  />
                  <p className="m-0 p-0 text-center fw-light">Today</p>
                  <p className="m-0 p-0 text-center">Under</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="bg-dark-red p-3 rounded-3 h-100 d-flex flex-column justify-content-between">
                  <p>
                    <i className="fa-solid fa-heart-pulse me-2"></i>
                    <span className="fw-medium">Heart Rate</span>
                  </p>
                  <div className="text-center">
                    <svg
                      width={100}
                      viewBox="0 4 19 14"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#ffffff"
                      stroke="#ffffff"
                    >
                      <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                      <g
                        id="SVGRepo_tracerCarrier"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <g id="SVGRepo_iconCarrier">
                        <path
                          d="m0 6.5h2l2.5-6 2 12 3-9 2.095 6 1.405-3h2"
                          fill="none"
                          stroke="#ffffff"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          transform="translate(3 4)"
                        />
                      </g>
                    </svg>
                  </div>
                  <div className="d-flex align-items-baseline">
                    <p className="fs-2 me-1 mb-0">110</p>
                    <p className="mb-0 fw-light">Bpm</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="bg-grey p-3 rounded-3 h-100">
                  <div className="d-flex justify-content-between">
                    <p className="m-0 fs-5 fw-semibold">Progress</p>
                    <select name="" id="progress-select">
                      <option value="">Weekly</option>
                      <option value="">Monthly</option>
                      <option value="">Yearly</option>
                    </select>
                  </div>
                  <div className="row align-items-center mt-3">
                    <div className="col-md-6">
                      <DashboardPie />
                    </div>
                    <div className="col-md-6 d-flex flex-column gap-3">
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center gap-2.5">
                          <div
                            style={{
                              width: "8px",
                              height: "8px",
                              backgroundColor: "#0088FE",
                            }}
                            className="rounded-circle"
                          ></div>
                          <span>Cardio</span>
                        </div>
                        <span>30 hrs</span>
                      </div>
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center gap-2.5">
                          <div
                            style={{
                              width: "8px",
                              height: "8px",
                              backgroundColor: "#00C49F",
                            }}
                            className="rounded-circle"
                          ></div>
                          <span>Stretching</span>
                        </div>
                        <span>40 hrs</span>
                      </div>
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center gap-2.5">
                          <div
                            style={{
                              width: "8px",
                              height: "8px",
                              backgroundColor: "#FFBB28",
                            }}
                            className="rounded-circle"
                          ></div>
                          <span>Treadmill</span>
                        </div>
                        <span>30 hrs</span>
                      </div>
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center gap-2.5">
                          <div
                            style={{
                              width: "8px",
                              height: "8px",
                              backgroundColor: "#FF8042",
                            }}
                            className="rounded-circle"
                          ></div>
                          <span>Strength</span>
                        </div>
                        <span>20 hrs</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <p className="mb-2 fs-5 fw-semibold">Featured Diet Menu</p>
                <div className="bg-grey p-3 rounded-3">
                  <div className="p-2.5 bg-dark-red rounded-2 d-flex justify-content-between align-items-center fw-medium">
                    <span>Breakfast</span>
                    <span>10:00 am</span>
                  </div>
                  <div className="d-flex align-items-center gap-3 py-3">
                    <div style={{ width: "60px", height: "60px" }}>
                      <img src={avocado} className="w-100 rounded-circle" />
                    </div>
                    <div>
                      <p className="mb-1 fw-semibold">Avocado Salad</p>
                      <div className="d-flex align-items-center gap-5">
                        <div className="d-flex align-items-center gap-1">
                          <div
                            style={{
                              width: "6px",
                              height: "6px",
                              backgroundColor: "#7c6ee5",
                            }}
                            className="rounded-circle"
                          ></div>
                          <span style={{ fontSize: 12 }} className="text-light-grey">
                            8% Carbs
                          </span>
                        </div>
                        <div className="d-flex align-items-center gap-1">
                          <div
                            style={{
                              width: "6px",
                              height: "6px",
                              backgroundColor: "#f28b42",
                            }}
                            className="rounded-circle"
                          ></div>
                          <span style={{ fontSize: 12 }} className="text-light-grey">
                            16% Protien
                          </span>
                        </div>
                        <div className="d-flex align-items-center gap-1">
                          <div
                            style={{
                              width: "6px",
                              height: "6px",
                              backgroundColor: "#e95071",
                            }}
                            className="rounded-circle"
                          ></div>
                          <span style={{ fontSize: 12 }} className="text-light-grey">
                            6% Fats
                          </span>
                        </div>
                      </div>
                      <div className="d-flex justify-content-center align-items-center gap-1 mt-1">
                        <div
                          className="rounded-pill"
                          style={{
                            width: 80,
                            height: 10,
                            backgroundColor: "#7c6ee5",
                          }}
                        />
                        <div
                          className="rounded-pill"
                          style={{
                            width: 150,
                            height: 10,
                            backgroundColor: "#f28b42",
                          }}
                        />
                        <div
                          className="rounded-pill"
                          style={{
                            width: 100,
                            height: 10,
                            backgroundColor: "#e95071",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="d-flex align-items-center gap-3 py-3">
                    <div style={{ width: "60px", height: "60px" }}>
                      <img src={blueberry} className="w-100 rounded-circle" />
                    </div>
                    <div>
                      <p className="mb-1 fw-semibold">Blueberry</p>
                      <div className="d-flex align-items-center gap-5">
                        <div className="d-flex align-items-center gap-1">
                          <div
                            style={{
                              width: "6px",
                              height: "6px",
                              backgroundColor: "#7c6ee5",
                            }}
                            className="rounded-circle"
                          ></div>
                          <span style={{ fontSize: 12 }} className="text-light-grey">
                            8% Carbs
                          </span>
                        </div>
                        <div className="d-flex align-items-center gap-1">
                          <div
                            style={{
                              width: "6px",
                              height: "6px",
                              backgroundColor: "#f28b42",
                            }}
                            className="rounded-circle"
                          ></div>
                          <span style={{ fontSize: 12 }} className="text-light-grey">
                            16% Protien
                          </span>
                        </div>
                        <div className="d-flex align-items-center gap-1">
                          <div
                            style={{
                              width: "6px",
                              height: "6px",
                              backgroundColor: "#e95071",
                            }}
                            className="rounded-circle"
                          ></div>
                          <span style={{ fontSize: 12 }} className="text-light-grey">
                            6% Fats
                          </span>
                        </div>
                      </div>
                      <div className="d-flex justify-content-center align-items-center gap-1 mt-1">
                        <div
                          className="rounded-pill"
                          style={{
                            width: 80,
                            height: 10,
                            backgroundColor: "#7c6ee5",
                          }}
                        />
                        <div
                          className="rounded-pill"
                          style={{
                            width: 150,
                            height: 10,
                            backgroundColor: "#f28b42",
                          }}
                        />
                        <div
                          className="rounded-pill"
                          style={{
                            width: 100,
                            height: 10,
                            backgroundColor: "#e95071",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-lg-3 text-white px-4 py-3 d-flex flex-column gap-3"
            style={{ backgroundColor: "#181818" }}
          >
            <div className="d-flex align-items-center gap-2.5">
              <div style={{ width: "60px", height: "60px" }}>
                <img src={avatar} className="w-100 rounded-4" />
              </div>
              <div className="d-flex flex-column">
                <span className="fw-semibold fs-5">Thomas Fletcher</span>
                <span style={{ fontSize: 14 }} className="text-secondary">
                  <i className="fa-solid fa-location-dot me-2"></i>
                  Sydney, Australia
                </span>
              </div>
            </div>
            <div className="bg-grey px-4 py-3 rounded-4 text-center d-flex justify-content-between">
              <div>
                <div className="d-flex align-items-baseline">
                  <span className="fs-4 fw-semibold">70</span>
                  <span className="text-light-grey">kg</span>
                </div>
                <p className="mb-0 text-light-grey">Weight</p>
              </div>
              <div>
                <p className="mb-0 fs-4 fw-semibold">6.5</p>
                <p className="mb-0 text-light-grey">Height</p>
              </div>
              <div>
                <div className="d-flex align-items-baseline">
                  <span className="fs-4 fw-semibold">25</span>
                  <span className="text-light-grey">yrs</span>
                </div>
                <p className="mb-0 text-light-grey">Age</p>
              </div>
            </div>
            <div>
              <p className="mb-2 fw-semibold fs-5">Your Goals</p>
              <div className="d-flex flex-column gap-3">
                <div className="bg-grey p-2.5 rounded-4 d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center gap-2">
                    <div
                      style={{ width: "45px", height: "45px" }}
                      className="bg-secondary-subtle rounded-circle fs-3 d-flex justify-content-center align-items-center"
                    >
                      🏃‍♂️‍➡️
                    </div>
                    <div>
                      <p className="mb-0 fw-medium">Running</p>
                      <p
                        style={{ fontSize: 14 }}
                        className="mb-0 text-light-grey"
                      >
                        70km/80km
                      </p>
                    </div>
                  </div>
                  <div style={{ width: 50, height: 50 }}>
                    <CircularProgressbar
                      value={0.7}
                      maxValue={1}
                      text={`${0.7 * 100}%`}
                      strokeWidth={10}
                      styles={buildStyles({
                        pathColor: "#ffffff",
                        textColor: "#ffffff",
                        trailColor: "rgba(255, 255, 255, 0.2)",
                      })}
                    />
                  </div>
                </div>
                <div className="bg-grey p-2.5 rounded-4 d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center gap-2">
                    <div
                      style={{ width: "45px", height: "45px" }}
                      className="bg-secondary-subtle rounded-circle fs-3 d-flex justify-content-center align-items-center"
                    >
                      🛌
                    </div>
                    <div>
                      <p className="mb-0 fw-medium">Sleeping</p>
                      <p
                        style={{ fontSize: 14 }}
                        className="mb-0 text-light-grey"
                      >
                        50hrs/60hrs
                      </p>
                    </div>
                  </div>
                  <div style={{ width: 50, height: 50 }}>
                    <CircularProgressbar
                      value={0.6}
                      maxValue={1}
                      text={`${0.6 * 100}%`}
                      strokeWidth={10}
                      styles={buildStyles({
                        pathColor: "#ffffff",
                        textColor: "#ffffff",
                        trailColor: "rgba(255, 255, 255, 0.2)",
                      })}
                    />
                  </div>
                </div>
                <div className="bg-grey p-2.5 rounded-4 d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center gap-2">
                    <div
                      style={{ width: "45px", height: "45px" }}
                      className="bg-secondary-subtle rounded-circle fs-3 d-flex justify-content-center align-items-center"
                    >
                      🔥
                    </div>
                    <div>
                      <p className="mb-0 fw-medium">Weight Loss</p>
                      <p
                        style={{ fontSize: 14 }}
                        className="mb-0 text-light-grey"
                      >
                        70km/100km
                      </p>
                    </div>
                  </div>
                  <div style={{ width: 50, height: 50 }}>
                    <CircularProgressbar
                      value={0.5}
                      maxValue={1}
                      text={`${0.5 * 100}%`}
                      strokeWidth={10}
                      styles={buildStyles({
                        pathColor: "#ffffff",
                        textColor: "#ffffff",
                        trailColor: "rgba(255, 255, 255, 0.2)",
                      })}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <p className="mb-2 fw-semibold fs-5">Monthly Progress</p>
              <div className="bg-grey rounded-4 pb-3">
                <GaugeComponent
                  style={{ width: 180, marginInline: "auto" }}
                  value={40}
                  type="radial"
                  labels={{
                    tickLabels: {
                      hideMinMax: true,
                    },
                  }}
                  arc={{
                    colorArray: ["#D90A14"],
                    nbSubArcs: 40,
                    padding: 0.02,
                    width: 0.4,
                  }}
                  pointer={{ color: "#fff" }}
                />
                <p className="mb-0 text-center fw-light">
                  You have achieved{" "}
                  <span className="text-red fw-normal">40%</span> of your <br />{" "}
                  goal this month
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
