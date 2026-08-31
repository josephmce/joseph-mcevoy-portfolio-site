import { PortableText } from "@portabletext/react";

type PortableContentProps = {
  value?: unknown[];
};

export function PortableContent({ value }: PortableContentProps) {
  if (!value?.length) return null;

  return (
    <div className="prose">
      <PortableText value={value as never} />
    </div>
  );
}
