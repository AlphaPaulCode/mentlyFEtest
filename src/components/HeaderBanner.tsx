import { Button } from '@/components/ui/button';
const HeaderBanner: React.FC = () => (
  <div className="bg-purple-600 text-white p-4 rounded-lg mb-6 flex justify-between items-center">
    <h1 className="text-xl font-bold">Welcome Aboard, Blessing 👋</h1>
    <Button className="bg-white text-purple-700">Update Profile</Button>
  </div>
);
export default HeaderBanner;