import { ThemeEditorBasic } from '../theme/components/ThemeEditorBasic';
import { ThemeTools } from '../theme/components/ThemeTools';
import { ThemeList } from '../theme/components/ThemeList';
import WireCrosshair from '../assets/wire-crosshair.svg';
import WireCube from '../assets/wire-cube.svg';
import WireLogo from '../assets/wire-logo.svg';
import { createSignal } from 'solid-js';
import { ToyMacro } from './ToyMacro';
import { ToyBlock } from './ToyBlock';
import { Display } from './Display';

const [activeToy, setActiveToy] = createSignal('macro');

export function ToyBox() {
  return (
    <>
      <style>{`
        .toy-icon{
          transition: color var(--transition);
          color: var(--b1);
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
          gap: 20px;
        "
      >
        <div
          style="
            border-bottom: 1px solid var(--c4);
            justify-content: flex-end;
            align-items: center;
            display: flex;
            height: 26px;
            padding: 20px;
            box-sizing: border-box;
            background-color: var(--c4);
            width: 100%;
            gap: 20px;
          "
        >
            <WireCube
              onPointerDown={() => {setActiveToy('block')}}
              classList={{
                'active': activeToy() === 'block',
                'toy-icon': true,
              }}
              style="height: 34px;"
            />
            <WireCrosshair
              onPointerDown={() => {setActiveToy('theme')}}
              classList={{
                'active': activeToy() === 'theme',
                'toy-icon': true,
              }}
            />
            <WireLogo
              onPointerDown={() => {setActiveToy('macro')}}
              classList={{
                'active': activeToy() === 'logo',
                'toy-icon': true,
              }}
            />
        </div>

        <div
          style="
            padding: 20px;
          "
        >
          <Display when={activeToy() == 'block'}>
            <ToyBlock/>
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

          <Display when={activeToy() == 'macro'}>
            <ToyMacro/>
          </Display>

        </div>
      </div>
    </>
  )
}
