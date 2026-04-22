import Navbar from "./components/Navbar.jsx";
import Differentiation from "./sections/Differentiation.jsx";
import Hero from "./sections/Hero.jsx";
import RevenueStructure from "./sections/RevenueStructure.jsx";
import Support from "./sections/Support.jsx";
import Troubleshooting from "./sections/Troubleshooting.jsx";

function App() {
  return (
    <div>
      {/* <Navbar /> */}
      <Hero />
      <Troubleshooting />
      <Differentiation />
      <RevenueStructure />
      <Support />
    </div>
  );
}

export default App;
