import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Default from '@layouts/Default';
import Home from '@pages/Home';

function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Default />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Routing;
