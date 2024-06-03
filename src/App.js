import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Ads from './pages/ads';
import Home from './pages/home';
import DownloadFile from './pages/download/downloadFile';
import DownloadLink from './pages/download/downloadLink';
import BlankPage from './pages/blank/blankPage';
import BlankLink from './pages/blank/blankLink';

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route
            key={"/"}
            path={"/"}
            element={<Home />}
          />
          <Route
            key={"/ads"}
            path={"/ads"}
            element={<Ads />}
          />
          {DownloadLink.map((prop) => (
            <Route
              key={prop.id}
              path={prop.id}
              element={<DownloadFile props={prop} />}
            />
          ))}
          {BlankLink.map((prop) => (
            <Route
              key={prop.id}
              path={prop.id}
              element={<BlankPage props={prop} />}
            />
          ))}
        </Routes>
      </Router>
    </div>
  );
};

export default App;
