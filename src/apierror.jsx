import { useEffect, useState } from "react";
function ApiErrorExample() {
  const [error, setError] = useState("");
  useEffect(() => {
    async function loadData() {
      try {
        const response = await fetch("/wrong-url.json");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        await response.json();
      } catch (err) {
        setError(err.message);
      }
    }
    loadData();
  }, []);
  return (
    <div>
      <h2>API / Async Error</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}
export default ApiErrorExample;
