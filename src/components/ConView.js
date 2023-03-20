/* eslint-disable no-console */
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const ConView = () => {
  const { conid } = useParams();

  const [condata, condatachange] = useState({});

  useEffect(() => {
    fetch('http://localhost:4000/contact/' + conid)
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        condatachange(resp);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [conid]);
  return (
    <div>
      {/* <div className="row">
                <div className="offset-lg-3 col-lg-6"> */}

      <div className="container">
        <div className="card row" style={{ textAlign: 'left' }}>
          <div className="card-title">
            <h2>Contact Create</h2>
          </div>
          <div className="card-body"></div>

          {condata && (
            <div>
              <h2>
                The Contact name is : <b>{condata.name}</b> ({condata.id})
              </h2>
              <h3>Contact Details</h3>
              <h5>Email is : {condata.email}</h5>
              <h5>Phone is : {condata.phone}</h5>
              <Link className="btn btn-danger" to="/">
                Back to Listing
              </Link>
            </div>
          )}
        </div>
      </div>
      {/* </div>
            </div> */}
    </div>
  );
};

export default ConView;
