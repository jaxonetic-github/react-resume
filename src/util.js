/**
 * Builds education data
 * @return [] an array of  WorkHistory objects consisting of general job info and specific tasks
 */
 export function workHistoryTestData (){

/****** Work History Data Setup  *******/
// Setup arrarys of subtasks for each job position
const versiteItems = ['Maintained and updated sites built on top of the .NET framework.', 'Implemented new PHP sites based upon CakePHP, Jquery, and SASS.', 'Designed and Implemented a 3D virtual system using Unity3D, the Oculus Rift, and Kinect technologies.'];
const presynctItems = ['Implemented  web applications designed  to help companies be paperless by digitalizing internal forms and  processes.', 'Designed and implemented an iPhone/iPad application that collected information(configurable by xml) and sent the information to a server and, ultimately, to a database.'];
const rubberItems = ['Designed and implemented a Compliance application using EJB3 to track the efficiency and reliability of members within a Supply-Chain network.',
'· Designed and implemented a prototype for a Bidding/Auction application in which suppliers could enter bids to delivery goods to various members within a Supply-Chain network.'
];
const compuItems = ['Maintained and updated Compucredit\'s Purposecard website which was run on Jboss under the Struts Framework using Velocity templates.  Most of the webservices, however, were written in C# and I maintained, updated, and implemented those as well',
	'Implemented the Java front-end (Velocity/Struts) for the Purposecard Store Locator along with the corresponding Action classes.',
	'Implemented the back-end for the Purposecard Store Locator which included working with DBA’s to design the underlying database table structure and writing the C# server-side code to interact with the database and third party vendors(i.e. Greendot, FDR, etc…).',
	'The Purposecard site initially used Soaplets as webservice clients to its 3rd party and internal webservices.  I converted their Soaplet architecture into an XmlObjects based architecture (i.e. WSDL2Java).',
	'Developed Compucredit’s new Self-Serve Loan Application in a small team using a Java-based Chordiant platform which utilized Business Process Workflows and Ruleset Engines.']
const ingeoItems = ['Developed web services behind a web portal and designed database to implement a .NET application that tracks, manages, and transfers liens for WellsFargo.',
'Designed, implemented, and tested automated C# and Java processes to manage incoming and outgoing SSL file transfers between clients and 3rd party vendors.',
'Designed, implemented, and tested Java and C# projects which processed Satisfactions, Reconveyances, and Substitution lien documents from Submitters into Ingeo databases.',
'Designed, implemented, and tested connectors (.NET Serviced Components) used to communicate asynchronously and securely(SSL) with external client systems.',
'Designed, implemented, and tested tasks (in C#) to create NACHA files with CCD batches from reports taken from clients.',
'Designed and implemented a service that tracked Liens for Fidelity and queried 3rd party venders for XML updates (Sent, Recorded, Rejected, etc…) which were sent asynchronously back to FNF.',
'Implemented portals to load reports or Lien data in MSWord and Excel formats and convert them into XML for external delivery or internal processing.',
'Implemented the integration of 3rd Party Vendor and Submitter services with Ingeo'];

const metaItems = ['Worked with Business Analysts to acquire financial and business rules for various services within Metavante’s E-Commerce Banking Suite',
'Implemented front-end (JSP/Servlet) interfaces for creating Wire Transfer templates that communicated with EJB’s for back-end processing of user data',
'Assisted in design of back-end ACH instruction processing (EJB’s)',
'Designed the NACHA file creation process into the current suite of bank services',
'Implemented the external NACHA process that create NACHA files from processed user data stored within an Oracle database.  Implementation included EJBs, SQL, property files, extensive logging, and complex communication with the database to ensure Transaction-like autonomy over user data within the database.',
'Designed and implemented the NACHA Import functionality and aided in the design of the NACHA Concatenation process.',
'Created XSLT’s to generate reports in various formats (text delimited, fixed length) for the Positive Pay of the E-Banking suite.',
'Wrote Unit test cases in preparation for QA testing and worked closely with QA to complete testing and ensure proper functionality'
];
const secFirstItems = ['Gathered requirements and created design documentation including UML for custom tag handlers.',
'Coded and tested custom tag handlers in an OO language called TOOL',
'Created template pages for use by custom tag handlers.',
'Participated in redesign of FORTE development environment into a J2EE architecture'];
const techItems = ['Instructed a weekly two hour Java recitation class','Trained and managed a small team of new recitation Teaching Assistants','Prepared and evaluated weekly 45-minute quizzes and the three-hour final exam', 'Assisted professors in general administrative course duties and policy decisions']
const reyeItems = ['Acted as a buffer/translator between scientists and developers, by helping translate scientific product documents into technical tasks for myself and other developers in JIRA.',
'Helped managed and act as a point of contact to a team of developers in Vietnam and along the US east coast.',
'Managed and maintened AWS cloud services.  This included creating Lambdas (in NodeJS and Java) which interact with Dynamo DB, creating API Gateway endpoints, Route53 domain zones,  configuring load balancers, and syncing S3buckets with EC2 instances.',
'Managed  pushes from the development environment to staging, and production.',
'Acted as the first point of contact for fixing client and in-house technical issues.',
'Installed and deployed new systems for clients.',
'Front-end development in Unity3D and AngularJS.  The Unity application communicated with a remote AngularJS website via the UWK.Webkit.'];

//add work tasks to work section
const versiteHistory = {companyName: 'Versite', position: 'Software Engineer', city: 'Salvador', 
	state: 'Bahia', country:'Brazil', fromDate:'April 2013', toDate:'Dec 2013', items:versiteItems}

const presynctHistory = {companyName: 'Presynct Technologies', position: 'Java Developer', city: 'San Francisco', 
	state: 'CA', country:'USA', fromDate:'Oct 2010', toDate:'Nov 2012', items:presynctItems}

const rubberHistory = {companyName: 'RubberNetwork', position: 'Java Developer', city: 'Atlanta', 
	state: 'Georgia', country:'USA', fromDate:'May 2007', toDate:'Feb 2008', items:rubberItems}

const compuHistory = {companyName: 'Compucredit', position: 'Software Engineer', city: 'Atlanta', 
	state: 'Georgia', country:'USA', fromDate:'July 2006', toDate:'Mar 2007', items:compuItems}

const ingeoHistory = {companyName: 'Ingeo Systems', position: 'Remote Software Engineer', city: 'Logan', 
	state: 'Utah', country:'USA', fromDate:'Jan 2004', toDate:'June 2006', items:ingeoItems}

const metaHistory = {companyName: 'Metavante Corporation', position: 'Software Engineer', city: 'Norcross', 
	state: 'Georgia', country:'USA', fromDate:'Jan 2001', toDate:'July 2003', items:metaItems}

const secFirstHistory = {companyName: 'Security First Technologies (S1)', position: 'Branding Developer', city: 'Atlanta', 
	state: 'Georgia', country:'USA', fromDate:'Feb 2000', toDate:'Nov 2007', items:secFirstItems}

const techHistory = {companyName: 'College of Computing, Georgia Tech', position: 'Senior Teaching Assistant/Head of Quiz Development(Java)', city: 'Atlanta', 
	state: 'Georgia', country:'USA', fromDate:'Sept 1997', toDate:'June 1999', items:techItems}

const reyeHistory = {companyName: 'Righteye, LLC', position: 'Software Engineer', city: 'Bethesda', 
	state: 'Maryland', country:'USA', fromDate:'April 2015', toDate:'Dec 2015', items:reyeItems}

//Make an array of work history data
return   [reyeHistory, versiteHistory, presynctHistory, rubberHistory, compuHistory, ingeoHistory, metaHistory, secFirstHistory,techHistory]; 
}


