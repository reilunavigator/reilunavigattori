import { QuestionNavbar } from "../QuestionNavbar.js";
import { Info } from "./components/Info.js";

export const Info18 = () => {
  return (
    <div className="infos">
      <QuestionNavbar />
      <Info
        intro={[
          "Ajan puute voi rajoittaa aiheen seurantaa ja keskustelua yleisön kanssa. Myös kriittinen palaute on hyödyllistä ja hyväksyttävää. Loukkaavaan ja vihamieliseen vuorovaikutukseen ei tarvitse osallistua.​​​​",
        ]}
        content={[
          "Onko sinulla riittävästi aikaa seurata aiheen kehittymistä? Haittaako pelko kritiikin tai häirinnän kohteeksi joutumisesta moniäänisyyden toteutumsita työssäsi?​",
          "Reiluja vinkkejä seurannan ja keskustelun mahdollistamiseen:​​",
        ]}
        bulletpoints={[
          "Seuraa aiheesta käytävää keskustelua verkossa siihen osallistumatta.​​",
          "Yleisön kanssa käytävien keskustelujen ansiosta on mahdollista luoda parempaa luottamusta yleisöön, mutta myös saada ideoita ja uusia näkökulmia jatkojutuille.​​​",
          "Jos joudut häirinnän kohteeksi, ole yhteydessä esihenkilöösi. Työnantaja on velvollinen antamaan sinulle apua.​​​​",
        ]}
        readmore={[
          {
            value: "Dialogisuudesta ja sen hyödyistä​",
            navigate: "https://yle.fi/aihe/artikkeli/2018/10/24/sami-koivisto-jutut-ovat-parempia-jos-toimittaja-mieltaa-ne-osaksi-dialogia",
          },
          {
            value: "Turvallisesta vuorovaikutuksesta​",
            navigate: "https://yle.fi/aihe/s/yleisradio/ylen-turvallisemman-vuorovaikutuksen-ohje",
          },
        ]}
        next={"info/23"}
      />
    </div>
  );
};
