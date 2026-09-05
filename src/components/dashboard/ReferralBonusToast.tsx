"use client";

import { useEffect } from "react";
import { useToast } from "@/components/ui/Toast";

export default function ReferralBonusToast() {
  const toast = useToast();

  useEffect(() => {
    if (sessionStorage.getItem("nsm_referral_bonus")) {
      sessionStorage.removeItem("nsm_referral_bonus");
      toast.push("🎁 Referral bonus applied — you have 3 days of free premium!", "success");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null;
}
