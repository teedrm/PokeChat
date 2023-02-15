import Spline from '@splinetool/react-spline';
import { useNavigate } from "react-router-dom";

export default function App() {
  let navigate = useNavigate();
  return (
    <Spline scene="https://prod.spline.design/YKcnNintwgr6h7pn/scene.splinecode"  onClick={() => navigate("/login")}/>
  );
}
