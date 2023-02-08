import Spline from "@splinetool/react-spline";
import SplineScene from "./Forms/SplineScene";
import LoginForm from "./Forms/LoginForm";
import style from "styled-components";
const SignUp = () => {
    return (
        <Wrapper>
            <FormContainer>
                <LoginForm />
            </FormContainer>
            <SplineContainer>
                <SplineScene />
            </SplineContainer>
        </Wrapper>
    );
};

const Wrapper = style.div`
  width: 100%;
  overflow: hidden;
  display: grid;
  grid-template-columns: 50% 50%;
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
  `;

const FormContainer = style.div`
position: relative`;

const SplineContainer = style.div`
  position: relative;
  padding: 30px 20px 24px 0px;

  .spline {
    border-radius: 20px;
    margin: 0;
    padding: 0;
  }
`;
export default SignUp;