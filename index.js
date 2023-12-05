Stream = require("node-rtsp-stream");
stream = new Stream({
  name: "name",
  streamUrl: "rtsp://user:aqua23@smartaqua0868.iptime.org:52001/stream1",
  wsPort: 9999,
  ffmpegOptions: {
    // options ffmpeg flags
    "-stats": "", // an option with no neccessary value uses a blank string
    "-r": 30, // options with required values specify the value after the key
  },
});
