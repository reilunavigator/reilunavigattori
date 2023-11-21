import { QuestionNavbar } from "../QuestionNavbar.js";
import { Info } from "./components/Info.js";

export const Info22 = () => {
  return (
    <div className="infos">
      <QuestionNavbar />
      <Info
        intro={[
          "Voit tarvita enemmän aikaa polarisoivista tai kiistanalaisista aiheista tehtävien juttujen suunnitteluun ja toteuttamiseen.​",
        ]}
        content={[
          "Estääkö ajan puute aiheen käsittelyn? Voitko järjestää enemmän aikaa ja resursseja aiheeseen perehtymiseen?​​​",
          "Vinkkejä tilanteeseen:​​",
        ]}
        bulletpoints={[
          "Pyydä esimieheltä riittävästi aikaa hankalan aiheen suunnitteluun.​",
          "Perustele, esimerkiksi moniäänistä ja dialogista työskentelytapaa sillä, että dialogisella työskentelyllä ja ennakkoluuloja haastamalla voidaan saada tuttuunkin aiheeseen tuore näkökulma, osapuolille uusia syitä osallistua ja yleisölle kiinnostavaa sisältöä.​​",
          "Jos aikaa ei ole saatavilla, voit kuitenkin huomioida moniäänisyyden toteutumista työvaiheiden valinnoissa.​",
          "Työskentely- ja ajattelutapoja voi olla aluksi vaikea muuttaa, mutta jokainen pienikin askel on riittävä​",
          "Rekrytoikaa toimituksesta ryhmä, joka keskittyy toimituksen moniäänisyyteen.​​​",
        ]}
        readmore={[
          {
            value: "Sovittelujournalismin käsikirjan sovittelevan otteen vinkit kiireiseen arkeen​",
            navigate: "https://sovittelujournalismi.fi/kasikirja/kiire/",
          },
        ]}
        next={"info/23"}
      />
    </div>
  );
};
