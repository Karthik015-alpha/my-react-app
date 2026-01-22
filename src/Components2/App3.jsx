import ErrorBoundary from "./ErrorBoundary";
import Sidebar from "./Sidebar";
import Content from "./ContentMain2";

function App3() {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      {/* 🛡️ Sidebar protected */}
      <ErrorBoundary>
        <Sidebar />
      </ErrorBoundary>

      {/* Main content NOT affected */}
      <Content />
    </div>
  );
}

export default App3;
