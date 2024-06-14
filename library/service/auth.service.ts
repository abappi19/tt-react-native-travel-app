import {
  TValidAuthRegisterFormSchema,
  ValidAuthRegisterFormSchema,
} from "@/validation/auth.validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useQueryAuthLogin, useQueryAuthRegister } from "../query/auth.query";
import { useStoreFakeServerAuth } from "../store/fake-server.store";

const useServiceAuthRegister = () => {
  const hookForm = useForm<TValidAuthRegisterFormSchema>({
    resolver: zodResolver(ValidAuthRegisterFormSchema),
    defaultValues: {
      name: "",
      email: "",
      newPassword: "",
      confirmPassword: "",
    },
  });

  const { mutate, isLoading } = useQueryAuthRegister();

  const onSubmit = hookForm.handleSubmit((data) => {
    mutate(data);
  });

  return { hookForm, onSubmit, isLoading };
};

const useServiceAuthLogin = () => {
  const { login } = useStoreFakeServerAuth();
  const hookForm = useForm<TValidAuthRegisterFormSchema>({
    resolver: zodResolver(ValidAuthRegisterFormSchema),
    defaultValues: {
      name: "",
      email: "",
      newPassword: "",
      confirmPassword: "",
    },
  });

  const { mutate, isLoading } = useQueryAuthLogin();

  const onSubmit = hookForm.handleSubmit(({ email, confirmPassword }) => {
    mutate({
      data: {
        email,
        password: confirmPassword,
      },
      fn: login,
    });
  });

  return { hookForm, onSubmit, isLoading };
};

export { useServiceAuthLogin, useServiceAuthRegister };
