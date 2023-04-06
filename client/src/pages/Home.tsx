import AddClientModal from "@/components/AddClientModal";
import Clients from "@/components/Clients";
import Projects from "@/components/Projects";
import React from "react";

type Props = {};

const Home = (props: Props) => {
  return (
    <>
      <div className="d-flex gap-3 mb-4">
        <AddClientModal />
      </div>
      <Projects />
      <Clients />
    </>
  );
};

export default Home;
