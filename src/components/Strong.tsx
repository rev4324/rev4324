import type { JSX } from "solid-js";

export function Strong(props: JSX.IntrinsicElements["strong"]) {
  return <strong {...props} class={`font-medium text-strong ${props.class}`} />;
}
