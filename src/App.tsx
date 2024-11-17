import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import DataGrid from "./components/DataGrid";
import OrderList from "./components/OrderList";

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
        <Route path="/orderlist" element={<OrderList />} />
      </Routes>
    </Layout>
  );
};

export default App;
