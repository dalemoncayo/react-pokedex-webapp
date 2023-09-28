function Spinner() {
  return (
    <div className="text-center" style={{ margin: '20px' }}>
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}

export default Spinner;