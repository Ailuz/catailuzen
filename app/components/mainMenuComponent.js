import a4_0xc390e6 from "react";
import { Box, Text } from "ink";
import a4_0x542246 from "chalk";
import { useMainMenu } from "../hooks/useMainMenu.js";
import a4_0xdf791e from "./itemMenuComponent.js";
import { updateBanner } from "../utils/helper.js";
const MainMenuComponent = ({ banner: _0x570954, onChange: _0x1ce5b5 }) => {
  const { message: _0x39ad37 } = useMainMenu({
    onChange: _0x1ce5b5,
  });
  return a4_0xc390e6.createElement(
    Box,
    {
      flexDirection: "column",
      width: 52,
    },
    a4_0xc390e6.createElement(Text, null, updateBanner(_0x570954)),
    a4_0xc390e6.createElement(
      Box,
      {
        flexDirection: "column",
        marginRight: 2,
      },
      a4_0xc390e6.createElement(
        Box,
        {
          flexDirection: "column",
          marginLeft: 6,
        },
        a4_0xc390e6.createElement(
          Box,
          {
            marginBottom: 1,
          },
          a4_0xc390e6.createElement(
            Text,
            {
              color: "greenBright",
            },
            "Main Menu"
          )
        ),
        a4_0xc390e6.createElement(a4_0xdf791e, {
          id: "1",
          label: "Start Bot",
        }),
        a4_0xc390e6.createElement(a4_0xdf791e, {
          id: "2",
          label: "Add Account",
        }),
        a4_0xc390e6.createElement(a4_0xdf791e, {
          id: "3",
          label: "Delete Account",
        }),
        _0x39ad37 &&
          a4_0xc390e6.createElement(
            Box,
            {
              marginTop: 1,
            },
            a4_0xc390e6.createElement(
              Text,
              {
                color: "yellowBright",
              },
              a4_0x542246.magenta("[") +
                a4_0x542246.yellowBright("!") +
                a4_0x542246.magenta("]"),
              " ",
              _0x39ad37
            )
          )
      ),
      a4_0xc390e6.createElement(
        Box,
        {
          marginTop: 1,
        },
        a4_0xc390e6.createElement(
          Text,
          null,
          a4_0x542246.magenta("[") +
            a4_0x542246.white("CTRL") +
            a4_0x542246.blackBright(" + ") +
            a4_0x542246.white("C") +
            a4_0x542246.magenta("]") +
            a4_0x542246.blackBright(" or ") +
            a4_0x542246.white("Q") +
            a4_0x542246.blackBright(" for exit")
        )
      )
    )
  );
};
export default MainMenuComponent;
