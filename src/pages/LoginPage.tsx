import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { Link } from 'react-router';

type LoginForm = {
  email: string,
  password: string,
};

export default function LoginPage() {

  const { register, handleSubmit, formState: { errors }, control } = useForm<LoginForm>();

  const onSubmit: SubmitHandler<LoginForm> = ( data ) => {
    console.log( data );
  };


  return (
    <div className='w-[350px] h-auto rounded-2xl bg-white shadow-2xl shadow-black '  >

      <form
        onSubmit={ handleSubmit( onSubmit ) }
        className='flex flex-col justify-center items-center p-4'>

        <span
          className='mt-4 mb-4 font-bold text-xl'
        >
          Login
        </span>

        <InputText
          type='text'
          placeholder='Email'
          { ...register( 'email', {
            required: true,
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: 'Ingresa un correo valido'
            }
          } ) }
          className='w-full'
        />
        { errors.email && (
          <small className='text-red-500 w-full'>
            { errors.email.message }
          </small>
        ) }

        <Controller
          name='password'
          control={ control }
          rules={ {
            required: 'La contraseña es requerida',
            pattern: {
              value: /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
              message: 'Debe tener al menos 8 caracteres, mayúsculas, minúsculas y un número o símbolo.'
            }
          } }
          render={ ( { field, fieldState } ) => (
            <>
              <Password
                { ...field }
                value={ field.value || '' }
                placeholder='Password'
                className='mt-6 mb-2 w-full'
                inputClassName='w-full'

                // toggleMask
                feedback={ true }
              />
              { fieldState.error && (
                <small className='text-red-500 w-full mb-4'>
                  { fieldState.error.message }
                </small>
              ) }
            </>
          ) }
        />



        <Button
          label='Iniciar Sesion'
          className=' w-full'
          type='submit'
        />

        <span
          className='mt-4 text-sm'
        >
          ¿Ya tienes una cuenta?
        </span>

        <Link
          to='/auth/register'
          replace className=' text-blue-500 hover:text-blue-700 text-sm'
        >
          Haz click Aqui
        </Link>

      </form>
    </div>
  );
}
