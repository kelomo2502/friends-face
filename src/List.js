import React from 'react';
import "./App.css"

const List = ({people, handleDelete}) => {
  
  return (
    <>
      {people.map((person) => {
        return (
          <div
            className="card  col-md-5 me-md-2 mb-2  col-lg-3 p-0"
            key={person.id}
          >
            <img
              src={person.image}
              className="card-img-top"
              alt={people.name}
            />
            <div className="card-body ">
              <p className="card-title fs-4 text-secondary">{person.name}</p>
              <p className="card-text text-white border rounded-circle btn btn-secondary">
                {person.age}
              </p>

              <div className="row justify-content-md-evenly ">
                <button
                  className="btn btn-secondary col-md-5 mb-sm-2 xs delete"
                  onClick={() => handleDelete(person.id)}
                >
                  Delete
                </button>

                <button
                  type="button"
                  className="btn btn-dark col-md-5 mb-sm-2 xs edit"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  Edit
                </button>
                <div
                  className="modal fade"
                  id="exampleModal"
                  tabIndex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h1 className="modal-title fs-4 text-secondary" id="exampleModalLabel">
                          Edit Details
                        </h1>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div className="modal-body ">
                        <form row>
                          <input
                          className='col-12 mb-2'
                            type="text"
                            name={person.name}
                            placeholder="Edit Name"
                          />
                          <input className='col-12' type="text" name="" placeholder="Edit Age" />
                        </form>
                      </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-secondary"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                        <button type="button" className="btn btn-primary">
                          Save changes
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default List