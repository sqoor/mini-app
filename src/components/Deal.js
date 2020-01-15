import React from "react";

const abbreviate = require("number-abbreviate");

export default function Deal(props) {
  const {
    image_url,
    name,
    monthly_rental,
    transmission,
    engine_type,
    rental_profile,
    contract_type,
    milleage_num,
    type,
    initial_rental
  } = props;

  return (
    <div className="container border my-3 p-2">
      <div className="row">
        <div className="col-2">
          <img src={image_url} alt={name} width="150" />
          <small className="text-muted">Images for illustration only</small>
        </div>

        <div className="col-2">
          <p>
            {name} {engine_type}|{transmission}|{type}
          </p>
          <p>
            Lease Type <span className="warning">{contract_type}</span>
          </p>
        </div>

        <div className="col-4">
          <p>Payment Profile {rental_profile}</p>
          <p>Miles per Annum {abbreviate(milleage_num)}</p>
        </div>

        <div className="col-2">thumnail</div>

        <div className="col-2 d-flex flex-column justify-content-between">
          <div>
            <h6 className="m-0">&pound;{monthly_rental}</h6>
            <small className="text-muted m-0">Per Month inc. VAT</small>
          </div>
          <div>
            <h6 className="m-0">&pound;{initial_rental}</h6>
            <small className="text-muted m-0">Total Upfront</small>
          </div>
          <div>
            <button className="btn btn-success">Review Deal</button>
          </div>
        </div>
      </div>
    </div>
  );
}
