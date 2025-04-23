import { GroupCall } from '@/data/dashboard';
import { Card, CardContent } from '@/components/ui/card';

interface Props { groupCalls: GroupCall[] }
const GroupCallCard: React.FC<Props> = ({ groupCalls }) => (
  <Card>
    <CardContent className="p-4">
      <h2 className="font-semibold text-lg mb-2">Group Calls</h2>
      {groupCalls.map(gc => (
        <div key={gc.id} className={`mb-2 p-2 rounded ${gc.status === 'Ongoing' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'}`}>
          <strong>{gc.status}:</strong> {gc.title} ({gc.date}, {gc.time})
        </div>
      ))}
    </CardContent>
  </Card>
);
export default GroupCallCard;