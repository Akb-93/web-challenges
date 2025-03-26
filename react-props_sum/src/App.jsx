export default function App() {
  return (
    <div>
      <Sum numOne={2} numTwo={3} />
    </div>
  );
}

function Sum({ numOne, numTwo }) {
  const result = numOne + numTwo;

  return (
    <div>
      <h1>{result}</h1>
      <span>{numOne}</span>
      <span>{numTwo}</span>
    </div>
  );
}
