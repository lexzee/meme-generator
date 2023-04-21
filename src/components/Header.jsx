import logo from '../assets/images/troll-face.png';

const Header = () => {
  return (
    <header className="header">
        <img src={logo} alt="Troll Face" className='header--img' />
        <h1>Meme Generator</h1>
        <p>React Course - Project 3</p>
    </header>
  )
};

export default Header;