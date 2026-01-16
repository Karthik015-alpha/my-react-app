function RuntimeErrorExample() {
  const handleClick = () => {
    try {
      let user;
      alert(user.name);
    } catch (error) {
      alert("Runtime error handled safely!");
      console.error(error.message);
    }
  };
  return (
    <div>
      <h2>JavaScript Runtime Error</h2>
      <button onClick={handleClick}>Trigger Error</button>
    </div>
  );
}
export default RuntimeErrorExample;