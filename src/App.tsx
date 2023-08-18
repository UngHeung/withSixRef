import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalStyle } from "./styles/GlobalStyle";
import SignIn from "./pages/sign/SignIn";
import { Home } from "./pages/home/Home";
import { Together } from "./pages/together/Together";
import { Review } from "./pages/review/Review";
import { Chat } from "./pages/chat/Chat";

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/together" element={<Together />} />
          <Route path="/review" element={<Review />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
