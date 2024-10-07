import { useAppSelector } from "@/store/hooks";
import { Heading } from "@/components/common";

const Account = () => {
  const accountInfo = useAppSelector((state) => state.auth.user);

  return (
    <>
      <Heading title="Account Info" />
      <ul>
        {/* <li>First Name: {accountInfo?.firstName}</li>
        <li>Last Name: {accountInfo?.lastName}</li>
        <li>Email: {accountInfo?.email}</li> */}

        <li>
          <strong>First Name:</strong> {accountInfo?.firstName}
        </li>

        <li>
          <strong>Last Name:</strong> {accountInfo?.lastName}
        </li>

        <li>
          <strong>Email:</strong> {accountInfo?.email}
        </li>
      </ul>
    </>
  );
};

export default Account;
