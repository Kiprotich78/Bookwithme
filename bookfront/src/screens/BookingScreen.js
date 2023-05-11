import React from 'react'

const BookingScreen = ({room}) => {
   // console.log(room);
  return (
    <div className='row'>
      <div className='col-md-5'>
        <h1>{room.name}</h1>
        <img src={room.imageurls[0]} alt='image' className='biging'/>
    </div>
       <div>
          <b>
          <div className='col-md-5'>
          <h1>booking Details</h1>
          <p>Name : </p>
          <p>From date : </p>
          <p>To Date : </p>
          <p> Max count : </p>
          
       </div>
       </b>

      <hr />
    </div>
    </div>
  )
}

export default BookingScreen