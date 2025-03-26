export default function App() {
  return (
    <div>
      <h1>
        Hello <Greeting name="Andreas" />
      </h1>
    </div>
  );
}

function Greeting({ name }) {
  return <div>{name}</div>;
}
