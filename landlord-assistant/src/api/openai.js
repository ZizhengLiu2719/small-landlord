// src/api/openai.js
export async function generateContract(promptText) {
    const res = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: promptText }],
        temperature: 0.7
      })
    });
  
    const data = await res.json();
    return data.choices?.[0]?.message?.content || "生成失败";
  }
  