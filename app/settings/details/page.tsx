import { AppLayout } from '@/components/layout/app-layout';

export default function DetailsPage() {
  return (
    <AppLayout>
      <div className="space-y-4">
        <h1 className="text-2xl font-bold">My Details</h1>
        <p>Manage your personal details here.</p>
      </div>
    </AppLayout>
  );
}
