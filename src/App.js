import "./styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  ChannelDetails,
  NavBar,
  VideoDetails,
  SearchFeedback,
  Feed
} from "./components";
import { Box } from "@mui/material";

export default function App() {
  return (
    <BrowserRouter>
      <Box sx={{ backgroundColor: "#000" }}>
        <NavBar />
        <Routes>
          <Route path="/" element={<Feed />}></Route>
          <Route path="/video/:id" element={<VideoDetails />}></Route>
          <Route path="/channel/:id" element={<ChannelDetails />}></Route>
          <Route
            path="/search/:searchString"
            element={<SearchFeedback />}
          ></Route>
        </Routes>
      </Box>
    </BrowserRouter>
  );
}
