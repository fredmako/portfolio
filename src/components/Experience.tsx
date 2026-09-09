export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Experience
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Professional background in system support, digital tools, and
            independent software development.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          {/* Experience 1: Ajiry / Mastercard Foundation */}
          <div className="relative mb-12 md:mb-16">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              {/* Timeline dot */}
              <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-primary rounded-full -translate-x-1.5 md:-translate-x-1.5 mt-6 ring-4 ring-background" />

              {/* Left side (date on mobile, content alternates on desktop) */}
              <div className="ml-10 md:ml-0 md:text-right md:pr-8">
                <span className="text-sm font-medium text-primary">
                  2021 &ndash; Present
                </span>
              </div>

              {/* Right side (content) */}
              <div className="ml-10 md:ml-0 md:pl-8">
                <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all">
                  <h3 className="text-lg font-semibold text-foreground mb-1">
                    Administrative Assistant &amp; System Support
                  </h3>
                  <p className="text-sm text-primary font-medium mb-3">
                    Ajiry / Mastercard Foundation &mdash; Kisii, Kenya
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1 flex-shrink-0">
                        &bull;
                      </span>
                      <span>
                        Provided frontline user support for staff on digital
                        tools, office software, and internal systems, resolving
                        issues quickly to minimize downtime.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1 flex-shrink-0">
                        &bull;
                      </span>
                      <span>
                        Delivered computer skills training and onboarding for
                        team members, improving digital literacy and adoption
                        of workplace technology.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1 flex-shrink-0">
                        &bull;
                      </span>
                      <span>
                        Maintained and troubleshot hardware, software, and
                        connectivity issues across the office environment.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1 flex-shrink-0">
                        &bull;
                      </span>
                      <span>
                        Identified workflow bottlenecks and proposed practical
                        improvements to digital processes, boosting team
                        productivity.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1 flex-shrink-0">
                        &bull;
                      </span>
                      <span>
                        Evaluated tools and platforms for usability and fit,
                        supporting informed decisions on technology adoption.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Experience 2: Freelance / Independent Development */}
          <div className="relative mb-12 md:mb-16">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              {/* Timeline dot */}
              <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-primary rounded-full -translate-x-1.5 md:-translate-x-1.5 mt-6 ring-4 ring-background" />

              {/* Left side */}
              <div className="ml-10 md:ml-0 md:text-right md:pr-8">
                <span className="text-sm font-medium text-primary">
                  2023 &ndash; Present
                </span>
              </div>

              {/* Right side */}
              <div className="ml-10 md:ml-0 md:pl-8">
                <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all">
                  <h3 className="text-lg font-semibold text-foreground mb-1">
                    Freelance Web Developer
                  </h3>
                  <p className="text-sm text-primary font-medium mb-3">
                    Independent &mdash; Remote
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1 flex-shrink-0">
                        &bull;
                      </span>
                      <span>
                        Designed and built full-stack web applications from
                        concept to deployment, including healthcare systems,
                        social platforms, and business dashboards.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1 flex-shrink-0">
                        &bull;
                      </span>
                      <span>
                        Developed responsive, accessible frontends using React,
                        Next.js, TypeScript, and Tailwind CSS.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1 flex-shrink-0">
                        &bull;
                      </span>
                      <span>
                        Built backend services and APIs with Node.js, Express,
                        and PostgreSQL, handling authentication, data modeling,
                        and business logic.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1 flex-shrink-0">
                        &bull;
                      </span>
                      <span>
                        Managed the full project lifecycle independently:
                        requirements gathering, architecture, development,
                        testing, and deployment.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1 flex-shrink-0">
                        &bull;
                      </span>
                      <span>
                        Collaborated with stakeholders to translate real-world
                        needs into functional, user-friendly digital products.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}