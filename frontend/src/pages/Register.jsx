import React from "react";

const Register = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Student Registration</h2>
      <form>
        <input type="text" placeholder="Full Name" /><br /><br />
        <input type="email" placeholder="Email" /><br /><br />
        <input type="password" placeholder="Password" /><br /><br />
        <button>Register</button>
      </form>
    </div>
  );
};

export default Register;
