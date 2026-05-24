export const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full h-16 bg-primary text-white flex items-center justify-between">
      <div className="m-6">
        <a href="#home" className="sm:text-sm lg:text-2xl font-bold">ポートフォリオ</a>
      </div>
      <div className="hidden lg:flex m-6 space-x-6 ">
        <a href="#about">About</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#social">Social</a>
      </div>
    </header>
  );
}
