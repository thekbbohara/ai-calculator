"use client";

import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { calculate } from "@/utils";
import { RefObject, useState, useEffect } from "react";

interface Ires {
  expr: string;
  answer: string;
  fontSize: number;
  coordinates: { x: number; y: number };
}

export default function RunDialog({
  canvasRef,
}: {
  canvasRef: RefObject<HTMLCanvasElement>;
}) {
  const [data, setData] = useState<Ires[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showDescription, setShowDescription] = useState(false);

  const handleButtonClick = async () => {
    setIsLoading(true);
    setShowDescription(false);
    setData(null);

    const answer = await calculate(canvasRef);
    if (answer != null) {
      const res = JSON.parse(answer.message);
      console.log(res);
      setTimeout(() => {
        setData(res);
        setIsLoading(false);
      }, 2000); // Delay to simulate processing time
    } else {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (isLoading) {
      const timer = setTimeout(() => {
        setShowDescription(true);
      }, 1000); // 1 second delay before showing the description

      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="destructive" onClick={handleButtonClick}>
          Run
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        {isLoading ? (
          <AlertDialogHeader>
            <AlertDialogTitle>Calculating...</AlertDialogTitle>
            {showDescription && (
              <AlertDialogDescription>
                <Skeleton className="h-4 w-[250px]" />
                <Skeleton className="h-4 w-[200px] mt-2" />
              </AlertDialogDescription>
            )}
          </AlertDialogHeader>
        ) : data ? (
          data.map((res: Ires, id: number) => (
            <AlertDialogHeader key={id}>
              <AlertDialogTitle>Expression: {res.expr}</AlertDialogTitle>
              <AlertDialogDescription>{res.answer}</AlertDialogDescription>
            </AlertDialogHeader>
          ))
        ) : (
          <AlertDialogHeader>
            <AlertDialogTitle>No data available</AlertDialogTitle>
            <AlertDialogDescription>Please try again.</AlertDialogDescription>
          </AlertDialogHeader>
        )}
        <AlertDialogFooter>
          <AlertDialogCancel>Close</AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
