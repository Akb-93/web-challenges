import BoxWithClassName from '../components/BoxWithClassName/BoxWithClassName';
import BoxWithStyledComponents from '../components/BoxWithClassName/BoxWithStyledComponents';

export default function HomePage() {
  return (
    <div>
      <h1>Two Boxes with ClassName</h1>
      <BoxWithClassName />
      <BoxWithClassName isBlack />

      <h1>Two Boxes with Styled Components</h1>
      <BoxWithStyledComponents />
      <BoxWithStyledComponents $isBlack />
    </div>
  );
}