import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Routes and Route instead of Switch
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/authActions';
import setAuthToken from './utils/setAuthToken';
import AppRoutes from './components/Routes';  // Import the updated Routes component

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Routes> {/* Use Routes instead of Switch */}
          <Route path="/*" element={<AppRoutes />} /> {/* Handle nested routes */}
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
