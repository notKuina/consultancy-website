const Apply = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h2>University Application</h2>
      <form>
        <input type="text" placeholder="University Name" /><br /><br />
        <input type="text" placeholder="Course" /><br /><br />
        <input type="file" /><br /><br />
        <button>Submit Application</button>
      </form>
    </div>
  );
};

export default Apply;
