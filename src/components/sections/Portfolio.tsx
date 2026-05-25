import { useState } from "react";
import { projects } from "../../data/projects.ts"

export const Portfolio = () => {
  const [selectedId, setSelectedId] = useState(1);
  const item = projects.find((project) => project.id === selectedId);

  return (
    <section className="bg-blue-50 min-h-[50vh] flex flex-col items-center justify-center gap-6 px-4 text-center">
      <h1 className="text-3xl font-bold text-center">Portfolio セクション</h1>
      <div className="flex flex-row items-center justify-center gap-6">
        <div className="flex flex-col">
          {projects.map((item) => (
            <button key={item.id} onClick={() => setSelectedId(item.id)}>
              {item.title}
            </button>
          ))}
        </div>
        <div>
          {selectedId && <p>{item?.desc}</p>}
        </div>
      </div>
    </section>
  );
};
