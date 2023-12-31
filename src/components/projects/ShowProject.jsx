import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { ourProjects } from "../../data/ourProject";
const ShowProject = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  const { name } = useParams();

  const filterProject = ourProjects.filter((p) => p.tag == name);
  console.log(filterProject[0].tech);

  return (
    <div className="showproject">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <img
              className="rounded img-fluid"
              src={filterProject[0].thumb}
              alt=""
            />
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-lg-8 col-12">
            <h1>{filterProject[0].projectName}</h1>
            <h4>{filterProject[0].about}</h4>
          </div>
          <div className="col-lg-4 col-12">
            <h3>Owner: {filterProject[0].owner}</h3>
            <a
              className="text-danger fs-3 text-decoration-none"
              href={filterProject[0].projectLink}
            >
              Live Link
            </a>
          </div>
        </div>

        <h2 className="mt-5">Technology</h2>
        <div className="d-flex">
          {filterProject[0].tech.map((t) => {
            return <img className="techimg img-fluid" src={t} alt="" />;
          })}
        </div>
      </div>
    </div>
  );
};

export default ShowProject;
