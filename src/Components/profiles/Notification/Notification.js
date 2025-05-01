import React from "react";

const Notifications = () => {
  return (
    <div className="container py-5">
        <style>
            {`.notification-item {
  background-color: #fff;
  border: 1px solid #eee;
}

.avatar {
  width: 40px;
  height: 40px;
  background-color: #f06292;
  color: #fff;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  font-size: 18px;
}

.notification-text {
  font-size: 14px;
  line-height: 1.5;
}
`}
        </style>
      <h5 className="mb-4">Notifications</h5>
      <div className="notification-item d-flex align-items-start p-3 rounded shadow-sm">
        <div className="avatar flex-shrink-0 me-3">H</div>
        <div className="flex-grow-1">
          <p className="mb-1 text-muted notification-text">
            Please Confirm Your Email Address By Clicking On The Link We Just Emailed You. If You Cannot Find The Email, You Can Request A New Confirmation Email Or Change Your Email Address.
          </p>
          <small className="text-secondary">April 18, 2025</small>
        </div>
        <button className="btn-close ms-3" aria-label="Close"></button>
      </div>
    </div>
  );
};

export default Notifications;
