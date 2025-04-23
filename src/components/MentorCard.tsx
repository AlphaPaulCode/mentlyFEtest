import { Mentor } from '@/data/dashboard';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface Props { mentors: Mentor[] }
const MentorCard: React.FC<Props> = ({ mentors }) => (
  <Card>
    <CardContent className="p-4">
      <h2 className="font-semibold text-lg mb-2">Mentors</h2>
      {mentors.map(m => (
        <div key={m.id} className="flex justify-between items-center bg-gray-50 p-2 rounded mb-2">
          <span>{m.name}</span>
          <Button>Message</Button>
        </div>
      ))}
    </CardContent>
  </Card>
);
export default MentorCard;