import React, { useState } from "react";

const XTable = () => {
  // Initialize table data
  const [data, setData] = useState([
    { date: "2022-09-01", views: 100, article: "Article 1" },
    { date: "2023-09-01", views: 100, article: "Article 1" },
    { date: "2023-09-02", views: 150, article: "Article 2" },
    { date: "2023-09-02", views: 120, article: "Article 3" },
    { date: "2020-09-03", views: 200, article: "Article 4" },
  ]);

  // Function to sort by Date (Latest first, then by Views descending)
  const sortByDate = () => {
    const sortedData = [...data].sort((a, b) => {
      if (a.date !== b.date) {
        return new Date(b.date) - new Date(a.date); // Latest first
      }
      return b.views - a.views; // If same date, sort by views (descending)
    });
    setData(sortedData);
  };

  // Function to sort by Views (Descending, then by Latest Date first)
  const sortByViews = () => {
    const sortedData = [...data].sort((a, b) => {
      if (a.views !== b.views) {
        return b.views - a.views; // Higher views first
      }
      return new Date(b.date) - new Date(a.date); // If same views, latest date first
    });
    setData(sortedData);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>Date and Views Table</h1>
      <button onClick={sortByDate} style={{ marginRight: "10px" }}>
        Sort by Date
      </button>
      <button onClick={sortByViews}>Sort by Views</button>

      <table
        border="1"
        style={{
          margin: "20px auto",
          borderCollapse: "collapse",
          width: "60%",
        }}
      >
        <thead>
          <tr>
            <th>Date</th>
            <th>Views</th>
            <th>Article</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{row.date}</td>
              <td>{row.views}</td>
              <td>{row.article}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default XTable;
