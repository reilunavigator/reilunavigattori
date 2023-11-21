import { Question } from "./components/Question.js";
import { QuestionNavbar } from "../QuestionNavbar.js";

export const Study8 = () => {
  return (
    <div className="questions">
      <QuestionNavbar />
      <Question
        title={
          "Aika etsiä lähteitä ja aineistoa. Miten haet tietoa kiistanalaisesta tai mielipiteitä jakavasta aiheesta?​"
        }
        options={[
          {
            value: "Käytän auktorisoituja ja virallisia lähteitä.",
            navigate: "info/9",
          },
          {
            value:
              "Käytän aihetta koskevia erilaisia tiedon ja tutkimuksen lähteitä.",
            navigate: "info/10",
          },
          {
            value: "Kysyn aiheesta heiltä, joita asia erityisesti koskettaa.",
            navigate: "info/11",
          },
        ]}
      />
    </div>
  );
};
