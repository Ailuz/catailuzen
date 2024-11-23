import { Box, Spacer, Text } from "ink";
import a0_0xdeab09 from "react";
import a0_0x1720b4 from "../hooks/useCatizen.js";
import a0_0x531265 from "chalk";
import { formatNumber } from "../utils/helper.js";
import a0_0x4f4390 from "ink-spinner";
const CatizenComponent = (_0x2275aa) => {
  const {
    isConnected: _0x4baa51,
    user: _0x399a17,
    logs: _0x5a16c1,
    boostGame: _0x40a3a9,
    message: _0x1e33f2,
    proxyStatus: _0x25ffb6,
    colorDuration: _0x14bb49,
  } = a0_0x1720b4(_0x2275aa);
  return a0_0xdeab09.createElement(
    Box,
    {
      flexDirection: "column",
    },
    a0_0xdeab09.createElement(
      Box,
      {
        flexDirection: "column",
        marginX: -1,
        borderColor: "magentaBright",
        borderStyle: {
          topLeft: "",
          top: "=",
          topRight: "=",
          bottomLeft: "",
          bottom: "",
          bottomRight: "",
          right: "",
          left: "",
        },
      },
      (_0x4baa51 &&
        _0x399a17 &&
        a0_0xdeab09.createElement(
          a0_0xdeab09.Fragment,
          null,
          a0_0xdeab09.createElement(
            Box,
            {
              justifyContent: "space-between",
            },
            a0_0xdeab09.createElement(
              Box,
              {
                flexDirection: "column",
              },
              a0_0xdeab09.createElement(
                Box,
                null,
                a0_0xdeab09.createElement(
                  Text,
                  null,
                  a0_0x531265.greenBright("Name"),
                  " ",
                  a0_0x531265.blackBright(":"),
                  " ",
                  a0_0x531265.whiteBright(_0x399a17.name)
                )
              ),
              a0_0xdeab09.createElement(
                Box,
                null,
                a0_0xdeab09.createElement(
                  Text,
                  null,
                  a0_0x531265.greenBright("Gold"),
                  " ",
                  a0_0x531265.blackBright(":"),
                  " ",
                  a0_0x531265.whiteBright(
                    formatNumber(parseInt("" + _0x399a17.gold))
                  )
                )
              )
            ),
            a0_0xdeab09.createElement(Spacer, null),
            a0_0xdeab09.createElement(
              Box,
              {
                flexDirection: "column",
              },
              a0_0xdeab09.createElement(
                Box,
                null,
                a0_0xdeab09.createElement(
                  Text,
                  null,
                  a0_0x531265.greenBright("wCati"),
                  a0_0x531265.blackBright(" : "),
                  a0_0x531265.whiteBright(_0x399a17.wCati)
                )
              ),
              a0_0xdeab09.createElement(
                Box,
                null,
                a0_0xdeab09.createElement(
                  Text,
                  null,
                  a0_0x531265.greenBright("Fish"),
                  a0_0x531265.blackBright("  : "),
                  a0_0x531265.whiteBright(
                    formatNumber(parseInt("" + _0x399a17.fishCoin))
                  )
                )
              )
            )
          ),
          a0_0xdeab09.createElement(Box, {
            marginTop: -1,
            borderColor: "magentaBright",
            borderStyle: {
              topLeft: "",
              top: "",
              topRight: "",
              bottomLeft: "-",
              bottom: "-",
              bottomRight: "-",
              right: "",
              left: "",
            },
          }),
          a0_0xdeab09.createElement(
            Box,
            {
              justifyContent: "space-between",
            },
            a0_0xdeab09.createElement(
              Box,
              {
                flexDirection: "column",
              },
              a0_0xdeab09.createElement(
                Text,
                {
                  color: "whiteBright",
                },
                _0x399a17.cats[0]
              ),
              a0_0xdeab09.createElement(
                Text,
                {
                  color: "whiteBright",
                },
                _0x399a17.cats[4]
              ),
              a0_0xdeab09.createElement(
                Text,
                {
                  color: "whiteBright",
                },
                _0x399a17.cats[8]
              )
            ),
            a0_0xdeab09.createElement(Spacer, null),
            a0_0xdeab09.createElement(
              Box,
              {
                flexDirection: "column",
              },
              a0_0xdeab09.createElement(
                Text,
                {
                  color: "whiteBright",
                },
                _0x399a17.cats[1]
              ),
              a0_0xdeab09.createElement(
                Text,
                {
                  color: "whiteBright",
                },
                _0x399a17.cats[5]
              ),
              a0_0xdeab09.createElement(
                Text,
                {
                  color: "whiteBright",
                },
                _0x399a17.cats[9]
              )
            ),
            a0_0xdeab09.createElement(Spacer, null),
            a0_0xdeab09.createElement(
              Box,
              {
                flexDirection: "column",
              },
              a0_0xdeab09.createElement(
                Text,
                {
                  color: "whiteBright",
                },
                _0x399a17.cats[2]
              ),
              a0_0xdeab09.createElement(
                Text,
                {
                  color: "whiteBright",
                },
                _0x399a17.cats[6]
              ),
              a0_0xdeab09.createElement(
                Text,
                {
                  color: "whiteBright",
                },
                _0x399a17.cats[10]
              )
            ),
            a0_0xdeab09.createElement(Spacer, null),
            a0_0xdeab09.createElement(
              Box,
              {
                flexDirection: "column",
              },
              a0_0xdeab09.createElement(
                Text,
                {
                  color: "whiteBright",
                },
                _0x399a17.cats[3]
              ),
              a0_0xdeab09.createElement(
                Text,
                {
                  color: "whiteBright",
                },
                _0x399a17.cats[7]
              ),
              a0_0xdeab09.createElement(
                Text,
                {
                  color: "whiteBright",
                },
                _0x399a17.cats[11]
              )
            )
          ),
          a0_0xdeab09.createElement(
            Box,
            {
              marginX: -1,
              flexDirection: "column",
              borderColor: "magentaBright",
              borderStyle: {
                topLeft: "",
                top: "=",
                topRight: "=",
                bottomLeft: "",
                bottom: "",
                bottomRight: "",
                right: "",
                left: "",
              },
            },
            _0x2275aa.use_proxy &&
              a0_0xdeab09.createElement(
                Box,
                {
                  flexDirection: "column",
                  marginBottom: 1,
                },
                a0_0xdeab09.createElement(
                  Box,
                  null,
                  a0_0xdeab09.createElement(
                    Text,
                    null,
                    (_0x25ffb6.status &&
                      a0_0x531265.blackBright(
                        _0x2275aa.proxy_protocol +
                          "://" +
                          _0x2275aa.proxy_hostname +
                          ":" +
                          _0x2275aa.proxy_port
                      )) ||
                      a0_0x531265.redBright(
                        _0x2275aa.proxy_protocol +
                          "://" +
                          _0x2275aa.proxy_hostname +
                          ":" +
                          _0x2275aa.proxy_port
                      )
                  ),
                  a0_0xdeab09.createElement(Spacer, null),
                  (_0x25ffb6.status &&
                    a0_0xdeab09.createElement(
                      Text,
                      null,
                      _0x14bb49(_0x25ffb6.duration),
                      " ",
                      a0_0x531265.blackBright("ms")
                    )) ||
                    a0_0xdeab09.createElement(
                      Text,
                      null,
                      a0_0x531265.redBright(_0x25ffb6.message)
                    )
                )
              ),
            !_0x2275aa.use_proxy && a0_0xdeab09.createElement(Text, null, " "),
            _0x40a3a9 && a0_0xdeab09.createElement(Text, null, _0x40a3a9),
            _0x5a16c1.map((_0x4ca4d0, _0x324800) =>
              a0_0xdeab09.createElement(
                Text,
                {
                  key: _0x324800,
                },
                _0x4ca4d0
              )
            )
          )
        )) ||
        (_0x1e33f2 &&
          a0_0xdeab09.createElement(
            Box,
            {
              flexDirection: "column",
            },
            (_0x1e33f2.includes("Login") &&
              a0_0xdeab09.createElement(
                Text,
                null,
                _0x1e33f2,
                " ",
                a0_0xdeab09.createElement(a0_0x4f4390, null)
              )) ||
              (_0x1e33f2.includes("Reconnecting") &&
                a0_0xdeab09.createElement(
                  Text,
                  null,
                  _0x1e33f2,
                  " ",
                  a0_0xdeab09.createElement(a0_0x4f4390, null)
                )) ||
              (_0x1e33f2.includes("Initialization") &&
                a0_0xdeab09.createElement(
                  Text,
                  null,
                  _0x1e33f2,
                  " ",
                  a0_0xdeab09.createElement(a0_0x4f4390, null)
                )) ||
              a0_0xdeab09.createElement(Text, null, _0x1e33f2),
            _0x5a16c1.map((_0x5081ec, _0x1efb47) =>
              a0_0xdeab09.createElement(
                Text,
                {
                  key: _0x1efb47,
                },
                _0x5081ec
              )
            )
          ))
    )
  );
};
export default CatizenComponent;
