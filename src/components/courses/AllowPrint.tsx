"use client";

import { useEffect } from "react";

/**
 * The app blanks every page when printed (see globals.css) to protect the
 * question bank. A certificate is the learner's own document, so this
 * component lifts the blackout for exactly as long as the certificate page
 * is mounted.
 */
export default function AllowPrint() {
  useEffect(() => {
    document.body.dataset.allowPrint = "1";
    return () => {
      delete document.body.dataset.allowPrint;
    };
  }, []);
  return null;
}
