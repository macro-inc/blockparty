import { ThemeEditorBasic } from '../theme/components/ThemeEditorBasic';
import { ThemeTools } from '../theme/components/ThemeTools';
import { ThemeList } from '../theme/components/ThemeList';
import WireCrosshair from '../assets/wire-crosshair.svg';
import WireCube from '../assets/wire-cube.svg';
import WireLogo from '../assets/wire-logo.svg';
import { createSignal } from 'solid-js';
import { DitherM } from './DitherM';
import { Display } from './Display';

export const [activeToy, setActiveToy] = createSignal('logo');

export function ToyBox() {
  return (
    <>
      <style>{`
        .toy-icon{
          transition: color var(--transition);
          color: var(--c4);
          cursor: pointer;
          display: block;
          height: 30px;
        }
        .toy-icon.active{
          transition: none;
          color: var(--a0);
        }
        @media(hover){
          .toy-icon:hover{
            transition: none;
            color: var(--a0);
          }
        }
      `}</style>
      <div
        style="
          border: 1px solid var(--c4);
          box-sizing: border-box;
          display: grid;
          padding: 20px;
          gap: 20px;
        "
      >
        <Display when={activeToy() == 'logo'}>
          <DitherM/>
        </Display>

        <Display when={activeToy() == 'theme'}>
          <div
            style="
              display: grid;
              gap: 20px;
            "
          >
            <ThemeEditorBasic/>
            <ThemeTools/>
            <ThemeList/>
          </div>
        </Display>

        <div
          style="
            justify-content: flex-end;
            align-items: center;
            display: flex;
            height: 26px;
            width: 100%;
            gap: 20px;
          "
        >
          {/*<WireCube
            onPointerDown={() => {setActiveToy('cube')}}
            classList={{
              'active': activeToy() === 'cube',
              'toy-icon': true,
            }}
            style="height: 38px;"
          />*/}
          <WireCrosshair
            onPointerDown={() => {setActiveToy('theme')}}
            classList={{
              'active': activeToy() === 'theme',
              'toy-icon': true,
            }}
          />
          <WireLogo
            onPointerDown={() => {setActiveToy('logo')}}
            classList={{
              'active': activeToy() === 'logo',
              'toy-icon': true,
            }}
          />
        </div>
      </div>
    </>
  )
}