/**
 * Builds technology data
 * @return [] an array of technology objects
 */
export function technologyTestData (){
const techOSs = {category:'Operating Systems', technologies:'Windows, Linux, Mac OSX'};
const techLangs = {category:'Languages', technologies:'Java(J2EE), Objective C, PHP, Javascript'};
const techFrameworks = {category:'Frameworks', technologies:'Hibernate, Spring, Struts, EJB, Grails, Node, CakePHP'};
const techServers  = {category:'Servers', technologies:'Chordiant, Apache, WebSphere, IIS, RESIN, Tomcat, JBOSS' };
const techDbs = {category:'Databases', technologies:'Oracle, MySql, Sql Server, MongoDB, SqlLite, DB2, Neo4j'};

 return  [techOSs, techLangs, techFrameworks, techServers, techDbs];
} 


/**
 * Builds an object for contact information
 * @return {} contactInfo
 */
export function  contactTestData () {
	return {name:'Alonzo Jackson', phone:'(301)304-7304', email:'jaxonetic@gmail.com'}
}


/**
 * Builds education data
 * @return [] an array of education objects
 */
export function educationTestData() { 
	/********  Start of Education setup  ********/
const educHistoryTech = {section: 'education', graduationDate: 'Dec 1999', institute: 'Georgia Institute of Technology', degree: 'Bachelor of Computer Engineering', city:'Atlanta', state:'Georgia'}
const educHistoryLang = {section: 'education', graduationDate: 'Dec 2011', institute: 'Language Culture Coaching, International', degree: 'TESOL Certification', city:'Berkeley', state:'California'}

/******** End of Education Setup  *******/

	return [educHistoryTech, educHistoryLang];
}



