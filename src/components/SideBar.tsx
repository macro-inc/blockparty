import { Presentations } from './Presentations';
import { ToyBox, activeToy } from './ToyBox';
import { createEffect, on } from 'solid-js';
import { Description } from './Description';
import { EmailForm } from "./EmailForm";
import { Banner } from "./Banner";
import { Prints } from './Prints';
import { Hosts } from "./Hosts";
import { Info } from "./Info";


export function SideBar() {
  let scrollRef!: HTMLDivElement;

  createEffect(on(activeToy, () => {
    scrollRef.scrollTop = scrollRef.scrollHeight;
  }, { defer: true }));

  return (
    <div
      class="sidebar-wrapper"
    >
      <div
        style="
          grid-template-rows: min-content 1fr min-content;
          background-color: var(--b1);
          border: 1px solid var(--c4);
          box-sizing: border-box;
          display: grid;
          height: 100%;
          width: 100%;
        "
      >
        <Banner/>
        <div
          ref={scrollRef}
          style="
            overscroll-behavior: contain;
            flex-direction: column;
            box-sizing: border-box;
            scrollbar-width: none;
            justify-items: center;
            justify-self: center;
            position: relative;
            overflow-y: scroll;
            max-width: 540px;
            display: flex;
            padding: 20px;
            gap: 20px;
          "
        >
          <Description/>
          <Presentations/>
          <Hosts/>
          <Prints/>
          <Info/>
          <ToyBox/>
        </div>
        <EmailForm/>
      </div>
    </div>
  )
}
