import React, { useEffect, useState } from "react";
import { Box, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../utils/theme";
import Header from "../../components/Header";
import { BASE_URL } from "../../config";

const Payout = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    { field: "id", headerName: "NO." },
    { field: "registrarId", headerName: "USERNAME" },
    { field: "mobile", headerName: "MOBILE" },
    { field: "status", headerName: "STATUS" },
    { field: "withdrawal", headerName: "WITHDRAWAL TYPE" },
    { field: "amount", headerName: "AMOUNT" },
    { field: "withdrawalId", headerName: "WITHDRAWAL ID" },
    { field: "bankName", headerName: "BANK NAME" },
    { field: "acName", headerName: "A/C NAME" },
    { field: "acNo", headerName: "A/C NO" },
    { field: "ifscCode", headerName: "IFSC CODE" },
    { field: "gPay", headerName: "G-PAY" },
    { field: "phonePe", headerName: "PHONE-PE" },
    { field: "payTm", headerName: "PAYTM" },
    { field: "upi", headerName: "UPI" },
    { field: "time", headerName: "TIME" },
    { field: "action", headerName: "ACTION" },
  ];
  const [users, setUsers] = useState([]);
  const fetchUserData = () => {
    fetch(`${BASE_URL}/payout-management`)
      .then((response) => {
        return response.json();
      })
      .then((datas) => {
        setUsers(datas.data);
      });
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  const mockDataContacts = users.map((user, index) => {
    return {
      id: index + 1,
      registrarId: user.userName,
      mobile: user.mobile,
      status: user.status,
      withdrawal: user.withdrawalType,
      amount: user.balance,
      withdrawalId: user.withdraw_id,
      bankName: user.bankDetails?.bankName,
      acName: user.bankDetails?.accountHolderName,
      acNo: user.bankDetails?.accountNumber,
      ifscCode: user.bankDetails?.IFSC,
      gPay: user.GPay_id || "-",
      phonePe: user.phonePe_id || "-",
      payTm: user.paytm_id || "-",
      upi: user.UPI || "-",
      time: user.time,
      action: "-",
    };
  });

  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="PAYOUT" subtitle="welcome to you Payout Management" />
      </Box>
      <Box
        m="8px 0 0 0"
        width="100%"
        height="80vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent["300"],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.adminColor["tableHead"],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.adminColor["mainBg"],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.adminColor["tableHead"],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
        <DataGrid rows={mockDataContacts} columns={columns} />
      </Box>
    </Box>
  );
};

export default Payout;
