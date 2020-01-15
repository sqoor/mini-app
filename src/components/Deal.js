import React from "react";

export default function Deal(props) {
  const { image_url, name, monthly_rental } = props;

  return (
    <div className="container">
      <div className="row">
        <div className="col-2">
          <img src={image_url} alt={name} width="150" />
          <small className="text-muted">Images for illustration only</small>
        </div>

        <div className="col-2">
          KIAXCeed Petrol|Manual|FWD Lease Type Personal
        </div>

        <div className="col-4">
          <p>Payment Profile 9 + 23</p>
          <p>Miles per Annum 5k</p>
        </div>

        <div className="col-2">thumnail</div>

        <div className="col-2">
          <h3 className="m-0">{monthly_rental}</h3>
          <small className="text-muted m-0">Per Month inc. VAT</small>
          <button className="btn btn-success">Review Deal</button>
        </div>
      </div>
    </div>
  );
}
