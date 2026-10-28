import { Hero } from "@/components/Hero";
import { Navigation } from "@/components/Navigation";
import { StorySection } from "@/components/StorySection";
import { ImageGallery } from "@/components/ImageGallery";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Navigation />
      <Hero />
      
      <div className="bg-background relative z-10">
        <StorySection
          title="The Genesis of Leadership"
          subtitle="Chapter 01"
          description="Born from a desire to cultivate genuine leadership, Wealders emerged not as a traditional organization, but as a movement. We believe that true leaders are not born in isolation; they are forged in the crucible of community, hands-on experience, and shared vision."
          imageSrc="/magazine-1.png"
          imageAlt="Architectural representation of strong foundations"
          orientation="left"
        />

        <ImageGallery />

        <StorySection
          title="Empowering the Tactile Vision"
          subtitle="Chapter 02"
          description="Our approach goes beyond theory. We immerse individuals in real-world challenges, emphasizing tactile learning and collaborative problem-solving. By bridging the gap between abstract thought and concrete action, we empower the next generation to build lasting legacies."
          imageSrc="/magazine-4.png"
          imageAlt="A modern community space bathed in sunlight"
          orientation="right"
        />

        {/* Footer placeholder */}
        <footer className="py-12 border-t border-white/10 mt-20 text-center">
          <p className="text-white/40 tracking-widest uppercase text-xs">
            © {new Date().getFullYear()} Wealders. We Are Leaders.
          </p>
        </footer>
      </div>
    </main>
  );
}
