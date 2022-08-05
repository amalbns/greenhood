
import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './Components/NavBar';
import Error from './Pages/Error';
import Home from './Pages/Home';
import LogIn from './Pages/LogIn';
import Products from './Pages/Products';
import Register from './Pages/Register';
import Cart from './Pages/Cart'
import { useDispatch } from 'react-redux';
import { useEffect} from 'react';
import { current } from './JS/Actions/user';
import AboutUs from './Pages/AboutUs';
import ContactUs from './Pages/ContactUs';
import Footer from './Components/Footer';
import Profile from './Pages/Profile';
import Admin from './Pages/Admin';
import AdminLogin from './Pages/AdminLogin';
import Edit from './Pages/Edit';
import Add from './Pages/Add';
import { currentAdmin } from './JS/Actions/admin';


function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch(current())
    }
  }, [dispatch])
  
  useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch(currentAdmin())
    }
  }, [dispatch])

  
  return (
    <div className="App">
  
      <NavBar/>
      
    <Routes>
    <Route path='/' element={<Home/>}/>
        <Route path='/products' element={<Products/>}/>
        
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/aboutus' element={<AboutUs/>}/>
        <Route path='/contactus' element={<ContactUs/>}/>
        <Route path='/login' element={<LogIn/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/admin' element={<Admin/>}/>
        <Route path='/singin' element={<AdminLogin/>}/>
        <Route path='/edit/:id' element={<Edit/>}/>
        <Route path='/add' element={<Add/>}/>





        <Route path='/*' element={<Error/>}/>
    </Routes>
    <Footer/>
    </div>
  );
}

export default App;
