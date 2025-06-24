import { useState } from "react";
import { supabase } from "../lib/supabaseClient";
import "./Login.css";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleLogin(e) {
    e.preventDefault();
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      alert("Login failed: " + error.message);
    } else {
      window.location.href = "/dashboard";
    }
    setLoading(false);
  }

  async function handleSignup() {
    setLoading(true);
    const { error } = await supabase.auth.signUp({ email, password });
    if (error) {
      alert("Registration failed: " + error.message);
    } else {
      alert("Registration successful! Please check your email to confirm.");
    }
    setLoading(false);
  }

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-header">
          <h1 className="login-title">🏠 SmartLandlord</h1>
          <p className="login-subtitle">AI Landlord Assistant Platform</p>
        </div>
        
        <form className="login-form" onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          
          <button 
            type="submit" 
            className="login-btn"
            disabled={loading}
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
          
          <button 
            type="button" 
            className="signup-btn"
            onClick={handleSignup}
            disabled={loading}
          >
            {loading ? 'Registering...' : 'Create New Account'}
          </button>
        </form>
        
        <div className="login-footer">
          <p>Designed for small landlords in Arkansas and surrounding areas</p>
        </div>
      </div>
    </div>
  );
}
