import { Logs, LogOut, User } from "lucide-react";

// import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link } from "react-router-dom";

type TProps = {
  firstName?: string;
  lastName?: string;
  handleLogout?: () => void;
};

export function DropdownMenuDemo({
  firstName,
  handleLogout,
}: TProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        {/* <Button variant="outline"> */}
        <span className="text-white">
          Welcome: {firstName}
        </span>
        {/* </Button> */}
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <User className="w-4 h-4 mr-2" />
            {/* <span>Profile</span> */}
            <Link to="/profile">Profile</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Logs className="w-4 h-4 mr-2" />
            {/* <span>Orders</span> */}
            <Link to="/profile/orders">Orders</Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <LogOut className="w-4 h-4 mr-2" />
          <span onClick={handleLogout}>Log out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
