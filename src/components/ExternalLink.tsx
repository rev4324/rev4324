import type { JSX } from "solid-js";

export function ExternalLink(props: JSX.IntrinsicElements["a"]) {
  return (
    <a
      {...props}
      class={`underline underline-offset-4 hover:text-tomato transition-colors font-medium ${props.class}`}
    />
  );
}
