const Count = ({ number }) => {
  return (
    <h2 className="count" aria-live="polite">
      {number}
    </h2>
  );
};

export default Count;
