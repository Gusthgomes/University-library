"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { toast } from "@/hooks/use-toast";
import { borrowBook } from "@/lib/actions/book";

interface Props {
    userId: string;
    bookId: string;
    borrowingEligibility: {
        isEligible: boolean;
        message: string;
    };
}

const BorrowBook = ({
    userId,
    bookId,
    borrowingEligibility: { isEligible, message },
}: Props) => {
    const router = useRouter();
    const [borrowing, setBorrowing] = useState(false);

    const handleBorrowBook = async () => {
        if (!isEligible) {
            toast({
                title: "Error",
                description: message,
                variant: "destructive",
            });
        }

        setBorrowing(true);

        try {
            const result = await borrowBook({ bookId, userId });

            if (result.success) {
                toast({
                    title: "Sucesso!",
                    description: "Livro emprestado com sucesso",
                });

                router.push("/");
            } else {
                toast({
                    title: "Error",
                    description: result.error,
                    variant: "destructive",
                });
            }
        } catch (error) {
            toast({
                title: "Error",
                description: "Um erro ocorreu ao emprestar o livro",
                variant: "destructive",
            });
        } finally {
            setBorrowing(false);
        }
    };

    return (
        <Button
            className="book-overview_btn"
            onClick={handleBorrowBook}
            disabled={borrowing}
        >
            <Image src="/icons/book.svg" alt="book" width={20} height={20} />
            <p className="font-bebas-neue text-xl text-dark-100">
                {borrowing ? "Emprestando ..." : "Emprestar livro"}
            </p>
        </Button>
    );
};
export default BorrowBook;