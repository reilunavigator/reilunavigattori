import { QuestionNavbar } from "../QuestionNavbar.js";
import { Info } from "./components/Info.js";

export const Info6 = () => {
  return (
    <div className="infos">
      <QuestionNavbar />
      <Info
        intro={[
          "Moniäänisyys on noussut tärkeäksi media-alan keskusteluissa. Moniäänisyyttä koskevat valinnat vaikuttavat journalistisen prosessin kaikissa vaiheissa. Vaikka moniäänisyyden tarpeellisuudesta vallitsee yleensä yhteisymmärrys, sen soveltamisesta käytäntöön ollaan usein erimielisiä.​",
        ]}
        content={[
          "Kenen ääntä pitäisi vahvistaa? Kenen ääni puuttuu? Voisiko kansalaisten ääntä saada paremmin esiin? Voiko moniäänisyyttä olla liikaa? Onko tavoitteesi kuvata monimuotoista maailmaa totuudenmukaisemmin tai parantaa maailmaa nostamalla esiin aiheita tai näkökulmia?",
          "Vinkkejä moniäänisyyteen:​​​",
        ]}
        bulletpoints={[
          "Kuuntele ja osallista erilaisia näkökulmia, myös itsellesi vieraita tai epämukavia.​",
          "Osallista myös hiljaisia.​​",
          "Keskity siihen, että eri näkökulmat tulevat kuulluiksi ilman vastakkainasettelua tai väärässä olevien leimaamista.​​​",
        ]}
        readmore={[
          {
            value:
              "Moniäänisyydestä ja sen mittaamisesta​",
            navigate: "https://trepo.tuni.fi/handle/10024/146461",
          },
          {
            value:
              "Neuvoja moninaisempaan ja inklusiivisempaan journalismiin​​​​​",
            navigate: "https://raremedia.fi/kenentietoo/",
          },
        ]}
        next={"study/8"}
      />
    </div>
  );
};
