interface SectionLabelProps {
  text: string;
}

export function SectionLabel({ text }: SectionLabelProps) {
  return (
    <>
      <div
        style="
          background-color: var(--c4);
          white-space: nowrap;
          width: min-content;
          color: var(--b0);
          padding: 0 10px;
        "
      >
        {text}
      </div>
    </>
  );
}
