import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Default from '@layouts/Default';
import Home from '@pages/Home';
import Categories from '@pages/Categories';
import Favorites from '@pages/Favorites';

function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Default />}>
          <Route index element={<Home />} />
          <Route path="categories">
            <Route index element={<Categories />} />
            <Route path=":id" element={<Categories />} />
          </Route>
          <Route path="favorites" element={<Favorites />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Routing;
