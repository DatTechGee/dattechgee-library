import { ImageCard } from "@/components/ui/image-card";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/shared/animations";
import Container from "@/components/layout/Container";
import { galleryItems as gallery } from "@/data";

// Portrait/landscape mix (chateaudelaray pattern):
// - Landscape: aspect-[4/3]
// - Portrait:  aspect-[3/4]
// - Mixed: "grid grid-cols-2 md:grid-cols-3 gap-4 [&>*:nth-child(1)]:col-span-2]
export default function GallerySection() {
  return (
    <section className="py-24">
      <Container>
        <Reveal>
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
              Gallery
            </p>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Our work</h2>
          </div>
        </Reveal>

        <StaggerGroup className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {gallery.map((item, i) => (
            <StaggerItem
              key={item.title}
              className={i === 0 ? "sm:col-span-2 lg:row-span-2" : ""}
            >
              <ImageCard
                variant="overlay"
                src={item.src || undefined}
                alt={item.title}
                title={item.title}
                className={i === 0 ? "h-full min-h-[20rem]" : "aspect-[4/3]"}
              />
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Container>
    </section>
  );
}