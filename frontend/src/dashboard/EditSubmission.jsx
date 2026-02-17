// src/pages/EditSubmission.jsx
import React from "react";
import { useParams } from "react-router-dom";

const EditSubmission = () => {
  const { id } = useParams();
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Edit Submission #{id}</h2>
      <p>Edit form for submission will appear here.</p>
    </div>
  );
};

export default EditSubmission;