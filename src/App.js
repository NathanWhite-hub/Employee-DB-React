import "./index.css";
import Employee from "./components/Employee";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [role, setRole] = useState("Dev");
  const [employees, setEmployees] = useState([
    {
      name: "Bob",
      role: "Intern",
      img: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg",
    },
    {
      name: "Nathan",
      role: "Developer",
      img: "https://images.pexels.com/photos/10531636/pexels-photo-10531636.jpeg",
    },
    {
      name: "Sarah",
      role: "Engineer",
      img: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg",
    },
  ]);
  const showEmployees = true;

  return (
    <div className="App">
      {showEmployees ? (
        <>
          <input
            type="text"
            onChange={(e) => {
              console.log(e.target.value);
              setRole(e.target.value);
            }}
          />
          <div className="flex flex-wrap justify-center">
            {employees.map((employee) => {
              return (
                <Employee
                  key={uuidv4()}
                  name={employee.name}
                  role={employee.role}
                  img={employee.img}
                />
              );
            })}
          </div>
        </>
      ) : (
        <p>You cannot view the employees.</p>
      )}
    </div>
  );
}

export default App;
