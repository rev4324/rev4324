import { MetaProvider, Title } from "@solidjs/meta";
import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
import "./app.css";
import { HttpHeader } from "@solidjs/start";

export default function App() {
  return (
    <Router
      root={(props) => (
        <>
          <MetaProvider>
            <Title>rev4324</Title>
            <Suspense>{props.children}</Suspense>
          </MetaProvider>
          <HttpHeader
            name="Cache-Control"
            value="public, immutable, max-age=31536000"
          />
          <HttpHeader
            name="CDN-Cache-Control"
            value="public, immutable, max-age=31536000"
          />
        </>
      )}
    >
      <FileRoutes />
    </Router>
  );
}
