import React, { useEffect, useRef, useState } from 'react';
import EssayCard from './EssayCard';

const Essays = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const essays = [
    {
      id: 1,
      title: "Authentucaly 40+ ESSAY 1",
      description: "On turning 40 in a youth obsessed world",
      image: "/SA1 cover art.jpg",
      summary: `Turning forty is often framed as decline — especially for women. This essay explores what it actually feels like to stand at that threshold while carrying exhaustion, unfinished dreams, fear, grief, creativity, motherhood, marriage, ambition, and the strange realization that life is no longer theoretical.

Written from personal experience rather than instruction, The Beginning, Not The End examines ageing in a youth-obsessed culture, the pressure to remain relevant, and the quiet moment where survival slowly turns into authorship.

This is not an essay about “having it all figured out.” It is about waking up inside your own life and realizing there is still time to become fully yourself.`,
      purchaseUrl: "https://www.amazon.com/dp/B0GQXTD12C"
    },
    {
      id: 2,
      title: "Authentucaly 40+ ESSAY 2",
      description: "The Body at 40: It keeps the score of life",
      image: "/SA2 cover art.jpg",
      summary: `At forty, the body stops being background noise.

In this essay, Karly V reflects on physical change, exhaustion, injury, recovery, pregnancy, stress, strength, and the accumulated imprint of lived experience. Rather than treating the body as a problem to fix, she explores the body as a record — one that quietly stores years of pressure, adaptation, neglect, resilience, and survival.

The Body at 40 is not about weight loss, beauty standards, or transformation culture. It is about learning to listen before the body is forced to scream.

An honest reflection on maintenance, limitation, self-awareness, and the difficult shift from self-judgment toward partnership with the body that carried you here.`,
      purchaseUrl: "https://www.amazon.com/dp/B0GX2NGTDQ"
    },
    {
      id: 3,
      title: "Authentucaly 40+ ESSAY 3",
      description: "Emotional Stability at 40: The Practice of returning",
      image: "/Essay3 cover art.jpg",
      summary: `Emotional stability is often misunderstood as permanent calm. But real stability may have less to do with never falling apart — and more to do with knowing how to return.

In this deeply personal essay, Karly V explores emotional spirals, self-awareness, nervous system patterns, internal dialogue, overreaction, shame, regulation, and the gradual process of interrupting destructive loops before they fully take over.

Blending lived experience with reflection, The Practice of Returning examines what happens when emotional maturity becomes less about perfection and more about recovery.

Not becoming someone who never struggles. Becoming someone who no longer abandons themselves inside the struggle.`,
      purchaseUrl: "https://www.amazon.com/dp/B0GX2WRHTJ"
    },
    {
      id: 4,
      title: "Authentically 40+ ESSAY 4",
      description: "Connection at 40: Depth Over Breadth",
      image: "/SA4 cover art.jpg",
      summary: `As we grow older, relationships often become smaller, stranger, quieter, and more revealing.

This essay explores friendship, marriage, misunderstanding, loneliness, emotional intimacy, social exhaustion, projection, communication, and the painful realization that being surrounded by people is not the same as being deeply known.

In Connection at 40, Karly V reflects on what remains after performance, people-pleasing, social obligation, and assumed belonging begin to fall away.

Not an argument for isolation — but an exploration of what happens when depth becomes more important than approval, quantity, or proximity.

A reflection on connection, disconnection, and the difficult work of learning to relate honestly.`,
      purchaseUrl: "https://www.amazon.com/Authenthically-40-Essay-Connection-Authentically-ebook/dp/B0GZ2ZYM58?ref_=saga_dp_bnx_dsk_dp&qid=1781911398&sr=8-1"
    },
    {
      id: 5,
      title: "Authentically 40+ ESSAY 5",
      description: "Desire at 40: What I'm Willing to Pay",
      image: "/SA5 cover art.jpg",
      summary: `Desire changes with age.

At forty, wanting is no longer limited to romance, attraction, or sexuality. It becomes entangled with ambition, creativity, freedom, attention, validation, reinvention, grief, energy, and the quiet fear of running out of time.

In this essay, Karly V explores the tension between responsibility and longing — between the life already built and the parts of the self that still ache for expansion, intensity, expression, and aliveness.

Desire at 40 examines the discomfort many people feel around wanting more once adulthood is supposed to have “settled” them.

Not a celebration of recklessness. An exploration of what happens when desire stops being something to suppress — and becomes something to understand honestly.`,
      purchaseUrl: "https://www.amazon.com/dp/B0H1SSSDP2"
    },
    {
      id: 6,
      title: "Authentically 40+ ESSAY 6",
      description: "In The Middle: Where Becoming Happens",
      image: "/SA6 cover art.jpg",
      summary: `Many of us imagine that becoming is a destination.

A future version of ourselves who is more confident, more disciplined, more certain, more complete.

But what if becoming was never about arriving?

In this deeply personal reflection, Karly V explores creativity, performance, self-doubt, identity, people-pleasing, artistic expression, and the exhausting habit of monitoring ourselves instead of inhabiting our lives.

Drawing on experiences as a musician, writer, and performer, she examines the subtle ways we interfere with our own authenticity—mistaking self-protection for professionalism, caution for control, and refinement for growth.

At its heart, In The Middle: Where Becoming Happens is an exploration of what remains when the walls begin to fall away.

Not becoming someone new.

Simply becoming less divided against yourself.

A thoughtful essay about creativity, self-consciousness, midlife, and the quiet process of removing what stands between you and the life you are trying to live.`,
      purchaseUrl: "https://www.amazon.com/dp/B0H36H3RS3"
    },
    {
      id: 7,
      title: "Authentically 40+ ESSAY 7",
      description: "Authority at 40: Who Gets the Final Say?",
      image: "/SA7 cover art.jpg",
      summary: `In the age of algorithms, constant information, online identities, and artificial intelligence, it has become increasingly difficult to know where our thoughts end and outside influence begins.

In this essay, Karly V examines authority, influence, identity formation, AI, social media, conditioning, validation, and the subtle ways people slowly hand over authorship of their own minds.

Blending personal reflection with broader cultural observation, Who Gets the Final Say? explores the growing tension between external guidance and internal discernment.

Not an argument against technology. A reflection on sovereignty, critical thinking, and the responsibility of remaining psychologically awake inside systems designed to shape attention and behaviour.`,
      purchaseUrl: "https://www.amazon.com/dp/B0H37Z57C3"
    },
    {
      id: 8,
      title: "Authentically 40+ ESSAY 8",
      description: "Planting Trees We Won't Sit Under",
      image: "/SA8 cover art.jpg",
      summary: `Some of the most meaningful parts of life are built for a future we may never personally experience.

In this essay, Karly V reflects on legacy, parenting, creativity, mortality, contribution, time, unfinished work, and the deeply human instinct to leave something behind that continues beyond us.

Moving between personal memory and broader reflection, Trees We Won’t Sit Under explores what it means to invest effort, love, discipline, and care into things whose full outcome may never be witnessed directly.

Not an essay about achieving immortality. An essay about participation — and the quiet dignity of planting anyway.`,
      purchaseUrl: "https://www.amazon.com/dp/B0H3FDKK88"
    }
  ];

  const bookDescription = `Authentically 40+ began with a simple realisation: turning forty wasn't the destination. It was the doorway.

Beyond that doorway lay questions that had become impossible for me to ignore—questions about identity, the body, emotional stability, connection, desire, creativity, authority, mortality, and what it really means to live well.

Although these essays begin at midlife, they aren't about midlife alone. Forty simply became the point at which I could no longer postpone asking the questions. The building beyond that doorway is open to anyone who has ever stopped to wonder about the life they're creating, regardless of age.

As both a writer and musician, I find myself returning to the same question in different forms, across everything I create:

"How do we do this life thing, right here, right now, while being prepared for tomorrow?"

I don't arrive with answers already formed. I arrive with questions and invite readers to think alongside me. The essays are an honest record of that process—following an idea where it leads, questioning my own assumptions, and remaining open to being changed by what I discover.

Authentically 40+ is a collection of eight interconnected essays that blend personal experience with psychology, philosophy, creativity, and everyday life. They aren't a roadmap for getting life right. They're an invitation to slow down, pay closer attention, and perhaps leave with better questions than the ones you arrived with.`;

  return (
    <div className="min-h-screen bg-off-white">

      {/* ── Page heading ── */}
      <section className="pt-20 sm:pt-24 lg:pt-32 pb-0">
        <div className="container-content">
          <div className={`max-w-4xl mx-auto text-center mb-16 transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-light text-charcoal mb-8 leading-tight tracking-tight">
              Essays
            </h1>
            <p className="font-sans text-xl sm:text-2xl font-light text-medium-gray leading-relaxed tracking-[0.02em] max-w-3xl mx-auto">
              Long-form writing exploring identity, authorship, and the middle of life.
            </p>
          </div>
        </div>
      </section>

      {/* ── Book hero ── */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container-content">
          <div
            ref={sectionRef}
            className={`max-w-3xl mx-auto text-center transition-all duration-1000 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {/* Eyebrow label */}
            <p className="font-sans text-xs font-light tracking-[0.2em] uppercase text-medium-gray mb-8">
              The Complete Collection
            </p>

            {/* Book cover */}
            <div className="mx-auto mb-10 w-56 sm:w-64 lg:w-72 shadow-xl rounded-sm overflow-hidden">
              <img
                src="/Auth40+BOOK_Cover art.jpg"
                alt="Authentically 40+ — The Complete Collection"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Book title */}
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-charcoal mb-3 leading-tight tracking-tight">
              Authentically 40+
            </h2>
            <p className="font-sans text-base sm:text-lg font-light text-medium-gray mb-10 tracking-[0.04em]">
              All Eight Essays — One Volume
            </p>

            {/* Description */}
            <div className="text-left max-w-2xl mx-auto space-y-5 mb-12">
              {bookDescription.split('\n\n').map((paragraph, i) => (
                <p
                  key={i}
                  className={`font-sans font-light leading-relaxed text-medium-gray ${
                    paragraph.startsWith('"') ? 'italic text-charcoal text-center text-lg' : 'text-base sm:text-[17px]'
                  }`}
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Buy button */}
            <a
              href="https://www.amazon.com/AUTHENTICALLY-40-Full-8-Essay-ebook/dp/B0H48J982G/ref=sr_1_3?crid=3N99K2X2JY8NO&dib=eyJ2IjoiMSJ9.0mxn5crxWLMWJyJdH81BVoft2oWFWJDKJhTtDp5yBcEQ2r4g_vhGNFhKJOZMRGDNn8BgrnCHOcCcu4cWZO_DmI3dw3po86g8tm-XzuTk1opmJElSGvu_fJhgBp9QqEaSWhetO9Kdx6hZ1weao0U36H_OTSuZUTP9J0OggojclVRFdR9F-XEvnS01No3ulwJ2iOTulHeb29AhFS0_TmV2hz_sBEjzkJORegYBusYQZ4Q.xErhq_khfJf-AWOoZmELrHb85qMBYyt8ofjTdb_4a6k&dib_tag=se&keywords=karly+v&qid=1782673554&sprefix=karly%2Caps%2C575&sr=8-3"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-3 px-8 py-3.5 bg-charcoal text-off-white font-sans font-light text-sm tracking-[0.1em] uppercase hover:bg-medium-gray transition-all duration-300 ease-out"
            >
              <span>Purchase the Collection</span>
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* ── Divider ── */}
      <div className="container-content">
        <div className="max-w-6xl mx-auto">
          <hr className="border-pale-gray/40 my-4" />
        </div>
      </div>

      {/* ── Individual essays grid ── */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="container-content">
          <div className="max-w-6xl mx-auto">
            <p className="font-sans text-xs font-light tracking-[0.2em] uppercase text-medium-gray mb-14 text-center">
              Individual Essays
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
              {essays.map((essay, index) => (
                <div
                  key={essay.id}
                  className={`transition-all duration-300 ease-out ${
                    isVisible
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-12'
                  }`}
                  style={{
                    transitionDelay: isVisible ? `${800 + index * 120}ms` : '0ms'
                  }}
                >
                  <EssayCard
                    title={essay.title}
                    description={essay.description}
                    summary={essay.summary}
                    image={essay.image}
                    purchaseUrl={essay.purchaseUrl}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Essays;
