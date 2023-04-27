import { Box, Typography, useTheme } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { tokens } from "../../utils/theme";
import StatBox from "../../components/StatBox";
import { useEffect, useState } from "react";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import PublishedWithChangesIcon from "@mui/icons-material/PublishedWithChanges";
import PaymentIcon from "@mui/icons-material/Payment";
import SettingsEthernetIcon from "@mui/icons-material/SettingsEthernet";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import AlignVerticalCenterIcon from "@mui/icons-material/AlignVerticalCenter";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import { BASE_URL } from "../../config";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [dashboard, setDashboard] = useState([]);

  const fetchUserData = () => {
    fetch(`${BASE_URL}/dashboard`)
      .then((response) => {
        return response.json();
      })
      .then((datas) => {
        setDashboard(datas);
      });
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <Box m="20px" mt="100px" p="0.5rem 3rem">
      <Box sx={{ p: 2 }}>
        <Typography
          sx={{
            color: "#5e5873",
            fontFamily: "inherit",
            fontSize: "1.8rem",
            mt: 1,
            mb: 2,
          }}
          variant="h3"
          component="div"
        >
          Main
        </Typography>
        <Grid
          className="dashboard-content"
          sx={{ paddingTop: "1rem" }}
          container
          rowSpacing={3}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        >
          <Grid xs={25} sm={12} md={12} lg={3} xl={3}>
            <Box
              className="user-box"
              width="100%"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <StatBox
                className="titleLogo"
                sx={{ display: "flex !important" }}
                icon={
                  <Diversity3Icon
                    sx={{
                      color: "#00cfe8",
                      backgroundColor: "#00cfe829",
                      borderRadius: "5rem",
                      padding: "10px",
                      fontSize: "2.9rem",
                    }}
                  />
                }
                subtitle="TOTAL PLAYERS"
                progress="0.75"
                title={parseInt(dashboard.totalPlayers).toLocaleString()}
              />
            </Box>
          </Grid>
          <Grid xs={25} sm={12} md={12} lg={3} xl={3}>
            <Box
              className="user-box"
              width="100%"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <StatBox
                className="titleLogo"
                sx={{ display: "flex !important" }}
                icon={
                  <AttachMoneyIcon
                    sx={{
                      color: "#05b632",
                      backgroundColor: "#def6e9",
                      borderRadius: "5rem",
                      padding: "10px",
                      fontSize: "2.9rem",
                    }}
                  />
                }
                subtitle="TOTAL DEPOSIT"
                progress="0.75"
                title={parseInt(dashboard.totalDeposit).toLocaleString()}
              />
            </Box>
          </Grid>
          <Grid xs={25} sm={12} md={12} lg={3} xl={3}>
            <Box
              className="user-box"
              width="100%"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <StatBox
                className="titleLogo"
                sx={{ display: "flex !important" }}
                icon={
                  <PaymentIcon
                    sx={{
                      color: "#7367f0",
                      backgroundColor: "#7367f029",
                      borderRadius: "5rem",
                      padding: "10px",
                      fontSize: "2.9rem",
                    }}
                  />
                }
                subtitle="TODAY DEPOSIT"
                progress="0.75"
                title={parseInt(dashboard.todayDeposit).toLocaleString()}
              />
            </Box>
          </Grid>
          <Grid xs={25} sm={12} md={12} lg={3} xl={3}>
            <Box
              className="user-box"
              width="100%"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <StatBox
                className="titleLogo"
                sx={{ display: "flex !important" }}
                icon={
                  <PublishedWithChangesIcon
                    sx={{
                      color: "#396d00",
                      backgroundColor: "#8ff06752",
                      borderRadius: "5rem",
                      padding: "10px",
                      fontSize: "2.9rem",
                    }}
                  />
                }
                subtitle="TOTAL WITHDRAWAL"
                progress="0.75"
                title={parseInt(dashboard.totalWithdraw).toLocaleString()}
              />
            </Box>
          </Grid>
          <Grid xs={25} sm={12} md={12} lg={3} xl={3}>
            <Box
              className="user-box"
              width="100%"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <StatBox
                className="titleLogo"
                sx={{ display: "flex !important" }}
                icon={
                  <ConnectWithoutContactIcon
                    sx={{
                      color: "#c60cac",

                      backgroundColor: "#c41aa933",
                      borderRadius: "5rem",
                      padding: "10px",
                      fontSize: "2.9rem",
                    }}
                  />
                }
                subtitle="TODAY WITHDRAW"
                progress="0.75"
                title={parseInt(dashboard.todayWithdraw).toLocaleString()}
              />
            </Box>
          </Grid>
          <Grid xs={25} sm={12} md={12} lg={3} xl={3}>
            <Box
              className="user-box"
              width="100%"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <StatBox
                className="titleLogo"
                sx={{ display: "flex !important" }}
                icon={
                  <SettingsEthernetIcon
                    sx={{
                      color: "#ea5455",

                      backgroundColor: "#ea545529",
                      borderRadius: "5rem",
                      padding: "10px",
                      fontSize: "2.9rem",
                    }}
                  />
                }
                subtitle="TOTAL COMMISSION EARNED"
                progress="0.75"
                title={parseInt(dashboard.totalCommition).toLocaleString()}
              />
            </Box>
          </Grid>
          <Grid xs={25} sm={12} md={12} lg={3} xl={3}>
            <Box
              className="user-box"
              width="100%"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <StatBox
                className="titleLogo"
                sx={{ display: "flex !important" }}
                icon={
                  <AlignVerticalCenterIcon
                    sx={{
                      color: "#785707",

                      backgroundColor: "#eab35452",
                      borderRadius: "5rem",
                      padding: "10px",
                      fontSize: "2.9rem",
                    }}
                  />
                }
                subtitle="TODAY COMMISSION EARNED"
                progress="0.75"
                title={parseInt(dashboard.todayCommition).toLocaleString()}
              />
            </Box>
          </Grid>
          <Grid xs={25} sm={12} md={12} lg={3} xl={3}>
            <Box
              className="user-box"
              width="100%"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <StatBox
                className="titleLogo"
                sx={{ display: "flex !important" }}
                icon={
                  <AccountBalanceIcon
                    sx={{
                      color: colors.greenAccent[600],

                      backgroundColor: "#def6e9",
                      borderRadius: "5rem",
                      padding: "10px",
                      fontSize: "2.9rem",
                    }}
                  />
                }
                subtitle="TOTAL MARKET BALANCE"
                progress="0.75"
                title={parseInt(dashboard.totalMarketBalance).toLocaleString()}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
      {/* <Box sx={{ p: 2, paddingTop: "3.2rem" }}>
        <Typography sx={{ color: "#5e5873", fontFamily: "inherit", fontSize: "1.8rem", mt: 1, mb: 2 }} variant="h3" component="div">
          Game
        </Typography>
        <Grid className="dashboard-content" sx={{ paddingTop: "1rem" }} container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid xs={25} sm={12} md={12} lg={3} xl={3} >
            <Box
              className="user-box"
              width="100%"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <StatBox
                className="titleLogo"
                sx={{ display: "flex !important" }}
                icon={
                  <AddBusinessIcon
                    sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                  />
                }
                subtitle="Total Players"
                progress="0.75"
                title={dashboard.totalPlayers}
              />
            </Box>
          </Grid>
          <Grid xs={12} sm={12} md={12} lg={3} xl={3}>
            <Box
              width="100%"
              className="user-box"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <StatBox
                icon={
                  <EmailIcon
                    sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                  />
                }
                title={dashboard.totalDeposit}
                subtitle="Total Deposit"
                progress="0.50"
              />
            </Box>
          </Grid>
          <Grid xs={12} sm={12} md={12} lg={3} xl={3}>
            <Box
              width="100%"
              className="user-box"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <StatBox
                title={dashboard.totalWithdraw}
                subtitle="Total Withrawal"
                progress="0.30"
                icon={
                  <EmailIcon
                    sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                  />
                }
              />
            </Box>
          </Grid>
          <Grid xs={12} sm={12} md={12} lg={3} xl={3}>
            <Box
              width="100%"
              className="user-box"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <StatBox
                title={dashboard.totalMarketBalance}
                subtitle="Total MarketBalance"
                progress="0.80"
                icon={
                  <EmailIcon
                    sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                  />
                }
              />
            </Box>
          </Grid>
        </Grid>
      </Box> */}
    </Box>
  );
};

export default Dashboard;
