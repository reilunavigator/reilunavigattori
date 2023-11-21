import { QuestionNavbar } from "../QuestionNavbar.js";
import { Info } from "./components/Info.js";

export const Info13 = () => {
  return (
    <div className="infos">
      <QuestionNavbar />
      <Info
        intro={[
          "Kontekstoinnilla eli jutun asettamisella sopivaan asiayhteyteen voidaan rakentaa yhteistä ymmärrystä asiasta, jolloin väärinymmärrysten vaara vähenee.​​",
        ]}
        content={[
          "Millaiseen asiayhteyteen liität juttusi? Onko yleisön tulkinnallinen konteksti tiedossa? ​Voidaanko se ymmärtää väärin, jos asiayhteys jää epäselväksi?​​",
          "Reiluja vinkkejä kontekstointiin:​​​​​​​",
        ]}
        bulletpoints={[
          "Ota huomioon missä asiayhteydessä juttu julkaistaan.​​​",
          "Varmista, että jutun eri elementit kertovat samasta asiasta.​​",
          "Huomioi kenelle juttu on suunniteltu.​​",
          "Kuvaa jutun asiayhteys selkeästi ilman väärinymmärryksen vaaraa.​​​",
        ]}
        readmore={[
          {
            value: "Narratiivisten tekniikoiden käytöstä uutisartikkelissa.​​",
            navigate: "https://journal.fi/avain/article/view/74720",
          },
        ]}
        next={"study/16"}
      />
    </div>
  );
};
