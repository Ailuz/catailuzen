import { Box, useFocus } from "ink";
import a5_0x268ebc from "react";
import a5_0x572f45 from "./catizenComponent.js";
const PageComponent = ({ accounts: _0x3a9b95, id: _0x263c05 }) => {
  const { isFocused: _0x3f836e } = useFocus({
    id: _0x263c05,
  });
  return a5_0x268ebc.createElement(
    Box,
    {
      flexDirection: "column",
      display: (_0x3f836e && "flex") || "none",
    },
    _0x3a9b95.map((_0x2fffa1, _0x3bb71f) =>
      a5_0x268ebc.createElement(a5_0x572f45, {
        key: _0x3bb71f,
        access_token: _0x2fffa1.access_token,
        init_data: _0x2fffa1.init_data,
        use_proxy: _0x2fffa1.use_proxy,
        proxy_hostname: _0x2fffa1.proxy_hostname,
        proxy_protocol: _0x2fffa1.proxy_protocol,
        proxy_port: _0x2fffa1.proxy_port,
        proxy_username: _0x2fffa1.proxy_username,
        proxy_password: _0x2fffa1.proxy_password,
      })
    )
  );
};
export default PageComponent;
