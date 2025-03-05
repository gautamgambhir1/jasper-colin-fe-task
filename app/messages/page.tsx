import { AppLayout } from '@/components/layout/app-layout';

export default function MessagesPage() {
  return (
    <AppLayout>
      <div className="space-y-4">
        <h1 className="text-2xl font-bold">Messages</h1>
        <p>View your messages here.</p>
      </div>
    </AppLayout>
  );
}
