import useCurrentUserData from "@Zen/containers/User/use-current-user-data";
import UserProfile from "@Zen/containers/User/components/UserProfile/UserProfile";
import Container from "@Zen/components/Container/Container";

function ProfileView() {
  const { user } = useCurrentUserData();
  return (
    <Container title="Profile">
      <UserProfile user={user} />
    </Container>
  );
}

export default ProfileView;
