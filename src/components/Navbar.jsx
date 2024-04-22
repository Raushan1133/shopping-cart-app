import React, { useEffect } from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBBtn
} from 'mdb-react-ui-kit'; 
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCartTotal } from '../features/cartSlice';
import Logo from '../assets/images/sam-logo.png'

export default function App() {

  const dispatch = useDispatch();
  const {cart,totalQuantity} = useSelector((state)=>state.allCart);

  useEffect(()=>{
   dispatch( getCartTotal());
  },[cart])
  return (
    <MDBNavbar light bgColor='light'>
      <MDBContainer fluid>
      <MDBNavbarBrand>
        <img src={Logo} className='img-fluid' width='100px' alt="" />
      </MDBNavbarBrand>
      <span>
        <Link to='/'>All Product</Link>
      </span>
        <Link to='/cart'>
        <MDBBtn color='dark'>
        <i class="fa-solid fa-cart-shopping"></i> ({totalQuantity})
      </MDBBtn>
        </Link>
      

      </MDBContainer>
    </MDBNavbar>
  );
}