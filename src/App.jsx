import "./index.css";

import ControlledForm from "./components/ControlledForm";
import UncontrolledForm from "./components/UncontrolledForm";
import PostsFetcher from "./components/PostsFetcher";

function App() {
  return (
    <div className="container">
      <div className="card">
        <h1>React під контролем: Controlled vs Uncontrolled</h1>

        <section>
          <ControlledForm />
        </section>

        <section>
          <UncontrolledForm />
        </section>

        <section>
          <PostsFetcher />
        </section>
      </div>
    </div>
  );
}

export default App;
