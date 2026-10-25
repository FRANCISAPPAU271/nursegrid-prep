"use client";

import { useSyncExternalStore } from "react";

/**
 * Read a browser-only value during render, safely.
 *
 * The usual way to do this — `useState` plus `useEffect` that calls the setter
 * once on mount — works in development and is what most of this codebase did.
 * It also triggers `react-hooks/set-state-in-effect`: an effect that
 * synchronously sets state causes a cascading second render, and React's rules
 * say to read external state during render instead of copying it into state.
 *
 * `useSyncExternalStore` is the supported way to do that. It renders the
 * server value first (so the server HTML and the hydration pass agree), then
 * re-renders on the client with the real snapshot as soon as it can. No effect,
 * no extra render, no hydration mismatch.
 *
 * There is nothing to subscribe to here — `localStorage` and `navigator` do not
 * announce their changes — so the subscribe function is a no-op and React
 * re-reads the snapshot on each render. That is deliberate: it means a value
 * written by an event handler in the same component is picked up on the next
 * render without any notification plumbing.
 *
 * `getSnapshot` MUST return a primitive. React compares snapshots with
 * `Object.is`, so returning a fresh object or array every call loops forever.
 * Every use in this codebase returns a string, a boolean or null.
 */
const subscribe = () => () => {};

export function useClientValue<T>(getSnapshot: () => T, getServerSnapshot: () => T): T {
    return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
