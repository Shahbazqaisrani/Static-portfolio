import "./App.css";
import React, { useState } from "react";
import img from "./Images/aboutimage.png";

function App() {
  // eslint-disable-next-line{/*User state for the show tab for home about of portfolio */}

  const [showTab, setShowTab] = useState(1);
  const homeabotclick = (c) => {
    setShowTab(c);
  };

  return (
    <>
      {/*This is navbar of my website */}

      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid col-10 mx-auto">
          <a class="navbar-brand" href="/">
            Navbar
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link " aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link " aria-current="page" href="/">
                  About
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link " aria-current="page" href="/">
                  Services
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/">
                  Projects
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Home Display of portfolio*/}

      <div className="bghome">
        <div className="container-fluid homed">
          <div className="col-10 mx-auto">
            <div className="heading" id="heading">
              <h6 style={{ color: "white" }}>Web Developer</h6>
              <h1 style={{ color: "white" }}>
                Hi, I'm <span style={{ color: "red" }}>Shahbaz</span>
                <br /> Sharif From Pakistan
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/*Home about code is here */}

      <div className="bgabouthome pt-5 pb-5">
        <div className="container-fluid">
          <div className="col-10 mx-auto">
            <div className="row">
              <div className="col-lg-4 col-md-6 ">
                <img src={img} alt="" />
              </div>
              <div className="col-lg-8 col-md-6 personalinfo">
                <h1>About ME</h1>
                <p>
                  I'm a web developer with a passion for crafting sleek and
                  efficient digital solutions. Armed with expertise in HTML,
                  CSS, JavaScript, and a knack for problem-solving, I bring
                  concepts to life on the web. I thrive on optimizing website
                  performance and ensuring compatibility across browsers. My
                  strong communication skills foster seamless collaboration with
                  designers, content creators, and clients. I'm committed to
                  staying updated with industry trends, striving to deliver
                  exceptional web experiences that leave a lasting impression.
                </p>

                {/*Pills tab for the about contants */}
                <div id="aboutlinks">

                <ul class="nav nav-pills" id="aboutpills">
                  <li class="nav-item"   id="aboutbtns">
                    <a
                      class={showTab === 1 ? "nav-link active" : "nav-link"}
                    
                      onClick={() => homeabotclick(1)}
                      data-target="Pills-tab"
                      aria-current="page"
                      href="#home"
                    >
                      Skills
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      class={showTab === 2 ? "nav-link active" : "nav-link"}
                      onClick={() => homeabotclick(2)}
                      data-target="Pills-tab"
                      href="#profile"
                    >
                      Experience
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      class={showTab === 3 ? "nav-link active" : "nav-link"}
                      onClick={() => homeabotclick(3)}
                      data-target="Pills-tab"
                      href="#messages"
                    >
                      Education
                    </a>
                  </li>
                </ul>
                {/* tab content for that tabs */}

                <div class="tab-content">
                  <div
                    class={
                      showTab === 1
                        ? "tab-pane fade show active"
                        : "tab-pane fade show"
                    }
                    id="home"
                    role="tabpanel"
                    aria-labelledby="home-tab"
                    tabindex="0"
                  >
                    <h4>Skills</h4>
                    <p>
                      <ul>
                        <li>React js</li>
                        <li>WordPress</li>
                        <li>Mern Stack</li>
                       
                      </ul>
                    </p>
                  </div>
                  <div
                    class={
                      showTab === 2
                        ? "tab-pane fade show active"
                        : "tab-pane fade show"
                    }
                    id="experience"
                    role="tabpanel"
                    aria-labelledby="profile-tab"
                    tabindex="0"
                  >
            
                   <h4>Experience</h4>
                   <p>
                    <ul>
                      <li>As an intern for 3 mont</li>
                      <li>Developer two wordpress website for a client</li>
                      
                    </ul>
                   </p>
                  </div>
                  <div
                    class={
                      showTab === 3
                        ? "tab-pane fade show active"
                        : "tab-pane fade show"
                    }
                    id="messages"
                    role="tabpanel"
                    aria-labelledby="messages-tab"
                    tabindex="0"
                  >
                   <h4>Education</h4>
                   <p>
                    <ul>
                      <li>NFTP UE lahore</li>
                      <li>Udemy</li>
                      <li>Web development for beginner book</li>
                    </ul>
                   </p>
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

               {/*Services code start from here */}

               <div className="bghomeservices pb-5">
  <div className="col-10 mx-auto">
  <h1>Services</h1>

  
    <div className="row">
  
    <div class="scard">
      <p class="scard-title">Product Name</p>
      <p class="small-desc">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat
        veritatis nobis saepe itaque rerum nostrum aliquid obcaecati odio
        officia deleniti. Expedita iste et illum, quaerat pariatur consequatur
        eum nihil itaque!
      </p>
      <div class="go-corner">
        <div class="go-arrow"></div>
      </div>
    </div>
    <div class="scard">
      <p class="scard-title">Product Name</p>
      <p class="small-desc">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat
        veritatis nobis saepe itaque rerum nostrum aliquid obcaecati odio
        officia deleniti. Expedita iste et illum, quaerat pariatur consequatur
        eum nihil itaque!
      </p>
      <div class="go-corner">
        <div class="go-arrow"></div>
      </div>
    </div>
    <div class="scard">
      <p class="scard-title">Product Name</p>
      <p class="small-desc">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat
        veritatis nobis saepe itaque rerum nostrum aliquid obcaecati odio
        officia deleniti. Expedita iste et illum, quaerat pariatur consequatur
        eum nihil itaque!
      </p>
      <div class="go-corner">
        <div class="go-arrow"></div>
      </div>
    </div>

 
  </div>
  </div>
  </div>

    </>
  );
}

export default App;
