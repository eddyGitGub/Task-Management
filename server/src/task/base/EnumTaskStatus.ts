import { registerEnumType } from "@nestjs/graphql";

export enum EnumTaskStatus {
  New = "New",
  Pending = "Pending",
  Ongoing = "Ongoing",
}

registerEnumType(EnumTaskStatus, {
  name: "EnumTaskStatus",
});
