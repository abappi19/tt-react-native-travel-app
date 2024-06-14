import * as z from "zod";

const ValidAuthRegisterFormSchema = z
  .object({
    name: z.string().min(2, "Name is required"),
    email: z.string().email("Email is required"),
    newPassword: z
      .string()
      .min(8)
      .regex(
        /^.*(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()' "]).*$/gs,
        "Password must have at least one uppercase letter, one lowercase letter, one number, and one special character"
      ),
    confirmPassword: z.string(),
  })
  .refine(
    (state) => {
      return state.newPassword === state.confirmPassword;
    },
    {
      path: ["confirmPassword"],
      message: "Password did't matched",
    }
  );

type TValidAuthRegisterFormSchema = z.infer<typeof ValidAuthRegisterFormSchema>;

export { TValidAuthRegisterFormSchema, ValidAuthRegisterFormSchema };
