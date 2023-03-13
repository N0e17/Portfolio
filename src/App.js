import "./App.css";
import React from "react";
import { useState } from "react";
import Links from "./components/contact";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Biography from "./components/biography";
import Projects from "./components/homepage";
import Resume from "./components/resume";
import Contact from "./components/contact";
import ProjectOneDesc from "./components/projectOneDesc";
import ProjectTwoDesc from "./components/projectTwoDesc";
import ProjectThreeDesc from "./components/projectThreeDesc";
import { Layout, Menu, theme } from "antd";

function getItem(label, key, icon) {
  return {
    key,
    label,
    icon,
  };
}
const items = [
  getItem(<Link to={"/biography"}>Biography</Link>, "1"),
  getItem(<Link to="/resume">Resume</Link>, "2"),
  getItem(<Link to="/contact">Contact Me</Link>, "3"),
];
const { Header, Content, Footer, Sider } = Layout;
function App() {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <div className="App">
      <div className="target">
        <div className="expanding">Hi and Welcome to my Portfolio !</div>
      </div>
      <Layout style={{ backgroundColor: "white" }}>
        <div className="sidebar">
          <Sider
            theme="light"
            collapsible
            collapsed={collapsed}
            onCollapse={(value) => setCollapsed(value)}
            // breakpoint="lg"
            collapsedWidth="0"
            // onBreakpoint={(broken) => {
            //   console.log(broken);
            // }}
            // onCollapse={(collapsed, type) => {
            //   console.log(collapsed, type);
            // }}
            style={{
              position: "sticky",
              top: "0%",
              backgroundColor: "white",
              padding: 14,
            }}
          >
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <Menu
              theme="light"
              defaultSelectedKeys={["1"]}
              mode="inline"
              items={items}
              style={{
                padding: 24,
                background: "white",
                fontSize: 15,
                fontFamily: "League Spartan",
              }}
            />
          </Sider>
        </div>

        <Layout>
          <Header
            style={{
              padding: 0,
              background: "white",
              height: 0,
            }}
          />
          <Content
            style={{
              margin: "24px 16px 0",
              positon: "fixed",
            }}
          >
            <div
              className="mainDiv"
              style={{
                padding: 24,
                minHeight: 360,
              }}
            >
              <Routes>
                <Route path="/" element={<Projects />}></Route>
                <Route path="/biography" element={<Biography />}></Route>
                <Route path="/resume" element={<Resume />}></Route>
                <Route path="/contact" element={<Contact />}></Route>
                <Route
                  path="/descriptionOne"
                  element={<ProjectOneDesc />}
                ></Route>
                <Route
                  path="/descriptionTwo"
                  element={<ProjectTwoDesc />}
                ></Route>
                <Route
                  path="/descriptionThree"
                  element={<ProjectThreeDesc />}
                ></Route>
              </Routes>
            </div>
          </Content>
          <Footer
            style={{
              textAlign: "center",
            }}
          >
            Adrian Ong ©2023
          </Footer>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;
