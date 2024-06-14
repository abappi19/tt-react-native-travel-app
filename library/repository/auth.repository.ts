import { AppTypes, ServerResponseTypes } from "@/types";
import { Utils } from "@/utils/utils";
import { useStoreFakeServerAuth } from "../store/fake-server.store";
import { TValidAuthRegisterFormSchema } from "@/validation/auth.validation";

const register = async ({
  data,
  fn,
}: {
  data: TValidAuthRegisterFormSchema;
  fn: (data: TValidAuthRegisterFormSchema) => any;
}): Promise<{
  data: ServerResponseTypes.TApiResponse<null>;
}> => {
  // const { register } = useStoreFakeServerAuth();
  // await Utils.sleep(100);
  const success = fn({ ...data, password: data.confirmPassword });

  if (success) {
    return {
      data: {
        nonce: -1,
        message: "success",
        status: 200,
        payload: null,
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

export type TLoginResponse = ServerResponseTypes.TApiResponse<null>;

const login = async <
  T extends {
    email: string;
    password: string;
  }
>({
  data: { email, password },
  fn,
}: {
  data: T;
  fn: (data: T) => TLoginResponse;
}): Promise<{
  data: TLoginResponse;
}> => {
  // await Utils.sleep(100);
  const userId = fn({ email, password } as any);

  if (userId) {
    return {
      data: {
        nonce: -1,
        message: "success",
        status: 200,
        payload: null,
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
  register,
  login,
};
