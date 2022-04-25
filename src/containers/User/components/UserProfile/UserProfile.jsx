import dayjs from "dayjs";
import DescriptionList from "@Zen/components/DescriptionList/DescriptionList";

const defaultFields = [
  { label: "First name", key: "firstName" },
  { label: "Last name", key: "lastName" },
  { label: "Phone", key: "phone" },
  { label: "Email", key: "email" },
  { label: "Bio", key: "bio" },
];

function Earthquake(props) {
  const { user, fields = defaultFields } = props;

  return (
    <div css={{ display: "flex" }}>
      <div>
        <img
          width="150"
          src={user.avatarImage}
          alt={user.firstName + " " + user.lastName}
        />
      </div>
      <div>
        <DescriptionList data={user} fields={fields} />
      </div>
    </div>
  );
}

export default Earthquake;
