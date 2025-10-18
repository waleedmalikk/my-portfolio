export default function Contact() {
  return (
    <section id="contact" className="rounded-2xl p-6 shadow-sm bg-white">
      <h2 className="text-2xl font-semibold">Contact</h2>
      <div className="mt-4 text-sm text-slate-700 space-y-2">
        <div>Lahore, Pakistan</div>
        <div>Phone: (+92) 309-6049309</div>
        <div>
          Email:{" "}
          <a href="mailto:waleedmalik2010@gmail.com" className="underline">
            waleedmalik2010@gmail.com
          </a>
        </div>
        <div>
          LinkedIn:{" "}
          <a
            href="https://linkedin.com/in/waleedmalikk"
            target="_blank"
            rel="noreferrer"
            className="underline"
          >
            linkedin.com/in/waleedmalikk
          </a>
        </div>
      </div>
    </section>
  );
}
