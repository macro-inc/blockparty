import { Presentations } from './Presentations';
import { ToyBox } from './ToyBox';
import { Description } from './Description';
import { breakpoint } from '../utils/utils';
import { EmailForm } from './EmailForm';
import { Display } from './Display';
import { Banner } from "./Banner";
import { Prints } from './Prints';
import { Hosts } from './Hosts';
import { Info } from './Info';


export function SideBar() {
  return (
    <div
      class="sidebar-wrapper"
    >
      <div
        style={{
          'grid-template-rows': breakpoint() ? '1fr min-content' : 'min-content 1fr min-content',
          'background-color': 'var(--b1)',
          'border': '1px solid var(--c4)',
          'box-sizing': 'border-box',
          'display': 'grid',
          'height': '100%',
          'width': '100%',
        }}
      >
        <Display when={!breakpoint()}>
          <Banner/>
        </Display>
        <div
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
          <Display when={breakpoint()}>
            <Banner/>
          </Display>
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
