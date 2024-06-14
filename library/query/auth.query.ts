import { useMutation } from "@tanstack/react-query";
import { AuthRepository, TLoginResponse } from "../repository/auth.repository";
import { AppTypes, ServerResponseTypes } from "@/types";
import {
  TValidAuthRegisterFormSchema,
  ValidAuthRegisterFormSchema,
} from "@/validation/auth.validation";

type TApiResponsetype = {
  data: ServerResponseTypes.TApiResponse<null>;
};
type TDataType = {
  email: string;
  password: string;
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
      data: TDataType;
      fn: (data: TDataType) => any;
    }
  >({
    mutationFn: AuthRepository.login,
  });

const useQueryAuthRegister = () =>
  useMutation<
    {
      data: ServerResponseTypes.TApiResponse<null>;
    },
    {
      response: {
        data: ServerResponseTypes.IError;
      };
    },
    TValidAuthRegisterFormSchema
  >({
    mutationFn: AuthRepository.register,
  });

export { useQueryAuthLogin, useQueryAuthRegister };
