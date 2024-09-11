// src/components/Dashboard.jsx
import Sidebar from './sidebar/Sidebar';
import SideOp from './Sideop/SideOp';
import MainDas from './maindash/Maindash';
import './Dashbord.css'
const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="main-content">
        <SideOp />
        <MainDas />
      </div>
    </div>
  );
};

export default Dashboard;