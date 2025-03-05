import { AppLayout } from '@/components/layout/app-layout';

export default function DashboardPage() {
  return (
    <AppLayout>
      <div className="space-y-4">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <p>This is the dashboard page.</p>
      </div>
    </AppLayout>
  );
}
