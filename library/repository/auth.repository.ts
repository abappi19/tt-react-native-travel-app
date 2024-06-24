import users from "@/assets/data/users";
import { AppTypes, ServerResponseTypes } from "@/types";
import axios from "axios";

// const register = async ({
//   data,
//   fn,
// }: {
//   data: TValidAuthRegisterFormSchema;
// }): Promise<{
//   data: ServerResponseTypes.TApiResponse<null>;
// }> => {
//   await Utils.sleep(700);
//   const success = fn({ ...data });

//   if (success) {
//     return {
//       data: {
//         nonce: -1,
//         message: "success",
//         status: 200,
//         payload: null,
//       },
//     };
//   }

//   return {
//     data: {
//       message: "failed",
//       status: 401,
//     },
//   } as any;
// };

export type TLoginResponse = ServerResponseTypes.TApiResponse<AppTypes.UserType>;

const login = async (data: {
  email: string;
  password: string;
}): Promise<{
  data: TLoginResponse;
}> => {
  // await Utils.sleep(100);

  // const users = users;

  const user = users.find(
    (user) => user.email === data.email && user.password === data.password
  );

  // console.log("after axios in auth repository login fn: ", user);

  if (user) {
    return {
      data: {
        nonce: -1,
        message: "success",
        status: 200,
        payload: user,
      },
    };
  }

  return {
    data: {
      message: "failed",
      status: 401,
    },
  } as any;
};

export const AuthRepository = {
  // register,
  login,
};
