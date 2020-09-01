import { notification } from "antd";

export const NotificationType = {
  SUCCESS: "success",
  INFO: "info",
  WARNING: "warning",
  ERROR: "error"
};

export default (type, message, description) => {
  notification[type]({
    message,
    description,
    placement: "topRight"
  });
};
