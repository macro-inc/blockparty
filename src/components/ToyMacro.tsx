import ditherM from '../assets/dither-m.gif?inline'

export function ToyMacro() {
  return (
    <div
      style="
        display: grid;
        gap: 20px;
      "
    >
      <div
        style={{
          '-webkit-mask-image': `url(${ditherM})`,
          '-webkit-mask-mode': 'luminance',
          '-webkit-mask-size': '100% 100%',
          'mask-image': `url(${ditherM})`,
          'background-color': 'var(--c4)',
          'image-rendering': 'pixelated',
          'justify-self': 'center',
          'mask-mode': 'luminance',
          'mask-size': '100% 100%',
          'user-select': 'none',
          'flex-shrink': '0',
          'height': '155px', // 'height': '124px',
          'width': '220px', // 'width': '176px',
        }}
      />
      <div style="user-select: none;">
        <a href="https://macro.com/" target="_blank">Macro: Local-First Team OS</a><br/>
        <a href="https://macro.com/jobs/" target="_blank">Size: 14+ Developers</a><br/>
        <a href="maps:q=54+West+21st+St+New+York">Location: NYC</a><br/>
      </div>
    </div>
  )
}
