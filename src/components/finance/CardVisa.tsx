"use client";

import { Card, CardContent } from "@/components/ui/card";
import React, { useState, useEffect } from "react";

type Card = {
  isClicked: any;
  expirationDate: string;
  cvv: string;
  cardHolderName: string;
  cardNumber: string;
};

export const CardVisa = () => {
  const [cards, setCards] = useState<Card[]>([]);

  const handleDivClick = (cardNumber: string) => {
    setCards(cards.map(card => card.cardNumber === cardNumber ? { ...card, isClicked: true } : { ...card, isClicked: false }));
  };

  const handleStorageChange = () => {
    const storedCardData = localStorage.getItem("cardVisa");
    if (storedCardData) {
      try {
        const cardDetailsArray = JSON.parse(storedCardData);
        if (Array.isArray(cardDetailsArray)) {
          setCards(cardDetailsArray);
        } else {
          setCards([cardDetailsArray]); // Assuming it could be a single object
        }
      } catch (error) {
        console.error("Failed to parse card data:", error);
        setCards([]);
      }
    }
  };

  useEffect(() => {
    handleStorageChange();

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  return (
    <div className="flex flex-col space-y-[20px]">
      {cards.map((card: Card) => (
        <Card
          className="w-[821px] bg-white dark:bg-[#0F1623] border-transparent pt-[16px] flex flex-row h-[175px] space-x-[20px]"
          key={card.cardNumber}
        >
          <CardContent className="flex flex-row space-x-[20px] items-center">
            <figure>
              <img
                src="./images/visa card.png"
                alt="visa card"
                className="w-[230px] h-[140px]"
              />
            </figure>
            <div className="flex flex-row space-x-[40px]">
              <div className="flex flex-col space-y-[16px]">
                <div className="flex flex-col space-y-[10px]">
                  <h1 className="text-base font-normal text-[#D9D9D9] dark:text-[#575C65]">
                    Expiration date
                  </h1>
                  <h2 className="text-xl font-normal text-black dark:text-white w-[50px]">
                    {card.expirationDate}
                  </h2>
                </div>
                <div className="flex flex-col space-y-[10px]">
                  <h1 className="text-base font-normal text-[#D9D9D9] dark:text-[#575C65]">
                    CVV
                  </h1>
                  <h2 className="text-xl font-normal text-black dark:text-white">
                    {card.cvv}
                  </h2>
                </div>
              </div>

              <div className="flex flex-col space-y-[16px]">
                <div className="flex flex-col space-y-[10px]">
                  <h1 className="text-base font-normal text-[#D9D9D9] dark:text-[#575C65]">
                    Cardholder's name
                  </h1>
                  <h2 className="text-xl font-normal text-black dark:text-white w-[300px]">
                    {card.cardHolderName.toUpperCase()}
                  </h2>
                </div>
                <div className="flex flex-col space-y-[10px]">
                  <h1 className="text-base font-normal text-[#D9D9D9] dark:text-[#575C65]">
                    Card number
                  </h1>
                  <h2 className="text-xl font-normal text-black dark:text-white w-[300px]">
                    {card.cardNumber.replace(/\d{4}(?=.)/g, "$& ")}
                  </h2>
                </div>
              </div>
            </div>
          </CardContent>
          <div className={`w-6 h-6 rounded-full items-center flex justify-center ${card.isClicked ? 'bg-[#F99801] dark:bg-white' : 'bg-gray-800'}`}
          onClick={() => handleDivClick(card.cardNumber)}>
            {" "}
            <div className="w-3 h-3 bg-white dark:bg-[#5578BB] rounded-full"/>
          </div>
        </Card>
      ))}
    </div>
  );
};
