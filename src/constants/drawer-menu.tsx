import {
  Feed,
  HandshakeTwoTone,
  HomeRepairService,
  PermPhoneMsg,
  StarPurple500,
} from "@mui/icons-material";

export const drawerMenu = {
  menuOne: [
    {
      text: "Find a worker",
      icon: HandshakeTwoTone,
      path: "/findWorker",
    },
    {
      text: "Become a worker",
      icon: HomeRepairService,
      path: "/becomeWorker",
    },
  ],
  menuTwo: [
    {
      text: "About Us",
      icon: Feed,
      path: "/about",
    },
    {
      text: "Contact Us",
      icon: PermPhoneMsg,
      path: "/contactUs",
    },
    {
      text: "Rate Us",
      icon: StarPurple500,
      path: "/rateUs",
    },
  ],
  menuThree: [
    {
      text: "Terms & Conditions",
      icon: Feed,
      path: "/termsCondition",
    },
  ],
};
