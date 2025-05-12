import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { services } from "@/assets/data/services";

export default function ServicesPage() {
  return (
    <main className="min-h-screen pt-24 pb-16">
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold">My Services</h1>
            <div className="mt-2 h-1 w-20 bg-primary mx-auto"></div>
            <p className="mt-6 text-muted-foreground max-w-2xl mx-auto">
              I offer a comprehensive range of web development services to help
              businesses and individuals establish a strong online presence.
              Here's how I can help you:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card
                key={service.title}
                className="h-full card-hover border-none shadow-md"
              >
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold">My Approach</h2>
            <div className="mt-2 h-1 w-20 bg-primary mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-none shadow-md">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <span className="text-xl font-bold text-primary">01</span>
                </div>
                <CardTitle>Discovery & Planning</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  I start by gathering detailed project requirements through
                  client discussions, research, and competitor analysis. Based
                  on your goals and target audience, I create a structured plan,
                  feature list, and timeline to guide the development process.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <span className="text-xl font-bold text-primary">02</span>
                </div>
                <CardTitle>Design & Development</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  I translate ideas into wireframes and high-fidelity UI
                  designs. Once approved, I develop the application using
                  technologies like Next.js, Node.js, and MongoDB. I follow best
                  practices for clean, maintainable code and prioritize
                  responsive design and fast performance.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <span className="text-xl font-bold text-primary">03</span>
                </div>
                <CardTitle>Testing & Deployment</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  I conduct end-to-end testing—including functionality,
                  usability, and performance checks. After resolving issues, I
                  deploy the app to your preferred platform (e.g., Vercel,
                  Netlify, or a VPS). I also deliver project documentation and
                  offer ongoing support or maintenance if needed.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
}
