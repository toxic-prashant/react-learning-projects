import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const [data, setData] = useState([]);
  //   useEffect(() => {
  //     fetch("https://api.github.com/users/toxic-prashant")
  //       .then((response) => response.json())
  //       .then((data) => {
  //         console.log(data);
  //         setData(data);
  //       });
  //   }, []);

  const githubData = useLoaderData();

  return (
    <div className="text-center m-5 bg-gray-600 text-white p-4 text-3xl ">
      Github Username:{githubData.login}
      <img src={githubData.avatar_url} alt="Git picture" width={300} />
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/toxic-prashant");
  return response.json();
};
