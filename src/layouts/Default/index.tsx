import { Outlet, Link, useLocation } from 'react-router-dom';
import classNames from 'classnames';
import './styles.scss';

function Default() {
  const location = useLocation();

  return (
    <div className="default">
      <header className="default__header">
        <nav className="default__header__navigation">
          <div className="default__header__navigation__title">
            <Link to="">
              <h4>Filmorama</h4>
            </Link>
          </div>

          <menu className="default__header__navigation__list">
            <li>
              <Link to="categories">
                <i className="fa-solid fa-list"></i>
              </Link>
            </li>
            <li>
              <Link to="favorites">
                <i className="fa-solid fa-heart"></i>
              </Link>
            </li>
          </menu>
        </nav>
      </header>

      <div className="default__body">
        <div className="default__body__main">
          <main className="default__body__main__container">
            <Outlet />
          </main>
        </div>

        <footer className="default__body__footer">
          <div className="default__body__footer__container">
            <menu>
              <li
                className={classNames({
                  '--is-current': location.pathname === '/',
                })}>
                <Link to="">
                  <i className="fa-solid fa-house"></i>
                  <span>Home</span>
                </Link>
              </li>
              <li
                className={classNames({
                  '--is-current': location.pathname.includes('/categories'),
                })}>
                <Link to="categories">
                  <i className="fa-solid fa-list"></i>
                  <span>Categories</span>
                </Link>
              </li>
              <li
                className={classNames({
                  '--is-current': location.pathname === '/favorites',
                })}>
                <Link to="favorites">
                  <i className="fa-solid fa-heart"></i>
                  <span>Favorites</span>
                </Link>
              </li>
            </menu>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Default;
