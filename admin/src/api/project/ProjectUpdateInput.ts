import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ProjectUpdateInput = {
  description?: string | null;
  dueDate?: Date;
  name?: string;
  owner?: UserWhereUniqueInput | null;
  startDate?: Date;
};
