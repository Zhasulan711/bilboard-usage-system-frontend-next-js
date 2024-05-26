"use client";

import { Card, CardContent } from "@/components/ui/card";
import React, { useState, useEffect, useRef } from "react";

type CardInfo = {
  id: number;
  isClicked: boolean;
  expirationDate: string;
  cvv: string;
  cardHolderName: string;
  cardNumber: string;
};

export const CardVisa = () => {
  const [cards, setCards] = useState<CardInfo[]>([]);
  const selectedCardRef = useRef<string | null>(null);

  const fetchCards = async () => {
    try {
      const response = await fetch("/api/visaCards");
      if (!response.ok) throw new Error("Failed to fetch cards");
      let cardDetailsArray: CardInfo[] = await response.json();
  
      cardDetailsArray.sort((a, b) => a.id - b.id);
  
      if (!selectedCardRef.current && cardDetailsArray.length > 0) {
        // Установка первой карточки как выбранной, если ранее не было выбора
        selectedCardRef.current = cardDetailsArray[0].cardNumber;
      }
  
      const updatedCards = cardDetailsArray.map(card => ({
        ...card,
        isClicked: card.cardNumber === selectedCardRef.current
      }));
  
      setCards(updatedCards);
    } catch (error) {
      console.error("Failed to fetch card data:", error);
    }
  };
  
  useEffect(() => {
    fetchCards();
    const id = setInterval(fetchCards, 6000);
    return () => {
      clearInterval(id);
    };
  }, []);

  const handleDivClick = (cardNumber: string) => {
    selectedCardRef.current = cardNumber; // Обновление ссылки на выбранную карту
    setCards(
      cards.map((card) =>
        card.cardNumber === cardNumber
          ? { ...card, isClicked: true }
          : { ...card, isClicked: false }
      )
    );
  };

  return (
    <div className="flex flex-col space-y-[20px]">
      {cards.map((card: CardInfo) => (
        <Card
          className="w-[821px] bg-white dark:bg-[#0F1623] border-transparent pt-[16px] flex flex-row h-[175px] space-x-[20px] mt-[20px]"
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
          <div
            className={`w-6 h-6 rounded-full items-center flex justify-center cursor-pointer ${
              card.isClicked ? "bg-[#F99801] dark:bg-white" : "bg-gray-800"
            }`}
            onClick={() => handleDivClick(card.cardNumber)}
          >
            {" "}
            <div className="w-3 h-3 bg-white dark:bg-[#5578BB] rounded-full" />
          </div>
        </Card>
      ))}
    </div>
  );
};
