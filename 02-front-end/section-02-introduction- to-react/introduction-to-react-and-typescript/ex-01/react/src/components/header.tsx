import User from './user';

function Header() {
  return (
    <header>
      <h1>Hello world!!</h1>
      <h2>
        Olá,
        {' '}
        {' '}
        <User />
      </h2>

    </header>
  );
}

export default Header;
