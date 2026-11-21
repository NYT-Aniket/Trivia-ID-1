import { BubbleDemo } from "@/components/bubble-demo";

const App = () => {
  return (
    <BubbleDemo showControls={false}>
      <main className="min-h-screen w-full bg-gray-50 font-mono capitalize">
        <nav
          aria-label="Primary navigation"
          className="flex min-h-[10vh] w-full flex-wrap items-center justify-around gap-4 px-4 py-4"
        >
          <a href="#" className="text-inherit no-underline">
            <h1>Triven</h1>
          </a>

          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 rounded-full border border-purple-200 bg-purple-100 px-5 py-2">
            <a href="#">home</a>
            <a href="#">about</a>
            <a href="#">Expertise</a>
            <a href="#">Projects</a>
            <a href="#">Research</a>
            <a href="#">Contact</a>
          </div>

          <a
            href="#"
            className="shrink-0 rounded-full bg-black px-4 py-2 text-gray-100"
          >
            get started
          </a>
        </nav>
      </main>
    </BubbleDemo>
  );
};

export default App;