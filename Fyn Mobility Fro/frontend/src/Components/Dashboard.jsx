import ComponentForm from "./ComponentForm";
import VehicleForm from "./VehicleForm";
import IssueForm from "./IssueForm";

function Dashboard() {
  return (
    <div className="dashboard">
      <h2>Dashboard</h2>

      <div className="row">
        <div className="card card-half">
          <ComponentForm />
        </div>

        <div className="card card-half">
          <VehicleForm />
        </div>
      </div>

      <div className="card">
        <IssueForm />
      </div>
    </div>
  );
}

export default Dashboard;