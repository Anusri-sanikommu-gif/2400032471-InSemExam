import { useState } from "react";
function App() {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [emailError, setEmailError] = useState("");
const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
const handleEmailChange = (e) => {
const value = e.target.value;
setEmail(value);
setEmailError(validateEmail(value) ? "" : "Please enter a valid email address");
};
const handleSubmit = (e) => {
e.preventDefault();
alert("Form submitted successfully!");
};
const isFormInvalid = !validateEmail(email) || password.trim() === "";
return (
<div
style={{
height: "100vh",             
width: "100vw",              
margin: 0,                  
padding: 0,                  
display: "flex",             
justifyContent: "center",   
alignItems: "center",        
backgroundColor: "#f0f4f8",
}}
>
<div
style={{
width: "350px",
padding: "30px",
borderRadius: "10px",
border: "2px solid #007bff",
backgroundColor: "white",
boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
textAlign: "center",
}}
>
<h2 style={{ marginBottom: "20px", color: "#333" }}>React Form Validation</h2>
<form onSubmit={handleSubmit}>
<input
type="email"
placeholder="Enter your email"
value={email}
onChange={handleEmailChange}
style={{
width: "100%",
padding: "10px",
borderRadius: "5px",
border: "1px solid #ccc",
marginBottom: "5px",
}}
/>
{emailError && (
<p style={{ color: "red", fontSize: "14px", margin: "5px 0" }}>
{emailError}
</p>
)}
<input
type="password"
placeholder="Enter your password"
value={password}
onChange={(e) => setPassword(e.target.value)}
style={{
  width: "100%",
padding: "10px",
borderRadius: "5px",
border: "1px solid #ccc",
marginTop: "10px",
marginBottom: "15px",
}}
/>
<button
type="submit"
disabled={isFormInvalid}
style={{
width: "100%",
padding: "10px",
backgroundColor: isFormInvalid ? "#aaa" : "#007bff",
color: "white",
border: "none",
borderRadius: "5px",
cursor: isFormInvalid ? "not-allowed" : "pointer",
fontSize: "16px",
}}
>
Submit
</button>
</form>
</div>
</div>
);
}
export default App;
