import { useMutation } from "@tanstack/react-query";
import { AuthRepository, TLoginResponse } from "../repository/auth.repository";
import { AppTypes, ServerResponseTypes } from "@/types";

type TApiResponsetype = {
  data: ServerResponseTypes.TApiResponse<AppTypes.UserType>;
};

const useQueryAuthLogin = () =>
  useMutation<
    TApiResponsetype,
    {
      response: {
        data: ServerResponseTypes.IError;
      };
    },
    {
      email: string;
      password: string;
    }
  >({
    mutationFn: AuthRepository.login,
  });

// const useQueryAuthRegister = ({ onComplete }: { onComplete: () => void }) =>
//   useMutation<
//     {
//       data: ServerResponseTypes.TApiResponse<null>;
//     },
//     {
//       response: {
//         data: ServerResponseTypes.IError;
//       };
//     },
//     {
//       data: TValidAuthRegisterFormSchema;
//       fn: (data: TValidAuthRegisterFormSchema) => any;
//     }
//   >({
//     mutationFn: AuthRepository.register,
//   });

export {
  useQueryAuthLogin,
  // useQueryAuthRegister
};
