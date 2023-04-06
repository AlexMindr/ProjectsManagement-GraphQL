import { useState } from "react";
import { OperationVariables, useMutation } from "@apollo/client";
import { GET_PROJECT } from "@/queries/projectQueries";
import { ProjectType, StatusType } from "@/types/types";
import { UPDATE_PROJECT } from "@/mutations/projectMutations";

type Props = {
  project: ProjectType;
  setToggleEdit: React.Dispatch<React.SetStateAction<boolean>>;
};

const EditProjectForm = ({ project, setToggleEdit }: Props) => {
  const [name, setName] = useState(() => project.name);
  const [description, setDescription] = useState(() => project.description);
  const [status, setStatus] = useState(() =>
    Object.keys(StatusType)[
      Object.values(StatusType).indexOf(project.status as unknown as StatusType)
    ].toString()
  );
  const [updateProject] = useMutation(UPDATE_PROJECT, {
    variables: {
      id: project.id,
      name,
      description,
      status,
    },
    refetchQueries: [{ query: GET_PROJECT, variables: { id: project.id } }],
  });
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (name === "" || description === "" || status === "")
      return alert("Please fill all fields");
    const values: OperationVariables = [name, description, status];
    updateProject(values);
    setToggleEdit(false);
    // setName(name);
    // setDescription(description);
    // setStatus(status);
  };

  return (
    <div className="mt-5">
      <h3>Update Project Form</h3>
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            id="name"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea
            id="description"
            className="form-control"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <div className="mb-3">
          <label className="form-label">Status</label>
          <select
            className="form-select"
            id="status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="new">Not Started</option>
            <option value="progress">In Progress</option>
            <option value="completed">Completed</option>
          </select>
        </div>
        <button className="btn btn-primary" type="submit">
          Submit changes
        </button>
      </form>
    </div>
  );
};

export default EditProjectForm;
