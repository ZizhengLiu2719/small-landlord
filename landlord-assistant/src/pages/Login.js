import { useState } from "react";
import { supabase } from "../lib/supabaseClient";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin(e) {
    e.preventDefault();
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) alert("登录失败：" + error.message);
    else window.location.href = "/dashboard";
  }

  async function handleSignup() {
    const { error } = await supabase.auth.signUp({ email, password });
    if (error) alert("注册失败：" + error.message);
    else alert("注册成功，请检查邮箱确认！");
  }

  return (
    <div className="p-6 max-w-sm mx-auto">
      <input type="email" placeholder="Email" className="mb-2 w-full p-2 border" onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" className="mb-2 w-full p-2 border" onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin} className="w-full bg-blue-500 text-white py-2 mb-2">登录</button>
      <button onClick={handleSignup} className="w-full border py-2">注册</button>
    </div>
  );
}
