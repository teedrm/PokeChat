// import { useEffect, useState } from "react";
// import io from 'socket.io-client';



// export default function Chat() {
//     useEffect(() => {
//         const socket = io()
//         return () => socket.disconnect();
//     }, [])
    

//     const sendMessage = () => {
//         //emit message using socket.io
//         // socket.emit("send message", newMessage);
//     };
//     return (
//         <div>
//             <input placeholder="message..." />
//             <button onClick={sendMessage}> Send Message </button>
//         </div>
//     )

// }