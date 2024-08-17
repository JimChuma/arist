export default function TrackRecord({ figure, symbol, statement }) {
  return (
    <div>
      <div>
        <span>{figure}</span>
        <span>{symbol}</span>
      </div>
      <p>{statement}</p>
    </div>
  );
}
