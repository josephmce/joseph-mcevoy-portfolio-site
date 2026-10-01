type TextContentProps = {
  paragraphs?: string[];
};

export function TextContent({ paragraphs }: TextContentProps) {
  if (!paragraphs?.length) return null;

  return (
    <div className="prose">
      {paragraphs.map((paragraph, index) => (
        <p key={`${index}-${paragraph.slice(0, 32)}`}>{paragraph}</p>
      ))}
    </div>
  );
}
