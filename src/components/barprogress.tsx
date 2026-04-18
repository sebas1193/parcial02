interface Props {
  progress: number; // 0 - 100
}

export default function BarProgress({ progress }: Props) {
  return (
    <div style={{ margin: "16px 0" }}>
      <p>{progress}% completado</p>
      <div style={{ background: "#ddd", borderRadius: 8, height: 16, width: "100%" }}>
        <div
          style={{
            background: "#4caf50",
            width: `${progress}%`,
            height: "100%",
            borderRadius: 8,
            transition: "width 0.4s ease",
          }}
        />
      </div>
    </div>
  );
}