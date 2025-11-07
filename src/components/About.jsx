export default function About() {
    return (
      <section id="about" className="py-14">
        <div className="mx-auto max-w-5xl px-4 md:px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold">A montage of familiar faces and names</h2>
          <p className="mt-4 text-sm md:text-base text-gray-700">
            Some stories come from the biggest names. Others begin with bold, rising voices.
            We have walked alongside both — listening, creating, and building stories that matter.
          </p>
  
          <div className="mt-10 grid grid-cols-3 gap-6 max-w-md mx-auto">
            <div>
              <div className="text-3xl font-bold">85+</div>
              <div className="text-sm text-gray-600">Projects</div>
            </div>
            <div>
              <div className="text-3xl font-bold">50+</div>
              <div className="text-sm text-gray-600">Happy Clients</div>
            </div>
            <div>
              <div className="text-3xl font-bold">10+</div>
              <div className="text-sm text-gray-600">Experts Team</div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  