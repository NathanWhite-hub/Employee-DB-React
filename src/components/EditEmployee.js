import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function EditEmployee() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button
        onClick={handleShow}
        className="rounded-full border border-purple-200 px-4 py-1 text-sm font-semibold text-purple-600 hover:border-transparent hover:bg-purple-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
      >
        Update
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
          <form id="editmodal" class="w-full max-w-sm">
            <div className="mb-6 md:flex md:items-center">
              <div className="md:w-1/3">
                <label
                  className="mb-1 block pr-4 font-bold text-gray-500 md:mb-0 md:text-right"
                  for="inline-full-name"
                >
                  Full Name
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                  className="w-full appearance-none rounded border-2 border-gray-200 bg-gray-200 py-2 px-4 leading-tight text-gray-700 focus:border-purple-500 focus:bg-white focus:outline-none"
                  id="name"
                  type="text"
                  value="Jane Doe"
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
                  className="w-full appearance-none rounded border-2 border-gray-200 bg-gray-200 py-2 px-4 leading-tight text-gray-700 focus:border-purple-500 focus:bg-white focus:outline-none"
                  id="role"
                  type="text"
                  value="Jane Doe"
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
            form="editmodal"
          >
            Update
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditEmployee;
