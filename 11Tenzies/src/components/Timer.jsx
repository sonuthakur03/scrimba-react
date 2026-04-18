const Timer = ({ timer, bestTime }) => {
  const formatTime = (time) => {
    if (time === null) return "--:--";
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  };

  return (
    <div className="flex flex-col items-center gap-4 bg-white backdrop-blur-md px-10 py-6 rounded-xl shadow-lg">
      {/* Current Timer */}
      <div className="flex flex-col items-center">
        <span className="text-sm text-gray-800 mb-2 font-bold uppercase tracking-widest">
          Time
        </span>
        <div className="text-4xl font-bold text-white bg-gradient-to-r from-blue-500 to-indigo-600 px-8 py-3 rounded-lg shadow-md">
          {formatTime(timer)}
        </div>
      </div>

      {/* Best Time */}
      <div className="flex flex-col items-center">
        <span className="text-xs text-gray-800 uppercase tracking-wider">
          Best
        </span>
        <div className="text-lg font-semibold text-yellow-800">
          {formatTime(bestTime)}
        </div>
      </div>
    </div>
  );
};

export default Timer;
