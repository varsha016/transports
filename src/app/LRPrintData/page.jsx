import React, { forwardRef } from "react";

const LRPrintData = forwardRef(({ allLRSData }, ref) => {
    console.log("All LR Data:", allLRSData); // Log the data passed to LRPrintData

    return (
        <div ref={ref} style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
            <h1 style={{ textAlign: "center", color: "#333" }}>Ledger Receipt Data</h1>

            {allLRSData?.length === 0 ? (
                <p>No data available to print.</p>
            ) : (
                <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "20px" }}>
                    <thead>
                        <tr style={{ backgroundColor: "#f2f2f2", borderBottom: "2px solid #333" }}>
                            <th style={{ padding: "10px", textAlign: "left" }}>ID</th>
                            <th style={{ padding: "10px", textAlign: "left" }}>Description</th>
                            <th style={{ padding: "10px", textAlign: "left" }}>Amount</th>
                            <th style={{ padding: "10px", textAlign: "left" }}>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allLRSData.map((entry) => (
                            <tr key={entry._id} style={{ borderBottom: "1px solid #ddd" }}>
                                <td style={{ padding: "8px" }}>{entry._id}</td>
                                <td style={{ padding: "8px" }}>{entry.lrNo || "N/A"}</td>
                                <td style={{ padding: "8px" }}>{entry.amount || "N/A"}</td>
                                <td style={{ padding: "8px" }}>
                                    {entry.lrDate ? new Date(entry.lrDate).toLocaleDateString() : "N/A"}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
});

// Set display name for better debugging
LRPrintData.displayName = "LRPrintData";

export default LRPrintData;
