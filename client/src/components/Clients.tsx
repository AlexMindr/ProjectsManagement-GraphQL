import { gql, useQuery } from "@apollo/client";
import ClientRow from "@/components/ClientRow";
import { ClientType } from "@/types/types";
import { GET_CLIENTS } from "@/queries/clientQueries";
import Spinner from "./Spinner";

type Props = {};

const Clients = (props: Props) => {
  const { loading, error, data } = useQuery(GET_CLIENTS);

  if (loading) return <Spinner />;
  if (error) return <p>Something went wrong</p>;
  return (
    <>
      {!loading && !error && (
        <table className="table table-hover mt-3">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Del</th>
            </tr>
          </thead>
          <tbody>
            {data.clients.map((client: ClientType, idx: number) => (
              <ClientRow key={idx} client={client} />
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default Clients;
