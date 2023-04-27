import "./App.css";
import { AllRoutes } from "./pages/AllRoutes";

function App() {
  return (
    <div className="App">
      <AllRoutes />
    </div>
  );
}

// For Development
// export const baseUrl = "http://localhost:8080/";
// export const url = "http://localhost:8080/employees";
// export const authUrl = "http://localhost:8080/users/login";

// For Production
export const baseUrl = "https://odd-puce-hatchling-ring.cyclic.app/";
export const url = "https://odd-puce-hatchling-ring.cyclic.app/employees";
export const authUrl = "https://odd-puce-hatchling-ring.cyclic.app/users/login";

export default App;
