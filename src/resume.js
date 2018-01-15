import React, { Component } from 'react';
import logo from './logo-gt.png';
import './education.css';

/**
 *
 * @description <Education gra... inst... degr.. city='' state=''/>
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
    <section>
    <h3>Education</h3>
    <ul>{listItems}</ul>
    </section>
  );
}

/*
 *  WorkSubtask:  A list of subtasks required by the job position as a list.
 *
 */

function WorkSubtasks(props) {
  const items = props.items;
  const listItems = items.map((item) =>
    <li key={item.toString()}>
      {item}
    </li>
  );
  return (
    <ul id="subtask-list">{listItems}</ul>
  );
}

/**
 * WorkHistory:  The parent component for the WorkHistory section
 *
 */
function WorkHistory(props) {
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
    <section>
    <h3>Work History</h3>
    <ul>{listItems}</ul>
    </section>
  );
}

/**
 *  Technology:  Displays a summary of technologies in tabular form
 */
function Technology(props) {
  console.log(props.technologies);

  const listItems = props.technologies.map((item,key) =>
       <tr key={item.category}><td className="spaced-tablecell">{item.category}</td><td>{item.technologies}</td></tr>

  );
  return (
    <section>
    <h3>Technology</h3>
    <table id="spaced-table"><tbody>{listItems}</tbody></table>
    </section>
    );
}


/**
 *  ContactInfo: Displays Contact info (Name, phone, email, address(?) 
 */
function ContactInfo(props) {

  return (
    <ul id="contact-section">
    <li><h4>{props.contactInfo.name}</h4></li>
    <li>{props.contactInfo.phone}</li>
    <li>{props.contactInfo.email}</li>
    </ul>);
}


/**
 *  
 *  @description: The top level component which houses the 4 inner sections
 *  of the resume.
 *
 */
class Resume extends Component {
  render() {
    return (
    <div>    
      <ContactInfo contactInfo={this.props.contactInfo} />
      <Technology technologies={this.props.technology} />
      <Education history={this.props.educationHistory} />
      <WorkHistory history={this.props.workHistory} />
    </div>
    );
  }
}


export default Resume;
