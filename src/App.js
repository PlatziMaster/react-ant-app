import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./translations/i18n";

import DemoPage from "./components/pages/demo.page";
import CalendarPage from "./components/pages/calendar.page";
import EventFormPage from "./components/pages/event-form.page";
import UsersPage from "./components/pages/users.page";
import AppLayout from "./components/containers/layout.container";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <AppLayout>
          <Route exact path="/" component={DemoPage} />
          <Route exact path="/calendar" component={CalendarPage} />
          <Route exact path="/events/create" component={EventFormPage} />
          <Route exact path="/users" component={UsersPage} />
        </AppLayout>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
