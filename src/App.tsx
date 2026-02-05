import { useHealthCheck } from "./shared/useHealthCheck";

function App() {
  const { data, isLoading, error } = useHealthCheck();
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">CoderFocus</h1>

        <div className="space-y-2">
          <p className="text-gray-600">API Health Check:</p>

          {isLoading && <p className="text-yellow-600">⏳ Loading...</p>}

          {error && <p className="text-red-600">❌ Error: {error.message}</p>}

          {data && (
            <div className="text-green-600">
              <p>✅ Status: {data.status}</p>
              <p className="text-sm text-gray-500">
                Timestamp: {new Date(data.timestamp).toLocaleString()}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
