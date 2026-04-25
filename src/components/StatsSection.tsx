import { stats } from '@/data/homepage';

export default function StatsSection() {
  return (
    <section className="bg-white border-b border-[#E2E8F0]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-[#071C33] mb-1">
                {stat.value}
              </div>
              <p className="text-sm text-[#64748B]">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
