import { AppLayout } from '@/components/layout/app-layout';

export default function TasksPage() {
  return (
    <AppLayout>
      <div className="space-y-4">
        <h1 className="text-2xl font-bold">Tasks</h1>
        <p>Manage your tasks here.</p>
      </div>
    </AppLayout>
  );
}
