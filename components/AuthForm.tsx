"use client";

import React from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { DefaultValues, FieldValues, SubmitHandler, useForm, UseFormReturn } from "react-hook-form"
import { z, ZodType } from 'zod';

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import Link from 'next/link';

interface Props<T extends FieldValues> {
    schema: ZodType<T>;
    defaultValues: T;
    onSubmit: (data: T) => Promise<{ success: boolean, error?: string }>
    type: 'SIGN_IN' | 'SIGN_UP'
}


const AuthForm = <T extends FieldValues>({ type, schema, defaultValues, onSubmit }: Props<T>) => {

    const isSignIn = type === 'SIGN_IN'

    const form: UseFormReturn<T> = useForm({
        resolver: zodResolver(schema),
        defaultValues: defaultValues as DefaultValues<T>,
    })

    const handleSubmit: SubmitHandler<T> = async (data) => {

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
                    <FormField
                        control={form.control}
                        name="username"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Username</FormLabel>
                                <FormControl>
                                    <Input placeholder="shadcn" {...field} />
                                </FormControl>
                                <FormDescription>
                                    This is your public display name.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit">Submit</Button>
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
