export default function FAQMedia({ media }) {
  if (!media) return null;

  return (
    <div className="rounded-[1.25rem] border border-white/70 bg-white/34 p-4 backdrop-blur-2xl space-y-3">
      {media.type === "image" && (
        <img
          src={media.src}
          alt={media.caption || ""}
          className="w-full max-h-80 object-contain rounded-lg"
        />
      )}

      {media.type === "video" && (
        <video
          src={media.src}
          controls
          className="w-full max-h-80 rounded-lg"
        />
      )}

      {media.caption && (
        <p className="text-sm text-slate-600">{media.caption}</p>
      )}
    </div>
  );
}
