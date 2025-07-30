// components/dashboard/StatsCards.jsx
import {
  Users,
  Clock,
  CheckCircle2,
  XCircle,
} from "lucide-react";

const stats = [
  {
    label: "Pembaca",
    value: 200,
    diff: "+20",
    icon: <Users className="w-6 h-6 text-pink-600" />,
    bg: "bg-pink-100",
    text: "text-pink-800",
  },
  {
    label: "Pending",
    value: 500,
    diff: "+15",
    icon: <Clock className="w-6 h-6 text-yellow-600" />,
    bg: "bg-yellow-100",
    text: "text-yellow-800",
  },
  {
    label: "Dipublikasikan",
    value: 100,
    diff: "+20",
    icon: <CheckCircle2 className="w-6 h-6 text-green-600" />,
    bg: "bg-green-100",
    text: "text-green-800",
  },
  {
    label: "Ditolak",
    value: 5,
    diff: "-10",
    icon: <XCircle className="w-6 h-6 text-red-600" />,
    bg: "bg-red-100",
    text: "text-red-800",
  },
];

export default function StatsCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 my-6">
      {stats.map((s, i) => (
        <div
          key={i}
          className={`${s.bg} p-4 rounded-2xl shadow-md transition-transform hover:scale-105`}
        >
          <div className="flex items-center justify-between mb-2">
            <p className={`font-semibold ${s.text}`}>{s.label}</p>
            {s.icon}
          </div>
          <div className="flex justify-between items-end">
            <h2 className={`text-3xl font-bold ${s.text}`}>{s.value}</h2>
            <span className="text-sm">{s.diff}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
