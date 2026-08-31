import Image from "next/image";

const graphicItems = [
  "/images/graphic-design-placeholder.svg",
  "/images/project-campaign.svg",
  "/images/project-placeholder.svg",
];

const threeDItems = [
  "/images/3d-placeholder.svg",
  "/images/project-placeholder.svg",
  "/images/3d-placeholder.svg",
];

function Showcase({
  title,
  intro,
  items,
}: {
  title: string;
  intro: string;
  items: string[];
}) {
  return (
    <section className="visual-showcase">
      <header className="visual-showcase-heading">
        <h2>{title}</h2>
        <p>{intro}</p>
      </header>
      <div className="showcase-scroll" data-native-scroll>
        {items.map((src, index) => (
          <div className="showcase-frame" key={`${src}-${index}`}>
            <Image src={src} alt="" width={1200} height={760} />
          </div>
        ))}
      </div>
      <p className="drag-hint">← &nbsp; DRAG TO EXPLORE &nbsp; →</p>
    </section>
  );
}

export function VisualShowcase() {
  return (
    <div className="showcase-stack">
      <Showcase
        title="Graphic Design"
        intro="A selection of visual solutions crafted to communicate, captivate, and inspire."
        items={graphicItems}
      />
      <Showcase
        title="3D Graphics"
        intro="Shaping space, light & form into compelling digital visuals."
        items={threeDItems}
      />
    </div>
  );
}
