import React, { Component } from 'react';
import Frame from '../../components/frame/frame';
import Contact from '../../components/contact/contact';
import Experience from '../../components/experience/experience';
import PersonalInfo from '../../components/personal-info/personal-info';
import IImage from '../../static/i.jpg';

import './App.sass';
class App extends Component {
  render() {
    return (
      <>
        <div className="app">
          <div className="content">
            <PersonalInfo />
            <b className="line"></b>
            <p>Experiences</p>
            <Experience
              title="Front End Developer"
              start="2018/10"
              length="Until now"
              local="Wooza"
              URL="https://www.wooza.com.br/"
            />
            <Experience
              title="Full Stack Developer"
              start="2016/01"
              length="34 Months"
              local="Tasken"
              URL="http://www.tasken.com/"
            />
            <Experience
              title="Developer Intern"
              start="2014/08"
              length="18 Months"
              local="Tasken"
              URL="http://www.tasken.com/"
            />
            <Experience
              title="Developer Intern"
              start="2013/11"
              length="11 Months"
              local="MediLab Sistemas"
              URL="http://www.medilabsistemas.com.br/"
            />
            <b className="line"></b>
            <Contact />
          </div>
        </div>
        <div className="frame-wraper">
          <Frame src={IImage} alt="Otávio Moreira Meirelles" />
        </div>
      </>
    );
  }
}

export default App;
