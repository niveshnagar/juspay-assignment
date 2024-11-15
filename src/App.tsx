import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import ThemeToggle from "./components/ThemeToggle";

const Hello = () => {
  return (
    <>
      <ThemeToggle />
    </>
  );
};

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </Layout>
  );
};

export default App;
