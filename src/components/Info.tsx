import { SectionLabel } from "./SectionLabel";
import { createSignal } from "solid-js";


export function Info() {
  const [emailText, setEmailText] = createSignal(<><span aria-hidden="true">??? </span>russell@macro.com</>);
  const [dateText, setDateText] = createSignal(<>Friday Febuary 27 7pm - 11pm</>);

  function copyDate() {
    setDateText(<>·····················copied!</>);
    navigator.clipboard.writeText("Friday Febuary 27 7pm - 11pm");
    setTimeout(() => {setDateText(<>Friday Febuary 27 7pm - 11pm</>)}, 500);
  }

  function copyEmail() {
    setEmailText(<>··············copied!</>);
    navigator.clipboard.writeText("russell@macro.com");
    setTimeout(() => {setEmailText(<><span aria-hidden="true">??? </span>russell@macro.com</>)}, 500);
  }

  return (
    <>
      <style>{`
        button{
          transition: color var(--transition);
          background-color: unset;
          color: var(--c4);
          cursor: pointer;
          outline: none;
          border: none;
          padding: 0;
        }
        @media(hover){
          button:hover{
            transition: none;
            color: var(--a0);
          }
        }
      `}
      </style>
      <div style="user-select: none;">
        <SectionLabel text="Info" />

        <a href="maps:q=122+Central+Ave+Brooklyn+New+York">122 Central Ave, Brooklyn, NYC</a>

        <button
          aria-label="copy date"
          onClick={copyDate}
        >
          {dateText()}
        </button>

        <button
          onClick={copyEmail}
          aria-label="copy email"
          tabindex="0"
        >
          {emailText()}
        </button>
      </div>
    </>
  );
}
