import { createSignal } from 'solid-js';
import { breakpoint } from '../utils/utils';

export function EmailForm() {
  const [status, setStatus] = createSignal('');
  const [email, setEmail] = createSignal('');
  const [name, setName] = createSignal('');

  const handleSubmit = async (e: SubmitEvent) => {
    e.preventDefault();
    setStatus('sending');

    const res = await fetch('https://bpv2.macroverse.workers.dev/', {
      body: JSON.stringify({ name: name(), email: email() }),
      headers: { 'Content-Type': 'application/json' },
      method: 'POST',
    });

    if(res.ok) {
      setStatus('sent');
      setEmail('');
      setName('');
    } else {
      setStatus('error');
    }
  };

  return (
    <div
      style="touch-action: none;"
      class="email-form-wrapper"
    >
      <form
        style="
          grid-template-rows: repeat(3, min-content);
          background-color: var(--c4);
          box-sizing: border-box;
          height: min-content;
          display: grid;
          width: 100%;
          gap: 1px;
        "
        onSubmit={handleSubmit}
        class="email-form"
      >
        <div
          style="
            background-color: var(--b1);
            justify-content: center;
            display: flex;
          "
        >
          <input
            onInput={(e) => setName(e.currentTarget.value)}
            style={{
              'font-family': '"Courier New", Courier, monospace',
              'padding': breakpoint() ? ' 0 20px' : '0 8px',
              'background-color': 'var(--b1)',
              'box-sizing': 'border-box',
              'border-radius': 'none',
              'max-width': '516px',
              'color': 'var(--c4)',
              'font-size': '16px',
              'outline': 'none',
              'height': '30px',
              'border': 'none',
              'width': '100%'
            }}
            placeholder="Name"
            value={name()}
            type="text"
            required
          />
        </div>
        <div
          style="
            background-color: var(--b1);
            justify-content: center;
            display: flex;
          "
        >
          <input
            onInput={(e) => setEmail(e.currentTarget.value)}
            style={{
              'font-family': '"Courier New", Courier, monospace',
              'padding': breakpoint() ? ' 0 20px' : '0 8px',
              'background-color': 'var(--b1)',
              'box-sizing': 'border-box',
              'border-radius': 'none',
              'max-width': '516px',
              'color': 'var(--c4)',
              'font-size': '16px',
              'outline': 'none',
              'height': '30px',
              'border': 'none',
              'width': '100%'
            }}
            placeholder="Email"
            value={email()}
            type="email"
            required
          />
        </div>
        <button
          style="
            font-family: 'Courier New', Courier, monospace;
            background-color: var(--c4);
            border-radius: none;
            color: var(--b1);
            font-size: 16px;
            border: none;
            height: 28px;
            padding: 0;
          "
          disabled={status() === 'sending'}
          type="submit"
        >
          {status() === 'sending' ? 'Sending...' : 'RSVP'}
        </button>
      </form>
    </div>
  );
}
