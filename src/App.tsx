import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { routes } from './const/constant';

import Header from './components/Header';
import Container from './components/shared/Container';

import './App.scss';
import Loading from './components/Loading';

function App() {

  const routeList = routes.map(({path,Component}, index) => {
    return (
      <Route key={index} {...{path}} element={<Component />} />
    )
  })

  return (
    <div className="App">
      <Container>
        <Suspense fallback={<Loading />}>
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
