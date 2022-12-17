import Button from "../component/Button";

const A = <p>P 태그로 만들어진 것입니다.</p>;
const B = <h1>H1 태그로 만들어진 것입니다.</h1>;
const button = <Button />;

export const componentArr = [
  {
    component: A,
    componentName: "A",
  },
  {
    component: B,
    componentName: "B",
  },
  {
    component: button,
    componentName: "Button",
  },
];
