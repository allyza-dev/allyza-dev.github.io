import VirtualWonders from '../assets/vw.png'
import { Link } from 'react-router-dom'
import Accenture_logo from '../assets/Accenture_logo.svg'
import FreshClinic from '../assets/fresh.png'

export default function Companies() {
    return (
        <>
            <h2>Work History</h2>
            <p>Here’s a summary of my previous roles and experiences, highlighting the projects I've contributed to and the skills I’ve developed along the way.</p>

            <div className='home-work-history-item'>
                <div><img src={FreshClinic} alt="Project 2" width={150} /></div>
                <div><img src={Accenture_logo} alt="Project 1" width={150} /></div>
                <div><img src={VirtualWonders} alt="Project 1" width={150} /></div>
            </div>
            <Link to="/work-history" className="btn-primary">View Companies</Link>
        </>
    )
}
