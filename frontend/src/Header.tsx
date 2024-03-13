import logo from './logo.png';

function Header(props: any) {
  return (
    <header className="row navbar navbar-dark bg-dark">
      <div className="col-4">
        <img src={logo} className="logo" alt="logo" width="200" />
      </div>
      <div className="col subtitle">
        <h2 className="text-white">{props.title}</h2>
      </div>
    </header>
  );
}

export default Header;
