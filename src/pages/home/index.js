import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Service from "../../services";

export default function Home() {
    const fetchData = async ()=>{
       const data = await Service()
       console.log(data)
    }
    useEffect(()=>{
        fetchData()
    },[])

  return (
    <div>
      Home
      <Link to="/about">about</Link>
    </div>
  );
}
