import { Title } from "@solidjs/meta";
import { HttpStatusCode } from "@solidjs/start";

export default function NotFound() {
  return (
    <main>
      <Title>404 Not found</Title>
      <HttpStatusCode code={404} />
      <main class="text-center pt-12">
        <p class="text-center pb-4 font-medium text-tomato text-lg">404</p>
        <h1 class="font-semibold text-strong text-center text-3xl sm:text-5xl tracking-tighter">
          Page not found
        </h1>
      </main>
    </main>
  );
}
