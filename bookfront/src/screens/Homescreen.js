import { useState, useEffect } from "react";
import axios from 'axios'
import Room from "../components/Room";

function Homescreen({setRoom}) {

  const [rooms, setrooms] = useState([])
  const [loading, setLoading] = useState()
  const [error, seterror] = useState()

  useEffect(() => {
    async function fetchData() {

      try {
        setLoading(true)
        const response = await axios.get('/api/rooms/getallrooms');
        setrooms(response.data)
        setLoading(false)
        const data = response.data;
        console.log(data);
      } catch (error) {
        seterror(true)
        console.log(error);
        setLoading(false)
      }
    }

    fetchData();

  }, []);



  return (
    <div className="container">
       
      <div className="row justify-content-center mt-5 ">
        {loading ? (<h1>loading...</h1>) : error ? (<h1>error</h1>) : (rooms.map(room => {
          return <div className="col-md-9 mt-2">
            <Room room={room} setRoom={setRoom} key={room['_id']}/>
          </div>

        }))}
      </div>

    </div>
  );
}

export default Homescreen