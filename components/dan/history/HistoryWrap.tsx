export default function HistoryWrap({children}: {children: React.ReactNode}) {
  return (
    <section className="relative pb-24">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.05),transparent_60%),radial-gradient(circle_at_80%_70%,rgba(255,40,40,0.10),transparent_60%)]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}
