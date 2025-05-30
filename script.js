const loginBtn = document.getElementById("login-btn");
const appDiv = document.getElementById("app");

loginBtn.onclick = () => {
  alert("Google OAuth not active in demo. Add your Client ID in script.");
  // Implement Google OAuth here
};

async function generateSuggestions() {
  const input = document.getElementById("topic-input").value;
  const output = document.getElementById("output");
  output.innerText = "Generating...";

  const res = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer YOUR_OPENAI_API_KEY"
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: `Suggest YouTube titles and tags for: ${input}` }],
      max_tokens: 150
    })
  });

  const data = await res.json();
  output.innerText = data.choices?.[0]?.message?.content || "No suggestions found.";
}
