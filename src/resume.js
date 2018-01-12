import React, { Component } from 'react';
import logo from './logo-gt.png';
import './education.css';
/**
 *
 * @description <App gra... inst... degr.. city='' state=''/>
 */
function Education(props) {
  const listItems = props.history.map((item) =>
    <div  key={item.institute} className="section education">
    <dl>
        <dt>{item.graduationDate}</dt>
        <dd><ul><li>{item.institute} - {item.city}, {item.state}</li>
            <li>{item.degree}</li></ul>
       </dd>
    </dl>
  </div>
  );
  return (
    <ul>{listItems}</ul>
  );
}

function WorkSubtasks(props) {
  const items = props.items;
  const listItems = items.map((item) =>
    <li key={item.toString()}>
      {item}
    </li>
  );
  return (
    <ul>{listItems}</ul>
  );
}

function WorkHistory(props) {
  console.log(props.history);

  const listItems = props.history.map((item,key) =>
   <div key={key} className="work-info">
      <h4>{item.companyName} {item.position} -  {item.city}, {item.state}  {item.country}</h4>
      <dl>
        <dt>
          {item.fromDate} to {item.toDate}
        </dt>
        <dd>
          <WorkSubtasks items={item.items} />
        </dd>
      </dl>
    </div>
  );
  return (
    <ul>{listItems}</ul>
  );
}

class Resume extends Component {
  render() {
    return (
    <div>    
    <h3>Education</h3>

      <Education history={this.props.educationHistory} />
       <WorkHistory history={this.props.workHistory} />
    </div>
    );
  }
}


export default Resume;
