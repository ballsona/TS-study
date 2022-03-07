import React, { Component } from "react";

interface HelloProps {
  color: string;
  name: string;
  isSpecial: boolean;
}

//함수형 컴포넌트
// function Hello({ color, name, isSpecial }: PropTypes) {
//   return (
//     <div style={{ color }}>
//       {isSpecial && <b>*</b>}
//       안녕하세요 {name}
//     </div>
//   );
// }
// Hello.defaultProps = {
//   name: "이름없음",
// };

//클래스형 컴포넌트
class Hello extends Component<HelloProps> {
  static defaultProps: { name: "이름없음" };
  render() {
    const { color, name, isSpecial } = this.props;
    return (
      <div style={{ color }}>
        {isSpecial && <b>*</b>}
        안녕하세요 {name}
      </div>
    );
  }
}

export default Hello;
