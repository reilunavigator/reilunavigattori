import { QuestionNavbar } from "../QuestionNavbar.js";
import { Info } from "./components/Info.js";

export const Info14 = () => {
  return (
    <div className="infos">
      <QuestionNavbar />
      <Info
        intro={[
          "Kaikki narratiiviset elementit eli kerronnan keinot, kuten kuvat, äänet ja sanavalinnat muodostavat tulkintakehyksiä. Viestinnässä voidaan tiedostaen tai tiedostamatta valita tulkintakehys asialle, jolloin se näyttäytyy tietynlaiselta. Etusijalle asetettu merkitys ja kehystäminen vaikuttavat yleisön tulkintaan ja mielipiteisiin asiasta.​",
        ]}
        content={[
          "Voitko välttää mustavalkoisia asetelmia kerronnassasi? Onko jutussa mahdollista tuoda esiin ihmisten moniuloitteisuus ja valtavirrasta poikkeavat näkemykset?​​",
          "Reiluja vinkkejä kerronnan keinojen käyttöön:​​​​​​​​",
        ]}
        bulletpoints={[
          "Tunnista tulkintakehyksesi ja sen vaikutus kerrontaasi.​​​",
          "Harjoita erityistä herkkyyttä, ettei leimaavia, loukkaavia tai syrjäyttäviä termejä esiinny jutussasi.​​​",
          "Varo agendajournalismia eli yleisön mahdollista tulkintaa tietyn asian ajamisesta.​​",
          "Varo tunteiden ja faktojen sekaantumista kerronnassa.​​​​",
        ]}
        readmore={[
          {
            value: "Tunteita herättävän jutun eettisyydestä​​",
            navigate: "https://journalisti.fi/nakokulmat/2022/04/yksiloiden-selviytymiskertomukset-ovat-arveluttavaa-journalismia-kirjoittaa-dosentti-maria-lassila-merisalo/",
          },
          {
            value: "Kerronnasta sovittelujournalismin​",
            navigate: "https://sovittelujournalismi.fi/kasikirja/kerronta/",
          },
        ]}
        next={"study/16"}
      />
    </div>
  );
};
