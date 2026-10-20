/**
 * Blog posts. To add a post, copy an object below and give it a unique slug.
 * Block types: { t: "p", text } · { t: "h", text } · { t: "quote", text } · { t: "list", items: [] }
 * Add a photo with  image: "/images/my-post.jpg"  (file in /public/images).
 * ✦ These are sample articles — replace with your own writing.
 */

export const posts = [
  {
    slug: "five-quiet-minutes-morning-ritual",
    title: "Five quiet minutes: a morning ritual to meet your inner voice",
    excerpt:
      "Before the messages, the news and the to-do list, there is a small window where your own voice is still audible. Here is how to protect it.",
    category: "Mindfulness",
    date: "2026-09-28",
    readTime: "4 min read",
    image: null,
    content: [
      {
        t: "p",
        text: "Most of us wake up and reach for a screen. Within seconds, the world’s voices rush in — and our own is pushed aside before we’ve even heard it. A five-minute morning ritual is a simple way to reverse that order.",
      },
      { t: "h", text: "Begin before you begin" },
      {
        t: "p",
        text: "Sit up in bed or by a window. Keep your phone out of reach. Place one hand on your heart and take three slow breaths, letting each exhale be a little longer than the inhale. This tells your body there is nothing to chase yet.",
      },
      { t: "h", text: "Ask one soft question" },
      {
        t: "p",
        text: "Silently ask: “What do I need today?” Don’t search for the clever answer. Wait. It may arrive as a word, a feeling or a picture. Whatever comes is welcome.",
      },
      {
        t: "quote",
        text: "Your inner voice is rarely loud. It simply waits for a moment quiet enough to be heard.",
      },
      { t: "h", text: "Write one line" },
      {
        t: "p",
        text: "Keep a notebook beside your bed and write a single sentence beginning with “Today I choose…”. Over weeks, these lines become a gentle map of who you are becoming.",
      },
      {
        t: "list",
        items: [
          "Breathe: three slow breaths with a hand on your heart",
          "Ask: “What do I need today?”",
          "Write: one sentence beginning “Today I choose…”",
        ],
      },
    ],
  },
  {
    slug: "when-you-feel-everything-at-once",
    title: "When you feel everything at once: finding your way back to calm",
    excerpt:
      "Overwhelm is not a flaw in you. It is a signal. Here is a gentle way to slow down, name what is happening and soften.",
    category: "Emotional Clarity",
    date: "2026-09-14",
    readTime: "6 min read",
    image: null,
    content: [
      {
        t: "p",
        text: "There are days when everything arrives together — deadlines, emotions, other people’s needs — and your mind becomes a room with too many voices speaking at once. Overwhelm is not weakness. It is information.",
      },
      { t: "h", text: "Pause and arrive" },
      {
        t: "p",
        text: "Stop whatever you are doing and feel your feet on the floor. Notice five things you can see, four you can touch and three you can hear. This quiet inventory brings you back into the present moment, where things are far more manageable.",
      },
      { t: "h", text: "Name it to tame it" },
      {
        t: "p",
        text: "Try saying, quietly, “I notice I’m feeling…” and finish the sentence honestly. Naming an emotion gives it edges, and a feeling with edges is far easier to hold than a fog.",
      },
      {
        t: "quote",
        text: "You don’t have to solve everything today. You only have to take the next soft step.",
      },
      { t: "h", text: "Choose one thing" },
      {
        t: "p",
        text: "From everything demanding your attention, choose the single action that would bring the most relief, and do only that. Clarity grows from small, steady choices — not from forcing everything at once.",
      },
    ],
  },
  {
    slug: "the-art-of-softening",
    title: "The art of softening: redefining strength through feminine energy",
    excerpt:
      "We are taught that strength means pushing harder. What if the most powerful thing you can do is soften?",
    category: "Renewal",
    date: "2026-08-30",
    readTime: "5 min read",
    image: null,
    content: [
      {
        t: "p",
        text: "For many women, strength has been defined as endurance: do more, feel less, never pause. But constant effort is not the same as power. Softness is not the absence of strength — it is strength with room to breathe.",
      },
      { t: "h", text: "Softness is a skill" },
      {
        t: "p",
        text: "Softening means allowing yourself to receive: rest, help, beauty, pleasure. It means responding rather than reacting, and trusting that you do not need to prove your worth through exhaustion.",
      },
      {
        t: "quote",
        text: "Soft does not mean small. A river is soft — and it carves canyons.",
      },
      { t: "h", text: "Ways to practice" },
      {
        t: "list",
        items: [
          "Take a slow, screen-free moment with something beautiful every day",
          "Say “let me think about it” before agreeing to anything",
          "Let one thing be good enough this week",
          "Ask for help, and receive it without apology",
        ],
      },
      {
        t: "p",
        text: "As you practise softening, notice what changes. Often the very things you were forcing begin to flow.",
      },
    ],
  },
  {
    slug: "writing-to-your-inner-voice",
    title: "Writing to your inner voice: five journal prompts for clarity",
    excerpt:
      "When your thoughts feel tangled, the page can become a calm mirror. Try these prompts for ten unhurried minutes.",
    category: "Mindfulness",
    date: "2026-08-12",
    readTime: "4 min read",
    image: null,
    content: [
      {
        t: "p",
        text: "Journaling is not about beautiful sentences. It is about giving your inner voice a place to speak without interruption. Set a timer for ten minutes, light a candle if you like, and let the pen move without editing.",
      },
      { t: "h", text: "Five prompts to begin" },
      {
        t: "list",
        items: [
          "What am I carrying that isn’t mine to carry?",
          "When did I last feel completely like myself?",
          "What would I do if I trusted my own timing?",
          "What do I need to hear right now, and who can say it? (Try saying it to yourself.)",
          "What is one soft step I can take today?",
        ],
      },
      {
        t: "quote",
        text: "Write as if you were speaking to someone you deeply love — because you are.",
      },
      {
        t: "p",
        text: "Re-read your words after a few days. You may be surprised by how much wisdom was already there, simply waiting for room to appear.",
      },
    ],
  },
  {
    slug: "rituals-for-a-season-of-change",
    title: "Rituals for a season of change: how to feel grounded while everything shifts",
    excerpt:
      "Transitions can feel like standing on moving ground. Small rituals give you something steady to hold.",
    category: "Renewal",
    date: "2026-07-26",
    readTime: "5 min read",
    image: null,
    content: [
      {
        t: "p",
        text: "New chapters rarely arrive with clear instructions. A move, a career shift, a change in relationship — all of them can leave us unsteady. In those seasons, rituals act as anchors: small, repeatable acts that tell the nervous system, “you are safe.”",
      },
      { t: "h", text: "Choose rituals that feel like care" },
      {
        t: "p",
        text: "A ritual does not need to be elaborate. A warm drink in the same cup each morning, five minutes of stretching, or a lit candle at dusk can become a doorway back to yourself.",
      },
      { t: "h", text: "Mark the ending and the beginning" },
      {
        t: "p",
        text: "Before stepping into something new, honour what you are leaving. Write a short letter of thanks to the season that is closing, then set an intention for the one beginning.",
      },
      {
        t: "quote",
        text: "Change feels lighter when you carry it with ritual.",
      },
    ],
  },
  {
    slug: "boundaries-as-self-respect",
    title: "Boundaries as self-respect: saying no without the guilt",
    excerpt:
      "A boundary is not a wall. It is a loving line that protects your energy and honours your voice.",
    category: "Identity",
    date: "2026-07-08",
    readTime: "5 min read",
    image: null,
    content: [
      {
        t: "p",
        text: "Many of us learned to say yes quickly and to apologise for saying no. But each unspoken boundary quietly asks your inner voice to be quiet. Learning to speak up is one of the most elevated acts of self-respect.",
      },
      { t: "h", text: "Start with your body" },
      {
        t: "p",
        text: "Notice the tightening in your chest or stomach when you agree to something you don’t want. That sensation is information. It is your inner voice telling you to pause.",
      },
      { t: "h", text: "Kind, clear and short" },
      {
        t: "list",
        items: [
          "“Thank you for thinking of me — I’m not able to take that on.”",
          "“I need some time to consider. I’ll let you know by Friday.”",
          "“That doesn’t work for me, but here is what I can offer.”",
        ],
      },
      {
        t: "quote",
        text: "You can be warm and clear at the same time. In fact, clarity is a form of kindness.",
      },
    ],
  },
];

export function getPost(slug) {
  return posts.find((p) => p.slug === slug);
}

export function formatDate(iso) {
  return new Date(iso + "T00:00:00").toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
