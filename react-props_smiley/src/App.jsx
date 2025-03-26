export default function App() {
  return (
    <div>
      <Smiley isHappy={true} />
    </div>
  );
}

function Smiley({ isHappy }) {
  return (
    <p aria-label={isHappy ? "Happy smiley" : "Sad smiley"}>
      {isHappy ? "😊" : "😞"}
    </p>
  );
}
