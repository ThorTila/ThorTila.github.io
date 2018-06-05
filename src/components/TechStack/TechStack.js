import React from 'react';
import './techstack.css';

class TechStack extends React.Component {
  componentDidMount() {
    let wrapper = document.querySelector('.tech-stack'),
      icons = wrapper.querySelectorAll('i'),
      addColor = el =>
        el.target
          ? (el.target.style.color = 'white')
          : (el.style.color = 'white'),
      removeColor = el =>
        el.target ? (el.target.style.color = '') : (el.style.color = '');
    icons.forEach(el => {
      addColor(el);
      el.addEventListener('mouseover', el => removeColor(el));
      el.addEventListener('mouseleave', el => addColor(el));
    });
  }
  render() {
    return (
      <div className="tech-stack">
        <h1>Technology Stack</h1>
        <div className="wrapper">
          <div className="card">
            <h2>Technologies I use</h2>
            <div className="stack">
              <i className="devicon-nodejs-plain colored" data-name="NodeJS" />
              <i className="devicon-babel-plain colored" data-name="Babel" />
              <i
                className="devicon-bootstrap-plain colored"
                data-name="Bootstrap"
              />
              <i
                className="devicon-css3-plain-wordmark colored"
                data-name="CSS3"
              />
              <i
                className="devicon-express-original colored"
                data-name="ExpressJS"
              />
              <i
                className="devicon-git-plain colored colored"
                data-name="Git"
              />
              <i className="devicon-github-plain " data-name="GitHub" />
              <i className="devicon-html5-plain colored" data-name="HTML5" />
              <i
                className="devicon-javascript-plain colored"
                data-name="JavaScript"
              />
              <i className="devicon-jquery-plain colored" data-name="jQuery" />
              <i className="devicon-mocha-plain colored" data-name="Mocha" />
              <i
                className="devicon-mongodb-plain colored"
                data-name="MongoDB"
              />
              <i
                className="devicon-react-original colored"
                data-name="ReactJS"
              />
              <i className="devicon-sass-original colored" data-name="SaSS" />
              <i
                className="devicon-webpack-plain colored"
                data-name="WebPack"
              />
            </div>
          </div>
          <div className="card">
            <h2>Technologies I want to learn</h2>
            <div className="stack">
              <i
                className="devicon-angularjs-plain colored"
                data-name="AngularJS"
              />
              <i className="devicon-docker-plain colored" data-name="Docker" />
              <i className="devicon-heroku-plain colored" data-name="Heroku" />
              <i className="devicon-mysql-plain colored" data-name="MySQL" />
              <i
                className="devicon-typescript-plain colored"
                data-name="TypeScript"
              />
              <i className="devicon-vuejs-plain colored" data-name="VueJS" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TechStack;
