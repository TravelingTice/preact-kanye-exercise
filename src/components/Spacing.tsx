import { h, FunctionComponent } from "preact";

interface Props {
  size: number;
}

const Spacing: FunctionComponent<Props> = ({ size, children }) => {
  const spacings = [8, 16, 32, 64, 128];

  return (
    <div style={{ marginTop: spacings[size], marginBottom: spacings[size] }}>
      {children}
    </div>
  );
};

export default Spacing;
