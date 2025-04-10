export const navItems = [
  {
    name: "Dashboard",
    icon: "/assets/icons/dashboard.svg",
    url: "/",
  },
  {
    name: "Documents",
    icon: "/assets/icons/documents.svg",
    url: "/documents",
  },
  {
    name: "Images",
    icon: "/assets/icons/images.svg",
    url: "/images",
  },
  {
    name: "Media",
    icon: "/assets/icons/video.svg",
    url: "/media",
  },
  {
    name: "Others",
    icon: "/assets/icons/others.svg",
    url: "/others",
  },
];

export const actionsDropdownItems = [
  {
    label: "Rename",
    icon: "/assets/icons/edit.svg",
    value: "rename",
  },
  {
    label: "Details",
    icon: "/assets/icons/info.svg",
    value: "details",
  },
  {
    label: "Share",
    icon: "/assets/icons/share.svg",
    value: "share",
  },
  {
    label: "Download",
    icon: "/assets/icons/download.svg",
    value: "download",
  },
  {
    label: "Delete",
    icon: "/assets/icons/delete.svg",
    value: "delete",
  },
];

export const sortTypes = [
  {
    label: "Date created (newest)",
    value: "$createdAt-desc",
  },
  {
    label: "Created Date (oldest)",
    value: "$createdAt-asc",
  },
  {
    label: "Name (A-Z)",
    value: "name-asc",
  },
  {
    label: "Name (Z-A)",
    value: "name-desc",
  },
  {
    label: "Size (Highest)",
    value: "size-desc",
  },
  {
    label: "Size (Lowest)",
    value: "size-asc",
  },
];

export const avatarPlaceholderUrl =
  "data:image/jpeg;base64,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";
export const MAX_FILE_SIZE = 50 * 1024 * 1024;
