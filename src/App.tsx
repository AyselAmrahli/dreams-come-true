import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { routes } from './const/constant';

import Header from './components/Header';

import './App.scss';
import Container from './components/shared/Container';

function App() {

  const routeList = routes.map(({path,Component}, index) => {
    return (
      <Route key={index} {...{path}} element={<Component />} />
    )
  })

  return (
    <div className="App">
      <Container>
        <Suspense fallback={<span>loading...</span>}>
          <Router>
            <Header />
            <Routes>
              {routeList}
            </Routes>
          </Router>
        </Suspense>
      </Container>
    </div>
  );
}

export default App;
