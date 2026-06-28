import React, { useEffect, useRef, useState } from 'react';

const Notes = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedNote, setSelectedNote] = useState(null);

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

  const notes = [
    {
      id: 15,
      title: "Female Body, it used to be less profitable to cure",
      date: "6 May 2026",
      content: `It came to my attention this morning how female sexual health used to be a lot harder to undestand and treat since they weren't really funding a lot of case studies around it.

I guess one can assume that people were under the impression that our sexual health and satisfaction was purely less important that any other medical issue.

When the truth is, men used to be the big earners, so whatever men were spending money on, is what was being invested in.

It's only in more recent years that they discovered that there is no difference between a clitoral and a vagimal orgasm - that the clitoris is actualy one large organ that goes all around the vagina.

They did this by dissecting a female corpse.

But anatomy studies have been done for ages - why only now look at that?

Well, I'm pretty sure that medical and drug companies would only investigate what made the big bucks. And now, women have caught up to the men.

A newer emerging market that should be catered to.

Kind of sad.`
    },
    {
      id: 14,
      title: "Her Mythology",
      date: "1 May 2026",
      content: `I used to carry a quiet kind of pride in being the female epitome of the emotional fugitive. A storm in a body. A spark without anchor—an enigma. I liked being seen that way. And that is where the psychological loop closes in on itself.

This type of woman seems unfazed by what unsettles other women. She presents as needing nothing from anyone. She numbs her emotions and her true desires, because the last thing she wants is to be fully seen.

Because being seen means something real could be asked for—and denied.

She becomes the "cool girl." There's a pull to her. Aliveness, urgency, intensity. Passion without attachment.

I lived there for years. I numbed myself with alcohol and drugs. It allowed me to say and do things without having to stand behind them.

I chose men I believed were disposable.

Not because they were—but because I needed them to be.

I told myself they couldn't hurt the way I could.

I'm no longer sure that was true. I think I needed it to be.

In the process, I left a trail of burned bridges behind me—dozens of men who won't even take my calls now.

There is also a certain kind of man who is drawn to this version of a woman. She becomes the perfect alibi for his own instability. As she gravitates toward intensity and escape, she is often used by the very men she believes she is outmaneuvering.

But that isn't the whole story.

I did meet men who were willing to love me as I was.

I just didn't let myself love them back.

Not fully. Not in a way that would cost me control.

Because the parts of me that needed something—softness, dependence, sensitivity—were the parts I kept out of reach.

If they were never fully seen, they could never be rejected.

If I never fully loved, I could never be left with nothing.

So I stayed in control.

And control kept me intact.

It also kept me alone.

There's no excuse for breaking a heart. Not a single one.

I can explain it now, but explanation doesn't undo it.

If this reaches any one of you… I'm sorry.`
    },
    {
      id: 13,
      title: "The Cost Of Saying It",
      date: "10 April 2026",
      content: `I know what would happen if I said it.

Not exactly.

Not in detail.

But enough.

The shift in the air.

The change in tone.

The way something light

becomes something else.

He might get defensive.

Or quiet.

Or distant.

He might hear something I didn't mean.

Turn it into something bigger.

Something heavier.

And suddenly, the day is different.

Not ruined.

But not what it was.

Not easy anymore.

So I weigh it.

This small feeling

against everything else.

The good parts.

The closeness.

The version of us that works

without effort.

And I choose.

I choose to keep that intact.

I choose the version of the day

where nothing is wrong.

Where we're still us

in the way I recognise.

So I don't say it.

I hold it.

Because saying it feels like risking

something bigger than the moment.

Not just the conversation.

The connection.

The ease.

The idea that this works

the way it always has.

So I stay quiet.

Not because I don't feel it.

Not because it doesn't matter.

But because I'm trying

to protect something.

Even if what I'm protecting

is already starting to change.`
    },
    {
      id: 12,
      title: "If I Fall Asleep Now",
      date: "10 April 2026",
      content: `I don't remember the last time I felt like this.

At ease.

Settled.

Not because everything is perfect.

But because I'm not waiting for it to be.

There was a time when I would have turned this into something else.

A feeling to examine.

A state to understand.

Something to pick apart until I could explain it.

But I don't need to explain it anymore.

I don't need to justify why I feel good.

I don't need to check if it's real.

I don't need to worry about when it will leave.

I can just be here.

In this.

Without needing to name it.

Without needing to hold it.

Without needing to make sure it stays.

If I fall asleep now,

it won't be because I'm escaping.

It won't be because I can't handle being awake.

It will be because there's nothing left to solve.

Nothing left to figure out.

Nothing left to do

but rest.`
    },
    {
      id: 11,
      title: "Cut Off",
      date: "10 April 2026",
      content: `There's a moment where it just stops.

The conversation.

The flow.

The feeling that it was going somewhere.

It doesn't always end dramatically.

Sometimes it just… fades.

One person checks out.

The other keeps going for a moment longer.

Then they notice.

Then they stop too.

And suddenly, you're in a different kind of silence.

Not the comfortable kind.

Not the kind that means you're together.

The kind that means you're apart.

Even if you're in the same room.

I've been in that moment so many times.

I've felt the shift.

I've seen the change in someone's eyes.

I've heard the way their voice changes

when they've already left the conversation.

And I used to think it was my fault.

I used to think I did something wrong.

I used to try to fix it.

To bring it back.

To make it work again.

But sometimes it's not about fixing.

Sometimes it's about recognizing when something is over.

When the connection has been cut.

When the energy has shifted.

When the moment has passed.

And the hardest part isn't the ending.

It's the space between.

The time where you're still there

but it's already gone.

The time where you're still speaking

but no one is listening.

The time where you're still trying

but right now, it hasn't.

And I'm not going to pretend that it has.`
    },
    {
      id: 10,
      title: "I Still Choose You",
      date: "10 April 2026",
      content: `It's not as easy as it was.

Not as automatic.

Not as simple.

There are moments where I feel it.

The distance.

The difference.

The way something that used to feel effortless

now requires something.

And in those moments,

I have a choice.

I can focus on what's changed.

Or I can focus on what's still here.

I can focus on the gap.

Or I can focus on the ground beneath it.

I can focus on what's missing.

Or I can focus on what remains.

And I choose.

I still choose you.

Not because it's perfect.

Not because it's unchanged.

Not because it's effortless.

But because it's real.

Because it's worth it.

Because even when it's hard,

it's still good.

And I'm still here.

And I'm still choosing.

And that means something.

Even if it doesn't look like it used to.

Even if it doesn't feel like it used to.

Even if everything around it has shifted.

The choice remains.

I still choose you.`
    },
    {
      id: 9,
      title: "The Violence in a Smile",
      date: "6 April 2026",
      content: `There is a particular kind of violence in a smile that doesn't reach the eyes.

Not the cruelty of someone who wants to hurt you.

Something quieter.

Something more subtle.

The violence of someone who doesn't want to be there.

The violence of someone who has already left.

The violence of someone who is performing

while checking the time.

I've been on both sides of this.

I've been the one smiling through it.

I've been the one receiving it.

And neither side feels good.

On the giving end, there's a hollowing out.

A slow drain of authenticity.

A moment where you betray yourself

to keep the peace.

To keep the connection.

To keep the appearance of something

that no longer exists.

On the receiving end, there's a different kind of harm.

A quiet knowing.

A sense that you're being managed.

A feeling that you're in the room,

but not really in the room.

And the worst part is how ordinary it is.

How common.

How accepted.

We do it all the time.

We smile when we don't mean it.

We agree when we don't feel it.

We stay when we've already left.

And we call this being polite.

We call this being professional.

We call this being appropriate.

But I'm starting to wonder

if the cost is higher than we think.

If the violence in that smile

is doing more damage than we can see.

If the betrayal of ourselves

is accumulating in ways we can't undo.

So maybe the bravest thing

is not to smile through it.

But to be honest enough

to let the smile fall.`
    },
    {
      id: 8,
      title: "Everybody wants to be seen…right?",
      date: "5 April 2026",
      content: `I think we've misunderstood this.

I think we've taken "being seen"

and turned it into something else.

Something performative.

Something transactional.

Something that requires an audience.

But being seen isn't about being watched.

It's about being understood.

It's about being received.

It's about being met.

And sometimes,

that happens in complete privacy.

Sometimes,

that happens when no one is watching.

Sometimes,

that happens in the quietest moments,

where the only witness is yourself.

I used to think I needed to be seen by others

to feel real.

To feel valid.

To feel like I existed.

But I'm starting to realize

that the most important seeing

is the one I do for myself.

The one where I acknowledge what's actually there.

The one where I don't look away.

The one where I don't pretend.

The one where I meet myself

with honesty instead of performance.

And from that place,

the external seeing matters less.

Not because it doesn't matter at all.

But because it's no longer the foundation.

It's no longer the thing I need

to feel okay.

I can be seen by myself first.

And that changes everything.`
    },
    {
      id: 7,
      title: "When You're in the Thick of It",
      date: "31 March 2026",
      content: `When you're in the thick of it,

there's no perspective.

There's no distance.

There's no way to see the shape of it.

You're just in it.

Moving through it.

Trying to survive it.

And in that moment,

every piece of advice feels like a betrayal.

Every "it will get better" feels like a dismissal.

Every "look at the bright side" feels like violence.

Because you're not on the bright side.

You're in the dark.

And you need someone to meet you there.

Not to pull you out.

Not to fix it.

Not to make it okay.

But to sit with you in the not-okay.

To acknowledge that it's hard.

To validate that it hurts.

To be present with the reality of it

without trying to change it.

And that's the hardest thing for most people.

Because most people can't sit with discomfort.

They can't sit with pain.

They can't sit with not knowing.

So they try to fix.

They try to solve.

They try to make it better.

And in doing so,

they accidentally invalidate

the very thing you need them to witness.

So here's what I'm learning:

When someone is in the thick of it,

don't try to get them out.

Just be with them while they're in it.

That's enough.

That's actually everything.`
    },
    {
      id: 6,
      title: "Both, And More. Part 2",
      date: "29 March 2026",
      content: `I think the problem with most advice

is that it tries to resolve the tension.

It picks a side.

It tells you which one is right.

It tells you which one to choose.

But life isn't like that.

Life is both, and more.

You can love someone and still need to leave.

You can be happy and still feel grief.

You can be confident and still be afraid.

You can know what to do and still not do it.

You can be healing and still be broken.

These aren't contradictions.

They're complexity.

They're the texture of actual experience.

The version of life where everything is resolved

isn't real life.

It's a fantasy.

A simplified version

that doesn't exist outside of stories.

Real life is messy.

Real life is overlapping.

Real life is holding things

that don't fit together neatly.

And the maturity comes

not from resolving the tension,

but from being able to hold it.

From being able to say,

"I don't know."

From being able to say,

"It's complicated."

From being able to say,

"Both are true."

And to not need that to be a problem.

To not need to pick one.

To not need to make it make sense.

Just to let it be what it is.

Complex.

Overlapping.

Both, and more.`
    },
    {
      id: 5,
      title: "When You Do It Right… and Nothing Happens",
      date: "27 March 2026",
      content: `There's a particular kind of disappointment

that comes from doing everything right

and still not getting the result.

It's not the disappointment of failure.

Failure makes sense.

You can learn from failure.

You can adjust from failure.

But this…

This is different.

This is where you followed the rules.

You did the work.

You put in the effort.

And nothing changed.

Or worse,

it went backward.

And that's the moment where the story breaks.

Because the story was always:

If you do X, you'll get Y.

If you work hard, you'll succeed.

If you're good, you'll be rewarded.

If you show up, you'll be seen.

But sometimes,

that's not how it works.

Sometimes you do everything right

and the universe doesn't respond.

Sometimes you do everything right

and people don't change.

Sometimes you do everything right

and the outcome is the same.

And in that moment,

you have to make a choice.

Do you keep doing it anyway?

Do you keep showing up?

Do you keep trying?

Even when the formula is broken?

Even when the guarantee is gone?

Even when there's no evidence that it matters?

This is where integrity lives.

Not in the easy moments,

where everything lines up.

But in the hard moments,

where you do it anyway.

Not because it will work.

But because it's who you are.

And that has to be enough.`
    },
    {
      id: 4,
      title: "The Past Doesn't Ask Permission",
      date: "19 March 2026",
      content: `The past doesn't ask permission

before it shows up.

It doesn't check if you're ready.

It doesn't wait for the right moment.

It just arrives.

Sometimes through a smell.

Sometimes through a song.

Sometimes through a phrase someone says.

And suddenly,

you're back there.

Not physically.

But emotionally.

In the feeling of it.

In the memory of it.

In the body of it.

And there's no preparing for this.

There's no controlling when it happens.

There's no choosing what triggers it.

It just does.

And the challenge isn't to prevent it.

The challenge is to meet it differently.

To not get lost in it.

To not let it take over.

To not let it rewrite the present.

Because the past is real.

But it's not current.

It happened.

But it's not happening now.

And that distinction is everything.

You can feel it without becoming it.

You can remember it without reliving it.

You can acknowledge it without surrendering to it.

The past doesn't ask permission

before it shows up.

But you don't have to give it everything when it does.`
    },
    {
      id: 3,
      title: "Petrichor",
      date: "12 March 2026",
      content: `There's a word for the smell of rain on dry earth.

Petrichor.

I learned it recently

and it's been living in me ever since.

Not just the word itself,

but what it represents.

The idea that there's a name

for something so specific.

Something so sensory.

Something so particular.

That the world has been paying attention.

That there are people who noticed

and named

and recorded

this exact experience.

And I find this comforting.

It makes me feel less alone.

It makes me feel like my small observations matter.

Like the things I notice

have been noticed before.

Like the way I experience the world

is part of a larger pattern.

There's a word for the smell of rain on dry earth.

There's a word for the feeling of missing someone you haven't met yet.

There's a word for the specific kind of tiredness

that comes from emotional work.

We have language for so much.

And having the language

changes the experience.

It validates it.

It connects it.

It makes it real in a different way.

So I'm paying attention to the things I don't have words for yet.

The moments I can't name.

The feelings I can't describe.

The experiences I can't quite capture.

Because somewhere,

someone is probably working on the word for it.

And when I find it,

it will feel like coming home.`
    },
    {
      id: 2,
      title: "Silence in the Social Media Realm",
      date: "12 March 2026",
      content: `I've been thinking about silence online.

About what it means to not post.

About what it means to not share.

About what it means to keep things to yourself.

We live in a time where silence is read as absence.

Where not posting is read as not creating.

Where not sharing is read as not existing.

But that's not true.

Silence isn't absence.

Silence is a choice.

And sometimes,

it's the most creative choice you can make.

There's a pressure to document everything.

To share every thought.

To broadcast every moment.

As if your worth is measured by your visibility.

As if your value is tied to your output.

As if you don't exist unless you're being seen.

But I'm starting to resist this.

I'm starting to protect my silence.

I'm starting to keep things for myself.

Not because I have nothing to share.

But because not everything needs to be shared.

Some things are for me.

Some things are for the people I'm actually with.

Some things are for the work itself.

And none of those things need to be posted.

None of those things need to be validated by strangers.

None of those things need to be turned into content.

They can just be.

They can just exist.

They can just be lived.

And in that privacy,

something else happens.

The work becomes deeper.

The connections become more real.

The life becomes more mine.

It wasn't a dramatic betrayal. It was incremental, practical, even understandable. This is, after all, how we are wired—to be received, to be included, to feel that what we offer lands somewhere outside of us. And when it doesn't, we adjust. Slightly, then a little more. Not because we are inauthentic, but because we are human.

But there is a quiet cost to that. Because eventually, if you are not careful, the thing you were trying to share becomes the thing you keep postponing, and the silence you begin to feel is no longer coming from the outside.

When I make something, I put myself in it. And when I share it, I'm not just offering the work—I'm exposing something of myself. Which means the risk is never neutral. It's not just that the work might not be received; it's that I might feel rejected through it.

For a long time, whether I realised it or not, I chose to minimise that risk—not by stopping, but by shaping what I offered into something more easily received, something more predictable, more reliable, more likely to land. There is nothing inherently wrong with that. It kept me working, it kept me connected, it kept the music going. But it also came at a cost, because over time, the work that was actually mine became the work I kept postponing.

The silence I noticed online wasn't unfamiliar. It was echoing something I had been creating myself.

So this time, the decision is different. Not about forcing a response or trying harder to be seen, but about what I choose to no longer postpone. Some things land immediately; others take years to find the people who need them. That part was never mine to control.

But this part is.

I will stop postponing the work that is actually mine.`
    },
  ];

  const handleNoteClick = (note) => {
    setSelectedNote(note);
  };

  const closeNote = () => {
    setSelectedNote(null);
  };

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

          <div className={`max-w-4xl mx-auto space-y-8 transition-all duration-1000 ease-out delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            {notes.map((note) => (
              <div
                key={note.id}
                onClick={() => handleNoteClick(note)}
                className="group cursor-pointer bg-white p-8 sm:p-10 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="font-sans text-sm text-medium-gray tracking-widest">
                    {note.id}
                  </span>
                  <span className="font-sans text-sm text-medium-gray">
                    {note.date}
                  </span>
                </div>
                <h2 className="font-serif text-2xl sm:text-3xl font-light text-charcoal mb-4 leading-snug group-hover:text-medium-gray transition-colors">
                  {note.title}
                </h2>
                <p className="font-sans text-base text-medium-gray leading-relaxed line-clamp-3">
                  {note.content.split('\n').filter(line => line.trim()).slice(0, 3).join(' ')}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedNote && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50" onClick={closeNote}>
          <div
            className="bg-white max-w-3xl w-full max-h-[90vh] overflow-y-auto p-8 sm:p-12 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeNote}
              className="absolute top-4 right-4 text-charcoal hover:text-medium-gray transition-colors text-2xl"
            >
              ×
            </button>
            <div className="mb-8">
              <span className="font-sans text-sm text-medium-gray tracking-widest block mb-2">
                {selectedNote.id}
              </span>
              <span className="font-sans text-sm text-medium-gray block mb-6">
                {selectedNote.date}
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-light text-charcoal mb-8 leading-snug">
                {selectedNote.title}
              </h2>
            </div>
            <div className="font-sans text-base text-charcoal leading-relaxed whitespace-pre-line">
              {selectedNote.content}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Notes;
