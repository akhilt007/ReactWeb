import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Root from './components/Root';
import Home from './components/Home';
import Todo from './components/Todo';
import Countries from './components/Countries';
import CountryDetail from './components/CountryDetail';
import NotFound from './components/NotFound';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Root />}>
          <Route index element={<Home />} />
          <Route path="todo" element={<Todo />} />
          <Route path="countries" element={<Countries />} />
          <Route path="countries/:code" element={<CountryDetail />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
