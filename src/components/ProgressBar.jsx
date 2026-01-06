export default function ProgressBar({ current, total }) {
  const percentage = (current / total) * 100;

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      {/* Progress Bar */}
      <div className="h-2 bg-gray-200">
        <div
          className="h-full bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 transition-all duration-500 ease-out shadow-lg"
          style={{ width: `${percentage}%` }}
        />
      </div>
      
      {/* Title Bar mit Fortschritt */}
      <div className="bg-white border-b border-gray-200 px-8 py-4 shadow-md">
        <div className="max-w-[1600px] mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <span className="text-xl font-bold text-blue-800">
              Die USA als weltpolitischer Akteur
            </span>
            <span className="text-lg text-gray-500">
              1945-1955
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-lg text-gray-600">Fortschritt:</span>
            <div className="flex items-center gap-2">
              <div className="w-32 h-3 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-blue-700 transition-all duration-500"
                  style={{ width: `${percentage}%` }}
                />
              </div>
              <span className="text-lg font-medium text-gray-700">
                {Math.round(percentage)}%
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}