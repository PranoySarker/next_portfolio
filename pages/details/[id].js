import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

const Details = () => {
  const router = useRouter();
  const id = router.query.id;
  console.log(id);

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('https://pranoysarker.github.io/projectapi/details.json')
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
      });
  }, []);

  const detail = projects.filter((project) => project._id === id);

  return (
    <div className="bg-[#10101a]">
      <div className="text-white pt-10">
        <div className="card w-1/2 bg-white bg-opacity-20 backdrop-blur-lg rounded drop-shadow-lg p-5  mx-auto">
          <div className="card-body">
            <h2 className="card-title">{detail[0]?.name}</h2>
            <p>
              <span className="font-bold">Description:</span> {detail[0]?.about}
            </p>
          </div>
        </div>
        <h1 className="text-2xl font-bold my-10 text-center">
          Some Screenshots of the project
        </h1>
        <div className="grid grid-cols-1">
          <div className="card w-2/3 bg-white bg-opacity-20 backdrop-blur-lg rounded drop-shadow-lg p-5 mx-auto mb-10">
            <h2 className="text-xl font-semibold text-center mb-2">
              Home Page Image
            </h2>
            <figure>
              <img
                src={detail[0]?.image1}
                alt="img"
                className="flex items-center"
              />
            </figure>
          </div>
          <div className="card  bg-white bg-opacity-20 backdrop-blur-lg rounded drop-shadow-lg p-5 w-2/3 shadow-xl mx-auto mb-10">
            <h2 className="text-xl font-semibold text-center mb-5">
              Product Page Image
            </h2>
            <figure>
              <img
                src={detail[0]?.image2}
                alt="img"
                className="flex items-center"
              />
            </figure>
          </div>
          <div className="card  bg-white bg-opacity-20 backdrop-blur-lg rounded drop-shadow-lg p-5 w-2/3 shadow-xl mx-auto mb-10">
            <h2 className="text-xl font-semibold text-center mb-5">
              Order Page Image
            </h2>
            <figure>
              <img src={detail[0]?.image3} alt="img" />
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
