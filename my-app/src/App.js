import "./App.css";
import React, { useState } from "react";
import img from "./Images/aboutimage.png";
import petim from './Images/Petkeen.png'
import holgicim from './Images/holgicim.png'
import sknm from './Images/skinnymixes.png'

function App() {
  // eslint-disable-next-line{/*User state for the show tab for home about of portfolio */}

  const [showTab, setShowTab] = useState(1);
  const homeabotclick = (c) => {
    setShowTab(c);
  };

  return (
    <>
    
      {/*This is navbar of my website */}

      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid col-10 mx-auto">
          <a className="navbar-brand" href="/">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link " aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link " aria-current="page" href="/">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link " aria-current="page" href="/">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
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

                <ul className="nav nav-pills" id="aboutpills">
                  <li className="nav-item"   id="aboutbtns">
                    <a
                      className={showTab === 1 ? "nav-link active" : "nav-link"}
                    
                      onClick={() => homeabotclick(1)}
                      data-target="Pills-tab"
                      aria-current="page"
                      href="#home"
                    >
                      Skills
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className={showTab === 2 ? "nav-link active" : "nav-link"}
                      onClick={() => homeabotclick(2)}
                      data-target="Pills-tab"
                      href="#profile"
                    >
                      Experience
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className={showTab === 3 ? "nav-link active" : "nav-link"}
                      onClick={() => homeabotclick(3)}
                      data-target="Pills-tab"
                      href="#messages"
                    >
                      Education
                    </a>
                  </li>
                </ul>
                {/* tab content for that tabs */}

                <div className="tab-content mx-3">
                  <div
                    className={
                      showTab === 1
                        ? "tab-pane fade show active"
                        : "tab-pane fade show"
                    }
                    id="home"
                    role="tabpanel"
                    aria-labelledby="home-tab"
                    tabIndex="0"
                  >
                    <h4>Skills</h4>
                    
                      <ul>
                        <li>React js</li>
                        <li>WordPress</li>
                        <li>Mern Stack</li>
                       
                      </ul>
                    
                  </div>
                  <div
                    className={
                      showTab === 2
                        ? "tab-pane fade show active"
                        : "tab-pane fade show"
                    }
                    id="experience"
                    role="tabpanel"
                    aria-labelledby="profile-tab"
                    tabIndex="0"
                  >
            
                   <h4>Experience</h4>
                   
                    <ul>
                      <li>As an intern for 3 mont</li>
                      <li>Developer two wordpress website for a client</li>
                      
                    </ul>
                   
                  </div>
                  <div
                    className={
                      showTab === 3
                        ? "tab-pane fade show active"
                        : "tab-pane fade show"
                    }
                    id="messages"
                    role="tabpanel"
                    aria-labelledby="messages-tab"
                    tabIndex="0"
                  >
                   <h4>Education</h4>
                   
                    <ul>
                      <li>NFTP UE lahore</li>
                      <li>Udemy</li>
                      <li>Web development for beginner book</li>
                    </ul>
                   
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
  
    <div className="scard">
      <p className="scard-title">Webdevelopement</p>
      <p className="small-desc">
       I'm a front-end developer. I can design any king of website from figma, canva, photoshop design to react code. I can also convert psd to html
      </p>
      <div className="go-corner">
        <div className="go-arrow"></div>
      </div>
    </div>
    <div className="scard">
      <p className="scard-title">Web design</p>
      <p className="small-desc">
       I can design any kind of website by using wordpress and I have expertise in this. I also have converted many design of figma to wordpress
      </p>
      <div className="go-corner">
        <div className="go-arrow"></div>
      </div>
    </div>
    <div className="scard">
      <p className="scard-title">Seo</p>
      <p className="small-desc">
      I can also do the seo of the website and can also build the seo friendly website
      </p>
      <div className="go-corner">
        <div className="go-arrow"></div>
      </div>
    </div>

 
  </div>
  </div>
  </div>
                         {/*My expertiese cod is here */}
     <div className="bghomexperties pb-5">
     <div className="col-10 mx-auto">
        <h1>Experties</h1>
        <div className="row">
        {/*My expertiese card is here */}

     <div className="expcard mx-1">
             <p className="c-txt">HTML <br />CSS</p>
      </div>
     <div className="expcard mx-1">
             <p className="c-txt">JAVA Script <br />jQuery</p>
      </div>
     <div className="expcard mx-1">
             <p className="c-txt">WordPress <br />Elementor <br /> SEO</p>
      </div>
     <div className="expcard mx-1">
             <p className="c-txt">React JS</p>
      </div>
     <div className="expcard mx-1">
             <p className="c-txt">MERN Stack</p>
      </div>
 

  </div>
  </div>
  </div>


            {/*My experience work code from here */}
              
       <div className="bgexperience pb-5">
      <div className="col-10 mx-auto">
       
          <h1>Experience</h1>
          {/*Experience card is here */}

        <div className="row">

        <div className="card-container mx-1">
  <div className="card">
  <div className="img-content">
  <img src={petim} className="card-img-top" alt="..."/>
  </div>
  <div className="content">
    <p className="heading">Petkeen</p>
    <p>
    I developed this website for a client of autaralia using WordPress
    </p>
    <a href="/" className="btn btn-primary">Visit website</a>
  </div>
</div>
</div>
        <div className="card-container mx-1">
  <div className="card">
  <div className="img-content">
  <img src={holgicim} className="card-img-top" alt="..."/>
  </div>
  <div className="content">
    <p className="heading">Holgics</p>
    <p>
    I developed this website for a client. You can also visit this website
    </p>
    <a href="/" className="btn btn-primary">Visit website</a>
  </div>
</div>
</div>

        <div className="card-container mx-1">
  <div className="card">
  <div className="img-content">
    <img src={sknm} className="card-img-top" alt="..."/>
  </div>
  <div className="content">
    <p className="heading">Skinnymixes</p>
    <p>
    I developed the exact copy of this website for a client
    </p>
    <a href="/" className="btn btn-primary">Visit website</a>
  </div>
</div>
</div>
       </div>

          
    </div>
    </div>

    {/*My footer code start from here */}

    <div className="bgfooter">
        <div className="col-10 mx-auto">
          <div className="row">
           <div className="contact col-lg-4 col-md-6">
            <h1 className='pb-3'>Contact ME</h1>
            <div className="phtl" id='phtl'>
                    <i className="fa-brands fa-telegram fa-2x"></i> <p className='pt-2'> +923433085528</p><br />
            </div>
            <div className="phtl" id='phtl'>
            <i className="fa-solid fa-phone fa-2x"> </i><p className='pt-1'> +923176734489</p>
            </div>
            <div className="iconssmedia" id='smediaicons'>

<a href="https://www.facebook.com/muhammadshahbaz.muhammadshahbaz.925/" rel="noreferrer" target="_blank"> <i className="fa-brands fa-2x fa-facebook-f"></i></a>
<a href="https://www.linkedin.com/in/web-developer-front-end-exper/"  rel="noreferrer" target="_blank"> <i className="fa-brands fa-2x fa-linkedin-in"></i></a>
<a href="https://www.instagram.com/shahbazsharif706/" rel="noreferrer" target="_blank"><i className="fa-brands fa-2x fa-instagram" rel="noreferrer" target="_blank"></i></a>
<a href="https://twitter.com/Shahbaz52390668/" rel="noreferrer" target="_blank"> <i className="fa-brands fa-2x fa-x-twitter" ></i></a>
<a href="https://wa.me/+923433085528" rel="noreferrer" target="_blank"><i className="fa-brands fa-2x fa-whatsapp"></i></a>

</div>
           </div>

           <div className="contform col-lg-8 col-md-6">
           <div className="form-container">
      <form className="form">
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input required="" name="email" id="email" type="text"/>
        </div>
        <div className="form-group">
          <label labelfor="textarea">How Can We Help You?</label>
          <textarea required="" cols="50" rows="10" id="textarea" name="textarea"></textarea>
        </div>
        <button type="submit" className="form-submit-btn">Submit</button>
      </form>
    </div>
           </div>
           
           </div>

          
        </div>    
   </div>
    

    </>
  );
}

export default App;
