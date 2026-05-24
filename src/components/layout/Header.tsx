export const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full h-16 bg-blue-500 text-white flex items-center justify-between">
      <div className="title">ポートフォリオ</div>
      <div className="link">
        <a href="#">About</a>
        <a href="#">Portfolio</a>
        <a href="#">Social</a>
      </div>
    </header>
  );
}
