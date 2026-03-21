import React, { useEffect, useRef, useState } from 'react';

const Notes = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
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

  const notes = [
    {
      id: 1,
      title: "Silence in the Social Media Realm",
      date: "12 March 2026",
      content: `I gave it at least two days before checking the response. The comments. The likes. A larger part of me feels more detached from that validation these days. For years it was simply the mechanism—the only obvious way to let people know that something had been made, something I hoped might be read or listened to. If you create something and release it into the world, how else do you announce its existence?

But. The. Silence.
The strange quiet of the social media realm, where a piece of work can pass through dozens of screens and still leave no trace of having been met.
It feels different from criticism. Criticism at least acknowledges that something landed somewhere. Silence is stranger. As if the piece passed briefly across a few screens—seen, perhaps, but not held. Not engaged with.
Indifference is a particular kind of rejection to swallow. Irrelevance even more so.
Especially considering the theme of the essay itself.
Authentically 40+: On Turning Forty in a Youth-Obsessed World.
I had prepared myself for disagreement, for debate, even for dismissal. What I hadn't quite anticipated was the familiar sensation of screaming in a nightmare while no sound comes out.
It reminded me of another silence I know well: the feeling I carried for years while chasing applause on stage. The slow realization that, somewhere along the way, I had begun compromising pieces of myself in order to keep the music going. Eventually the performances themselves became heavy. Sometimes unbearable.
Silence, as it turns out, carries its own kind of weight.

And in a strange way, it felt oddly appropriate for an essay about visibility in a youth-obsessed world.

Because if I'm honest, social media was never meant to be the measuring stick for something like this. It was simply the loudspeaker I had available. A way to announce that the work exists.
But the value of the work cannot be determined by the speed or enthusiasm of the response to it. Algorithms are not critics. And silence is not always judgment.
The truth is simpler than that.
The only part of the process that belongs to me is the making of the work. The thinking, the writing, the shaping of an idea into something that can live outside my head. And then the small act of placing it into the world.
What happens after that belongs to other people. Or to time.
Some things land immediately. Others take years to find the people who need them.
Half a year ago, I promised myself that I would never perform for the algorithm again.
So I won't.
Upwards and onwards, if I may be so clichéd.
And never stop trying.
All I can do is make the work, and put it out.`
    },
    {
      id: 2,
      title: "Petrichor",
      date: "12 March 2026",
      content: `A Storm Outside the Mind

When a storm moves through the sky, my mind grows quiet. I have always loved thunderstorms.

Not the soft drizzle people describe as peaceful, but the real storms — the kind where the sky darkens suddenly and the air changes. Heavy rain. Lightning cutting across the sky. Thunder rolling somewhere above the houses.

Most of the time my mind is busy. Observations rarely stay loose for long before they begin arranging themselves into something structured.

Experiences become sentences. Thoughts become essays or songs. Meaning has a way of forming whether I intend it to or not.

But when a storm arrives, that impulse loosens its grip. The rain occupies the sky. Thunder rolls through the air. And for a while the constant movement of thought slows down enough that I can simply sit inside the moment instead of trying to explain it.

I noticed this long before I had language for it. When I was a teenager, my bedroom was on the top floor of the house where I lived with my parents. It was only a two-story house, but my room felt high enough that the sky seemed very close. The room was large, with a balcony outside a sliding glass door. From there I could see the roofs of the surrounding houses and a wide stretch of open sky above them.

When storms rolled in, I would open the curtains and lie on my bed facing the glass door.

The room would become completely dark.

Then lightning would strike.

For a single second the entire world appeared — every house, every tree, every leaf suddenly sharp and illuminated. The sky would flash bright enough to fill the room, and then the light would vanish again just as quickly. Darkness returned.

A few seconds later the thunder arrived.

That pause between the lightning and the thunder was always my favorite moment. The sky had already revealed itself, but the sound had not yet caught up.

Flash.

Silence.

Then the long rolling sound of the storm moving overhead.

Even now, whenever I have the chance, I watch storms.

Sometimes I step into them.

I have been sitting in restaurants when the rain begins and simply walked outside into the street, letting the rain fall without worrying about getting wet. There is something strangely freeing about that moment — as if adulthood pauses long enough to allow a simple impulse.

Other times I stay inside. I sit near a window and watch the rain while wrapped in a blanket — even in summer, when the air cools just enough to make the room feel softer. Storms change the atmosphere of everything. The light shifts. The temperature drops. The world slows down.

And then there is the smell.

There is even a word for it.

Petrichor.

The word comes from ancient Greek — petra, stone, and ichor, the fluid said to run through the veins of the gods. The blood of the earth, rising after rain.

Storms seem to carry a kind of release with them. The air builds pressure all day. The sky grows heavy. And then the rain finally falls. Something in the world lets go.

Storms feel familiar because they form the same way thoughts do: pressure first, then release.

For a while I don't feel the need to explain anything. I can sit quietly, watching the sky flash and listening to the thunder move across it, without trying to capture the moment in words.

The storm is already complete. It does not need interpretation. It simply arrives, moves through the sky with its own rhythm, and passes again.

And for a little while, sitting inside that rhythm, my mind rests.

When the storm moves through the sky, my mind no longer has to be one.`
    }
  ];

  return (
    <div className="min-h-screen bg-off-white">
      <section className="py-20 sm:py-24 lg:py-32">
        <div className="container-content">
          <div className={`max-w-4xl mx-auto text-center mb-32 transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-light text-charcoal mb-8 leading-tight tracking-tight">
              Notes
            </h1>
            <p className="font-sans text-xl sm:text-2xl font-light text-medium-gray leading-relaxed tracking-[0.02em] max-w-3xl mx-auto">
              Short-form pieces. Fragments, reflections, and ideas that don't need to become essays.
            </p>
          </div>
          
          <div 
            ref={sectionRef}
            className={`max-w-3xl mx-auto transition-all duration-1000 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
            style={{
              transitionDelay: '200ms'
            }}
          >
            <div className="space-y-12">
              {notes.map((note, index) => (
                <article
                  key={note.id}
                  className={`group cursor-pointer transition-all duration-300 ease-out ${
                    isVisible 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-8'
                  }`}
                  style={{
                    transitionDelay: isVisible ? `${400 + index * 150}ms` : '0ms'
                  }}
                >
                  <a href="#" className="block py-8 border-b border-pale-gray/20 hover:border-charcoal/30 transition-all duration-300 ease-out">
                    <div className="flex items-start justify-between space-y-4">
                      <div className="flex-1">
                        <span className="font-sans text-xs text-medium-gray/50 tracking-[0.15em] uppercase block mb-4">
                          Note {String(note.id).padStart(2, '0')}
                        </span>
                        <h3 className="font-serif text-2xl sm:text-3xl font-light text-charcoal leading-tight group-hover:text-accent/90 group-hover:translate-x-1 transition-all duration-300 ease-out mb-4">
                          {note.title}
                        </h3>
                        {note.date && (
                          <time className="font-sans text-xs text-medium-gray/40 tracking-[0.05em] block mb-6">
                            {note.date}
                          </time>
                        )}
                        {note.content && (
                          <div className="font-sans text-sm text-medium-gray/80 leading-relaxed font-light tracking-[0.01em] space-y-4 prose prose-sm max-w-none">
                            {note.content.split('\n\n').map((paragraph, pIndex) => (
                              <p key={pIndex} className="text-justify">
                                {paragraph}
                              </p>
                            ))}
                          </div>
                        )}
                      </div>
                      <div className="opacity-0 group-hover:opacity-50 transition-opacity duration-300 ease-out">
                        <span className="text-accent text-sm font-light">→</span>
                      </div>
                    </div>
                  </a>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Notes;
