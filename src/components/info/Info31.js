import { QuestionNavbar } from "../QuestionNavbar.js";
import { Info } from "./components/Info.js";

export const Info31 = () => {
  return (
    <div className="infos">
      <QuestionNavbar />
      <Info
        intro={[
          "Häirintä ja uhkailu voivat aiheuttaa pelkoa ja itsesensuuria sekä haitata moniäänisyyden toteutumista. Kritiikki on hyväksyttävää ja usein toivottavaa - henkilökohtaiseen loukkaamiseen pyrkivä häirintä ei. Suomen rikoslaki suojaa kunnianloukkaukselta, uhkaukselta ja kiihottamiselta kansanryhmiä kohtaan kaikkia kansalaisia.​",
        ]}
        content={[
          "Haittaako pelko häirinnän kohteeksi joutumisesta moniäänisyyden toteutumista työssäsi?​",
        ]}
        // bulletpoints={[
        //   "Ota huomioon missä asiayhteydessä juttu julkaistaan​",
        // ]}
        readmore={[
          {
            value:
              "Ylen turvallisemman vuorovaikutuksen ohje​",
            navigate: "https://yle.fi/aihe/s/yleisradio/ylen-turvallisemman-vuorovaikutuksen-ohje",
          },
          {
            value:
              "Journalistin verkkovihaopas​",
            navigate: "https://www.jokes-saatio.fi/journalistin-verkkovihaopas/",
          },
          {
            value:
              "Vihapuhetyökalupakki​",
            navigate: "https://www.suomenpen.fi/en/vihapuhetyokalupakki/",
          },
          {
            value:
              "Ilmari Hiltusen väitöstutkimus toimittajiin kohdistuvasta ulkoisista vaikuttamisen keinoista​",
            navigate: "https://trepo.tuni.fi/handle/10024/141075",
          },
          {
            value:
              "Haastattelu Ilmari Hiltusen väitöskirjasta​",
            navigate: "https://www.tuni.fi/fi/ajankohtaista/ilmari-hiltunen-vihamieliset-yleisot-tuovat-uudenlaisia-uhkia-suomalaisten",
          },
          {
            value:
              "Tutkimus verkkovihan tuottamisesta ja levittämisestä",
            navigate: "https://julkaisut.valtioneuvosto.fi/handle/10024/164244",
          },
          {
            value:
              "Vihapuheesta ja sen merkityksestä yhteiskunnalliselle päätöksenteolle",
            navigate: "https://julkaisut.valtioneuvosto.fi/handle/10024/161812",
          },
        ]}
      />
    </div>
  );
};
