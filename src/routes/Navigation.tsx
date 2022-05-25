import {
  BrowserRouter,
  Route,
  NavLink,
  Routes,
  Navigate
} from 'react-router-dom';
import { routes } from './routes';


import logo from '../logo.svg';
import { Suspense } from 'react';

export const Navigation = () => {
  return (
    <Suspense fallback={<span>Loading...</span>}>
      <BrowserRouter>
        <div className="main-layout">
          <nav>
              <img src={ logo } alt="React Logo" />
            <ul>
                {
                  routes.map( route => (
                    <li key={route.to}>
                      <NavLink 
                        to={ route.to } 
                        className={({isActive})=> (isActive) ? 'nav-active' : '' }>{ route.name }</NavLink>
                  </li>
                  ))
                }
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Routes>
            {
              routes.map( route => (
                <Route 
                  key={route.to}
                  path={ route.path } element={<route.Component />} 
                />
              ))
            }
            <Route path='/*' element={ <Navigate to={routes[0].to} replace />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Suspense>
  );
}