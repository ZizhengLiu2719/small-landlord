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
      alert("登录失败：" + error.message);
    } else {
      window.location.href = "/dashboard";
    }
    setLoading(false);
  }

  async function handleSignup() {
    setLoading(true);
    const { error } = await supabase.auth.signUp({ email, password });
    if (error) {
      alert("注册失败：" + error.message);
    } else {
      alert("注册成功，请检查邮箱确认！");
    }
    setLoading(false);
  }

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-header">
          <h1 className="login-title">🏠 SmartLandlord</h1>
          <p className="login-subtitle">AI 房东助手平台</p>
        </div>
        
        <form className="login-form" onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="email">邮箱地址</label>
            <input
              id="email"
              type="email"
              placeholder="请输入邮箱"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="password">密码</label>
            <input
              id="password"
              type="password"
              placeholder="请输入密码"
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
            {loading ? '登录中...' : '登录'}
          </button>
          
          <button 
            type="button" 
            className="signup-btn"
            onClick={handleSignup}
            disabled={loading}
          >
            {loading ? '注册中...' : '注册新账户'}
          </button>
        </form>
        
        <div className="login-footer">
          <p>专为美国阿肯色州中小房东设计</p>
        </div>
      </div>
    </div>
  );
}
