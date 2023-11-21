import { QuestionNavbar } from "../QuestionNavbar.js";
import { Info } from "./components/Info.js";

export const Info21 = () => {
  return (
    <div className="infos">
      <QuestionNavbar />
      <Info
        intro={[
          "Moniäänisyys on noussut tärkeäksi media-alan keskusteluissa. Moniäänisyyttä koskevat valinnat vaikuttavat journalistisen prosessin kaikissa vaiheissa.​​",
        ]}
        content={[
          "Kenen ääntä pitäisi vahvistaa? Kenen ääni puuttuu? Voisiko kansalaisten ääntä saada paremmin esiin? Voiko moniäänisyyttä olla liikaa? Onko tavoitteesi kuvata monimuotoista maailmaa totuudenmukaisemmin tai parantaa maailmaa nostamalla esiin aiheita tai näkökulmia?​",
          "Vinkkejä moniäänisyyteen kriittisessä aiheessa:​​",
        ]}
        bulletpoints={[
          "Kiinnitä huomio ääripäiden sijasta hiljaiseen keskustaan ja osallista keskusteluun monenlaisia ääniä.​​​",
          "Keskity kärjistysten sijasta dialogiin, identiteettipuheen sijasta konkreettiseen toimintaan ja ongelmiin: Mikä on tärkeää keskellä oleville?​​",
          "Älä asetu muiden yläpuolelle, vaan tunnista oma roolisi. ”Ota paikkasi keskustasta”, kuuntele ja osallista, vaikka se olisi epämukavaa.​​​",
          "Älä keskity siihen, kuka on oikeassa ja kuka väärässä, vaan siihen, että eri näkökulmat tulevat kuulluksi.​​",
          "Pohdi voisiko toimitus perustaa ryhmän moniäänisyyden toteuttamiseen.​​​​",
        ]}
        readmore={[
          {
            value:
              "Moniäänisyydestä ja sen mittaamisesta​",
            navigate: "https://trepo.tuni.fi/handle/10024/146461",
          },
          {
            value:
              "Neuvoja moninaisempaan ja inklusiivisempaan journalismiin",
            navigate: "https://raremedia.fi/kenentietoo/",
          },
        ]}
        next={"info/23"}
      />
    </div>
  );
};
