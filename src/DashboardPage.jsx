import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

function DashboardPage() {
  const authToken = localStorage.getItem('authToken');

  React.useEffect(() => {
    const expirationTime = localStorage.getItem('expirationTime');
    if (expirationTime && new Date().getTime() > expirationTime) {
      localStorage.removeItem('authToken');
      localStorage.removeItem('expirationTime');
      window.location.href = '/login';
    }
  }, []);

  if (!authToken) {
    return null;
  }

  return (
    <div className="container">
      <div className="dashboard">
        <h2>Dashboard Menu</h2>
        <ul>
          <li>
            
            <Link to="/">Logout</Link>
         
          </li>
        </ul>
      </div>
      <div className="form-container">
        <h1>Add Task</h1>
        <form method="post" action="/successpost">
          <div className="form-group">
            <label htmlFor="title">Title:</label>
            <input type="text" id="title" name="title" maxLength={100} required />
            <label htmlFor="related-task">Related Task:</label>
            <select id="related-task" name="related-task" required>
              <option value>-- Select Related Task --</option>
              <option value="task1">Task 1</option>
              <option value="task2">Task 2</option>
              <option value="task3">Task 3</option>
            </select>
            <label htmlFor="description">Description:</label>
            <textarea id="description" name="description" maxLength={250} required defaultValue={""} />
            <div className="form-group">
              <div className="form-control">
                <label htmlFor="assign-to">Assign To:</label>
                <select id="assign-to" name="assign-to" required>
                  <option value>-- Select Assignee --</option>
                  <option value="staff1">Staff 1</option>
                  <option value="staff2">Assign to myself</option>
                  <option value="staff3">Staff 3</option>
                </select>
              </div>
              <div className="form-control">
                <label htmlFor="report-to">Report To:</label>
                <select id="report-to" name="report-to" required>
                  <option value>-- Select Reporter --</option>
                  <option value="staff1">Staff 1</option>
                  <option value="staff2">Staff 2</option>
                  <option value="staff3">Staff 3</option>
                </select>
              </div>
            </div>
            <label htmlFor="start-date">Start Date:</label>
            <input type="date" id="start-date" name="start-date" min="2023-04-29" required />
            <label htmlFor="due-date">Due Date:</label>
            <input type="date" id="due-date" name="due-date" min="2023-04-30" required />
            <label htmlFor="start-time">Start Time:</label>
            <input type="time" id="start-time" name="start-time" defaultValue="00:00" required />
            <label htmlFor="due-time">Due Time:</label>
            <input type="time" id="due-time" name="due-time" defaultValue="00:00" required />
            <label htmlFor="priority">Priority:</label>
            <select id="priority" name="priority">
              <option value="emergency" style={{color: 'red'}}>Emergency</option>
              <option value="high" style={{color: 'orange'}}>High</option>
              <option value="medium" style={{color: 'yellow'}}>Medium</option>
              <option value="low" selected style={{color: 'green'}}>Low</option>
            </select>
            <label htmlFor="mark-critical">Mark as Critical:</label>
            <input type="checkbox" id="mark-critical" name="mark-critical" />
            <label htmlFor="attach-file">Attach File:</label>
            <input type="file" id="attach-file" name="attach-file" />
            <br /><br />
          <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default DashboardPage;
