import {
  TValidAuthRegisterFormSchema,
  ValidAuthRegisterFormSchema,
} from "@/validation/auth.validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

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

  const onSubmit = hookForm.handleSubmit((data) => {
    console.log("form submitted: ", data);
  });

  return { hookForm, onSubmit };
};

const useServiceAuthLogin = () => {
  const hookForm = useForm<TValidAuthRegisterFormSchema>({
    resolver: zodResolver(ValidAuthRegisterFormSchema),
    defaultValues: {
      name: "",
      email: "",
      newPassword: "",
      confirmPassword: "",
    },
  });

  const onSubmit = hookForm.handleSubmit((data) => {
    console.log("form submitted: ", data);
  });

  return { hookForm, onSubmit };
};

export {
  useServiceAuthRegister,
  useServiceAuthLogin,
};
