import { LoaderStyled, LdsRing } from "./styled";

export const Loader = () => (
  <LoaderStyled>
    <div>
      <LdsRing>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </LdsRing>
      {/* <LoaderText>Loading</LoaderText> */}
    </div>
  </LoaderStyled>
);