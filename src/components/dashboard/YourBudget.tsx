import { UserBalance } from "@/components/user-balance";
import { getUserById } from "@/data/user";
import { currentUser } from "@/lib/auth";

export const YourBudget = async () => {
  const user = await currentUser();

  if (!user) {
    console.error("Unauthorized: No current user found.");
    return {
      error: "Unauthorized",
    };
  }

  const dbUser = await getUserById(user.id as string);

  if (!dbUser) {
    console.error("Unauthorized: No user found in database.");
    return {
      error: "Unauthorized",
    };
  }

  // useEffect(() => {
  //   fetch("https://your-api-url.com/endpoint")
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw new Error("Network response was not ok");
  //       }
  //       return response.json();
  //     })
  //     .then((data) => {
  //       setBudget({
  //         total: data.total,
  //         spentThisMonth: data.spentThisMonth,
  //         spentLastMonth: data.spentLastMonth,
  //       });
  //     })
  //     .catch((error) => {
  //       console.error(
  //         "There has been a problem with your fetch operation:",
  //         error
  //       );
  //     });
  // }, []);

  console.log("dbUser", dbUser);
  console.log("dbUser?.balance", dbUser?.balance);

  return <UserBalance user={dbUser} />;
};
