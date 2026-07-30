export function focusAndScrollToHomeSection(
  targetId: string,
  behavior: ScrollBehavior,
) {
  const target = document.getElementById(targetId);

  if (!target) return false;

  const focusTarget =
    target.querySelector<HTMLElement>("[data-home-section-focus]") ?? target;

  focusTarget.focus({ preventScroll: true });
  target.scrollIntoView({ behavior, block: "start" });

  return true;
}
