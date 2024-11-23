import a3_0x2af64e from "react";
import { Text, useFocus } from "ink";
import a3_0x2a3bc9 from "chalk";
const ItemMenuComponent = ({ label: _0x5ee400, id: _0x213ef2 }) => {
  const { isFocused: _0x1f0022 } = useFocus({
    id: _0x213ef2,
  });
  if (_0x1f0022) {
    return a3_0x2af64e.createElement(
      Text,
      {
        inverse: true,
        color: "white",
        bold: true,
      },
      "[",
      _0x213ef2,
      "] ",
      _0x5ee400
    );
  } else {
    return a3_0x2af64e.createElement(
      Text,
      {
        color: "greenBright",
        bold: true,
      },
      a3_0x2a3bc9.magentaBright("[") +
        a3_0x2a3bc9.blackBright(_0x213ef2) +
        a3_0x2a3bc9.magentaBright("] "),
      _0x5ee400
    );
  }
};
export default ItemMenuComponent;
