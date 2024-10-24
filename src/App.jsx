import React from "react";
import Notification1 from "./002-notification-1.png";
import chipCard from "./chip-card.png";
import creditCard1 from "./credit-card-1.svg";
import economicInvestment1 from "./economic-investment-1.svg";
import group19 from "./group-19.png";
import group240 from "./group-240.png";
import group322 from "./group-322.png";
import group323 from "./group-323.png";
import group398 from "./group-398.png";
import group399 from "./group-399.png";
import home2 from "./home-2.svg";
import loan1 from "./loan-1.svg";
import magnifyingGlass1 from "./magnifying-glass-1.svg";
import maskGroup from "./mask-group.png";
import service1 from "./service-1.svg";
import settings1 from "./settings-1.svg";
import settingsSolid1 from "./settings-solid-1.svg";
import "./style.css";
import transfer1 from "./transfer-1.svg";
import user31 from "./user-3-1.svg";

export const MainDashboard = () => {
  return (
    <div className="main-dashboard">
      <div className="overlap-wrapper">
        <div className="overlap">
          <div className="overlap-group">
            <div className="weekly-activity">
              <div className="text-wrapper">Weekly Activity</div>

              <img className="group" alt="Group" src={group240} />
            </div>

            <div className="expense-stats">
              <div className="text-wrapper">Expense Statistics</div>

              <img className="img" alt="Group" src={group399} />
            </div>

            <div className="recent-transaction">
              <div className="text-wrapper">Recent Transaction</div>

              <img className="group-2" alt="Group" src={group398} />
            </div>

            <div className="quick-transfer">
              <div className="text-wrapper">Quick Transfer</div>

              <img className="group-3" alt="Group" src={group322} />
            </div>

            <div className="balance-history">
              <div className="text-wrapper">Balance History</div>

              <img className="group-4" alt="Group" src={group323} />
            </div>

            <div className="my-cards">
              <div className="div">My Cards</div>

              <img className="group-2" alt="Group" src={group19} />

              <div className="group-5">
                <div className="group-wrapper">
                  <div className="group-6">
                    <div className="text-wrapper-2">3778 **** **** 1234</div>

                    <div className="overlap-group-wrapper">
                      <div className="overlap-group-2">
                        <div className="ellipse" />

                        <div className="ellipse-2" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="number-day-month">
                  <div className="text-wrapper-3">VALID THRU</div>

                  <div className="text-wrapper-4">12/22</div>
                </div>

                <div className="card-name">
                  <div className="text-wrapper-3">CARD HOLDER</div>

                  <div className="text-wrapper-4">Eddy Cusuma</div>
                </div>

                <div className="blance">
                  <div className="text-wrapper-5">Balance</div>

                  <div className="text-wrapper-6">$5,756</div>
                </div>

                <img className="chip-card" alt="Chip card" src={chipCard} />
              </div>

              <div className="text-wrapper-7">See All</div>
            </div>
          </div>

          <div className="overlap-2">
            <header className="header">
              <div className="div-wrapper">
                <div className="group-7">
                  <div className="group-8">
                    <img
                      className="mask-group"
                      alt="Mask group"
                      src={maskGroup}
                    />

                    <div className="settings-wrapper">
                      <img
                        className="settings"
                        alt="Settings"
                        src={settings1}
                      />
                    </div>

                    <div className="element-notification-wrapper">
                      <img
                        className="element-notification"
                        alt="Element notification"
                        src={Notification1}
                      />
                    </div>

                    <div className="text-wrapper-8">Overview</div>

                    <div className="group-9">
                      <div className="overlap-group-3">
                        <img
                          className="magnifying-glass"
                          alt="Magnifying glass"
                          src={magnifyingGlass1}
                        />

                        <div className="text-wrapper-9">
                          Search for something
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="logo">
                    <div className="iconfinder-vector" />

                    <div className="TU-planner">BankDash.</div>
                  </div>
                </div>
              </div>

              <div className="rectangle" />
            </header>

            <div className="sidebar-menu">
              <div className="group-10">
                <img className="service" alt="Service" src={service1} />

                <img
                  className="settings-solid"
                  alt="Settings solid"
                  src={settingsSolid1}
                />

                <img
                  className="credit-card"
                  alt="Credit card"
                  src={creditCard1}
                />

                <img
                  className="economic-investment"
                  alt="Economic investment"
                  src={economicInvestment1}
                />

                <img className="transfer" alt="Transfer" src={transfer1} />

                <img className="loan" alt="Loan" src={loan1} />

                <div className="text-wrapper-10">Courses</div>

                <div className="text-wrapper-11">Register</div>

                <div className="text-wrapper-12">Planner</div>

                <div className="text-wrapper-13">TUmail</div>

                <div className="text-wrapper-14">Canvas</div>

                <div className="text-wrapper-15">Major</div>

                <div className="text-wrapper-16">Setting</div>

                <img className="user" alt="User" src={user31} />

                <div className="group-11">
                  <img className="home" alt="Home" src={home2} />

                  <div className="text-wrapper-17">Dashboard</div>

                  <div className="rectangle-2" />
                </div>
              </div>

              <div className="rectangle-3" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
