import { useState } from "react";
import { projects } from "../../data/projects.ts";

export const Portfolio = () => {
  const [selectedId, setSelectedId] = useState(1);
  const selectedProject = projects.find((project) => project.id === selectedId);

  return (
    <section className="bg-blue-50 min-h-[50vh] flex flex-col items-center justify-center gap-6 px-4 text-center">
      <h1 className="text-3xl font-bold text-center">Portfolio セクション</h1>
      <div className="grid grid-cols-[200px_1fr] w-full max-w-4xl items-start gap-8">
        <div className="flex flex-col">
          {projects.map((item) => (
            <button
              key={item.id}
              onClick={() => setSelectedId(item.id)}
              className={`px-4 py-2 w-48 ${selectedId === item.id ? "bg-blue-600 text-white" : "bg-white"}`}
            >
              {item.title}
            </button>
          ))}
        </div>
        <div className="flex-1 text-left bg-white rounded-lg shadow-md">
          {selectedProject ? (
            <div className="space-y-4">
              <p>概要：{selectedProject.desc}</p>
              <img src={selectedProject.image} alt={selectedProject.title} />
              <div className="pt-4">
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition"
                >
                  GitHubで見る
                </a>
              </div>
            </div>
          ) : (
            <p>プロジェクトを選択してください</p>
          )}
        </div>
      </div>
    </section>
  );
};
