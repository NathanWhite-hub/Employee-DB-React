import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function AddEmployee(props) {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [img, setImg] = useState("");

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button
        onClick={handleShow}
        className="m-2 mx-auto block rounded bg-purple-600 py-2 px-4 font-bold text-white hover:bg-purple-700"
      >
        + Add Employee
      </button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Updated Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              props.newEmployee(name, role, img);
              setName("");
              setRole("");
              setImg("");
            }}
            id="editmodal"
            class="w-full max-w-sm"
          >
            <div className="mb-6 md:flex md:items-center">
              <div className="md:w-1/3">
                <label
                  className="mb-1 block pr-4 font-bold text-gray-500 md:mb-0 md:text-right"
                  for="name"
                >
                  Full Name
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                  className="w-full appearance-none rounded border-2 border-gray-200 bg-gray-200 py-2 px-2 leading-tight text-gray-700 focus:border-purple-500 focus:bg-white focus:outline-none"
                  id="name"
                  placeholder="John Doe"
                  type="text"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="mb-6 md:flex md:items-center">
              <div className="md:w-1/3">
                <label
                  className="mb-1 block pr-4 font-bold text-gray-500 md:mb-0 md:text-right"
                  for="role"
                >
                  Role
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                  className="w-full appearance-none rounded border-2 border-gray-200 bg-gray-200 py-2 px-2 leading-tight text-gray-700 focus:border-purple-500 focus:bg-white focus:outline-none"
                  id="role"
                  placeholder="Recruiter"
                  type="text"
                  value={role}
                  onChange={(e) => {
                    setRole(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="mb-6 md:flex md:items-center">
              <div className="md:w-1/3">
                <label
                  className="mb-1 block pr-4 font-bold text-gray-500 md:mb-0 md:text-right"
                  for="img"
                >
                  Image URL
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                  className="w-full appearance-none rounded border-2 border-gray-200 bg-gray-200 py-2 px-2 leading-tight text-gray-700 focus:border-purple-500 focus:bg-white focus:outline-none"
                  id="img"
                  placeholder="https://imgur.com"
                  type="text"
                  value={img}
                  onChange={(e) => {
                    setImg(e.target.value);
                  }}
                />
              </div>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <button
            className="rounded bg-red-500 py-2 px-4 font-bold text-white hover:bg-red-700"
            onClick={handleClose}
          >
            Close
          </button>
          <button
            className="rounded bg-purple-600 py-2 px-4 font-bold text-white hover:bg-purple-700"
            onClick={handleClose}
            form="editmodal"
          >
            Add
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddEmployee;
