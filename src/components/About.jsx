import React from "react";

const About = () => {
  return (
    <section className="min-h-screen bg-gray-50 py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">
          Brand Story		 
        </h1>
		<h2  className="text-2xl font-bold text-center text-gray-900 mb-8">
		  “25 Years of Building, Leading, and Teaching Technology That Works”
		</h2>
        <div className="text-lg text-gray-700 leading-relaxed space-y-6">
          <p>
            I’m <span className="font-semibold">Sanjay Kumar Singh</span>, a technology leader, architect, and educator with over 25 years of
            experience designing, building, and leading enterprise-grade software solutions across Finance, Payments,
            Manufacturing, and Supply Chain domains.
          </p>

          <p>
            My professional journey began with hands-on development — writing code, designing systems, and solving problems
            that mattered. Over time, it evolved into leading teams, defining architectures, and driving end-to-end digital
            transformation for global organizations.
          </p>

          <p>
            I’ve worked across an incredibly diverse technology landscape — from Java, .NET, and Node.js to frameworks like
            Spring Boot, Scala Play, and AngularJS, and across databases such as Oracle, MySQL, SQL Server, and Postgres.
            I’ve architected microservices, deployed cloud-native solutions on AWS and Azure, and led teams through DevOps
            adoption using Kubernetes, Jenkins, Git, and Docker.
          </p>

          <p>
            Over the years, I’ve also been deeply involved in solution architecture, application security, and project
            management, helping organizations streamline delivery, improve scalability, and build systems that are as secure
            as they are performant.
          </p>

          <p>
            I’ve had the privilege of contributing to mission-critical applications like payment processing platforms,
            e-commerce systems, and visa automation solutions — delivering projects for leading enterprises such as Apple
            Inc., Techsophy, Verizon, and PayPal. In every role, my focus has been the same: solve real-world problems
            through simple, scalable, and secure engineering.
          </p>

          <p>
            After two and a half decades in the industry, one insight became crystal clear:
            <span className="italic block mt-2">
              Technology changes fast — but learning how to think, design, and build systems that last is timeless.
            </span>
          </p>

          <p>
            That’s why I built <span className="font-semibold text-blue-600">SpEdu Tutors</span> — a learning platform designed to bring real-world
            engineering experience to the next generation of developers. Here, learners don’t just watch tutorials — they
            build real projects, understand end-to-end systems, and develop the problem-solving mindset that top tech teams
            value.
          </p>

          <p>
            Whether you’re a student starting your journey, a developer switching stacks, or a professional preparing for
            your next role, my mission is to mentor you into not just writing code — but architecting software that scales,
            secures, and succeeds.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
