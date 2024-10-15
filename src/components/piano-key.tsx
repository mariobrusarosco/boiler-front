import "./styles.css";

export const PianoKey = ({
  label,
  onInteraction,
}: {
  label: string;
  onInteraction: (label: string) => any;
}) => {
  const handleKeyAction = (label: string) => {
    onInteraction(label);
  };

  return (
    <div className="piano-key" onClick={() => handleKeyAction(label)}>
      <span>{label}</span>
    </div>
  );
};
