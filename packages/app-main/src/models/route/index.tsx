import { Route, Switch, Link, BrowserRouter as Router } from "react-router-dom";
import React from "react";
import NotePage from "../../pages/note";
import AddNote from "../../components/addNote";
import App from '../../pages/App';
// Some folks find value in a centralized route config.
// A route config is just data. React is great at mapping
// data into components, and <Route> is a component.

// Our route config is just an array of logical "routes"
// with `path` and `component` props, ordered the same
// way you'd do inside a `<Switch>`.

const Test = () => {
  return <div>
    <p> Test Page </p>
  </div>
}

const routes = [
  {
    path: "/",
    component: App,
  },
  {
    path: "/addNote",
    component: AddNote,
    routes: [
      {
        path: "/test",
        component: Test,
      },
    ]
  },
];

// A special wrapper for <Route> that knows how to
// handle "sub"-routes by passing them in a `routes`
// prop to the component it renders.
export const RouteWithSubRoutes = (route: any) => {
  return (
    <Route
      path={route.path}
      render={(props) => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes} />
      )}
    />
  );
};

export default function Root() {
  return (
    <Router>
      <Switch>
        {routes.map((route, i) => (
          <RouteWithSubRoutes key={i} {...route} />
        ))}
      </Switch>
    </Router>
  );
}
