import React, { useEffect, useState } from "react";
import { useLoaderData } from 'react-router-dom'

const Github = () => {

  const data = useLoaderData();
  // const [data, setdata] = useState([]);
  // useEffect(() => {
  //   fetch("https://api.github.com/users/deepaksinghlsd")
  //     .then((response) => response.json())
  //     .then((data) => setdata(data));
  // }, []);

  return (
    <div>
      <p  className="bg-gray-400 text-center text-3xl">Github followers: {data.followers}</p>
      <img className="mx-auto w-[300px]" src={data.avatar_url} alt="Git pic" />
    </div>
  );
};

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch('https://api.github.com/users/deepaksinghlsd')
  return response.json()
}
