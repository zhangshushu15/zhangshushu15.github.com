export default function Header() {
  return (
    <header className="bg-white shadow w-full">
      <nav className="container mx-auto px-4 py-4 flex justify-between">
        <span className="font-bold">MySite</span>
        <div>
          <a className="mr-4 hover:underline" href="/about">About</a>
          <a className="hover:underline" href="/contact">Contact</a>
        </div>
      </nav>
    </header>
  );
}
