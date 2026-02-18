import { SectionLabel } from "./SectionLabel";

export function Presentations() {
  return (
    <div
      style="
        white-space: nowrap;
        display: grid;
      "
    >
      <SectionLabel text="Presentations" />
      <a href="https://joachim.work/" target="_blank" class="row"><div>Joachim Pfefferkorn</div><hr/><div>Neurovolume</div></a>
      <a href="https://scd31.com/" target="_blank" class="row"><div>Stephen Downward</div><hr/><div>DIY GPU</div></a>
      {/*<a href="https://wobblybits.blog/" target="_blank" class="row"><div>David Allen Feil</div><hr/><div>Wobbly Bits</div></a>*/}
      <a href="https://self.destruct.xxx/" target="_blank" class="row"><div>Russell Boswell</div><hr/><div>Ok</div></a>
      <a href="https://www.frankchiarulli.com/" target="_blank" class="row"><div>Frank Chiarulli</div><hr/><div>RCade</div></a>
      <a href="https://macro.com/" target="_blank" class="row"><div>Jacob Beckerman</div><hr/><div>Macro</div></a>
      {/*<a href="https://eieio.games/" target="_blank" class="row"><div>Nolen Royalty</div><hr/><div>SSH Snake</div></a>*/}
      {/*<a href="" target="_blank" class="row"><div>Peter Whidden</div><hr/><div>Poke</div></a>*/}
      {/*<a href="https://greg.technology/" target="_blank" class="row"><div>Greg Sadetsky</div><hr/><div>Disco</div></a>*/}
      <a href="https://minivac.greg.technology/" target="_blank" class="row"><div>Greg Sadetsky</div><hr/><div>Minivak</div></a>
      <a href="https://izz.ee/" target="_blank" class="row"><div>Issac Chabon</div><hr/><div>Calendar</div></a>
      <a href="mailto:russell@macro.com" class="row"><div>Maybe You</div><hr/><div>Email Me</div></a>
    </div>
  );
}
