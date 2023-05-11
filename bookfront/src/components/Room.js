import React, { useState } from 'react'
import { Modal, Button, Carousel } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'

function Room({ room, setRoom }) {
    const navigate = useNavigate();
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const goToBooking = ()=> {
        setRoom(room);
        navigate('/home/book');

    }

    return (
        <div className='row bs'>
            <div className='col-md-4'>
                <img src={room.imageurls[0]} className='smalling' alt='' />
            </div>
            <div className='col-md-7 '>
                <h1>{room.name}</h1>
                <b>
                    <p>Max Count: {room.maxcount}</p>
                    <p>Phone Number: {room.phonenumber}</p>
                    <p>type: {room.type}</p>
                </b>
                <div style={{ float: 'right' }} >
                    <button className='btn btn-primary m-2' onClick={goToBooking}> BookNow </button>
                    <button className='btn btn-primary m-2' onClick={handleShow}>View Details</button>
                    


                </div>

            </div>


            <Modal show={show} onHide={handleClose} size="lg">
                <Modal.Header >
                    <Modal.Title>{room.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                <div className='carousel-container'>
                    <Carousel prevLabel=" " nextLabel=" ">

                        {room.imageurls.map(url => {
                            return <Carousel.Item>
                                <img
                                    className="d-block w-100 biging"
                                    src={url}
                                    alt="First slide"
                                />
                            </Carousel.Item>
                        })}

                    </Carousel>
                </div>
                    <h5>
                        <b>Description</b></h5>
                    <p>{room.description}</p>
                    <p>Max Count: {room.maxcount}</p>
                    <p>Phone Number: {room.phonenumber}</p>
                    <p>type: {room.type}</p>
                    <b>
                        <p>===================</p>
                    </b>
                    <b>
                        <p>Rent per day: {room.rentperday}</p>
                    </b>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default Room