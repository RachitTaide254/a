
import { BrowserRouter as Routes, Switch, Route } from 'react-router-dom';
import { Dashboard } from "@/layouts";
import Login from "./pages/loginPage";
import CommonComponent from './pages/commonComponent';
function App() {
  return (
    <Routes>
      <Switch>
        <Route exact path="/dashboard/*" component={Dashboard}>
          </Route>
        <Route path="/login" component={Login} />
        {/* <Route path="/dashboard/*" element={<Dashboard />} /> */}
        {/* <Route path="/auth/*" element={<Auth />} /> */}
        {/* <Route path="/login" component={<Login />} /> */}
        {/* <Route path="*" element={<Navigate to="/dashboard/home" replace />} /> */}
      </Switch>
    </Routes>
  );
}

export default App;
