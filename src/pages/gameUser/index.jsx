import React, { useEffect, useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TextField,
} from "@mui/material";
import Header from "../../components/Header";
import CustomizedDialogs from "../popBox";
import moment from "moment";
import { BASE_URL } from "../../config";

const styles = {
  table: {
    width: 400,
    margin: "auto",
  },
};

const GameUser = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [searchItem, setSearchItem] = useState("");
  const [users, setUsers] = useState([]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const fetchUserData = () => {
    fetch(`${BASE_URL}/game-user`)
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

  const blockUser = async (id) => {
    await fetch(`${BASE_URL}/block-user/${id}`, {
      method: "Put",
    });
    // result = await result.json();
    window.location.reload(false);
  };

  return (
    <Box m="20px" mt="140px">
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box
          className="commisionTitle"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Header title="GAME USER" />
        </Box>
      </Box>

      <Box sx={{ display: "flex" }}>
        <Grid container spacing={2} sx={{ alignItems: "center" }}>
          <Grid item xs={4}>
            <TextField
              id="outlined-basic"
              label="Search"
              onChange={(event) => setSearchItem(event.target.value)}
              variant="outlined"
              sx={{ width: 450, height: "4rem" }}
            />
          </Grid>
        </Grid>
        <Box p="20px" sx={{ width: "12%", "& div": { width: "6rem" } }}>
          <CustomizedDialogs
            className="add chip"
            boxName="Add Chips"
            color="success"
            variant="contained"
            cancelColor="inherit"
          />
        </Box>
      </Box>
      <Paper>
        <TableContainer aria-label="customized table" component={Paper}>
          <Table
            aria-label="simple table"
            className={styles.table}
            sx={{ width: "100%" }}
          >
            <TableHead>
              <TableRow>
                <TableCell
                  align="center"
                  sx={{
                    color: "#6e6b7b",
                    fontSize: "0.83rem",
                    fontWeight: "bold",
                    backgroundColor: "#e7e7e7",
                    letterSpacing: "0.5px",
                    borderBottomColor: "grey",
                    fontFamily: "inherit",
                  }}
                >
                  NO.
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    color: "#6e6b7b",
                    fontSize: "0.83rem",
                    fontWeight: "bold",
                    backgroundColor: "#e7e7e7",
                    letterSpacing: "0.5px",
                    borderBottomColor: "grey",
                    fontFamily: "inherit",
                  }}
                >
                  PROFILE PICTURE
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    color: "#6e6b7b",
                    fontSize: "0.83rem",
                    fontWeight: "bold",
                    backgroundColor: "#e7e7e7",
                    letterSpacing: "0.5px",
                    borderBottomColor: "grey",
                    fontFamily: "inherit",
                  }}
                >
                  USER NAME
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    color: "#6e6b7b",
                    fontSize: "0.83rem",
                    fontWeight: "bold",
                    backgroundColor: "#e7e7e7",
                    letterSpacing: "0.5px",
                    borderBottomColor: "grey",
                    fontFamily: "inherit",
                  }}
                >
                  MOBILE
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    color: "#6e6b7b",
                    fontSize: "0.83rem",
                    fontWeight: "bold",
                    backgroundColor: "#e7e7e7",
                    letterSpacing: "0.5px",
                    borderBottomColor: "grey",
                    fontFamily: "inherit",
                  }}
                >
                  BALANCE
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    color: "#6e6b7b",
                    fontSize: "0.83rem",
                    fontWeight: "bold",
                    backgroundColor: "#e7e7e7",
                    letterSpacing: "0.5px",
                    borderBottomColor: "grey",
                    fontFamily: "inherit",
                  }}
                >
                  A/C NAME
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    color: "#6e6b7b",
                    fontSize: "0.83rem",
                    fontWeight: "bold",
                    backgroundColor: "#e7e7e7",
                    letterSpacing: "0.5px",
                    borderBottomColor: "grey",
                    fontFamily: "inherit",
                  }}
                >
                  A/C NO
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    color: "#6e6b7b",
                    fontSize: "0.83rem",
                    fontWeight: "bold",
                    backgroundColor: "#e7e7e7",
                    letterSpacing: "0.5px",
                    borderBottomColor: "grey",
                    fontFamily: "inherit",
                  }}
                >
                  IFSC CODE
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    color: "#6e6b7b",
                    fontSize: "0.83rem",
                    fontWeight: "bold",
                    backgroundColor: "#e7e7e7",
                    letterSpacing: "0.5px",
                    borderBottomColor: "grey",
                    fontFamily: "inherit",
                  }}
                >
                  UPI
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    color: "#6e6b7b",
                    fontSize: "0.83rem",
                    fontWeight: "bold",
                    backgroundColor: "#e7e7e7",
                    letterSpacing: "0.5px",
                    borderBottomColor: "grey",
                    fontFamily: "inherit",
                  }}
                >
                  REGDATE
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    color: "#6e6b7b",
                    fontSize: "0.83rem",
                    fontWeight: "bold",
                    backgroundColor: "#e7e7e7",
                    letterSpacing: "0.5px",
                    borderBottomColor: "grey",
                    fontFamily: "inherit",
                  }}
                >
                  ISONLINE
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    color: "#6e6b7b",
                    fontSize: "0.83rem",
                    fontWeight: "bold",
                    backgroundColor: "#e7e7e7",
                    letterSpacing: "0.5px",
                    borderBottomColor: "grey",
                    fontFamily: "inherit",
                  }}
                >
                  TBID
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    color: "#6e6b7b",
                    fontSize: "0.83rem",
                    fontWeight: "bold",
                    backgroundColor: "#e7e7e7",
                    letterSpacing: "0.5px",
                    borderBottomColor: "grey",
                    fontFamily: "inherit",
                  }}
                >
                  BLOCK USER
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users
                // eslint-disable-next-line array-callback-return
                .filter((user) => {
                  if (searchItem === "") {
                    return user;
                  } else if (
                    user.userName
                      .toLowerCase()
                      .includes(searchItem.toLowerCase())
                  ) {
                    return user;
                  }
                  if (searchItem === "") {
                    return user;
                  } else if (
                    user.mobile.toLowerCase().includes(searchItem.toLowerCase())
                  ) {
                    return user;
                  }
                  if (searchItem === "") {
                    return user;
                  } else if (
                    user.bankDetails?.accountHolderName
                      ?.toLowerCase()
                      .includes(searchItem.toLowerCase())
                  ) {
                    return user;
                  }
                })
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((user, index) => (
                  <TableRow key={index}>
                    <TableCell
                      align="center"
                      sx={{
                        fontSize: 14,
                        color: "#6e6b7b",
                        letterSpacing: "0.5px",
                      }}
                    >
                      {index + 1}
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{
                        fontSize: 14,
                        color: "#6e6b7b",
                        letterSpacing: "0.5px",
                      }}
                    >
                      <Avatar>{user.userName || "-"}</Avatar>
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{
                        fontSize: 14,
                        color: "#6e6b7b",
                        letterSpacing: "0.5px",
                      }}
                    >
                      {user.userName}
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{
                        fontSize: 14,
                        color: "#6e6b7b",
                        letterSpacing: "0.5px",
                      }}
                    >
                      {user.mobile}
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{
                        fontSize: 14,
                        color: "#6e6b7b",
                        letterSpacing: "0.5px",
                      }}
                    >
                      {user.chips}
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{
                        fontSize: 14,
                        color: "#6e6b7b",
                        letterSpacing: "0.5px",
                      }}
                    >
                      {user.bankDetails?.accountHolderName || "-"}
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{
                        fontSize: 14,
                        color: "#6e6b7b",
                        letterSpacing: "0.5px",
                      }}
                    >
                      {user.bankDetails?.accountNumber || "-"}
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{
                        fontSize: 14,
                        color: "#6e6b7b",
                        letterSpacing: "0.5px",
                      }}
                    >
                      {user.bankDetails?.IFSC || "-"}
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{
                        fontSize: 14,
                        color: "#6e6b7b",
                        letterSpacing: "0.5px",
                      }}
                    >
                      {user.UPI || "-"}
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{
                        fontSize: 14,
                        color: "#6e6b7b",
                        letterSpacing: "0.5px",
                      }}
                    >
                      {moment(user.regDate, "DD-MM-YYYY HH:mm:ss A").format(
                        "DD-MM-YYYY HH:mm:ss"
                      )}
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{
                        fontSize: 14,
                        color: "#6e6b7b",
                        letterSpacing: "0.5px",
                      }}
                    >
                      {user.isOnline}
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{
                        fontSize: 14,
                        color: "#6e6b7b",
                        letterSpacing: "0.5px",
                      }}
                    >
                      {user.tbid || "-"}
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{
                        fontSize: 14,
                        color: "#6e6b7b",
                        letterSpacing: "0.5px",
                      }}
                    >
                      <Button
                        variant="contained"
                        color="error"
                        size="large"
                        sx={{ borderRadius: "50px" }}
                        onClick={() => blockUser(user._id)}
                      >
                        Block
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10]}
          component="div"
          count={users.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          sx={{ backgroundColor: "#e9ecef", fontWeight: "bolder" }}
        />
      </Paper>
      {/* <div>
        <ToastContainer />
      </div> */}
    </Box>
  );
};

export default GameUser;
