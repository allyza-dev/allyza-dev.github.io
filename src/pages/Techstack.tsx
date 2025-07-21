import GirlSmile1 from '../assets/GirlSmile1.svg'
import {ReactIcon, NextJSIcon, HTMLIcon, TypeScriptIcon, JavaScriptIcon, CSSIcon, SCSSIcon, TailwindIcon,  VueJSIcon, PostmanIcon, MongoDbIcon, FigmaIcon, JestIcon, BootsrapIcon} from '../components/icons';


export default function Techstack() {
  return (
     <>
        <img src={GirlSmile1} alt="girl smile" width={350} className='girl-photo'/>
        <div>
          <h2>Tech Stack</h2>
          <p>Here are the technologies and tools I've used throughout my projects. They’ve helped me build efficient, responsive, and scalable web applications.</p>
          <div className='home-tech-skills'>
            <ReactIcon size={30}/>
            <VueJSIcon size={30}/>
            <NextJSIcon size={30}/>
            <TypeScriptIcon size={30}/>
            <JavaScriptIcon size={30}/>
            <HTMLIcon size={30}/>
            <CSSIcon size={30}/>
            <SCSSIcon size={30}/>
            <TailwindIcon size={60}/>
            <BootsrapIcon size={30}/>
            <JestIcon size={30}/>
            <PostmanIcon size={30}/>
            <MongoDbIcon size={30}/>
            <FigmaIcon size={30}/>
          </div>
        </div>
      </>
  )
}