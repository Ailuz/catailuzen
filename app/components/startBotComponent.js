import React from "react";
import { Box, Text } from "ink";
import Spinner from "ink-spinner";
import chalk from "chalk";
import PageComponent from "./pageComponent.js";
import { formatDate, updateBanner } from "../utils/helper.js";
import useStartBot from "../hooks/useStartBot.js";

const StartBotComponent = ({
  accounts: accounts,
  banner: banner,
  onChange: onChange,
}) => {
  const {
    pageAccount: pageAccount,
    runtimeStatus: runtimeStatus,
    focusOn: focusOn,
  } = useStartBot({
    accounts: accounts,
    onChange: onChange,
  });

  return React.createElement(
    Box,
    {
      flexDirection: "column",
      width: 52,
    },
    React.createElement(Text, null, updateBanner(banner)),
    React.createElement(Box, {
      flexDirection: "column",
      paddingBottom: 2,
      marginTop: -1,
      marginX: -1,
      borderStyle: {
        topLeft: "",
        top: "",
        topRight: "",
        bottomLeft: "",
        bottom: "~",
        bottomRight: "",
        right: "",
        left: "",
      },
    }),
    React.createElement(
      Box,
      {
        flexDirection: "column",
        marginRight: 2,
      },
      runtimeStatus.status === "reconnecting" &&
        React.createElement(
          Text,
          {
            color: "yellowBright",
          },
          "Reconecting ",
          React.createElement(Spinner, null)
        ),
      React.createElement(
        Box,
        {
          flexDirection: "column",
          display:
            (runtimeStatus.status !== "reconnecting" && "flex") || "none",
        },
        React.createElement(
          Box,
          {
            justifyContent: "center",
          },
          React.createElement(Text, null, focusOn, " / ", pageAccount.length)
        ),
        pageAccount.map((account, index) =>
          React.createElement(PageComponent, {
            key: index,
            accounts: account,
            id: (index + 1).toString(),
          })
        ),
        React.createElement(
          Box,
          {
            marginTop: -1,
          },
          React.createElement(
            Text,
            null,
            chalk.magenta("[") +
              chalk.white("CTRL") +
              chalk.blackBright(" + ") +
              chalk.white("C") +
              chalk.magenta("]") +
              chalk.blackBright(" or ") +
              chalk.white("Q") +
              chalk.blackBright(" for exit, ") +
              chalk.white("ESC") +
              chalk.blackBright(" for back")
          )
        )
      )
    )
  );
};

export default StartBotComponent;
