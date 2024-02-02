import './App.css';
import React, { useState } from 'react'
import img from './Images/aboutimage.png'
import {Link} from 'react-router-dom'


function App() {

 {/*HOme about functions for website */}

  const [showtab, setShowtab] = useState(1);
  const handleclick = (e)=>{
     setShowtab(e);}
  return (
   <>
  
     


       {/*This is navbar of my website */}

       <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>yyyy

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/">Link</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="/">Action</a></li>
            <li><a class="dropdown-item" href="/">Another action</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="/">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href='/' aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>

                                         {/* Home Display of portfolio*/}
                                         <div className="bghome">
        
        <div className='container-fluid homed'>
           <div className="col-10 mx-auto">
            <div className="heading" id='heading'>
                <h6 style={{color:'white'}}>Web Developer</h6>
                <h1 style={{color:'white'}}>Hi, I'm <span style={{color:"red"}}>Shahbaz</span><br /> Sharif From Pakistan</h1>
          
    
            </div>
           </div>
        </div>
        </div>
                                      

                        {/*Home about code is here */}

                        <div className="bgabouthome pt-5 pb-5">
    <div className='container-fluid'>
      <div className="col-10 mx-auto">
       <div className="row">
            
        <div className="col-lg-4 col-md-6 ">
        <img src={img} alt="" />
        </div>
        <div className="col-lg-8 col-md-6 personalinfo">
        <h1>About ME</h1>
        <p>I'm a web developer with a passion for crafting sleek and efficient digital solutions. Armed with expertise in HTML, CSS, JavaScript, and a knack for problem-solving, I bring concepts to life on the web. I thrive on optimizing website performance and ensuring compatibility across browsers. My strong communication skills foster seamless collaboration with designers, content creators, and clients. I'm committed to staying updated with industry trends, striving to deliver exceptional web experiences that leave a lasting impression.
          </p>
         <div className="row">
          
          <ul className='nav nav-pills' id='pills-tab' role='tablist'>
            <li className='nav-items'> 
              <Link className='nav-link' role='presentation' onClick={()=>handleclick(1)}> Skills</Link>
            </li>
            <li className='nav-items'> 
              <Link className='nav-link' role='presentation' onClick={()=>handleclick(2)}> Experience</Link>
            </li>
            <li className='nav-items'> 
              <Link className='nav-link' role='presentation' onClick={()=>handleclick(3)}> Education</Link>
            </li>
          </ul>
                  <div className="abcontent">
                    {showtab===1 && <Aboutcard heading='Skills' para='React developer' para2='MERN Stack developer' para3='WordPress developer'/>}
                    
                    {showtab===2 && <Aboutcard heading='Experience' para='As Itern 6 month' para2='Wordpress Freelancing projects'/>}
                    
                    {showtab===3 && <Aboutcard heading='NFTP UE Lahore' para='Full Stack Web developement'
                     heading2='Internee' para2='MERN Stack'/>}
                    
                  </div>
              </div>

          </div>
         </div>
        </div>

      </div>
        
      </div>
    
    

   </>
  );
}

export default App;
