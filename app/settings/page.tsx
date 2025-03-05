import { redirect } from 'next/navigation';

export default function SettingsPage() {
  // Redirect to details page
  redirect('/settings/details');
}
