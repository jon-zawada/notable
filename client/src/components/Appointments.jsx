import React from 'react';

const Appointments = ({appointments}) => (
  <table>
    <tbody>
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>Time</th>
        <th>Kind</th>
      </tr>
      {/* <tr>
        <td>Jill</td>
        <td>Smith</td>
        <td>50</td>
      </tr>
      <tr>
        <td>Eve</td>
        <td>Jackson</td>
        <td>94</td>
      </tr> */}
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
);

export default Appointments;