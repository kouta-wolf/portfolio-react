import { useState } from "react";

export const Portfolio = () => {
  const [content, setContent] = useState(1);

  return (
    <section className="bg-blue-50 min-h-[50vh] flex flex-col items-center justify-center gap-6 px-4 text-center">
      <h1 className="text-3xl font-bold text-center">Portfolio セクション</h1>
      <div className="flex flex-row items-center justify-center gap-6">
        <div className="flex flex-col">
          <button onClick={() => setContent(1)}>1を表示</button>
          <button onClick={() => setContent(2)}>2を表示</button>
          <button onClick={() => setContent(3)}>3を表示</button>
        </div>
        <div>
          {content === 1 && <p>1が表示</p>}
          {content === 2 && <p>2が表示</p>}
          {content === 3 && <p>3が表示</p>}
        </div>
      </div>
    </section>
  );
};
