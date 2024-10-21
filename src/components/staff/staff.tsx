"use client";
import style from "./staff.module.scss";
import Image from "next/image";

type Tdata = {
  image: string;
  nome: string;
  cognome: string;
  descrizione: string;
  skills: string[];
  ruolo: string;
  cv?: string;
  eta: number;
};
function SingleStaff({ data }: { data: Tdata }) {
  return (
    <>
      <li>
        <div className={style.staff__image}>
          <Image src={data.image} alt={data.nome} layout="fill" />
        </div>
        <div className={style.staff__nome}>
          {data.nome + data.cognome}
          <span>{data.ruolo}</span>
        </div>
      </li>
    </>
  );
}

function Staff({ data }: { data: Tdata[] }) {
  return (
    <ul className={style.staff}>
      {data.map((item, index) => {
        return <SingleStaff key={index} data={item} />;
      })}
    </ul>
  );
}

export default Staff;
