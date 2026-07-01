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
    const script = document.createElement("script");
    script.src = "https://subscribe-forms.beehiiv.com/v3/loader.js";
    script.async = true;
    script.setAttribute("data-beehiiv-form", FORM_ID);
    container.appendChild(script);
  }, []);

  return <div ref={ref} className="mx-auto flex w-full max-w-md justify-center" />;
}
