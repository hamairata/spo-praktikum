import React, { useRef, useEffect, useState } from "react";
import Peer from "peerjs";
import axios from "axios";
import { makeStyles } from "@mui/styles";
import { Button } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  root: {},
  wrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
  },
  buttonwrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
  },
  gridContainer: {
    justifyContent: "left",
  },
  paper: {
    padding: "10px",
    border: "2px solid black",
    margin: "10px",
  },
  component: { paddingTop: 20 },
  button: { margin: "20px" },
}));

export default function BasicDatePicker() {
  const [peers, setPeers] = useState([]);
  const [id, setId] = useState();
  const [friendid, setFriendId] = useState();
  const [data, setData] = React.useState(() => {
    const stickyValue = window.localStorage.getItem("user");
    return stickyValue !== null ? JSON.parse(stickyValue) : {};
  });
  const [mediaStream, SetMediaStream] = useState();

  const classes = useStyles();
  const videoRef = useRef();
  const streamVideo = useRef();
  const kelompok = data.kelompok;
  const nama = data.nama;

  const url = "http://localhost:5000/api/poststream";
  const geturl = "http://localhost:5000/api/getstream";

  //const url = "https://ui-spo-backend.herokuapp.com/api/poststream";
  //const geturl = "https://ui-spo-backend.herokuapp.com/api/getstream";

  /**
   * RTCPeerConnection configuration
   */
  const configuration = {
    iceServers: [
      {
        urls: "turn:10.199.15.42:3478",
        credential: "tekfis1965",
        username: "user",
      },

      {
        urls: "stun:stun.l.google.com:19302",
      },
      // public turn server from https://gist.github.com/sagivo/3a4b2f2c7ac6e1b5267c2f1f59ac6c6b
      // set your own servers here
    ],
  };

  useEffect(() => {
    let peer;
    if (data.userrole === "Praktikan") {
      peer = new Peer({ config: configuration });
    } else {
      peer = new Peer({ config: configuration });
    }

    peer.on("open", (id) => {
      setId(id);
      setPeers(peer);
    });

    peer.on("call", (call) => {
      call.answer(mediaStream);
      call.on("stream", (remoteStream) => {
        streamVideo.srcObject = remoteStream;
      });
    });
    /* peer.on("call", (call) => {
      navigator.mediaDevices
        .getUserMedia({
          video: {
            width: { min: 854, ideal: 1280, max: 1280 },
            height: { min: 480, ideal: 720 },
            aspectRatio: 1.777777778,
            frameRate: { max: 30 },
          },
          audio: false,
        })
        .then(
          (stream) => {
            call.answer(stream); // Answer the call with an A/V stream.
            call.on("stream", (remoteStream) => {
              streamVideo.srcObject = remoteStream;
            });
          },
          (err) => {
            console.error("Failed to get local stream", err);
          }
        );
    });*/
  }, [mediaStream]);

  const handleDisconnect = () => {
    let tracks;
    let peer;
    data.userrole === "Praktikan"
      ? (tracks = streamVideo.current.srcObject.getTracks())
      : (tracks = videoRef.current.srcObject.getTracks());
    tracks.forEach((track) => track.stop());
    data.userrole === "Praktikan"
      ? (streamVideo.current.srcObject = "")
      : (videoRef.current.srcObject = "");
    console.log("before destroy", streamVideo.current.srcObject.getTracks());
    peers.destroy();
    console.log("after destroy", streamVideo.current.srcObject.getTracks());
    peer = new Peer();
    peer.on("open", (id) => {
      setId(id);
      setPeers(peer);
    });
  };

  const createEmptyAudioTrack = () => {
    const ctx = new AudioContext();
    const oscillator = ctx.createOscillator();
    const dst = oscillator.connect(ctx.createMediaStreamDestination());
    oscillator.start();
    const track = dst.stream.getAudioTracks()[0];
    return Object.assign(track, { enabled: false });
  };

  const createEmptyVideoTrack = ({ width, height }) => {
    const canvas = Object.assign(document.createElement("canvas"), {
      width,
      height,
    });
    canvas.getContext("2d").fillRect(0, 0, width, height);

    const stream = canvas.captureStream();
    const track = stream.getVideoTracks()[0];

    return Object.assign(track, { enabled: false });
  };

  const handleStream = async () => {
    try {
      const res = await axios.post(geturl, {
        kelompok,
      });
      const audioTrack = createEmptyAudioTrack();
      const videoTrack = createEmptyVideoTrack({
        width: 640,
        height: 480,
      });
      const mediaStream = new MediaStream([audioTrack, videoTrack]);
      const call = peers.call(res.data.linkstream, mediaStream);
      call.on("stream", (remoteStream) => {
        streamVideo.current.srcObject = remoteStream;
      });
    } catch (err) {
      console.log(err);
    }
  };

  const handlePoststream = async () => {
    const linkstream = id;
    try {
      const res = await axios.post(url, {
        linkstream,
        nama,
      });
    } catch (err) {
      console.log(err);
    }
  };

  const handleVideoCall = () => {
    navigator.mediaDevices
      .getUserMedia({
        video: {
          width: { min: 854, ideal: 1280, max: 1280 },
          height: { min: 480, ideal: 720 },
          aspectRatio: 1.777777778,
          frameRate: { max: 30 },
        },
        audio: false,
      })
      .then(
        (stream) => {
          SetMediaStream(stream);
          videoRef.current.srcObject = stream;
        },
        (err) => {
          console.error("Failed to get local stream", err);
        }
      );
  };

  const handleShareScreen = () => {
    navigator.mediaDevices
      .getDisplayMedia({
        video: true,
        audio: false,
      })
      .then(
        (stream) => {
          console.log("share", stream);
          SetMediaStream(stream);
          videoRef.current.srcObject = stream;
        },
        (err) => {
          console.error("Failed to get local stream", err);
        }
      );
  };

  return (
    <div className={classes.wrapper}>
      {data.userrole === "Praktikan" ? (
        <>
          <div>
            <Button onClick={handleStream}>Watch Stream</Button>
            <Button onClick={handleDisconnect}>Stop Stream</Button>
          </div>
          <br />

          <video
            ref={streamVideo}
            width="100%"
            height="auto"
            playsInline
            autoPlay
          />
        </>
      ) : (
        <>
          <div>
            <Button onClick={handleVideoCall}>Open Video</Button>
            <Button onClick={handleShareScreen}>Share Screen</Button>
            <Button onClick={handlePoststream}>Start Stream</Button>
            <Button onClick={handleDisconnect}>Stop Stream</Button>
          </div>
          <br />
          <video
            ref={videoRef}
            width="100%"
            height="auto"
            playsInline
            autoPlay
          />
        </>
      )}
    </div>
  );
}
