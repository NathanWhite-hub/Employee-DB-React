import "./index.css";
import Employee from "./components/Employee";
import { useState } from "react";

function App() {
  const [role, setRole] = useState("Dev");
  const showEmployees = true;

  return (
    <div className="App bg-red-400">
      {showEmployees ? (
        <>
          <input
            type="text"
            onChange={(e) => {
              console.log(e.target.value);
              setRole(e.target.value);
            }}
          />
          <Employee name="Bob" role="Intern" />
          <Employee name="Nathan" role={role} />
          <Employee name="Sarah" />
        </>
      ) : (
        <p>You cannot view the employees.</p>
      )}
    </div>
  );
}

export default App;
