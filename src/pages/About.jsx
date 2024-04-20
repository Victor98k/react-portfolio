import Nav from "../components/Nav";
import transition from "../transition";
import Styles from "../Styles/About.module.css";

function About() {
  return (
    <div>
      <Nav />
      <h1 className="page-hero">About</h1>
    </div>
  );
}

export default transition(About);
