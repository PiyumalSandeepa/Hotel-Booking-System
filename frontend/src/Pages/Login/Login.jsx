import React, { useState } from 'react';
import './login.css';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};

    if (!username) newErrors.username = 'Username is required';
    if (!password) newErrors.password = 'Password is required';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    console.log('Username:', username);
    console.log('Password:', password);
    console.log('Remember Me:', rememberMe);
    setErrors({});
    
    // Navigate to homepage after successful login
    navigate('/');
  };

  return (
    <div className="login-wrapper">
      <div className="login-background"></div>
      
      <div className="login-container">
        <div className="login-header">
          <h1>Welcome Back</h1>
          <p>Sign in to your account</p>
        </div>

        <form onSubmit={handleSubmit} className="login-form">
          <div className="input-group">
            <label htmlFor="username">Username or Email</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className={errors.username ? 'error' : ''}
              placeholder="Enter your username or email"
            />
            {errors.username && <span className="error-message">{errors.username}</span>}
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={errors.password ? 'error' : ''}
              placeholder="Enter your password"
            />
            {errors.password && <span className="error-message">{errors.password}</span>}
          </div>

          <div className="login-options">
            <label className="remember-me">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              <span>Remember me</span>
            </label>
            <Link to="#forgot" className="forgot-password">Forgot Password?</Link>
          </div>

          <button type="submit" className="login-btn">Sign In</button>
        </form>

        <div className="login-footer">
          <p>Don't have an account? <Link to="#signup" className="signup-link">Sign up here</Link></p>
        </div>

        <div className="login-divider">
          <span>Or continue with</span>
        </div>

        <div className="social-login">
          <button className="social-btn google-btn">🔍 Google</button>
          <button className="social-btn facebook-btn">f Facebook</button>
        </div>
      </div>
    </div>
  );
}

export default Login;
