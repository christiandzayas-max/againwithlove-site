"use client";

import { useEffect, useRef } from "react";

// Beehiiv subscribe form for the Again, With Love newsletter.
// The loader script renders the email field + Subscribe button in place. We
// append it inside a container on mount so it works cleanly in the React tree.
const FORM_ID = "d5bce0de-bf37-4b92-b4d1-bd0b9771f711";

export default function BeehiivSignup() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = ref.current;
    if (!container || container.querySelector("script")) return;

    // The embedded form auto-focuses its email field on load, which leaves a
    // blinking caret sitting in the middle of the page. Blur the iframe the
    // first time it takes focus, then stop listening, so a real user click
    // still focuses the field normally.
    const onFocusIn = (event: FocusEvent) => {
      const iframe = container.querySelector<HTMLIFrameElement>("iframe");
      if (iframe && event.target === iframe) {
        iframe.blur();
        document.removeEventListener("focusin", onFocusIn);
      }
    };
    document.addEventListener("focusin", onFocusIn);
    const stopListening = window.setTimeout(
      () => document.removeEventListener("focusin", onFocusIn),
      6000,
    );

    const script = document.createElement("script");
    script.src = "https://subscribe-forms.beehiiv.com/v3/loader.js";
    script.async = true;
    script.setAttribute("data-beehiiv-form", FORM_ID);
    container.appendChild(script);

    return () => {
      document.removeEventListener("focusin", onFocusIn);
      window.clearTimeout(stopListening);
    };
  }, []);

  return (
    <div ref={ref} className="mx-auto flex w-full max-w-md justify-center" />
  );
}
