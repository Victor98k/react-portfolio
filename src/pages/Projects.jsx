import Nav from "../components/Nav";
import transition from "../transition";
function Projects() {
  return (
    <div>
      <Nav />
      <h1 className="page-hero">Projects</h1>
    </div>
  );
}

export default transition(Projects);
