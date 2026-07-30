"use client";

import { useEffect, useRef, useState } from "react";

type CopyStatus = "idle" | "copied" | "error";

type EmailCopyButtonProps = {
  ariaLabel?: string;
  className?: string;
  copiedLabel?: string;
  email: string;
  label?: string;
};

function CopyIcon({ copied }: { copied: boolean }) {
  return (
    <svg
      aria-hidden="true"
      className="size-4 shrink-0"
      fill="none"
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
    >
      {copied ? (
        <path
          d="m3.25 8.25 3 3 6.5-6.5"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.6"
        />
      ) : (
        <>
          <rect
            height="8"
            rx="1.5"
            stroke="currentColor"
            strokeWidth="1.4"
            width="8"
            x="5.25"
            y="2.75"
          />
          <path
            d="M10.75 11.25v.5a1.5 1.5 0 0 1-1.5 1.5h-5a1.5 1.5 0 0 1-1.5-1.5v-5a1.5 1.5 0 0 1 1.5-1.5h.5"
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="1.4"
          />
        </>
      )}
    </svg>
  );
}

function copyWithFallback(value: string) {
  const textarea = document.createElement("textarea");
  textarea.value = value;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.opacity = "0";

  try {
    document.body.appendChild(textarea);
    textarea.select();

    return document.execCommand("copy");
  } catch {
    return false;
  } finally {
    textarea.remove();
  }
}

async function copyWithClipboardApi(value: string) {
  if (!navigator.clipboard?.writeText) return false;

  return new Promise<boolean>((resolve) => {
    let finished = false;
    const timeout = window.setTimeout(() => {
      if (finished) return;
      finished = true;
      resolve(false);
    }, 900);

    navigator.clipboard.writeText(value).then(
      () => {
        if (finished) return;
        finished = true;
        window.clearTimeout(timeout);
        resolve(true);
      },
      () => {
        if (finished) return;
        finished = true;
        window.clearTimeout(timeout);
        resolve(false);
      },
    );
  });
}

export function EmailCopyButton({
  ariaLabel,
  className,
  copiedLabel = "E-mail copiado",
  email,
  label = "Copiar e-mail",
}: EmailCopyButtonProps) {
  const [status, setStatus] = useState<CopyStatus>("idle");
  const resetTimerRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (resetTimerRef.current) {
        window.clearTimeout(resetTimerRef.current);
      }
    };
  }, []);

  async function handleCopy() {
    let copied = copyWithFallback(email);

    if (!copied) {
      copied = await copyWithClipboardApi(email);
    }

    setStatus(copied ? "copied" : "error");

    if (resetTimerRef.current) {
      window.clearTimeout(resetTimerRef.current);
    }

    resetTimerRef.current = window.setTimeout(() => {
      setStatus("idle");
    }, 4500);
  }

  const visibleLabel =
    status === "copied"
      ? copiedLabel
      : status === "error"
        ? "Não foi possível copiar"
        : label;

  return (
    <button
      aria-label={
        status === "copied"
          ? `E-mail copiado: ${email}`
          : ariaLabel ?? `${visibleLabel}: ${email}`
      }
      className={className}
      data-copy-status={status}
      onClick={handleCopy}
      type="button"
    >
      <CopyIcon copied={status === "copied"} />
      <span>{visibleLabel}</span>
      <span aria-live="polite" className="sr-only">
        {status === "copied"
          ? `${email} copiado para a área de transferência.`
          : status === "error"
            ? "Não foi possível copiar o e-mail."
            : ""}
      </span>
    </button>
  );
}
