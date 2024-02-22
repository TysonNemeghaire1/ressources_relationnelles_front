import TrendyRessources from "@/components/trendyRessources";

export default function Home() {
  return (
    <>
      <div className="flex justify-between gap-8 py-14">
        <TrendyRessources />
        <aside className="hidden lg:block lg:w-1/4 bg-green-300">Aside</aside>
      </div>
    </>
  );
}
