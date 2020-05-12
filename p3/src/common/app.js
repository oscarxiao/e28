import Api from "@/common/api.js";

export const config = {
  firebase: {
    apiKey: "AIzaSyBCir7UdgqdG4Z7yPww7MdYnyDFxWhnel4",
    projectId: "e28-speedlab-ox",
  },
};

export const api = new Api({
  apiKey: config.firebase.apiKey,
  projectId: config.firebase.projectId,
});
