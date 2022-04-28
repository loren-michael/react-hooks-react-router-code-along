import React from "react";
import ReactDOM from "react-dom";
// Step 1. Import react-router functions
import { BrowserRouter, Route, Switch, NavLink } from "react-router-dom";

const linkStyles = {
  display: "inline-block",
  width: "50px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "blue",
  textDecoration: "none",
  color: "white",
}

function NavBar() {
  return (
    <div>
      <NavLink
        to="/"
        // set it to exact so it knows which /page to set active
        exact
        // add styling to Navlink
        style={linkStyles}
        // add prop for active style
        activeStyle={{
          background: "darkblue",
        }}
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        About
      </NavLink>
    </div>
  )
}

function Home() {
  return (
    <div>
      <h1>Home!</h1>
    </div>
  );
};

function About() {
  return (
    <div>
      <h1>This is my about component!</h1>
    </div>
  )
};

function Login() {
  return (
    <div>
      <h1>Login</h1>
      <form>
        <div>
          <input type="text" name="username" placeholder="Username" />
        </div>
        <div>
          <input type="password" name="password" placeholder="Password" />
        </div>
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

// Step 2. Use <Route> components to define client-side
// route in our app
function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  )}

// Step 3. Use <BrowserRouter> comp to wrap the entire app and
// provide React Router context features
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>, 
  document.getElementById("root")
);
