
import './App.css';
import { ToastContainer } from 'react-toastify';
import Navbar from './pages/Shared/Navbar';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Shared/Login';
import Services from './pages/Services/Services';
import MobileDetails from './pages/Services/MobileDetail'
import Home from './pages/Home/Home';
import Footer from './pages/Shared/Footer';
import Contact from './pages/Contact/Contact';
import ManageItems from './pages/Services/ManageItems';
import AddItem from './pages/Services/AddItem';
import Registration from './pages/Shared/Registration';
import RequireAuth from './pages/Shared/RequireAuth'
import About from './pages/About/About';
import Loading from './pages/Shared/Loading';
import ManageDelete from './pages/Services/ManageDelete';
import ReviewSend from './pages/Review/ReviewSend';
import Blog from './pages/Blog/Blog';
import NoFound from './pages/Shared/NoFound';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/services' element={<Services></Services>}></Route>
        <Route path='/services/:id' element={<RequireAuth><MobileDetails></MobileDetails></RequireAuth>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/addIReview' element={<ReviewSend></ReviewSend>}></Route>
        <Route path='/manageInventory/:id' element={<RequireAuth><ManageItems></ManageItems></RequireAuth>}></Route>
        <Route path='//manageDelete' element={<RequireAuth><ManageDelete></ManageDelete></RequireAuth>}></Route>
        <Route path='//manageDelete/:deleteId' element={<RequireAuth><ManageDelete></ManageDelete></RequireAuth>}></Route>
        <Route path='/addIteam' element={<RequireAuth>
          <AddItem></AddItem>
        </RequireAuth>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/registration' element={<Registration></Registration>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='*' element={<NoFound></NoFound>}></Route>
      </Routes>

      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
