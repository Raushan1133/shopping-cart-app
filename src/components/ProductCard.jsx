import React from "react";
import {
  MDBCard, 
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
import { useSelector,useDispatch } from "react-redux";
import { addToCart } from "../features/cartSlice";
import { Modal } from "bootstrap";

export default function App() {
  const items = useSelector((state) => state.allCart.items);

  const dispatch = useDispatch();
  return (
    <MDBContainer>
      <MDBRow className="mb-3">
        {items.map((item) => (
          <MDBCol size="md" key={item.id}>
            <MDBCard>
              <MDBCardImage
                src={item.img}
                position="top"
                alt="..."
              />
              <MDBCardBody>
                <MDBCardTitle>{item.title}</MDBCardTitle>
                <MDBCardText>
                  {item.specs}
                </MDBCardText>
                <MDBCardText>
                  Rs.<b>{item.price}/-</b>
                </MDBCardText>
                <MDBBtn href="#" onClick={()=>{
                  dispatch(addToCart(item));
                  { <CustomModal/> }
                }}>Add To Cart</MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        ))}
      </MDBRow>
    </MDBContainer>
  );
}
