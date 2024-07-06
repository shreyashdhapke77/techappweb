import {
  AccountCircle,
  Dashboard,
  LogoDev,
  Logout,
  ManageAccounts,
  People,
  ViewList,
} from "@mui/icons-material";

export const settingsMenu = {
  data: [
    {
      id: 1,
      label: "Profile",
      path: "/userProfile",
      icon: AccountCircle,
    },
    {
      id: 2,
      label: "Account",
      path: "/userAccount",
      icon: ManageAccounts,
    },
    {
      id: 3,
      label: "Dashboard",
      path: "/dashboard",
      icon: Dashboard,
    },
    {
      id: 4,
      label: "Blog",
      path: "/blog",
      icon: ViewList,
    },
    {
      id: 5,
      label: "Community",
      path: "/community",
      icon: People,
    },
    {
      id: 7,
      label: "Advertise With Us",
      path: "/advertise",
      icon: LogoDev,
    },
    {
      id: 7,
      label: "Logout",
      path: "/logout",
      icon: Logout,
    },
  ],
};
