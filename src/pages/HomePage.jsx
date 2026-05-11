import PageNav from "../components/PageNav";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div>
      <PageNav />
      <h1>WorldWise</h1>
      <Link to="/app">Go to the app</Link>
    </div>
  );
}
