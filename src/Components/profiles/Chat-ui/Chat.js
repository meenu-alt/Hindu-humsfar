import React from 'react';
import './ChatUI.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { IoSend } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";


const ChatApp = () => {
  return (
    <div className="container chat-app mt-5 mb-5">
      <div className="row">
        {/* Sidebar */}
        <div className="col-md-4 chat-sidebar p-3">
  <h6 className="mb-3">Chat Messages</h6>
  <div className="input-group mb-3">
    <input type="text" placeholder="Search" className="form-control" />
    <span className="input-group-text bg-white">
    <FaSearch />

    </span>
  </div>

  <div className="chat-user-list">
    {/* User 1 */}
    <div className="chat-user">
      <img src="https://randomuser.me/api/portraits/men/1.jpg" className="chat-avatar" alt="John Smith" />
      <div className="flex-grow-1 ms-2">
        <strong>John Smith</strong>
        <p>Hey, how are you?</p>
      </div>
      <div className="text-end">
        <span className="time d-block">9:00 PM</span>
        <span className="badge rounded-pill bg-danger text-white mt-1">1</span>
      </div>
    </div>

    {/* User 2 (Selected) */}
    <div className="chat-user selected">
      <img src="https://randomuser.me/api/portraits/men/2.jpg" className="chat-avatar" alt="Richard Watson" />
      <div className="flex-grow-1 ms-2">
        <strong>Richard Watson</strong>
        <p>Hi</p>
      </div>
      <div className="text-end">
        <span className="time">9:00 PM</span>
      </div>
    </div>

    {/* User 3 */}
    <div className="chat-user">
      <img src="https://randomuser.me/api/portraits/men/3.jpg" className="chat-avatar" alt="Joshua Nash" />
      <div className="flex-grow-1 ms-2">
        <strong>Joshua Nash</strong>
        <p>We have that here too..</p>
      </div>
      <div className="text-end">
        <span className="time">Yesterday</span>
      </div>
    </div>
  </div>
</div>


        {/* Chat Window */}
        <div className="col-md-8 chat-window d-flex flex-column">
          <div className="chat-header p-3 d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center">
              <img src="https://via.placeholder.com/40" className="rounded-circle me-2" alt="User" />
              <div>
                <strong>Richard Watson</strong>
                <p className="online-status">online</p>
              </div>
            </div>
          </div>
          <div className="chat-body flex-grow-1 p-3 d-flex flex-column">
            <div className="chat-bubble received align-self-start">Hi</div>
            <div className="chat-bubble sent align-self-end">Hi</div>
            <div className="chat-bubble received align-self-start">
              Today I saw a mocking bird and thought about you...
            </div>
          </div>
          <div className="chat-footer p-3 d-flex align-items-center">
            <input type="text" className="form-control me-2" placeholder="Send a message" />
            {/* <button className="btn btn-danger">Send <IoSend /></button> */}
            <button className="btn btn-danger"> <IoSend /></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatApp;
