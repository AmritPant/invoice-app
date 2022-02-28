import React from "react";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { Box, Heading, Text } from "@chakra-ui/react";
import ButtonSecondary from "../UI/ButtonSecondary";
import ButtonTertiary from "../UI/ButtonTertiary";
import {
  ModalPopupActions,
  ModalSliceActions,
  invoiceDataActions,
} from "../../store/store";

function ModalPopup({ id }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const curTheme = useSelector((state) => state.theme.curTheme);

  const cancelButtonClickHandler = () => {
    dispatch(ModalPopupActions.setModalPopupStatus(false));
    dispatch(ModalSliceActions.setModalStatus(false));
  };

  const onClickDeleteHandler = () => {
    dispatch(ModalPopupActions.setModalPopupStatus(false));
    dispatch(ModalSliceActions.setModalStatus(false));
    dispatch(invoiceDataActions.deleteInvoice(id));
    history.replace("/");
  };

  return (
    <Box
      bgColor={`var(--theme-${curTheme}-secondaryBg)`}
      color="#fff"
      position="absolute"
      top="50%"
      left="50%"
      padding="2rem 3rem"
      width={{ base: "30rem", sm: "46rem" }}
      transform="translate(-50% ,-50%)"
      borderRadius="8px"
      zIndex="600"
    >
      <Heading color={`var(--theme-${curTheme}-textColorPrimary)`}>
        Confirm Deletion
      </Heading>
      <Text
        fontSize="1.2rem"
        fontWeight="medium"
        mt="2rem"
        mb="4rem"
        color={`var(--theme-${curTheme}-textColorSecondary)`}
      >
        Are you sure you want to delete invoice #XM9141? This action cannot be
        undone.
      </Text>
      <Box textAlign="right">
        <ButtonSecondary onClick={cancelButtonClickHandler}>
          Cancel
        </ButtonSecondary>
        <ButtonTertiary onClick={onClickDeleteHandler}>Delete</ButtonTertiary>
      </Box>
    </Box>
  );
}

export default ModalPopup;
