"use client";

import { useSyncExternalStore } from "react";
import * as shippingStore from "./store";

export function useShippingMethod() {
  const method = useSyncExternalStore(
    shippingStore.subscribe,
    shippingStore.getSnapshot,
    shippingStore.getServerSnapshot
  );

  return {
    method,
    setMethod: shippingStore.setShippingMethod,
  };
}
