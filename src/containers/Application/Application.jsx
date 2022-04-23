import { Routes, Route } from "react-router-dom";
import HomeView from "@Zen/Views/HomeView/HomeView";
import DetailView from "@Zen/Views/DetailView/DetailView";
import ProfileView from "@Zen/Views/ProfileView/ProfileView";

function Application() {
  return (
    <Routes>
      <Route path="/" element={<HomeView />} />
      <Route path="detail/:earthquakeId" element={<DetailView />} />
      <Route path="profile" element={<ProfileView />} />
    </Routes>
  );
}

export default Application;
