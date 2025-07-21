
import Companies from './Companies';
import Header from './Header';

import Techstack from './Techstack'

export default function Home() {
  return (
    <>
      <div className="home">
        <Header/>
      </div>
      <div className="home-tech">
        <Techstack />
      </div>
      <div className='home-work-history'>
        <Companies  />
      </div>
      <footer>
        <p>Allyza Joy Baliguat @2025</p>
      </footer>
    </>
  );
}