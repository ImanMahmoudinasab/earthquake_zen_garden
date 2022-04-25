import { Routes, Route } from "react-router-dom";
import HomeView from "@Zen/Views/HomeView/HomeView";
import DetailView from "@Zen/Views/DetailView/DetailView";
import ProfileView from "@Zen/Views/ProfileView/ProfileView";
import DefaultLayout from "@Zen/layouts/Default/DefaultLayout";
import DefaultTheme from "@Zen/themes/Default/DefaultTheme";
import useSiteData from "@Zen/containers/Application/use-site-data";
import useCurrentUserData from "@Zen/containers/User/use-current-user-data";

function Application() {
  const { site } = useSiteData();
  const { user } = useCurrentUserData();

  return (
    <DefaultTheme>
      <DefaultLayout logo={site.logoImage} title={site.title} user={user}>
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
