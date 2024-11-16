import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import DataGrid from "./components/DataGrid";

const MainFrame = () => {
  return (
    <div className="">
      <div className="py-1 px-2 font-semibold">eCommerce</div>
      <DataGrid />
    </div>
  );
};

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<MainFrame />} />
      </Routes>
    </Layout>
  );
};

export default App;
