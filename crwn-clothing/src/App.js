import { Routes, Route } from 'react-router-dom';

import Navigation from './routes/navigation/navigation.component';
import SignIn from './routes/sign-in/sign-in.component';

import Home from '../src/routes/home/home.component.jsx';

import '../src/categories.styles.scss';

const Shop = () => {
  return <h1>I am the shop page</h1>;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index={true} element={<Home />} /> ;
        <Route path="shop" element={<Shop />} />
        <Route path="sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  );
};
export default App;