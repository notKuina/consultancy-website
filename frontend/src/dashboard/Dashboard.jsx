import React, { useEffect, useState } from "react";
import api from "../utils/Api";
import toast from "react-hot-toast";

const Dashboard = () => {
  const [submissions, setSubmissions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState(null); // track which submission is being edited
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
  });

  useEffect(() => {
    const fetchSubmissions = async () => {
      try {
        const response = await api.get("student/submissions/");
        setSubmissions(response.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchSubmissions();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this submission?")) return;
    try {
      await api.delete(`student/submissions/${id}/`);
      setSubmissions(submissions.filter((sub) => sub.id !== id));
      toast.success("Submission deleted successfully");
    } catch (error) {
      console.error(error);
      toast.error("Failed to delete submission");
    }
  };

  const startEditing = (submission) => {
    setEditingId(submission.id);
    setFormData({
      first_name: submission.first_name,
      last_name: submission.last_name,
      email: submission.email,
    });
  };

  const cancelEditing = () => {
    setEditingId(null);
    setFormData({ first_name: "", last_name: "", email: "" });
  };

  const handleUpdate = async (id) => {
    try {
      const response = await api.put(`student/submissions/${id}/`, formData);
      setSubmissions(
        submissions.map((sub) => (sub.id === id ? response.data : sub))
      );
      toast.success("Submission updated!");
      cancelEditing();
    } catch (error) {
      console.error(error);
      toast.error("Failed to update submission");
    }
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  if (loading) return <p>Loading submissions...</p>;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Student Dashboard</h2>

      {submissions.length === 0 ? (
        <p>No submissions yet.</p>
      ) : (
        <table className="w-full border border-gray-300 rounded-md overflow-hidden">
          <thead className="bg-gray-100">
            <tr>
              <th className="border p-2">ID</th>
              <th className="border p-2">First Name</th>
              <th className="border p-2">Last Name</th>
              <th className="border p-2">Email</th>
              <th className="border p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {submissions.map((sub) => (
              <tr key={sub.id} className="hover:bg-gray-50">
                <td className="border p-2">{sub.id}</td>

                {/* Editable row */}
                {editingId === sub.id ? (
                  <>
                    <td className="border p-2">
                      <input
                        name="first_name"
                        value={formData.first_name}
                        onChange={handleChange}
                        className="border px-2 py-1 rounded w-full"
                      />
                    </td>
                    <td className="border p-2">
                      <input
                        name="last_name"
                        value={formData.last_name}
                        onChange={handleChange}
                        className="border px-2 py-1 rounded w-full"
                      />
                    </td>
                    <td className="border p-2">
                      <input
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="border px-2 py-1 rounded w-full"
                      />
                    </td>
                  </>
                ) : (
                  <>
                    <td className="border p-2">{sub.first_name}</td>
                    <td className="border p-2">{sub.last_name}</td>
                    <td className="border p-2">{sub.email}</td>
                  </>
                )}

                <td className="border p-2 flex gap-2">
                  {editingId === sub.id ? (
                    <>
                      <button
                        onClick={() => handleUpdate(sub.id)}
                        className="bg-green-600 text-white px-2 py-1 rounded hover:bg-green-400"
                      >
                        Save
                      </button>
                      <button
                        onClick={cancelEditing}
                        className="bg-gray-400 text-white px-2 py-1 rounded hover:bg-gray-300"
                      >
                        Cancel
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        onClick={() => startEditing(sub)}
                        className="bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-400"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(sub.id)}
                        className="bg-red-600 text-white px-2 py-1 rounded hover:bg-red-400"
                      >
                        Delete
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Dashboard;
