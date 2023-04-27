import * as React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { Box } from "@mui/material";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function CustomizedDialogs(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div style={{marginLeft: '1rem'}}>
      <Button
        color={props.color}
        variant={props.variant}
        onClick={handleClickOpen}
        sx={{
          color: "#fff",
          font: "16px bold",
          padding: "10px",
          textTransform: "capitalize",
        }}
      >
        {props.boxName}
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
        >
          {props.boxName}
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <Box
            component="form"
            noValidate
            autoComplete="off"
            sx={{ width: "500px", height: "200px" }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                height: "100px",
              }}
            >
              <label>Mobile No</label>
              <input
                type="number"
                placeholder="Enter The Mobile Number"
                style={{ padding: "12px" }}
              />
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <label>Chips</label>
              <input
                type="number"
                placeholder="Enter The Mobile Number"
                style={{ padding: "12px" }}
              />
            </div>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button
            variant={props.variant}
            color={props.cancelColor}
            onClick={handleClose}
            sx={{ color: "#000" }}
          >
            Cancel
          </Button>
          <Button
            variant={props.variant}
            color={props.color}
            onClick={handleClose}
            sx={{ color: "#fff" }}
          >
            {props.boxName}
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}
