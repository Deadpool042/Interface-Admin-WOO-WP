import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { ArrowRightEndOnRectangleIcon } from "@heroicons/react/24/outline";
import Button from "./Button";
import { useLogout } from "utils/hooks/authHooks";

const LogoutButton = () => {
  const logoutMutation = useLogout();

  const router = useRouter();

  return (
    <Button onClick={() => logoutMutation.mutate()}>
      {" "}
      <ArrowRightEndOnRectangleIcon className="h-5 w-5" />
      Se déconnecter
    </Button>
  );
};

export default LogoutButton;
