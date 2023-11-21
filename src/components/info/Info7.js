import { QuestionNavbar } from "../QuestionNavbar.js";
import { Info } from "./components/Info.js";

export const Info7 = () => {
  return (
    <div className="infos">
      <QuestionNavbar />
      <Info
        intro={[
          "Mukaan ottavassa eli inklusiivisessa mediassa on kyse mahdollisuuksien luomisesta yhdenvertaiselle, toisia kunnioittavalle ja vastuulliselle mediaan osallistumiselle. Mediajulkisuuden inklusiivisuudella on tärkeä merkitys yhteiskunnallisen tasa-arvoisuuden, luottamuksen ja yhtenäisyyden säilyttämisessä. Jos media välittää vain virallista tai enemmistön kantaa, mahdollisesti osa kansalaisista kokee ulkopuolisuutta ja syrjäytymistä yhteiskunnasta.​​​",
        ]}
        content={[
          "Mitä mahdollisuuksia sinulla on tuoda esiin valtavirrasta eroavia näkemyksiä ja rakentaa inklusiivista mediajulkisuutta? Sietääkö toimitustyö epävarmuutta ja erilaisten näkemysten esittämistä inklusiivisuuden hengessä?​​",
          "Vinkkejä inklusiivisuuteen:​​",
        ]}
        bulletpoints={[
          "Kunnioita kaikkia ihmisiä erilaisine näkemyksineen ja anna sen välittyä jutussasi.​",
          "Ota mukaan ennen kuulumattomia ja vähemmistöjen näkökulmia.​​​",
          "Anna ihmisten kohdata toisensa tasa-arvoisesti ja ilmaista näkemyksensä turvallisesti.​​​",
        ]}
        readmore={[
          {
            value:
              "Puheenvuoro Kaikkien mediasta​",
            navigate: "https://mediakasvatus.fi/puheenvuoro/2022/06/kaikkien-media-kohti-inklusiivisempaa-mediakulttuuria-ja-mediakasvatusta/",
          },
        ]}
        next={"study/8"}
      />
    </div>
  );
};
