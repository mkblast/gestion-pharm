import Header from "../../Header/Header";
import Medicine from "../Command/Medicine";

function Dashboard() {
  return (
    <>
      <Header />
      <div className="command">
        <h1>Admin Dashboard</h1>
        <Medicine />
      </div>
    </>
  )
}

export default Dashboard;
