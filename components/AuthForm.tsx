"use client";

import React from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { DefaultValues, FieldValues, Path, SubmitHandler, useForm, UseFormReturn } from "react-hook-form"
import { ZodType } from 'zod';

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { toast } from "@/hooks/use-toast";

import Link from 'next/link';
import { FIELD_NAMES, FIELD_TYPES } from '@/constants';
import ImageUpload from './ImageUpload';

import { useRouter } from "next/navigation";

interface Props<T extends FieldValues> {
    schema: ZodType<T>;
    defaultValues: T;
    onSubmit: (data: T) => Promise<{ success: boolean, error?: string }>
    type: 'SIGN_IN' | 'SIGN_UP'
}


const AuthForm = <T extends FieldValues>({ type, schema, defaultValues, onSubmit }: Props<T>) => {

    const isSignIn = type === 'SIGN_IN'

    const router = useRouter();

    const form: UseFormReturn<T> = useForm({
        resolver: zodResolver(schema),
        defaultValues: defaultValues as DefaultValues<T>,
    })

    const handleSubmit: SubmitHandler<T> = async (data) => {
        const result = await onSubmit(data);

        if (result.success) {
            toast({
                title: "Success",
                description: isSignIn
                    ? "Você logou com sucesso!"
                    : "Sua conta foi criada com sucesso!",
            });

            router.push("/");
        } else {
            toast({
                title: `Error ${isSignIn ? "signing in" : "signing up"}`,
                description: result.error ?? "Ops! Algo deu errado!",
                variant: "destructive",
            });
        }
    }
    return (
        <div className='flex flex-col gap-4'>
            <h1 className='text-2xl font-semibold text-white'>
                {isSignIn ? "Bem vindo de volta ao BookWise!" : "Crie sua conta no BookWise!"}
            </h1>
            <p className='text-light-100'>
                {isSignIn ? "Acesse a vasta coleção e fique por dentro de tudo!" : "Preencha todos os campos com dados válidos para ter acesso a biblioteca digital."}
            </p>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6 w-full">

                    {Object.keys(defaultValues).map((field) => (
                        <FormField
                            key={field}
                            control={form.control}
                            name={field as Path<T>}
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className='captalize'>{FIELD_NAMES[field.name as keyof typeof FIELD_NAMES]}</FormLabel>
                                    <FormControl>

                                        {field.name === 'universityCard' ? (
                                            <ImageUpload onFileChange={field.onChange} />
                                        ) : (
                                            <Input required type={
                                                FIELD_TYPES[field.name as keyof typeof FIELD_TYPES]
                                            }{...field}
                                                className='form-input' />
                                        )}

                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    ))}


                    <Button type="submit" className='form-btn'>
                        {isSignIn ? "Entrar" : "Cadastrar"}
                    </Button>
                </form>
            </Form>

            <p className='text-center text-base font-medium'>
                <Link href={isSignIn ? "/sign-up" : "/sign-in"} className='text-primary text-bold'>
                    {isSignIn ? "Novo por aqui ? Crie uma conta" : "Já tem uma conta? Faça login "}
                </Link>
            </p>
        </div>
    )
}

export default AuthForm
