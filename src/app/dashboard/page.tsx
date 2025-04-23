import Sidebar from '@/components/Sidebar';
import HeaderBanner from '@/components/HeaderBanner';
import ProgramCard from '@/components/ProgramCard';
import GroupCallCard from '@/components/GroupCallCard';
import ApplicationCard from '@/components/ApplicationCard';
import MentorCard from '@/components/MentorCard';
import { programs, groupCalls, applications, mentors } from '@/data/dashboard';

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <main className="flex-1 p-8">
        <HeaderBanner />
        <div className="grid grid-cols-3 gap-6">
          <ProgramCard programs={programs} />
          <GroupCallCard groupCalls={groupCalls} />
          <ApplicationCard applications={applications} />
        </div>
        <div className="mt-6">
          <MentorCard mentors={mentors} />
        </div>
      </main>
    </div>
  );
}