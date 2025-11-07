export default function Reel() {
  return (
    <section className="py-14 bg-[var(--brand-bg)]">
      <div className="mx-auto max-w-5xl px-4 md:px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold">The Highlight Podcast</h2>
        <p className="text-gray-600 mt-2">Watch the magic we’ve captured, the building of an AI-Powered Services Factor by Joy Sharma</p>

        {/* Responsive YouTube video */}
        <div
          className="relative mt-8 overflow-hidden rounded-xl shadow-lg"
          style={{
            paddingBottom: "56.25%", // 16:9 aspect ratio
            height: 0,
          }}
        >
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/GB68bXQOhhQ?rel=0&modestbranding=1&showinfo=0&iv_load_policy=3"
            title="Varnan Films Highlight Reel"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>

        <p className="text-sm text-gray-500 mt-4">
          A glimpse into the stories we’ve brought to life — moments that move, inspire, and stay with you.
        </p>
      </div>
    </section>
  );
}
