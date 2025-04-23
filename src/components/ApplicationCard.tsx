import { Application } from '@/data/dashboard';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface Props { applications: Application[] }
const ApplicationCard: React.FC<Props> = ({ applications }) => (
  <Card>
    <CardContent className="p-4">
      <h2 className="font-semibold text-lg mb-2">Applications</h2>
      {applications.map(a => (
        <div key={a.id} className="bg-white p-2 rounded shadow mb-2">
          <p className="font-bold">{a.name}</p>
          <p className="text-xs text-gray-500">{a.email} | {a.location} | {a.experience}</p>
          <div className="flex justify-end space-x-2 mt-1">
            <Button variant="outline">Reject</Button>
            <Button>Accept</Button>
          </div>
        </div>
      ))}
    </CardContent>
  </Card>
);
export default ApplicationCard;