import { AppLayout } from '@/components/layout/app-layout';

export default function ProfilePage() {
  return (
    <AppLayout>
      <div className="space-y-4">
        <h1 className="text-2xl font-bold">My Profile</h1>
        <p>Manage your profile settings here.</p>
      </div>
    </AppLayout>
  );
}
