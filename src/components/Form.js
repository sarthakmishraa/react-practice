import { useForm } from "react-hook-form";
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

function Form() {
  const onSubmit = (data) => {
    console.log(data);
  }

  const schema = yup.object().shape({
    firstName: yup.string().required("Please enter first name"),
    lastName: yup.string().required("Please enter last name"),
    email: yup.string().email().required("Please enter email address"),
    password: yup.string().min(8).max(32).required("Please your password"),
    confirmPassword: yup.string().oneOf([yup.ref("password"), null], "Passwords do not match").required("Please confirm your password"),
  });

  const { register, handleSubmit, formState: {errors} } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <>
      <div className="bg-slate-200 py-5 px-5 mt-10">
        <h1 className="font-semibold text-2xl text-center">Form (useForm)</h1>
      </div>
      <div>
        <form className="grid justify-items-center mt-10" onSubmit={handleSubmit(onSubmit)}>
          <input type="text" className="rounded-md border-solid border-2 border-black px-2 py-1 mt-5" placeholder="Enter your first name" {...register("firstName")} />
          <p className="font-semibold text-red-700 text-xl">{ errors.firstName?.message }</p>
          
          <input type="text" className="rounded-md border-solid border-2 border-black px-2 py-1 mt-5" placeholder="Enter your last name" {...register("lastName")} />
          <p className="font-semibold text-red-700 text-xl">{ errors.lastName?.message }</p>
          
          <input type="text" className="rounded-md border-solid border-2 border-black px-2 py-1 mt-5" placeholder="Enter your email" {...register("email")} />
          <p className="font-semibold text-red-700 text-xl">{ errors.email?.message }</p>

          <input type="password" className="rounded-md border-solid border-2 border-black px-2 py-1 mt-5" placeholder="Enter your password" {...register("password")} />
          <p className="font-semibold text-red-700 text-xl">{ errors.password?.message }</p>

          <input type="password" className="rounded-md border-solid border-2 border-black px-2 py-1 mt-5" placeholder="Confirm your password" {...register("confirmPassword")} />
          <p className="font-semibold text-red-700 text-xl">{ errors.confirmPassword?.message }</p>

          <input type="submit" className="active:scale-75 transition duration-50 mt-5 font-bold text-white py-2 px-5 bg-sky-500 hover:bg-sky-800 text-2xl rounded-md shadow-xl" />
        </form>
      </div>
    </>
  );
}

export default Form;