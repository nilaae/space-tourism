import Route from "./components/Route";
import Home from "./pages/Home";
import Destination from "./pages/DestinationPage";
import Crew from "./pages/CrewPage";
import Technology from "./pages/TechnologyPage";

function App() {
  return (
    <>
      <Route path="/">
        <Home />
      </Route>
      <Route path="/destination">
        <Destination />
      </Route>
      <Route path="/crew">
        <Crew />
      </Route>
      <Route path="/technology">
        <Technology />
      </Route>
    </>
  );
}

export default App;
