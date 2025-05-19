import { ContactsItem } from "./ContactsItem.tsx";
import Phone from "../../../assets/img/CallIcon.svg?react";
import Email from "../../../assets/img/EmailIcon.svg?react";
import Address from "../../../assets/img/AddressIcon.svg?react";
import { FC, SVGProps } from "react";
import styled from "styled-components";
import { useWindowDimensions } from "@/hooks/useWindowSize/useWindowWidth.tsx";

interface contactsProps {
  id?: number;
}

interface IContactItem {
  name: string;
  Icon?: FC<SVGProps<SVGSVGElement>>;
}

const contactItems: IContactItem[] = [
  {
    name: "8 (902) 729-87-91",
    Icon: Phone,
  },
  {
    name: "solarpanels@yandex.ru",
    Icon: Email,
  },
  {
    name: "Тамбовская об-ть, мкр-н Тамбовский, г.п. Новолядинский Поссовет, р.п. Новая Ляда, ул. Будённого д. 43, кв. 1",
    Icon: Address,
  },
];

const ContactsStyled = styled.div`
  font-family: Jost, sans-serif;
  display: flex;
  flex-direction: column;
  color: white;
  gap: 37px;
`;

export const Contacts: FC<contactsProps> = ({ id }) => {
  // @ts-ignore
  let isMobile = useWindowDimensions().width < 1150;

  return isMobile ? (
    <ContactsStyled>
      {id !== undefined && id >= 0 && id < contactItems.length ? (
        <ContactsItem key={id} name={contactItems[id].name} />
      ) : (
        <div>Контакт не найден</div>
      )}
    </ContactsStyled>
  ) : (
    <ContactsStyled>
      {contactItems.map((item, index) => (
        <ContactsItem key={index} {...item} />
      ))}
    </ContactsStyled>
  );
};
