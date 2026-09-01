"use client";

import { useEffect } from "react";
import { useToast } from "@/components/ui/Toast";

// Robust client-side security guard that blocks text copy, cutting,
// right-click, developer tools inspection shortcuts, printing, and
// attempts to screenshot or grab content.
export default function SecurityGuard() {
  const toast = useToast();

  useEffect(() => {
    // 1. Disable right-click context menu entirely
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
      toast.push("🔒 Right-click and copy-paste are disabled to protect premium content.", "error");
    };

    // 2. Disable dragging images or text
    const handleDragStart = (e: DragEvent) => {
      e.preventDefault();
    };

    // 3. Disable Copy, Cut, and Paste events
    const handleCopyCutPaste = (e: ClipboardEvent) => {
      e.preventDefault();
      toast.push("🔒 Copying or cutting content is strictly prohibited.", "error");
    };

    // 4. Block common developer tools, view-source, and printing shortcuts
    const handleKeyDown = (e: KeyboardEvent) => {
      const key = e.key;
      const ctrlOrCmd = e.ctrlKey || e.metaKey;

      // Detect Ctrl+C or Cmd+C (Copy)
      if (ctrlOrCmd && (key === "c" || key === "C")) {
        e.preventDefault();
        toast.push("🔒 Copy shortcut is disabled.", "error");
        return;
      }

      // Detect Ctrl+X or Cmd+X (Cut)
      if (ctrlOrCmd && (key === "x" || key === "X")) {
        e.preventDefault();
        toast.push("🔒 Cutting content is disabled.", "error");
        return;
      }

      // Detect Ctrl+P or Cmd+P (Print)
      if (ctrlOrCmd && (key === "p" || key === "P")) {
        e.preventDefault();
        toast.push("🔒 Printing or saving as PDF is disabled.", "error");
        return;
      }

      // Detect Ctrl+U or Cmd+U (View Source)
      if (ctrlOrCmd && (key === "u" || key === "U")) {
        e.preventDefault();
        toast.push("🔒 Viewing page source is disabled.", "error");
        return;
      }

      // Detect Ctrl+S or Cmd+S (Save Page)
      if (ctrlOrCmd && (key === "s" || key === "S")) {
        e.preventDefault();
        toast.push("🔒 Saving this page is disabled.", "error");
        return;
      }

      // Detect Developer Tools shortcuts (F12, Ctrl+Shift+I, Cmd+Option+I, Ctrl+Shift+J, etc.)
      if (key === "F12") {
        e.preventDefault();
        return;
      }

      if (ctrlOrCmd && e.shiftKey && (key === "i" || key === "I" || key === "j" || key === "J" || key === "c" || key === "C")) {
        e.preventDefault();
        return;
      }

      // Detect PrintScreen key (Windows/Linux) — clear clipboard if pressed
      if (key === "PrintScreen") {
        navigator.clipboard?.writeText("🔒 Screenshot Blocked — NurseGrid Prep");
        toast.push("🔒 Screenshots are not permitted on this platform.", "error");
      }
    };

    // Add event listeners across the document
    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("dragstart", handleDragStart);
    document.addEventListener("copy", handleCopyCutPaste);
    document.addEventListener("cut", handleCopyCutPaste);
    document.addEventListener("paste", handleCopyCutPaste);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("dragstart", handleDragStart);
      document.removeEventListener("copy", handleCopyCutPaste);
      document.removeEventListener("cut", handleCopyCutPaste);
      document.removeEventListener("paste", handleCopyCutPaste);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [toast]);

  return null;
}
