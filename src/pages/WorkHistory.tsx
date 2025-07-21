import { Link } from "react-router-dom";
import { BootsrapIcon, CSSIcon, FigmaIcon, HTMLIcon, JavaScriptIcon, JestIcon, MongoDbIcon, NextJSIcon, PhotosopIcon, PostmanIcon, ReactIcon, SCSSIcon, StorybookIcon, TailwindIcon, TypeScriptIcon, VueJSIcon } from "../components/icons";

export default function WorkHistory() {
  return (
    <>
      <Link to="/" className="btn-back"> <i className="arrow left"/> Back to Home</Link>
      <div className="work-history">
        <div>
          <h1>Work History</h1>
          <div className="work-history-item">
            <p>2022 - 2025</p>
            <div className="work-history-item-details">
              <h2 className="text-orange">Fresh Clinics (AU)</h2>
              <p>MID LEVEL SOFTWARE ENGINEER</p>
              <p>REMOTE | AUGUST 2022 - JULY 2025</p>
              <div className="work-history-item-skills">
                <VueJSIcon size={20} />
                <JavaScriptIcon size={20} />
                <HTMLIcon size={20} />
                <CSSIcon size={20} />
                <SCSSIcon size={20} />
                <TailwindIcon size={50} />
                <PostmanIcon size={20} />
                <MongoDbIcon size={20} />
              </div>
              <ul>
                <li>Maintained and refactored a large-scale legacy codebase (Vue.js) to improve performance, readability, and maintainability.  </li>
                <li>Fixed critical and non-critical bugs in the Vue.js codebase, improving application stability and user experience.</li>
                <li>Developed and integrated new features based on stakeholder input and end-user feedback.</li>
                <li>Collaborated with UI/UX designers and backend developers for feature delivery.</li>
                <li>Ensured cross-browser compatibility and responsiveness through regular QA collaboration.</li>
                <li>Conducted code reviews and promoted best practices in component structure.</li>
                <li>Participated in agile ceremonies including stand-ups, sprint planning, and retrospectives.</li>
              </ul>
              
            </div>
          </div>
          <div className="work-history-item">
            <p>2021 - 2025</p>
            <div className="work-history-item-details">
              <h2 className="text-orange">Accenture (PH)</h2>
              <p>APPLICATION DEVELOPMENT SR ANALYST</p>
              <p>REMOTE | AUGUST 2021 - JANUARY 2025</p>
              <div className="work-history-item-skills skills">
                <ReactIcon size={20} />
                <TypeScriptIcon size={20} />
                <HTMLIcon size={20} />
                <CSSIcon size={20} />
                <SCSSIcon size={20} />
                <BootsrapIcon size={20} />
                <PostmanIcon size={20} />
                <FigmaIcon size={20} />
                <StorybookIcon size={20} />
                <JestIcon size={20} />
              </div>
              <p>Projects:</p>
              <p className="project-title">Sunlife (Philippines)</p>
              <ul>
                <li>Helped deliver a modernized version of the client’s web and mobile app.</li>
                <li>Created reusable components using React, TypeScript, and Storybook.</li>
                <li>Implemented frontend unit testing for quality assurance.</li>
                <li>Integrated with Backend for Frontend (BFF) and Micro Frontends (MFE) architecture.</li>
                <li>Ensured alignment with security standards, including concurrent login restrictions.</li>
                <li>Built complex UI components such as a custom searchable dropdown with advanced filtering.</li>
                <li>Collaborated with UI/UX designers and backend teams for seamless feature integration.</li>
                <li>Participated in code reviews and agile ceremonies (stand-ups, sprint planning, retrospectives).</li>
                <li>Contributed to technical design documentation.</li>
                <li>Integrated RESTful APIs.</li>
                <li>Worked closely with business analysts (BAs) to translate requirements into functional specs.</li>
                <li>Mentored junior developers and supported new team members.</li>
              </ul>
              <p className="project-title">Manulife (Hongkong)</p>
              <ul>
                <li>Played a key role in developing a modern client portal web application to enhance user engagement and digital services.</li>
                <li>Collaborated with business analysts to translate business requirements into clear, actionable frontend specifications.</li>
                <li>Built and maintained reusable, scalable components using React.js, JavaScript, and ServiceNow.</li>
                <li>Contributed to the modernization of the legacy system by implementing responsive, user-friendly interfaces.</li>
                <li>Wrote and executed frontend unit tests to ensure quality, maintainability, and regression protection.</li>
                <li> Integrated RESTful APIs.</li>
              </ul>
            </div>
          </div>
          <div className="work-history-item">
            <p>2019 - 2021</p>
            <div className="work-history-item-details">
              <h2 className="text-orange">Virtual Wonders (PH)</h2>
              <p>Frontend Developer</p>
              <p>REMOTE | AUGUST 2019 - August 2021</p>
              <div className="work-history-item-skills skills">
                <NextJSIcon size={20} />
                <HTMLIcon size={20} />
                <CSSIcon size={20} />
                <SCSSIcon size={20} />
                <PhotosopIcon size={20} />
              </div>
              <ul>
                <li>Developed responsive marketing websites using Next.js. </li>
                <li>Converted PSD designs into standards-compliant HTML and CSS, ensuring high visual fidelity across devices.</li>
                <li>Built interactive UI features with Next.js, enhancing user engagement and improving overall site functionality.</li>
                <li>Conducted thorough cross-browser and cross-device testing to ensure a consistent and reliable user experience.</li>
                <li>Worked closely with graphic designers to maintain branding consistency.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}