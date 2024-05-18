"use client"

import React from "react";
import type {Selection} from "@nextui-org/react";

import {Accordion, AccordionItem} from "@nextui-org/accordion";

export default function App() {
  const [selectedKeys, setSelectedKeys] = React.useState<Selection>(new Set(["1"]));
  
  
  const answerone ="Soy de la provincia de las Talitas, departamento de Tafí Viejo provincia de Tucumán.";
  const answertwo ="No cuento con local, realizo todos mis pedidos de manera online.";
  const answerthree ="Realizo pedidos en los siguientes puntos de encuentro: \n Facultad de Educación Fisica UNT - Facultad de Filosofía y Letras ";

  return (
    <div className="mx-4 my-8 text-medium">
    <div className="text-center text-[16px] font-bold">Preguntas frecuentes</div>

    <Accordion
      selectedKeys={selectedKeys}
      onSelectionChange={setSelectedKeys}
    >
      <AccordionItem key="1" aria-label="Accordion 1" title="¿De donde soy?">
        {answerone}
      </AccordionItem>
      <AccordionItem key="2" aria-label="Accordion 2" title="¿Cuentas con local?">
        {answertwo}
      </AccordionItem>
      <AccordionItem key="3" aria-label="Accordion 3" title="¿Como me llegaría mi pedido?">
        {answerthree}
      </AccordionItem>
    </Accordion>
    </div>
  );
}
