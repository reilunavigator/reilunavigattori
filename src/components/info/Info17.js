import { QuestionNavbar } from "../QuestionNavbar.js";
import { Info } from "./components/Info.js";

export const Info17 = () => {
  return (
    <div className="infos">
      <QuestionNavbar />
      <Info
        intro={[
          "Aiheen seuranta ja keskustelu yleisön kanssa luovat reilua ja dialogista mediajulkisuutta. Uudet näkökulmat tai uudenlainen käsittelytapa saavat usein aikaan keskustelua ja vuorovaikutusta yleisön kanssa. Reilun keskustelun ei tarvitse merkitä samanmielisyyttä.​",
        ]}
        content={[
          "Onko sinun mahdollista käydä keskustelua yleisösi kanssa jutun julkaisun jälkeen? Miten suhtaudut palautteeseen? Voitko hyödyntää saamaasi palautetta? Mitä palaute sinulle merkitsee, ja mistä suunnasta sitä odotat eniten?​",
          "Reiluja vinkkejä seurantaan:​​",
        ]}
        bulletpoints={[
          "Hyödynnä jutusta saamasi palaute seuraavissa jutuissasi.​",
          "Seuraa aiheen ja siihen liittyvien tietojen muuttumista ajan kuluessa.​",
          "Rakenna luottamusta dialogisuudella yleisön kanssa.​​",
          "Tunnusta myös tekemäsi virheet tai epätarkkuudet itsellesi ja yleisöllesi.​​​",
        ]}
        readmore={[
          {
            value:
              "Kuinka yleisön kritiikkiin ja mediassa tehtyihin virheisiin voidaan suhtautua rakentavasti. (Äänitiedostossa kohta 29:40—32:25)​​",
            navigate:
              "https://www.betterconflictbulletin.org/p/isaac-saul-doing-journalism-thats",
          },
        ]}
        next={"info/23"}
      />
    </div>
  );
};
