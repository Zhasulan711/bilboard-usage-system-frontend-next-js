import { UserBalance } from "@/components/user-balance";

import { currentUser } from "@/lib/auth";

export const YourBudget = async () => {
  const user = await currentUser();
 
  return <UserBalance user={user} />;
};