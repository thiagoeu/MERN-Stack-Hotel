import React from "react";

const Item = () => {
  return (
    <a href="" className="flex flex-col gap-4 rounded-2xl p-4">
      <img
        src="https://a0.muscache.com/im/pictures/miso/Hosting-781723465280054598/original/877213d6-12b5-4556-9f9b-3236c185dc32.jpeg?im_w=960"
        alt="hotel picture"
        className="aspect-square rounded-2xl object-cover"
      />
      <div className="flex flex-col gap-2">
        <h3 className="text-xl font-semibold">Campina Grande, Paraiba</h3>
        <p className="truncate text-gray-600">
          Studio com decoração aconchegante pensado para curtas ou longas
          estadias. Perfeito para casais, pessoas viajando sozinhas a
          lazer/trabalho ou famílias com um filho. Estrutura para até 3 pessoas,
          com cama de casal e cama auxiliar, que acomoda confortávelmente uma
          criança ou adulto com até 75 kg. Em Região centralizada de fácil
          acesso aos principais pontos turísticos de João Pessoa o Apê fica a
          cerca 1 km do mar em rua tranquila e silenciosa. Possuímos
          estacionamento privativo e coberto no prédio
        </p>
      </div>
      <p>
        <span className="font-semibold">R$ 500,00</span> por noite
      </p>
    </a>
  );
};

export default Item;
