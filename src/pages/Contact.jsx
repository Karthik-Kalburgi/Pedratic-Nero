export default function Contact() {
  return (
    <div className="py-20 px-6 text-center">
      <h2 className="text-3xl font-bold mb-10">Contact Us</h2>

      <form className="max-w-md mx-auto space-y-4">
        <input
          type="text"
          placeholder="Parent Name"
          className="w-full p-3 rounded-full border focus:outline-none focus:ring-2 focus:ring-primary transition"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 rounded-full border focus:outline-none focus:ring-2 focus:ring-primary transition"
        />
        <textarea
          placeholder="Message"
          className="w-full p-3 rounded-3xl border focus:outline-none focus:ring-2 focus:ring-primary transition"
        ></textarea>

        <button className="bg-accent text-white px-6 py-3 rounded-full hover:scale-110 transition">
          Send Message
        </button>
      </form>
    </div>
  );
}