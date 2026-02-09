import ditherM from '../assets/dither-m.gif?inline'

export function DitherM() {
  return (
    <div
      style={{
        '-webkit-mask-image': `url(${ditherM})`,
        '-webkit-mask-mode': 'luminance',
        '-webkit-mask-size': '100% 100%',
        'mask-image': `url(${ditherM})`,
        'background-color': 'var(--c4)',
        'image-rendering': 'pixelated',
        'mask-mode': 'luminance',
        'mask-size': '100% 100%',
        'flex-shrink': '0',
        'height': '155px', // 'height': '124px',
        'width': '220px', // 'width': '176px',
      }}
    />
  )
}
