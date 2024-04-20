import Nav from "../components/Nav";
import transition from "../transition";
function Contact() {
  return (
    <div>
      <Nav />
      <h1 className="page-hero">Contact</h1>
    </div>
  );
}
export default transition(Contact);
