import { Program } from '@/data/dashboard';
import { Card, CardContent } from '@/components/ui/card';

interface Props { programs: Program[] }
const ProgramCard: React.FC<Props> = ({ programs }) => (
  <Card>
    <CardContent className="p-4">
      <h2 className="font-semibold text-lg mb-2">Programs</h2>
      {programs.map(p => (
        <div key={p.id} className="mb-2">
          <h3 className="font-bold">{p.title}</h3>
          <p className="text-sm text-gray-600">{p.description}</p>
        </div>
      ))}
    </CardContent>
  </Card>
);
export default ProgramCard;