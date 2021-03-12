import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";

export type TaskWhereInput = {
  assignedTo?: UserWhereUniqueInput | null;
  createdAt?: Date;
  estimationDays?: number | null;
  id?: string;
  project?: ProjectWhereUniqueInput | null;
  startDate?: Date;
  status?: "New" | "Pending" | "Ongoing";
  title?: string;
  updatedAt?: Date;
};
