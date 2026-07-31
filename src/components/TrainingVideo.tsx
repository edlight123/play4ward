/**
 * Play4Ward's own training footage, from the shared Drive folder.
 *
 * The source is a 48 MB, 1080×1920 QuickTime file. It is served here as a 7 MB
 * 540×960 H.264 MP4 — a lot of Play4Ward's audience is in Haiti on mobile data, so
 * `preload="none"` means nothing but the poster image downloads until someone
 * actually presses play.
 *
 * The clip is vertical (9:16). Rather than let that dominate a desktop page, it sits
 * in a height-capped frame beside the copy, which reads as deliberate.
 */
export function TrainingVideo({ label }: { label: string }) {
  return (
    <div className="mx-auto w-full max-w-[320px] overflow-hidden rounded-3xl bg-ink shadow-lift ring-1 ring-ink/10 sm:max-w-[360px]">
      <video
        className="block h-auto w-full"
        controls
        playsInline
        preload="none"
        poster="/video/training-session-poster.jpg"
        aria-label={label}
      >
        <source src="/video/training-session.mp4" type="video/mp4" />
        {/* Shown only if the browser cannot play the file at all. */}
        <a href="/video/training-session.mp4">{label}</a>
      </video>
    </div>
  );
}
