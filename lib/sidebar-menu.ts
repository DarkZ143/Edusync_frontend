import {
  HiOutlineHome,
  HiOutlineUsers,
  HiOutlineBell,
  HiOutlineClipboardDocumentList,
  HiOutlineCog6Tooth,
} from "react-icons/hi2";

export const sidebarMenu = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: HiOutlineHome,
  },
  {
    title: "Students",
    href: "/students",
    icon: HiOutlineUsers,
  },
  {
    title: "Notifications",
    href: "/notifications",
    icon: HiOutlineBell,
  },
  {
    title: "Activity Logs",
    href: "/activity",
    icon: HiOutlineClipboardDocumentList,
  },
  {
    title: "Settings",
    href: "/settings",
    icon: HiOutlineCog6Tooth,
  },
];
