import { Question } from "./components/Question.js";
import { QuestionNavbar } from "../QuestionNavbar.js";

export const Study12 = () => {
  return (
    <div className="questions">
      <QuestionNavbar />
      <Question
        title={
          "Jutun teko etenee ja on aika saattaa kerätty materiaali lopulliseen muotoonsa.\nMiten käsittelet ja kehystät materiaalin valmiiksi jutuksi?​​"
        }
        options={[
          { value: "Kontekstoimalla jutun harkitusti.​​", navigate: "info/13" },
          {
            value: "Käyttämällä vastuullisesti kerronnan keinoja.​​​​",
            navigate: "info/14",
          },
          {
            value: "Tarkistamalla tiedot hyvin.​​​​​",
            navigate: "info/15",
          },
        ]}
      />
    </div>
  );
};
