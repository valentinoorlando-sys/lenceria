"use client";

import { useSyncExternalStore } from "react";
import * as promotionsStore from "./store";

export function useTransferDiscountPercent(): number {
  return useSyncExternalStore(
    promotionsStore.subscribe,
    promotionsStore.getDiscountPercentSnapshot,
    promotionsStore.getDiscountPercentServerSnapshot
  );
}

export function useIsCyberMondayActive(): boolean {
  return useSyncExternalStore(
    promotionsStore.subscribe,
    promotionsStore.getIsCyberMondaySnapshot,
    promotionsStore.getIsCyberMondayServerSnapshot
  );
}
