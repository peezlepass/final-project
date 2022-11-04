import * as type from "./types";

export const openReg = () => {
  return {
    type: type.OPEN_REG,
  };
};

export const openLog = () => {
  return {
    type: type.OPEN_LOG,
  };
};

export const closeModal = () => {
  return {
    type: type.CLOSE_MODAL,
  };
};
