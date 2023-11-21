import { QuestionNavbar } from "../QuestionNavbar.js";
import { Info } from "./components/Info.js";

export const Info20 = () => {
  return (
    <div className="infos">
      <QuestionNavbar />
      <Info
        intro={[
          "Yleisön reaktio hankalissa aiheissa voi pelottaa. Uudet näkökulmat tai uudenlainen käsittelytapa saavat usein aikaan keskustelua. Reilun keskustelun ei tarvitse merkitä samanmielisyyttä. Kritiikki on hyväksyttävää ja usein toivottavaa - henkilökohtaiseen loukkaamiseen pyrkivä häirintä ei. Suomen rikoslaki suojaa kunnianloukkaukselta, uhkaukselta ja kiihottamiselta kansanryhmiä kohtaan kaikkia kansalaisia.​",
        ]}
        content={[
          "Haittaako pelko häirinnän kohteeksi joutumisesta moniäänisyyden toteutumista työssäsi? Oletko kokenut häirintää ja miten suhtaudut siihen? Saatko tarvittaessa tukea ja apua häirintätilanteissa?​​​",
          "Vinkkejä häirintätilanteisiin:​​",
        ]}
        bulletpoints={[
          "Jos joudut häirinnän kohteeksi, ole yhteydessä esihenkilöösi. Työnantaja on velvollinen antamaan sinulle apua.​",
          "Tallenna uhkaava tai loukkaava sisältö tai pyydä luotettavaa henkilöä käymään läpi vihamieliset sisällöt ja tallentamaan ne.​",
          "Jos huomaat kolleegasi joutuneen häirinnän kohteeksi, kysy voitko auttaa vihamielisten sisältöjen dokumentoinnissa ja näytä tukesi julkisesti, jos voit.​",
        ]}
        readmore={[
          {
            value:
              "Ohjeita häirintätilanteisiin​​",
            navigate:
              "https://yle.fi/aihe/s/yleisradio/ylen-turvallisemman-vuorovaikutuksen-ohje",
          },
        ]}
        next={"info/23"}
      />
    </div>
  );
};
