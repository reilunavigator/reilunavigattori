import { Question } from "./components/Question.js";
import { QuestionNavbar } from "../QuestionNavbar.js";

export const Study4 = () => {
  return (
    <div className="questions">
      <QuestionNavbar />
      <Question
        title={
          "Sinulle on ehdotettu jutun aihetta tai sinulla on idea jutun aiheesta, jonka tunnistat mielipiteitä jakavaksi ja tunteita herättäväksi.​ Miten toimit?​"
        }
        options={[
          { value: "Mielenkiinnolla otan haasteen vastaan.", navigate: "study/5" },
          { value: "En halua tehdä juttua polarisoivasta aiheesta.​", navigate: "study/19" },
        ]}
      />
    </div>
  );
};
