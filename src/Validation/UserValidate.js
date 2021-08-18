import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
    
    name: Yup.string().required(),
    phone: Yup.string().min(10).max(10).required(),
    email: Yup.string().email().required(),
    password: Yup.number().required(),
    
  });
