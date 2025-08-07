---
comments: true
layout: post
title: WebSocket
---
# A Beginner's Guide to WebSocket with Python Demo

WebSocket is a powerful protocol for enabling **real-time, full-duplex communication** between client and server. In this guide, you'll learn the essentials of WebSockets and how to build a minimal echo server and client using Python.

---

## What is WebSocket?

* **WebSocket** is a protocol for opening a persistent, low-latency, two-way communication channel between the client (often a browser) and a server.
* It starts as a normal HTTP connection, then upgrades to a WebSocket connection via a special handshake.
* After the handshake, **either side can send data at any time**—unlike HTTP, which is strictly request/response.

### Typical Use Cases

* Chat applications
* Real-time notifications
* Multiplayer games
* Collaborative tools (e.g., Google Docs live editing)
* Live dashboards

---

## How WebSocket Works (At a Glance)

1. **Handshake**: Begins as HTTP; client asks to “upgrade” the connection to WebSocket.
2. **Persistent Connection**: After a successful handshake, the TCP connection stays open.
3. **Full-Duplex Communication**: Both client and server can send/receive messages independently at any time.
4. **Efficient**: No HTTP overhead after handshake—low latency and better suited for real-time use cases.

---

## Implementing WebSocket in Python

We'll use the [`websockets`](https://websockets.readthedocs.io/) library, which is async and easy to use.

### 1. Installation

```bash
pip install websockets
```

---

### 2. WebSocket Echo Server (Python)

Create a file named `server.py`:

```python
import asyncio
import websockets

async def handle_client(websocket, path):
    async for message in websocket:
        print(f"Received: {message}")
        await websocket.send(f"Echo: {message}")

async def main():
    async with websockets.serve(handle_client, "localhost", 8765):
        print("WebSocket server started at ws://localhost:8765")
        await asyncio.Future()  # run forever

if __name__ == "__main__":
    asyncio.run(main())
```

**Explanation:**

* The `handle_client` function is called for every new client connection.
* `websocket` is the communication channel; you can receive (`async for message in websocket`) and send (`await websocket.send(...)`) messages.
* `main()` sets up the server to listen on `localhost:8765`.

---

### 3. WebSocket Client (Python)

Create a file named `client.py`:

```python
import asyncio
import websockets

async def hello():
    uri = "ws://localhost:8765"
    async with websockets.connect(uri) as websocket:
        await websocket.send("Hello, WebSocket!")
        response = await websocket.recv()
        print(f"Response from server: {response}")

if __name__ == "__main__":
    asyncio.run(hello())
```

**How it works:**

* Connects to the local server.
* Sends a message: `"Hello, WebSocket!"`
* Receives the echoed message and prints it.

---

### 4. Running the Demo

1. **Start the server**:

   ```bash
   python server.py
   ```

2. **In a new terminal, run the client**:

   ```bash
   python client.py
   ```

3. **Output Example** (Client):

   ```
   Response from server: Echo: Hello, WebSocket!
   ```

---

## Troubleshooting Tips

* If you get `RuntimeError: no running event loop`, make sure you're using `asyncio.run()` (Python 3.8+).
* No Docker is needed for local testing; just run both scripts on your machine.
* If the server is running but the client cannot connect, check for firewall or port conflicts.

---

## Key Takeaways

* **WebSocket** is essential for real-time, interactive apps.
* **Python’s `websockets` library** makes it easy to build both server and client.
* You can expand this setup to broadcast messages, add authentication, or integrate with web frameworks (Flask, Django).

---

## References

* [websockets library docs](https://websockets.readthedocs.io/)
* [MDN: WebSocket API](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API)
* [freeCodeCamp: A Beginner's Guide to WebSockets](https://www.youtube.com/watch?v=8ARodQ4Wlf4)

---

Feel free to build on this foundation to add features like broadcasting, user authentication, or integrate with your web backend!
