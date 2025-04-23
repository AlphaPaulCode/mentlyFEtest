export type Program = { id: number; title: string; description: string };
export type GroupCall = { id: number; status: string; title: string; time: string; date: string };
export type Application = { id: number; name: string; email: string; location: string; experience: string };
export type Mentor = { id: number; name: string };

export const programs: Program[] = [
  { id: 1, title: "Fundamentals of UI/UX", description: "Hands-on guide to color theory and design." },
  { id: 2, title: "Colour Hack Practical", description: "Practical sessions for mastering colors." },
];

export const groupCalls: GroupCall[] = [
  { id: 1, status: "Ongoing", title: "Weekly Meeting", time: "9:00 - 11:00 AM", date: "Jul 30, 2024" },
  { id: 2, status: "Upcoming", title: "Product Demo Review", time: "9:00 - 11:00 AM", date: "Jul 30, 2024" },
];

export const applications: Application[] = [
  { id: 1, name: "Maxwell Smith", email: "maxwellsmith@gmail.com", location: "Lagos, Nigeria", experience: "4 years" },
];

export const mentors: Mentor[] = [
  { id: 1, name: "Maxwell Smith" },
  { id: 2, name: "Adeati Samuel" },
];