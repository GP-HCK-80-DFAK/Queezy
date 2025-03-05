import { io } from "socket.io-client";

const socket = io("http://localhost:3000", {
  auth: (cb) => {
    cb({ access_token: localStorage.getItem('access_token') })
  }
});
console.log(socket);

export default socket