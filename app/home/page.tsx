import { Metadata } from 'next';
import { AppLayout } from '@/components/layout/app-layout';

export const metadata: Metadata = {
  title: 'Home',
  description: 'Welcome to the home page of MyApp.',
};

export default function HomePage() {
  return (
    <AppLayout>
      <div className="space-y-4">
        <h1 className="text-2xl font-bold">Home</h1>
        <p>Welcome to the home page!</p>
      </div>
    </AppLayout>
  );
}
