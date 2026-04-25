import { applications } from '@/data/homepage';

export default function ApplicationScenariosSection() {
  return (
    <section className="bg-[#F6F8FB]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl lg:text-3xl font-bold text-[#071C33] mb-4">
            Built for Every Access Environment
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {applications.map((app) => (
            <div
              key={app.name}
              className="relative h-40 rounded-2xl overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#071C33] to-[#103B73]" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="relative h-full flex items-end p-4">
                <span className="text-white font-semibold text-sm">{app.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
