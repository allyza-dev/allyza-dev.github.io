import GirlThumbsup1 from '../assets/GirlThumbsup1.svg'

export default function Header(){
    return (
        <>
            <div>
                <p className='home-iam'>Hi I'm</p>
                <p className="text-orange">Allyza Joy Baliguat</p>
                <h1>Front-end <br/> <span>Developer</span></h1>
                <p className='home-about'>with over 6 years of experience and a strong passion for building clean, responsive, and user-friendly websites and web applications. I specialize in transforming design mockups into functional, high-performance code using modern tools and frameworks, delivering seamless digital experiences that align with both user needs and business goals.</p>
                <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-primary">Resume</a>
            </div>
            <img src={GirlThumbsup1} alt="girl thumb up" width={350} className='girl-photo'/>
        </>
    )
}