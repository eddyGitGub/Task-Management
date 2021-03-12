import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ProjectWhereInput = {
  createdAt?: Date;
  description?: string | null;
  dueDate?: Date;
  id?: string;
  name?: string;
  owner?: UserWhereUniqueInput | null;
  startDate?: Date;
  updatedAt?: Date;
};
