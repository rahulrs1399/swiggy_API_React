import { LOGO_URL } from '../utils/constants';
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import UserContext from '../utils/UserContext';
import { useSelector } from 'react-redux';

const Header = () => {

  const [btnNameReact, setBtnNameReact] = useState('Login');
  
  const OnlineStatus = useOnlineStatus();

  const {loggedInUser} = useContext(UserContext);
  // console.log(loggedInUser);

  const cartItems = useSelector((store) => store.cart.items)
  console.log(cartItems)

  return (
    <div className="flex justify-between bg-pink-200 sm:bg-yellow-200 lg:bg-green-200 font-[500]">
      <div className="logo-container">
        <Link to="/">
          <img
            src={LOGO_URL}
            alt="Logo"
            className="w-16 mx-6 mt-2"
          />
        </Link>
      </div>
      <div className="flex items-center ">
      <ul className="flex p-4 m-4">
          <li className="px-4">Online Status : {OnlineStatus ? "✅" : "⛔"}</li>
          <li className='px-4'>
            <Link to="/" className="links">
              Home
            </Link>
          </li>
          <li className='px-4'>
            <Link to="/about" className="links">
              About Us
            </Link>
          </li>
          <li className='px-4'>
            <Link to="/contact" className="links">
              Contact Us
            </Link>
          </li>
          <li className='px-4'>
            <Link to="/Cart" className="links font-bold">🛒({cartItems.length})</Link>
          </li>
          <button
            className="loginBtn"
            onClick={() => {
              //   btnName = 'Logout';
              btnNameReact === 'Login'
                ? setBtnNameReact('Logout')
                : setBtnNameReact('Login');
            }}
          >
            {btnNameReact}
          </button>
          <li className=' px-2 font-bold'>({loggedInUser})</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
