import { ParentProps } from 'solid-js';

interface DisplayProps {
  when: boolean;
}

export function Display(props: ParentProps<DisplayProps>) {
  return (
    <div
      style={{
        'display': props.when ? 'block' : 'none'
      }}
    >
      {props.children}
    </div>
  );
}
