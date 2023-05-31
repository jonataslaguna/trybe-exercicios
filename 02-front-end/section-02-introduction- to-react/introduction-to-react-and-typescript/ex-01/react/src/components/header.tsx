import User from './user';

function Header() {
  return (
    <header>
      <h1>Hello world!!</h1>
      <p>
        Olá,
        {' '}
        {' '}
        <User />

      </p>
    </header>
  );
}

export default Header;
