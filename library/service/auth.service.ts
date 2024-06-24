import {
  TValidAuthLoginFormSchema,
  ValidAuthLoginFormSchema,
} from "@/validation/auth.validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  useQueryAuthLogin,
  // useQueryAuthRegister
} from "../query/auth.query";
import { AppTypes, ServerResponseTypes } from "@/types";
// import { useStoreFakeServerAuth } from "../store/xfake-server.store";
// const useServiceAuthRegister = () => {
//   // const { register } = useStoreFakeServerAuth();

//   const hookForm = useForm<TValidAuthRegisterFormSchema>({
//     resolver: zodResolver(ValidAuthRegisterFormSchema),
//     defaultValues: {
//       name: "",
//       email: "",
//       newPassword: "",
//       confirmPassword: "",
//     },
//   });

//   const { mutate, isLoading } = useQueryAuthRegister({
//     onComplete: () => {
//       console.log("complete queryAuthRegister");
//     },
//   });

//   const onSubmit = hookForm.handleSubmit((data) => {
//     mutate(data);
//   });

//   return { hookForm, onSubmit, isLoading };
// };

const useServiceAuthLogin = ({
  onComplete,
}: {
  onComplete: (
    data: ServerResponseTypes.TApiResponse<AppTypes.UserType>
  ) => void;
}) => {
  const hookForm = useForm<TValidAuthLoginFormSchema>({
    resolver: zodResolver(ValidAuthLoginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { mutate, isLoading } = useQueryAuthLogin();

  const onSubmit = hookForm.handleSubmit(({ email, password }) => {
    mutate(
      {
        email,
        password,
      },
      {
        onSuccess(response) {
          // console.log("response is: ", response);

          if (typeof onComplete === "function") onComplete(response.data);
        },
      }
    );
  });

  return { hookForm, onSubmit, isLoading };
};

export {
  useServiceAuthLogin,
  // useServiceAuthRegister
};
