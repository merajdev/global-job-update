import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { BriefcaseIcon, SearchIcon, TrendingUpIcon, GlobeIcon, UsersIcon } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-[calc(100vh-4rem)]">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-primary/10 via-background to-background">
        <div className="container px-4 mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">
            Find Your Dream Job <span className="text-primary">Worldwide</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Discover opportunities across the globe. Your next career move starts here.
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto mb-8">
            <Input 
              placeholder="Job title, keywords, or company" 
              className="h-12"
            />
            <Input 
              placeholder="Location" 
              className="h-12"
            />
            <Button size="lg" className="h-12">
              <SearchIcon className="mr-2 h-4 w-4" />
              Search Jobs
            </Button>
          </div>

          <p className="text-sm text-muted-foreground">
            Popular: Software Engineer, Data Scientist, Product Manager
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Global Jobs?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <GlobeIcon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Global Reach</h3>
              <p className="text-muted-foreground">Access job opportunities from companies worldwide</p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <TrendingUpIcon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Real-time Updates</h3>
              <p className="text-muted-foreground">Get instant notifications for new opportunities</p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <UsersIcon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Career Resources</h3>
              <p className="text-muted-foreground">Access guides and tips to advance your career</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Jobs Section */}
      <section className="py-20 bg-muted/50">
        <div className="container px-4 mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Featured Jobs</h2>
            <Button variant="outline" asChild>
              <Link href="/jobs">View All Jobs</Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Job Card 1 */}
            <div className="bg-card rounded-lg p-6 shadow-sm">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-semibold mb-1">Senior Software Engineer</h3>
                  <p className="text-sm text-muted-foreground">TechCorp Inc.</p>
                </div>
                <Button variant="ghost" size="icon">
                  <BriefcaseIcon className="h-4 w-4" />
                </Button>
              </div>
              <div className="space-y-2 mb-4">
                <p className="text-sm">San Francisco, CA (Remote)</p>
                <p className="text-sm font-medium">$120,000 - $180,000</p>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">Full-time</span>
                <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">Remote</span>
              </div>
            </div>

            {/* Job Card 2 */}
            <div className="bg-card rounded-lg p-6 shadow-sm">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-semibold mb-1">Product Designer</h3>
                  <p className="text-sm text-muted-foreground">Design Studio X</p>
                </div>
                <Button variant="ghost" size="icon">
                  <BriefcaseIcon className="h-4 w-4" />
                </Button>
              </div>
              <div className="space-y-2 mb-4">
                <p className="text-sm">London, UK</p>
                <p className="text-sm font-medium">£50,000 - £70,000</p>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">Full-time</span>
                <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">On-site</span>
              </div>
            </div>

            {/* Job Card 3 */}
            <div className="bg-card rounded-lg p-6 shadow-sm">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-semibold mb-1">Marketing Manager</h3>
                  <p className="text-sm text-muted-foreground">Global Marketing Co.</p>
                </div>
                <Button variant="ghost" size="icon">
                  <BriefcaseIcon className="h-4 w-4" />
                </Button>
              </div>
              <div className="space-y-2 mb-4">
                <p className="text-sm">Singapore</p>
                <p className="text-sm font-medium">$80,000 - $100,000</p>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">Full-time</span>
                <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">Hybrid</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container px-4 mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Find Your Next Opportunity?</h2>
          <p className="text-xl mb-8 opacity-90">Join thousands of professionals who've found their dream jobs through our platform</p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/register">Create Free Account</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}