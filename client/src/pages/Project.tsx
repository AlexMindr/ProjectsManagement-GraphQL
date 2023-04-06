import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Spinner from "@/components/Spinner";
import { useQuery } from "@apollo/client";
import { GET_PROJECT } from "@/queries/projectQueries";
import ClientInfo from "@/components/ClientInfo";
import DeleteProjectButton from "@/components/DeleteProjectButton";
import EditProjectForm from "@/components/EditProjectForm";

const Project = () => {
  const [toggleEdit, setToggleEdit] = useState(false);
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_PROJECT, {
    variables: { id },
  });
  if (loading) return <Spinner />;
  if (error) return <p>Something went wrong</p>;

  return (
    <>
      {!loading && !error && (
        <div className="mx-auto w-75 card p-5">
          <Link to="/" className="btn btn-light btn-sm w-20 d-inline ms-auto">
            Back
          </Link>
          <h1>{data.project.name}</h1>
          <p>{data.project.description}</p>
          <h5 className="mt-3">Project Status</h5>
          <p className="lead">{data.project.status}</p>
          <ClientInfo client={data.project.client} />
          <div className="d-flex mt-5 ">
            <button
              type="button"
              className="btn btn-secondary btn-lg  mr-auto"
              onClick={() => setToggleEdit(!toggleEdit)}
            >
              Edit Project
            </button>
          </div>
          {toggleEdit ? (
            <EditProjectForm
              project={data.project}
              setToggleEdit={setToggleEdit}
            />
          ) : (
            <></>
          )}

          <DeleteProjectButton projectId={data.project.id} />
        </div>
      )}
    </>
  );
};

export default Project;
