import React, { Component } from 'react';
import './education.css';

/**
 * Displays Education history
 * @name  Education
 * @author Alonzo Jackson
 * @description  The top level component which houses the 4 inner sections of the resume.
 * @module Education
 * @example <Education history={this.props.educationHistory} />
 * @param history  an array of educational data
 * @return An Education Web Component
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

/**
 * Displays subtasks required by the job position as a list.
 * @name  WorkSubtasks
 * @author Alonzo Jackson
 * @description  Displays subtasks required by the job position as a list.
 * @module WorkSubtasks
 * @example  <WorkSubtasks items=[...] />
 * @param items  an array of strings representing tasks 
 * @return A WorkSubtasks Web Component
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
 * Displays resources for artists in a particulary city
 * @name  WorkHistory
 * @author Alonzo Jackson
 * @description  This component handles the display of the Work History section of the resume
 * @module WorkHistory
 * @example  <WorkHistory history=[...] />
 * @param history  an array of work history data
 * @requires WorkSubtasks
 * @return A WorkHistory Web Component
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
 * Displays a summary of technologies in tabular form
 * @name  Technology
 * @author Alonzo Jackson
 * @description Ddisplays the Technology section of the Resume
 * @module Technology
 * @example <Technology technologies={...} />
 * @return A Technology Web Component
 * @param technologies  an array of technologies 
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
 * Displays resources for artists in a particulary city
 * @name  ContactInfo
 * @author Alonzo Jackson
 * @description  Displays contactinfo
 * @module ContactInfo
 * @example  <ContactInfo contactInfo={...} />
 * @param contactInfo  an object of contact information 
 * @return A ContactInfo Web Component
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
 * Displays resources for artists in a particulary city
 * @name  Resume
 * @author Alonzo Jackson
 * @description  The top level component which houses the inner sections of the resume.
 * @module Resume
 * @example  <Resume educationHistory={educationTestData()} workHistory={workHistoryTestData()} technology={technologyTestData()}  contactInfo={contactTestData()}/>
 * @param educationHistory  an array of educational data
 * @param workHistory  an array of work history data
 * @param technology  a list of technologies and sub technologies
 * @param contactInfo  a json object with contact information 
 * @requires ContactInfo
 * @requires Technology
 * @requires Education
 * @requires WorkHistory
 * @return A Resume Web Component
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
