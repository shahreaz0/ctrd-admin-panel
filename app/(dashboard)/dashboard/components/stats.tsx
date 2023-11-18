export default function Stats() {
  return (
    <section className="grid grid-cols-3 gap-8">
      <div className="border-r text-center">
        <h1 className="mb-2 font-medium">12</h1>
        <p className="text-sm font-normal text-gray-500">Active Applicants</p>
      </div>
      <div className="border-r text-center">
        <h1 className="mb-2 font-medium">5</h1>
        <p className="text-sm font-normal text-gray-500">Pending Applicants</p>
      </div>
      <div className="text-center">
        <h1 className="mb-2 font-medium">0</h1>
        <p className="text-sm font-normal text-gray-500">Archived Applicants</p>
      </div>
    </section>
  );
}
