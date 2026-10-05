import { useState } from "react";

function App() {
  const [industry, setIndustry] = useState("");
  const [description, setDescription] = useState("");
  const [result, setResult] = useState(null);

  async function handleSubmit(event) {
    event.preventDefault();

    const business = {
      industry: industry,
      description: description,
    };

    const response = await fetch("http://localhost:3000/api/consultation", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(business),
    });

    const data = await response.json();

    setResult(data);
  }

  return (
    <main>
      <h1>AIuto</h1>
      <h2>AI Business Consultant</h2>

      <form onSubmit={handleSubmit}>
        <label>
          What industry is your business in?
          <input
            type="text"
            value={industry}
            onChange={(event) => setIndustry(event.target.value)}
          />
        </label>

        <label>
          Tell us about your business.
          <textarea
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
        </label>

        <button type="submit">Analyze Business</button>
      </form>

      {result && (
        <div>
          <h2>Server Response</h2>
          <p>{result.message}</p>
          <p>Industry: {result.business.industry}</p>
          <p>Description: {result.business.description}</p>
        </div>
      )}
    </main>
  );
}

export default App;