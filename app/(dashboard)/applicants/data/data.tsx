import { CheckCircledIcon, CircleIcon, CrossCircledIcon } from "@radix-ui/react-icons";

import { type Program } from "@/types/program";

export const conditions = [
  {
    value: "0",
    label: "Red",
    icon: CrossCircledIcon,
  },
  {
    value: "1",
    label: "Green",
    icon: CheckCircledIcon,
  },
  {
    value: "2",
    label: "Yellow",
    icon: CircleIcon,
  },
];

export const acceptanceStatuses = [
  {
    value: "0",
    label: "Pending",
    icon: CircleIcon,
  },
  {
    value: "1",
    label: "Accepted",
    icon: CheckCircledIcon,
  },
  {
    value: "2",
    label: "Rejected",
    icon: CrossCircledIcon,
  },
];

export const genders = [
  {
    label: "Male",
    value: "0",
  },
  {
    label: "Female",
    value: "1",
  },
  {
    label: "Other",
    value: "3",
  },
];

export const statuses = [
  {
    label: "Fakir",
    value: "0",
  },
  {
    label: "Miskin",
    value: "1",
  },
  {
    label: "Amilin",
    value: "2",
  },
  {
    label: "Muallatul Kutub",
    value: "3",
  },
  {
    label: "Rikkab",
    value: "4",
  },
  {
    label: "Garimin",
    value: "5",
  },
  {
    label: "Fi Sabilillah",
    value: "6",
  },
];

export const programs: { label: string; value: string }[] =
  typeof window !== "undefined"
    ? JSON.parse(localStorage.getItem("programs") as string)?.map((program: Program) => ({
        value: program.id.toString(),
        label: program.name,
      }))
    : [];
