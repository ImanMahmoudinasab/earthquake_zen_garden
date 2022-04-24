import { Routes, Route } from "react-router-dom";
import HomeView from "@Zen/Views/HomeView/HomeView";
import DetailView from "@Zen/Views/DetailView/DetailView";
import ProfileView from "@Zen/Views/ProfileView/ProfileView";
import DefaultLayout from "@Zen/layouts/Default/DefaultLayout";
import DefaultTheme from "@Zen/themes/Default/DefaultTheme";

function Application() {
  return (
    <DefaultTheme>
      <DefaultLayout>
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="detail/:earthquakeId" element={<DetailView />} />
          <Route path="profile" element={<ProfileView />} />
        </Routes>
      </DefaultLayout>
    </DefaultTheme>
  );
}

export default Application;
