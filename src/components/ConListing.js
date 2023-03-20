/* eslint-disable no-console */

import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const ConListing = () => {
  const [condata, condatachange] = useState(null);
  const navigate = useNavigate();

  const LoadView = (id) => {
    navigate('/song-training-project/view/' + id);
  };
  const LoadUpdate = (id) => {
    navigate('/song-training-project/update/' + id);
  };
  const Deletefunction = (id) => {
    if (window.confirm('Do you want to delete?')) {
      fetch('http://localhost:4000/contact/' + id, {
        method: 'DELETE',
      })
        .then((res) => {
          alert('Delete successfully.');
          window.location.reload();
        })
        .catch((error) => {
          console.log(error.message);
        });
    }
  };

  useEffect(() => {
    fetch('http://localhost:4000/contact')
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        condatachange(resp);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);
  return (
    <div className="container">
      <div className="card">
        <div className="card-title">
          <h2>Contact Listing</h2>
        </div>
        <div className="card-body">
          <div className="div-btn">
            <Link to="contact/create" className="btn btn-success">
              Add New (+)
            </Link>
          </div>
          <table className="table table-bordered">
            <thead className="bg-dark text-white">
              <tr>
                <td>ID</td>
                <td>Name</td>
                <td>Email</td>
                <td>Phone</td>
              </tr>
            </thead>
            <tbody>
              {condata &&
                condata.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
                    <td>
                      <a
                        href="#/data"
                        onClick={() => {
                          LoadView(item.id);
                        }}
                        className="btn btn-primary"
                      >
                        View
                      </a>

                      <a
                        href="#/data"
                        onClick={() => {
                          LoadUpdate(item.id);
                        }}
                        className="btn btn-success"
                      >
                        {' '}
                        Update
                      </a>
                      <a
                        href="#/data"
                        onClick={() => {
                          Deletefunction(item.id);
                        }}
                        className="btn btn-danger"
                      >
                        {' '}
                        Delete
                      </a>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ConListing;
