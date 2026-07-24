import { useState } from "react";
import axios from "axios";

function App() {

  const [url, setUrl] = useState("");
  const [report, setReport] = useState(null);
  const [error, setError] = useState("");

  const handleAnalyze = async () => {

    try {

      // Clear previous error and report
      setError("");
      setReport(null);

      const response = await axios.post(
        "http://localhost:5000/audit",
        {
          url: url
        }
      );

      setReport(response.data);

    } catch (error) {

      setReport(null);

      setError(
        error.response?.data?.message ||
        "Something went wrong"
      );

    }

  };

  return (
    <div>

      <h1>Page Pulse</h1>

      <input
        type="text"
        placeholder="Enter Website URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />

      <button onClick={handleAnalyze}>
        Analyze
      </button>

      {/* Error Message */}
      {error && (
        <p style={{ color: "red", marginTop: "10px" }}>
          {error}
        </p>
      )}

      {/* Audit Report */}
      {report && (
        <div>

          <h2>Audit Report</h2>

          <p><strong>Status:</strong> {report.status}</p>

          <p><strong>Response Time:</strong> {report.responseTime} ms</p>

          <p><strong>Title:</strong> {report.title}</p>

          <p><strong>Meta Description:</strong> {report.metaDescription}</p>

          <p><strong>H1 Count:</strong> {report.h1Count}</p>

          <p><strong>Missing Alt Images:</strong> {report.missingAltImages}</p>

          <p><strong>Word Count:</strong> {report.wordCount}</p>

        </div>
      )}

    </div>
  );
}

export default App;