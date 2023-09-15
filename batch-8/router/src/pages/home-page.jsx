import React, { useEffect, useRef, useState, use, useDebugValue } from "react";
import { Link, useNavigate } from "react-router-dom";
import auth from "../utils/auth";

export function createConnection(serverUrl, roomId) {
	// A real implementation would actually connect to the server
	return {
		connect() {
			console.log(
				'✅ Connecting to "' + roomId + '" room at ' + serverUrl + "..."
			);
		},
		disconnect() {
			console.log('❌ Disconnected from "' + roomId + '" room at ' + serverUrl);
		},
	};
}

function ChatRoom({ roomId }) {
	const [serverUrl, setServerUrl] = useState("https://localhost:1234");

	useEffect(() => {
		console.log(roomId);
		const connection = createConnection(serverUrl, roomId);
		connection.connect();

		return () => {
			connection.disconnect();
		};
	}, [roomId, serverUrl]);

	useDebugValue(roomId);

	return (
		<>
			<label>
				Server URL:{" "}
				<input
					value={serverUrl}
					onChange={(e) => setServerUrl(e.target.value)}
				/>
			</label>
			<h1>Welcome to the {roomId} room!</h1>
		</>
	);
}

export default function HomePage() {
	const [roomId, setRoomId] = useState("general");
	const [show, setShow] = useState(false);
	return (
		<>
			<label>
				Choose the chat room:{" "}
				<select value={roomId} onChange={(e) => setRoomId(e.target.value)}>
					<option value="general">general</option>
					<option value="travel">travel</option>
					<option value="music">music</option>
				</select>
			</label>
			<button onClick={() => setShow(!show)}>
				{show ? "Close chat" : "Open chat"}
			</button>
			{show && <hr />}
			{show && <ChatRoom roomId={roomId} />}
		</>
	);
}
