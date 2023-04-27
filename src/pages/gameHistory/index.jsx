import React, { useEffect, useState } from "react";
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import Dialog from "@mui/material/Dialog";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Header from "../../components/Header";
import moment from "moment";
import { BASE_URL } from "../../config";

function createData(number, item, qty, price) {
  return { number, item, qty, price };
}

const rows = [
  createData(1, "1711825078", 5, 3),
  createData(2, "0826183278", 2, 2),
  createData(3, "6988318685", 3, 1),
  createData(4, "8652375848", 2, 1.6),
  createData(5, "8672378648", 1.5, 4),
  createData(6, "8672378648", 1.5, 4),
  createData(7, "8672378648", 1.5, 4),
];

const GameHistory = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [dialogPage, setDialogPage] = useState(0);
  const [dialogRowsPerPage, setDialogRowsPerPage] = useState(10);
  const [users, setUsers] = useState([]);
  const [filterdUsers, setFilterdUsers] = useState([]);
  const [open, setOpen] = useState(false);
  const [selectedId, setSelectedId] = useState([]);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleClickOpen = (id) => {
    const dialogTableData = users.filter((item) => item.gameId === id);
    setSelectedId(dialogTableData);
    setOpen(true);
  };

  const handleClose = () => {
    setSelectedId([]);
    setOpen(false);
    setDialogRowsPerPage(10);
    setDialogPage(0);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleChangeDialogPage = (event, newPage) => {
    setDialogPage(newPage);
  };

  const handleChangeDialogRowsPerPage = (event) => {
    setDialogRowsPerPage(+event.target.value);
    setDialogPage(0);
  };

  const fetchUserData = () => {
    fetch(`${BASE_URL}/game-history`)
      .then((response) => {
        return response.json();
      })
      .then((datas) => {
        setUsers(datas.data);
      });
  };

  const filterdUser = () => {
    const id = "gameId";

    const arrayUniqueByKey = [
      ...new Map(users.map((item, index) => [item[id], item])).values(),
    ];

    setFilterdUsers(arrayUniqueByKey);
  };

  useEffect(() => {
    filterdUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [users]);

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <>
      <Box m="20px" mt="140px">
        <Box>
          <Box
            className="commisionTitle"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Header title="GAME HISTORY" />
          </Box>
        </Box>
        <Paper sx={{ boxShadow: "0 4px 24px 0 rgba(34, 41, 47, 0.1)" }}>
          <TableContainer aria-label="customized table" component={Paper}>
            <Table aria-label="simple table">
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
                    No.
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
                    Game ID
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
                    Game
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
                    Time
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filterdUsers
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, index) => (
                    <TableRow key={row.number}>
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
                          color: "#3ca78b",
                          letterSpacing: "0.5px",
                        }}
                      >
                        <span onClick={() => handleClickOpen(row.gameId)}>
                          {row.gameId}
                        </span>
                      </TableCell>
                      <TableCell
                        align="center"
                        sx={{
                          fontSize: 14,
                          color: "#6e6b7b",
                          letterSpacing: "0.5px",
                        }}
                      >
                        {row.game}
                      </TableCell>
                      <TableCell
                        align="center"
                        sx={{
                          fontSize: 14,
                          color: "#6e6b7b",
                          letterSpacing: "0.5px",
                        }}
                      >
                        {moment(row.time, "DD-MM-YYYY HH:mm:ss A").format(
                          "DD-MM-YYYY HH:mm:ss"
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[5, 10, 50]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            sx={{ backgroundColor: "#e7e7e7", fontWeight: "bolder" }}
          />
        </Paper>
      </Box>

      <Dialog
        className="dailog"
        fullScreen={fullScreen}
        fullWidth
        maxWidth={"xl"}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <Paper sx={{ boxShadow: "0 4px 24px 0 rgba(34, 41, 47, 0.1)" }}>
          <TableContainer aria-label="customized table" component={Paper}>
            <Table aria-label="simple table">
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
                    ACTION AMOUNT
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
                    PRE BALANCE
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
                    FINAL BALANCE
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
                    TYPE
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
                    GAME ID
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
                    GAME
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
                    TIME
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {selectedId
                  .slice(
                    dialogPage * dialogRowsPerPage,
                    dialogPage * dialogRowsPerPage + dialogRowsPerPage
                  )
                  .map((row, index) => (
                    <TableRow key={row.number}>
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
                        <span
                          style={{ fontWeight: "700" }}
                          onClick={() => handleClickOpen(row.gameId)}
                        >
                          {row.userName}
                        </span>
                      </TableCell>
                      <TableCell
                        align="center"
                        sx={{
                          fontSize: 14,
                          color: "#6e6b7b",
                          letterSpacing: "0.5px",
                        }}
                      >
                        {row.mobile}
                      </TableCell>
                      <TableCell
                        align="center"
                        sx={{
                          fontSize: 14,
                          color: "#6e6b7b",
                          letterSpacing: "0.5px",
                        }}
                      >
                        {row.actionChips}
                      </TableCell>
                      <TableCell
                        align="center"
                        sx={{
                          fontSize: 14,
                          color: "#6e6b7b",
                          letterSpacing: "0.5px",
                        }}
                      >
                        {row.preChips}
                      </TableCell>
                      <TableCell
                        align="center"
                        sx={{
                          fontSize: 14,
                          color: "#6e6b7b",
                          letterSpacing: "0.5px",
                        }}
                      >
                        {row.chips}
                      </TableCell>
                      <TableCell
                        align="center"
                        sx={{
                          fontSize: 14,
                          color: "#6e6b7b",
                          letterSpacing: "0.5px",
                        }}
                      >
                        {row.type}
                      </TableCell>
                      <TableCell
                        align="center"
                        sx={{
                          fontSize: 14,
                          color: "#6e6b7b",
                          letterSpacing: "0.5px",
                        }}
                      >
                        {row.gameId}
                      </TableCell>
                      <TableCell
                        align="center"
                        sx={{
                          fontSize: 14,
                          color: "#6e6b7b",
                          letterSpacing: "0.5px",
                        }}
                      >
                        {row.game}
                      </TableCell>
                      <TableCell
                        align="center"
                        sx={{
                          fontSize: 14,
                          color: "#6e6b7b",
                          letterSpacing: "0.5px",
                        }}
                      >
                        {moment(row.time, "DD-MM-YYYY HH:mm:ss A").format(
                          "DD-MM-YYYY HH:mm:ss"
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[5, 10, 50]}
            component="div"
            count={selectedId.length}
            rowsPerPage={dialogRowsPerPage}
            page={dialogPage}
            onPageChange={handleChangeDialogPage}
            onRowsPerPageChange={handleChangeDialogRowsPerPage}
            sx={{ backgroundColor: "#e7e7e7", fontWeight: "bolder" }}
          />
        </Paper>
      </Dialog>
    </>
  );
};

export default GameHistory;
