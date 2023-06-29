import data from "../../data/tailwindSetup.json";
import SetupStep from "../../components/SetupStep";

function Tailwind() {
  return (
    <>
      <div>
        {data.map((element) => {
          return (
            <>
              <SetupStep
                step={element.step}
                description={element.description}
                link={element.link}
                linktext={element.linktext}
                file={element.file}
                language={element.language}
                code={element.code}
              />
            </>
          );
        })}
      </div>
    </>
  );
}
export default Tailwind;
