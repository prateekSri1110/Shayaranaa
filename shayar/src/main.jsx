import { Auth0Provider } from '@auth0/auth0-react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './index.css';

createRoot(document.getElementById('root')).render(
  <Auth0Provider
    domain="dev-6ceqo15fgfho3etr.us.auth0.com"
    clientId="d5tJNhCXYgnuD3SoVYoc6xU4DWS5Cl7l"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Auth0Provider>
)