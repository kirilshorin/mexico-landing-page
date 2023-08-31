import './Header.scss';

export const Header = () => {
  return (
    <header className="header">
      <img 
        src={process.env.PUBLIC_URL + "/images/Logo.svg"} 
        alt="LOGO" 
        className="header__image"
      />

      <div className="header__navigation">
        <a href="#" className="header__firstLink">
          Acceder
          </a>

        <a href="#" className="header__secondLink">
          Registrate
        </a>
      </div>
    </header>
  );
}