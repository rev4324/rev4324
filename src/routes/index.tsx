import { Title } from "@solidjs/meta";
import type { Component, JSX } from "solid-js";
import { Dynamic } from "solid-js/web";
import { ExternalLink } from "~/components/ExternalLink";
import { Strong } from "~/components/Strong";
import { GitHubIcon } from "~/components/icons/GitHubIcon";
import { UniversityIcon } from "~/components/icons/UniversityIcon";
import { XComIcon } from "~/components/icons/XComIcon";

export default function Home() {
  return (
    <main>
      <Title>rev4324</Title>
      {/* <div role="presentation" class="bg-red-700 h-4 w-full"></div> */}

      <div class="mx-auto max-w-screen-lg p-8">
        <header>
          <h1 class="text-2xl font-mono font-medium text-tomato tracking-wide">
            @rev4324
          </h1>
        </header>

        <section class="pt-6 max-w-prose text-normal space-y-4">
          <p>
            My name is <Strong>Filip Dembicki</Strong> and I'm a junior
            developer from Toruń, Poland working at{" "}
            <Strong>
              <ExternalLink href="https://exea.pl">EXEA</ExternalLink>
            </Strong>
            .
          </p>

          <p>
            I specialize in crafting great <Strong>user interfaces</Strong> on
            the web. I'm also proficient in several backend technologies and I
            think server-side rendering is the best way to create{" "}
            <Strong>performant</Strong> websites.
          </p>
        </section>

        <section class="py-5">
          <ul class="flex flex-col gap-1">
            <Li
              href="https://github.com/rev4324"
              icon={GitHubIcon}
              label="GitHub"
              description="kinda empty..."
            />

            <Li
              href="https://x.com/rev4324"
              icon={XComIcon}
              label="X (formerly Twitter)"
            />

            <Li
              href="https://www.ncu.eu"
              icon={UniversityIcon}
              label="CS at Nicolaus Copernicus University in Toruń"
              description="4th semester"
            />
          </ul>
        </section>

        <footer class="text-light text-sm">&copy; 2024</footer>
      </div>
    </main>
  );
}

function Li(props: {
  href: string;
  icon: Component<JSX.IntrinsicElements["svg"]>;
  label: string;
  description?: string;
}) {
  return (
    <li>
      <a
        href={props.href}
        class="inline-flex flex-row items-baseline gap-2 text-strong hover:text-tomato group transition-colors"
      >
        <Dynamic
          component={props.icon}
          class="size-5 shrink-0 top-1 relative"
        />
        <div class="inline-flex flex-col sm:flex-row sm:gap-1.5">
          <span>{props.label}</span>
          <span class="text-light text-sm sm:text-base">
            {props.description}
          </span>
        </div>
      </a>
    </li>
  );
}
