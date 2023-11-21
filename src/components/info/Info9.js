import { QuestionNavbar } from "../QuestionNavbar.js";
import { Info } from "./components/Info.js";

export const Info9 = () => {
  return (
    <div className="infos">
      <QuestionNavbar />
      <Info
        intro={[
          "Viranomaisten auktorisoimat tutkimuslaitokset ja instituutiot ovat monesti ensisijaisia lähteitä. Usein media suosii vakiintuneita asiantuntijalähteitä ja viranomaislausuntoja.​",
        ]}
        content={[
          "Voisiko lähdevalikoimaa laajentaa lähdekritiikkiä unohtamatta? Mitä lähdekritiikki merkitsee viranomaistiedon ja auktorisoitujen lähteiden tapauksessa? Ovatko asiantuntijat yksimielisiä vai onko aiheesta erilaisia näkemyksiä, joita pitäisi kuunnella?​",
          "Reiluja vinkkejä lähdevalintoihin:​",
        ]}
        bulletpoints={[
          "Monipuolista näkökulmia haastattelemalla harvemmin ääneen pääseviä asiantuntijoita.​",
          "Ole kriittinen ja varmista tiedot myös viranomaistiedon ja auktorisoitujen lähteiden osalta.​​",
          "Selvitä ovatko asiantuntijat yksimielisiä vai onko aiheesta erilaisia näkemyksiä, joita pitäisi kuunnella ja tuoda julkiseen keskusteluun.​",
        ]}
        readmore={[
          {
            value:
              "Kriittisyydestä sovittelujournalismin näkökulmasta",
            navigate: "https://sovittelujournalismi.fi/kasikirja/kriittisyys/",
          },
          {
            value:
              "Miten mediajulkisuus kietoutuu suomalaiseen vallankäyttöön",
            navigate: "https://trepo.tuni.fi/handle/10024/65414/",
          },
        ]}
        next={"study/12"}
      />
    </div>
  );
};
