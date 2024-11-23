import { Box, Text } from "ink";
import a2_0x4ddb49 from "react";
import a2_0x69f626 from "../hooks/useForm.js";
import a2_0x32b025 from "ink-spinner";
import { updateBanner } from "../utils/helper.js";
const FormComponent = ({
  banner: _0x16863a,
  name: _0x565f66,
  onChange: _0x30e73f,
}) => {
  const { value: _0x13a255, isLoading: _0x390b51 } = a2_0x69f626({
    onChange: _0x30e73f,
    name: _0x565f66,
  });
  return a2_0x4ddb49.createElement(
    Box,
    {
      flexDirection: "column",
    },
    a2_0x4ddb49.createElement(Text, null, updateBanner(_0x16863a)),
    a2_0x4ddb49.createElement(
      Box,
      {
        marginBottom: 1,
      },
      a2_0x4ddb49.createElement(
        Text,
        {
          color: "greenBright",
        },
        _0x565f66,
        " ",
        _0x390b51 && a2_0x4ddb49.createElement(a2_0x32b025, null)
      )
    ),
    a2_0x4ddb49.createElement(Text, null, _0x13a255)
  );
};
export default FormComponent;
