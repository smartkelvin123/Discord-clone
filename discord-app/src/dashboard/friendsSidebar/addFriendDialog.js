import React, { useEffect, useState } from "react";
import { validateEmail } from "../../shared/utilis/validator";
import { Dialog } from "@mui/material";
import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import { Typography } from "@mui/material";
import InputWithLabel from "../../shared/component/inputWithLabel";
import CustomPrimaryButton from "../../shared/component/customPrimaryButton";
import { connect } from "react-redux";
import { getActions } from "../../store/actions/friendsAction";

const AddFriendDialog = ({
  isDialogOpen,
  closeDialogHandler,
  sendFriendInvitation = () => {},
}) => {
  const [mail, setMail] = useState("");
  const [isFormValid, setIsFormValid] = useState("");

  const handleSendInvitation = () => {
    sendFriendInvitation({
      mail: mail,
    });
  };

  const handleCloseDialog = () => {
    closeDialogHandler();
    setMail("");
  };

  useEffect(() => {
    setIsFormValid(validateEmail(mail));
  }, [mail, setIsFormValid]);

  return (
    <div>
      <Dialog open={isDialogOpen} onClose={handleCloseDialog}>
        <DialogTitle>
          <Typography>Invite a Friend</Typography>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <Typography>
              Enter e-mail address of friend which you would like to invite
            </Typography>
          </DialogContentText>
          <InputWithLabel
            label="Mail"
            type="text"
            value={mail}
            setValue={setMail}
            placeholder="Enter mail address"
          />
        </DialogContent>
        <DialogActions>
          <CustomPrimaryButton
            onClick={handleSendInvitation}
            disabled={!isFormValid}
            label="Send"
            additionalStyles={{
              marginLeft: "15px",
              marginRight: "15px",
              marginBottom: "10px",
            }}
          />
        </DialogActions>
      </Dialog>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    ...getActions(dispatch),
  };
};

export default connect(null, mapDispatchToProps)(AddFriendDialog);
