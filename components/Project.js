import Link from 'next/link';
import React from 'react';

const Project = ({ project }) => {
  const { _id, name, image1 } = project;

  return (
    <div className="my-5 ">
      <div className="card w-96  bg-gray-500 bg-opacity-20 backdrop-blur-lg rounded-md drop-shadow-lg py-5">
        <figure>
          <img
            src={image1}
            alt="project"
            style={{ height: '500px', width: '300px' }}
            className="mx-auto rounded-md border border-gray-600"
          />
        </figure>
        <div className="card-body w-64 mx-auto">
          <h2 className="card-title text-center mt-2">{name}</h2>
          <p>You can see the details of projects</p>
          <div className="card-actions w-48 mx-auto">
            <Link href={`/details/${_id}`}>
              {' '}
              <button className="p-2 mt-3 border-solid border-2 border-slate-600 text-white rounded-full">
                Click Here for details..
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
