import React from "react";
import { useParams } from "react-router-dom";

const ViewSubmission = () => {
  const { id } = useParams();
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">View Submission #{id}</h2>
      <p>Submission details will appear here.</p>
    </div>
  );
};

export default ViewSubmission;



