
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './componets/About/About';
import Blog from './componets/Blog/Blog';
import CheckOUt from './componets/CheckOut/CheckOUt';
import Footer from './componets/Footer/Footer';
import Header from './componets/Header/Header';
import Home from './componets/Home/Home';
import Login from './componets/Login/Login';
import RequireAuth from './componets/Login/RequireAuth';
import PageNotFound from './componets/PageNotFound/PageNotFound';

import Services from './componets/Services/Services';
import SignUp from './componets/SignUp/SignUp';


function App() {
  return (
    <>
    <Header></Header>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/about' element={<About></About>}></Route>
      <Route path='/blog' element={<Blog></Blog>}></Route>
      <Route path='/signup' element={<SignUp></SignUp>}></Route>
      <Route path='/checkout' element={<CheckOUt></CheckOUt>}></Route>
      <Route path='/services' element={
        <RequireAuth>
          <Services></Services>
        </RequireAuth>
      }></Route>
      <Route path="/login" element={<Login></Login>}></Route>
      <Route path='*' element={<PageNotFound></PageNotFound>}></Route>
    </Routes>
    <Footer></Footer>
    </>
  );
}

export default App;
