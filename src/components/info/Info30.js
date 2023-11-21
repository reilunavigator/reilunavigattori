import { QuestionNavbar } from "../QuestionNavbar.js";
import { Info } from "./components/Info.js";

export const Info30 = () => {
  return (
    <div className="infos">
      <QuestionNavbar />
      <Info
        intro={[
          "Moniäänisyys on noussut tärkeäksi media-alan keskusteluissa. Moniäänisyyttä koskevat valinnat vaikuttavat journalistisen prosessin kaikissa vaiheissa. Vaikka moniäänisyyden tarpeellisuudesta vallitsee journalismissa yhteisymmärrys, sen soveltamisesta käytäntöön ollaan usein erimielisiä.​​",
        ]}
        content={[
          "Kenen ääntä pitäisi vahvistaa? Kenen ääni puuttuu? Voisiko kansalaisten ääntä saada paremmin esiin?​​​",
        ]}
        // bulletpoints={[
        //   "Ota huomioon missä asiayhteydessä juttu julkaistaan​",
        // ]}
        readmore={[
          {
            value: "Moniäänisyydestä ja sen mittaamisesta​",
            navigate: "https://trepo.tuni.fi/handle/10024/146461",
          },
          {
            value:
              "Neuvoja moninaisempaan ja inklusiivisempaan journalismiin​",
            navigate:
              "https://raremedia.fi/kenentietoo/",
          },
          {
            value:
              "Nuorten moninaisuudesta ja suhtautumisesta mediaan​",
            navigate:
              "https://uploads-ssl.webflow.com/64123799970e0ddca93c317a/646c621918b7a9d90e6c5956_Nuoret%20ja%20media%20-raportti%20FINAL.pdf",
          },
          {
            value:
              "Kuuntele Kenellä on oikeus puhua? (Kesto 20 min)​",
            navigate:
              "https://open.spotify.com/episode/6nD2lAfktqiP2b2dAVruGi",
          },
        ]}
      />
    </div>
  );
};
