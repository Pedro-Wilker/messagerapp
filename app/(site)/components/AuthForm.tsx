'use client';
import { useCallback, useState } from "react";
import {FieldValues,SubmitHandler,useForm} from "react-hook-form";
import  Input  from "@/app/components/inputs/input";
import  Button from "../../components/Button";

type Variant = 'LOGIN' | 'REGISTER';

const AuthForm = () => {
    const [variant, setVariant] = useState<Variant>('LOGIN');
    const [isLoading, setisLoading] = useState(false);

    const toggleVariant = useCallback(() => {
        if(variant === 'LOGIN') {
            setVariant('REGISTER');
        }else{
            setVariant('LOGIN');
        }
    }, [variant]);

    const {
        register,
        handleSubmit,
        formState:{
            errors
        }
    } = useForm<FieldValues>({
        defaultValues: {
            name: '',
            email: '',
            password: '',
        }
    });

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setisLoading(true);


        if(variant === 'REGISTER'){
            //axios register
        }

        if(variant === 'LOGIN'){
            //NextAuth SignIn
        }
    }

    const socialAction = (action: string) => {
        setisLoading(true);

        //NextAuth social sign in
    }


    return (
        <div
            className="
                mt-8
                sm:mx-auto
                sm:w-full
                sm:max-w-md    
            "
        >
            <div
                className="
                    bg-white
                    px-4
                    px-8
                    shadow
                    sm:rounded-lg
                    sm:px-10
                "   
            >
                <form
                    className="space-y-6"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    {variant === 'REGISTER' && (
                        <Input 
                        id="name"
                        label="Name"
                        register={register}
                        errors={errors}/>
                    )}

                    <Input 
                    id="email"
                    label="Email Address"
                    type="email"
                    register={register}
                    errors={errors}/>

                    <Input 
                    id="password"
                    label="Password"
                    type="password"
                    register={register}
                    errors={errors}/>

                    <div>
                    <Button
                        disabled={isLoading}
                        fullWidth
                        type="submit"
                    >
                        {variant === 'LOGIN' ? 'Sing in': 'Register'}
                    </Button>
                    </div>
                </form>

                <div className="mt-6">
                    <div className="realtive">
                        <div className="
                            absolute
                            inset-0
                            flex
                            items-center
                        ">
                        <div className="
                                w-full 
                                border-t 
                                border-gray-300"
                        />
                        </div>
                        <div className="
                            relative 
                            flex 
                            justify-center 
                            text-sm
                        ">
                                <span className="bg-white px-2 text-gray-500">
                                        Or Continue with
                                </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AuthForm;