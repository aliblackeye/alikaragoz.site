import Button from "@components/button";
import { STATUS } from "@interfaces/status";

export default function Dashboard() {
  return (
    <section className="dashboard-section">
      <h1>Dashboard</h1>
      <Button label="Alikay" status={STATUS.primary} />
    </section>
  );
}
