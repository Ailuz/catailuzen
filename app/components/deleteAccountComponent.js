import a1_0x3bdcb1 from "chalk";
import { Box, Text, useFocusManager, useInput } from "ink";
import a1_0x5e99c8, { useEffect, useState } from "react";
import a1_0x159329 from "./itemMenuComponent.js";
import { deleteFile, updateBanner } from "../utils/helper.js";
const DeleteAccountComponent = ({
  accounts: _0x6639d,
  banner: _0x562264,
  onChange: _0x582c3c,
}) => {
  const { focus: _0x27d8b } = useFocusManager();
  const [_0x36cc0b, _0x1cae55] = useState(1);
  const [_0x52210c, _0x41b107] = useState(null);
  const [_0x378b2c, _0x13f102] = useState(false);
  const [_0x42e8ff, _0x35d4cc] = useState(null);
  useInput((_0x22e2d5, _0x1812fc) => {
    if (_0x22e2d5 === "q" && !_0x378b2c) {
      _0x582c3c("exit");
      return;
    }
    if (_0x22e2d5 === "y" && _0x378b2c) {
      _0x13f102(false);
      if (_0x52210c !== null) {
        const _0x3853d9 = deleteFile(_0x6639d[_0x52210c].location);
        if (_0x3853d9.status) {
          _0x1cae55(_0x52210c);
          _0x6639d.splice(_0x52210c, 1);
        }
        _0x35d4cc(_0x3853d9.message);
      }
      if (_0x6639d.length < 1) {
        _0x582c3c("back");
        return;
      }
      return;
    }
    if (_0x22e2d5 === "n" && _0x378b2c) {
      _0x13f102(false);
      return;
    }
    if (_0x1812fc.upArrow && !_0x378b2c) {
      _0x1cae55(_0x36cc0b - 1);
    }
    if (_0x1812fc.downArrow && !_0x378b2c) {
      _0x1cae55(_0x36cc0b + 1);
    }
    if (_0x1812fc.return && !_0x378b2c) {
      _0x41b107(_0x36cc0b - 1);
      _0x13f102(true);
      return;
    }
    if (_0x1812fc.escape) {
      _0x582c3c("back");
      return;
    }
  });
  useEffect(() => {
    _0x35d4cc(null);
    if (_0x36cc0b > _0x6639d.length) {
      _0x1cae55(1);
      _0x27d8b("1");
    } else if (_0x36cc0b < 1) {
      _0x1cae55(_0x6639d.length);
      _0x27d8b(_0x6639d.length.toString());
    } else {
      _0x27d8b(_0x36cc0b.toString());
    }
    if (_0x6639d.length < 1) {
      _0x582c3c("");
      return;
    }
  }, [_0x36cc0b]);
  return a1_0x5e99c8.createElement(
    Box,
    {
      flexDirection: "column",
      width: 52,
    },
    a1_0x5e99c8.createElement(Text, null, updateBanner(_0x562264)),
    a1_0x5e99c8.createElement(
      Box,
      {
        flexDirection: "column",
        marginRight: 2,
      },
      a1_0x5e99c8.createElement(
        Box,
        {
          flexDirection: "column",
          marginLeft: 6,
        },
        a1_0x5e99c8.createElement(
          Box,
          {
            marginBottom: 1,
          },
          a1_0x5e99c8.createElement(
            Text,
            {
              color: "greenBright",
            },
            "Delete Account"
          )
        ),
        _0x6639d.map((_0x57fe31, _0x21662a) =>
          a1_0x5e99c8.createElement(a1_0x159329, {
            key: _0x21662a,
            id: (_0x21662a + 1).toString(),
            label: _0x57fe31.name,
          })
        )
      ),
      _0x378b2c &&
        a1_0x5e99c8.createElement(
          Box,
          {
            marginTop: 1,
          },
          a1_0x5e99c8.createElement(
            Text,
            {
              color: "whiteBright",
            },
            a1_0x3bdcb1.magenta("[") +
              a1_0x3bdcb1.yellowBright("!") +
              a1_0x3bdcb1.magenta("]"),
            " ",
            "Are you sure (y/n):"
          )
        ),
      _0x42e8ff &&
        a1_0x5e99c8.createElement(
          Box,
          {
            marginTop: 1,
          },
          a1_0x5e99c8.createElement(
            Text,
            {
              color: "yellowBright",
            },
            a1_0x3bdcb1.magenta("[") +
              a1_0x3bdcb1.yellowBright("!") +
              a1_0x3bdcb1.magenta("]"),
            " ",
            _0x42e8ff
          )
        ),
      a1_0x5e99c8.createElement(
        Box,
        {
          marginTop: 1,
        },
        a1_0x5e99c8.createElement(
          Text,
          null,
          a1_0x3bdcb1.magenta("[") +
            a1_0x3bdcb1.white("CTRL") +
            a1_0x3bdcb1.blackBright(" + ") +
            a1_0x3bdcb1.white("C") +
            a1_0x3bdcb1.magenta("]") +
            a1_0x3bdcb1.blackBright(" or ") +
            a1_0x3bdcb1.white("Q") +
            a1_0x3bdcb1.blackBright(" for exit, ") +
            a1_0x3bdcb1.white("ESC") +
            a1_0x3bdcb1.blackBright(" for back")
        )
      )
    )
  );
};
export default DeleteAccountComponent;
