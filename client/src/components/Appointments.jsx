import React from 'react';

const Appointments = ({appointments, current}) => (
  <div id="Appointments">
    <h1>{`Dr. ${current.first_name} ${current.last_name}`}</h1>
    <h3>{current.last_name}@notablehealth.com</h3>
    <table>
      <tbody>
        <tr id="top-row">
          <th>#</th>
          <th>Name</th>
          <th>Time</th>
          <th>Kind</th>
        </tr>
        {appointments.map((app, index) => (
          <tr>
            <td>{index + 1}</td>
            <td>{app.full_name}</td>
            <td>{app.time_stamp}</td>
            <td>{app.kind}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default Appointments;