
import { BrowserRouter as Routes, Switch, Redirect, Route } from 'react-router-dom';
import { Dashboard } from "@/layouts";
import Login from "./pages/loginPage";

function App() {

  return (
    <Routes>
      <Switch>
        <Redirect exact from='/' to='/login' />
        <Route exact path="/login" component={Login} />
        <Route exact path="/dashboard/*" component={Dashboard} />
      </Switch>
    </Routes>
  );
}

export default App;
