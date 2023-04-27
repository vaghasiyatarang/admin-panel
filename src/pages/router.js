import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./dashboard";
import TopBar from "./global/TopBar";
import { ColorModeContext, useMode } from "../utils/theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { MyProSidebarProvider } from "./global/sidebar/sidebarContext";
import UserLogin from "./auth/Userlogin";
import GameHistory from "./gameHistory";
import Payout from "./payout";
import Deposit from "./depositHistory";
import Commission from "./CommissionHistory";
import GameUser from "./gameUser";
import BlockedUser from "./blockedUser";
import RobotManagement from "./robotManagement";
import RobotUser from "./robotUser";
import Reward from "./rewards";
import Add from "./add";
import Withdraw from "./withdraw";
import GameTransaction from "./gameTransaction";

function Apps(params) {
  const [theme, colorMode] = useMode();

  const getToken = () => {
    const tokenString = localStorage.getItem("data");
    const userToken = JSON.parse(tokenString);
    return userToken?.data;
  };

  const removeData = (userToken) => {
    window.location.reload(false);
    localStorage.removeItem("data", JSON.stringify(userToken));
  };

  const [token, setToken] = useState(getToken());

  const saveToken = (userToken) => {
    localStorage.setItem("data", JSON.stringify(userToken));
    setToken(userToken.data);
  };

  if (!token) {
    return <UserLogin setToken={saveToken} />;
  }
  let props = {
    tokens: token,
    removeDatas: removeData,
  };
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <MyProSidebarProvider>
          <div style={{ height: "100%", width: "100%", overflow: "auto" }}>
            <main>
              <TopBar {...props} sx />
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/game-history" element={<GameHistory />} />
                <Route path="/payout-management" element={<Payout />} />
                <Route path="/deposit-history" element={<Deposit />} />
                <Route path="/commission-history" element={<Commission />} />
                <Route path="/game-user" element={<GameUser />} />
                <Route path="/blocked-user" element={<BlockedUser />} />
                <Route path="/robot-user" element={<RobotUser />} />
                <Route path="/robot-management" element={<RobotManagement />} />
                <Route path="/reward" element={<Reward />} />
                <Route path="/add" element={<Add />} />
                <Route path="/withdraw" element={<Withdraw />} />
                <Route path="/gameTransaction" element={<GameTransaction />} />
              </Routes>
            </main>
          </div>
        </MyProSidebarProvider>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default Apps;
