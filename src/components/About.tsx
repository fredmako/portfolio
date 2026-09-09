export default function About() {
  return (
    <section id="about" className="py-20 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center gap-8 mb-12">
          <img
            src="/profile.jpg"
            alt="Fredrick Makori Omwando"
            className="w-40 h-40 sm:w-48 sm:h-48 rounded-full object-cover border-4 border-primary/20 shadow-lg flex-shrink-0"
          />
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-4">About Me</h2>
            <p className="text-muted-foreground leading-relaxed">
              I am Fredrick Makori Omwando, a Software Engineer passionate about building
              impactful digital solutions. With a strong foundation in frontend engineering
              and full-stack development, I specialize in creating responsive interfaces,
              robust APIs, and data-driven dashboards that solve real-world problems.
            </p>
          </div>
        </div>
        <div className="space-y-6 text-muted-foreground leading-relaxed">
          <p>
            I hold a BSc in Computer Technology from Multimedia University of Kenya,
            graduating in 2025. My academic background, combined with hands-on project
            experience, has equipped me with a solid understanding of modern software
            development practices and system design.
          </p>
          <p>
            My core interests and strengths span frontend engineering, full-stack
            development, business systems, and healthcare systems. I am particularly
            drawn to building intuitive dashboards, scalable APIs, and responsive user
            interfaces that enhance user experience and drive business outcomes.
          </p>
        </div>
      </div>
    </section>
  );
}