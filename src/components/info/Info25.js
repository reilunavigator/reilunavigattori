import { QuestionNavbar } from "../QuestionNavbar.js";
import { Info } from "./components/Info.js";

export const Info25 = () => {
  return (
    <div className="infos">
      <QuestionNavbar />
      <Info
        intro={[
          "Journalistisen median yhteiskunnallisiksi tehtäviksi on perinteisesti nimetty vallankäytön valvominen ja demokraattisen keskustelun ylläpitäminen. Useimmiten rooli asettuu liiketoiminnan ja yhteiskunnallisen toiminnan välimaastoon. Julkisen palvelun median tehtävät on määritelty laissa, jonka lisäksi toimintaa ohjaavat säädökset, toimintaperiaatteet ja ohjeistukset. Julkisen sanan neuvoston mukaan hyvä journalistinen tapa perustuu jokaisen oikeuteen vastaanottaa tietoja ja mielipiteitä (JSN 2023).​​​​​",
        ]}
        content={[
          "Miten määrittelet oman roolisi toimittajana? Oikean tiedon välittäjä? Raportoija? Kansalaisten valistaja? Vallan vahtikoira? Yhteiskunnallinen vaikuttaja? Heikkojen puolustaja? Polarisaation purkaja? Moniäänisen keskustelun rakentaja?​",
        ]}
        // bulletpoints={[
        //   "Kun lähdet tekemään juttua polarisoivasta aiheesta, on tärkeää pyytää esimieheltä riittävästi aikaa jutun suunnitteluun ja toteuttamiseen.​",
        // ]}
        readmore={[
          {
            value:
              "Suomalaisjournalistien ammattikuvasta​",
            navigate: "https://jyx.jyu.fi/handle/123456789/84969",
          },
          {
            value: "Suomalaisen journalistin itseymmärryksestä muutoksen keskellä",
            navigate: "https://journal.fi/mediaviestinta/article/view/61434/22978?acceptCookies=1",
          },
        ]}
      />
    </div>
  );
};
