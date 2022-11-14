import "./index.css";
import Employee from "./components/Employee";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [role, setRole] = useState("Dev");
  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: "Bob",
      role: "Intern",
      img: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg",
    },
    {
      id: 2,
      name: "Nathan",
      role: "Developer",
      img: "https://images.pexels.com/photos/10531636/pexels-photo-10531636.jpeg",
    },
    {
      id: 3,
      name: "Sarah",
      role: "Engineer",
      img: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg",
    },
  ]);
  const showEmployees = true;

  function updateEmployee(id, newName, newRole) {
    const updatedEmployees = employees.map((employee) => {
      if (id == employee.id) {
        return { ...employee, name: newName, role: newRole };
      }

      return employee;
    });
    setEmployees(updatedEmployees);
  }

  return (
    <div className="App">
      {showEmployees ? (
        <>
          <input
            type="text"
            onChange={(e) => {
              setRole(e.target.value);
            }}
          />
          <div className="flex flex-wrap justify-center">
            {employees.map((employee) => {
              return (
                <Employee
                  key={employee.id}
                  id={employee.id}
                  name={employee.name}
                  role={employee.role}
                  img={employee.img}
                  updateEmployee={updateEmployee}
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
