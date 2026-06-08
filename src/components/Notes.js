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
      id: 21,
      title: "Female Body, it used to be less profitable to cure",
      date: "6 May 2026",
      content: `It came to my attention this morning how female sexual health used to be a lot harder to undestand and treat since they weren’t really funding a lot of case studies around it.

I guess one can assume that people were under the impression that our sexual health and satisfaction was purely less important that any other medical issue.

When the truth is, men used to be the big earners, so whatever men were spending money on, is what was being invested in.

It’s only in more recent years that they discovered that there is no difference between a clitoral and a vagimal orgasm - that the clitoris is actualy one large organ that goes all around the vagina.

They did this by dissecting a female corpse.

But anatomy studies have been done for ages - why only now look at that?

Well, I’m pretty sure that medical and drug companies would only investigate what made the big bucks. And now, women have caught up to the men.

A newer emerging market that should be catered to.

Kind of sad.`
    },
    {
      id: 20,
      title: "Vertical, Verbatim",
      date: "3 May 2026",
      content: `My dear friend, you deliver the truth direct and unfiltered.

It’s a pleasure like few others to converse with you.

As human beings, we feel the reluctance to really be seen by another.

But it keeps us sheltered.

It always has.

My friend, confident,

Vertical, Verbatim.

Every word falls clean between us.

No hidden edge, no aftertaste, no shifting ground beneath a phrase.

Vertical, Verbatim.

It’s calm, it’s clear, it doesn’t bend.

We have a rare and easy trust.`
    },
    {
      id: 19,
      title: "Her Mythology",
      date: "1 May 2026",
      content: `I used to carry a quiet kind of pride in being the female epitome of the emotional fugitive. A storm in a body. A spark without anchor—an enigma. I liked being seen that way. And that is where the psychological loop closes in on itself.

This type of woman seems unfazed by what unsettles other women. She presents as needing nothing from anyone. She numbs her emotions and her true desires, because the last thing she wants is to be fully seen.

Because being seen means something real could be asked for—and denied.

She becomes the “cool girl.” There’s a pull to her. Aliveness, urgency, intensity. Passion without attachment.

I lived there for years. I numbed myself with alcohol and drugs. It allowed me to say and do things without having to stand behind them.

I chose men I believed were disposable.

Not because they were—but because I needed them to be.

I told myself they couldn’t hurt the way I could.

I’m no longer sure that was true. I think I needed it to be.

In the process, I left a trail of burned bridges behind me—dozens of men who won’t even take my calls now.

There is also a certain kind of man who is drawn to this version of a woman. She becomes the perfect alibi for his own instability. As she gravitates toward intensity and escape, she is often used by the very men she believes she is outmaneuvering.

But that isn’t the whole story.

I did meet men who were willing to love me as I was.

I just didn’t let myself love them back.

Not fully. Not in a way that would cost me control.

Because the parts of me that needed something—softness, dependence, sensitivity—were the parts I kept out of reach.

If they were never fully seen, they could never be rejected.

If I never fully loved, I could never be left with nothing.

So I stayed in control.

And control kept me intact.

It also kept me alone.

There’s no excuse for breaking a heart. Not a single one.

I can explain it now, but explanation doesn’t undo it.

If this reaches any one of you… I’m sorry.`
    },
    {
      id: 18,
      title: "What You Think I Meant",
      date: "10 April 2026",
      content: `It doesn’t start with what was said.

It starts with how it lands.

A tone.

A pause.

Something slightly off.

And in that space,

you decide what it meant.

Not slowly.

Not carefully.

Instantly.

You don’t check it.

You don’t question it.

You move with it.

Your body shifts first.

Then your voice follows.

And now you’re responding

to something that was never actually said.

They feel it.

They react to your reaction.

And suddenly you’re both inside something

that didn’t exist a few seconds ago.

It escalates quickly.

Because now it’s not about the words.

It’s about what the words meant.

Except you’re not working with the same meaning.

So you push.

They push back.

Or they shut down.

Or you do.

And somewhere underneath it,

there’s a simple gap.

A moment where nothing was confirmed.

Nothing was clear.

Just filled.

Too fast.

Because sitting in that space,

not knowing,

feels worse than being wrong.

So you choose certainty.

And you build on it.`
    },
    {
      id: 17,
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

He might hear something I didn’t mean.

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

Where we’re still us

in the way I recognise.

So I don’t say it.

I hold it.

Because saying it feels like risking

something bigger than the moment.

Not just the conversation.

The connection.

The ease.

The idea that this works

the way it always has.

So I stay quiet.

Not because I don’t feel it.

Not because it doesn’t matter.

But because I’m trying

to protect something.

Even if what I’m protecting

is already starting to change.`
    },
    {
      id: 16,
      title: "Nothing Is Wrong",
      date: "10 April 2026",
      content: `There’s a moment where something feels off.

Not dramatically wrong.

Not broken.

Just… not right.

You feel it in your body first.

A tightness.

A restlessness.

A kind of internal noise you can’t quite locate.

And almost immediately, your mind steps in to solve it.

What’s wrong?

Why do I feel like this?

What caused it?

You start scanning.

Was it something I said?

Something they did?

Something I didn’t do?

The search begins.

Because the assumption is simple:

If it feels wrong, something must be wrong.

But that’s not always true.

Sometimes nothing is wrong.

Sometimes your body is just processing.

Catching up.

Moving something through that hasn’t had space to move.

But the moment you label it as a problem,

you interrupt the process.

Now it’s no longer a feeling passing through.

It’s a situation to fix.

And once you start fixing,

you start interfering.

You tighten around it.

You analyze it.

You try to resolve it.

And in doing so,

you give it weight it didn’t have before.

The feeling that might have moved quietly

now stays.

Not because it was important,

but because you made it so.

So sometimes the most accurate response is the simplest one:

Nothing is wrong.

Not as denial.

Not as avoidance.

But as restraint.

A decision not to turn every internal shift

into a problem that needs a solution.

Because not everything you feel

is asking to be understood.

Some things are just passing through.`
    },
    {
      id: 15,
      title: "It Was Easier When We Didn’t Have To Try",
      date: "10 April 2026",
      content: `It used to be easy.

Not perfect.

Not dramatic.

Just… easy.

Things landed the way they were meant.

Words didn’t need explaining.

You didn’t have to check meaning.

You just knew.

Or it felt like you did.

There was no effort in it.

No strategy.

No careful timing.

You spoke, and it worked.

So you built something on top of that.

An idea.

That this is what it’s supposed to be like.

Natural.

Aligned.

Effortless.

And for a long time, it was.

Until it wasn’t.

Now there are pauses where there weren’t before.

Misfires.

Moments that don’t quite land.

And suddenly, something that never needed attention

needs it.

But there’s no language for it.

Because you never had to build it.

You never had to say,

“That didn’t feel right.”

You never had to check,

“What did you mean by that?”

So now, when something small shifts,

you hesitate.

Because speaking feels like breaking something

that used to run on its own.

So you leave it.

You let it pass.

You tell yourself it’s not worth it.

That it’s small.

That it’ll settle.

That saying something might make it worse.

And maybe it would.

But not saying anything

does something quieter.

It slowly changes the shape of the space between you.

Not all at once.

Just enough that you start adjusting to it.

Working around it.

Staying just slightly quieter than you were before.

Until one day,

it’s no longer effortless.

And you don’t know when that changed.`
    },
    {
      id: 14,
      title: "If I Fall Asleep Now",
      date: "10 April 2026",
      content: `It starts as tiredness.

Simple, physical, honest tiredness.

The kind your body knows how to solve on its own.

But then something shifts.

You look at the clock.

2:00.

If I fall asleep now, I can still get five hours.

3:00.

If I fall asleep now, I can still get four.

At some point, sleep stops being something your body does

and becomes something you are trying to achieve.

And that’s when it breaks.

Because now you’re not resting.

You’re calculating.

You’re negotiating.

You’re managing an outcome.

Your body is tired,

but your mind is working overtime to secure the result.

Sleep becomes performance.

And like anything that becomes performance,

it starts to fail under pressure.

The irony is quiet, but brutal:

The more you need sleep,

the less available it becomes.

Not because your body can’t do it,

but because you’ve stepped in to help.

And help, in this case,

is the problem.

So eventually, there’s only one way out of it.

You stop trying to sleep.

Not as a trick.

Not as reverse psychology.

But as a small surrender.

You lie there, not to sleep,

but simply to be.

And somewhere in that absence of effort,

your body remembers how.`
    },
    {
      id: 13,
      title: "Cut Off",
      date: "10 April 2026",
      content: `It’s not a decision I made tonight.

That’s the thing.

There’s no dramatic moment where I stood up and said, I’m done.

No speech. No final message. No slammed door.

It’s quieter than that.

We are cut off.

Not because I chose distance.

Because connection never fully existed in the way I needed it to.

And I kept reaching anyway.

I kept thinking there was a version of this where we would meet —

where I would be seen properly,

where my thinking wouldn’t be reduced,

where I wouldn’t have to translate myself just to be understood.

But that version never arrived.

And hoping that it would… is exhausting.

Tonight it showed up again, in a small, almost insignificant way.

A letter. A message. Words written with certainty.

But underneath it was something else.

Something familiar.

A reminder of a world I don’t live in anymore.

A framework that assumes I am missing something.

A quiet insistence that I need to be corrected, guided, brought back.

And I don’t.

Not because I’m rebellious.

Not because I’m avoiding anything.

But because I’ve already been there.

I’ve already lived inside that certainty.

I’ve already asked those questions.

And I left it consciously.

What’s difficult isn’t the difference.

It’s the misreading.

It’s being seen as something smaller than I am.

Simpler than I am.

Less considered than I am.

It’s knowing that no matter how clearly I think,

how responsibly I approach these things,

how carefully I choose what I believe—

it will still be interpreted through a lens that cannot see it.

That’s the part that hurts.

Not disagreement.

Disconnection.

And maybe that’s the truth I keep circling:

You can’t force connection where there is no shared ground.

You can’t think your way into being understood by someone who isn’t asking the same questions.

You can’t build a bridge alone.

So what’s left?

Not clarity. Not peace. Not yet.

Just this.

Sitting in it.

Feeling the weight of it.

Wanting it to be different and knowing it isn’t.

Maybe something will settle later.

Maybe a kind of stillness will come.

But right now, it hasn’t.

And I’m not going to pretend that it has.`
    },
    {
      id: 12,
      title: "What I Didn’t Say",
      date: "10 April 2026",
      content: `It lands in the body first.

Low.

Uncomfortable.

A quiet kind of wrong.

You feel it.

Immediately.

But you don’t say anything.

Not yet.

You wait.

You try to understand it first.

Try to make sure you’re not overreacting.

Try to get it right.

So you stay quiet.

And while you’re quiet,

something else happens.

The feeling starts to grow.

It picks up meaning.

It gathers weight.

What was small

is no longer small.

Now it has context.

A story.

A direction.

By the time you speak,

you’re not speaking from the moment anymore.

You’re speaking from everything

that built on top of it.

And it comes out different.

Heavier.

Sharper.

Harder to place.

And now it sounds like more than it was.

Because it is.

Not because of what happened,

but because of what wasn’t said

when it first arrived.

So it sits there instead.

In the body.

In the throat.

Half-formed.

Half-held.

Waiting for a moment

that would have been easier

when it was still small.`
    },
    {
      id: 11,
      title: "I Chose Not To Say It",
      date: "10 April 2026",
      content: `I felt it.

Clear.

Immediate.

Not confusing.

Something in me knew

that something had just gone slightly off.

And there was a moment.

A small one.

Where I could have said it.

Not dramatically.

Not perfectly.

Just enough.

But I didn’t.

Not because I didn’t know how.

Not because I needed more time.

I knew.

I chose not to.

I told myself it wasn’t worth it.

That it was small.

That it would pass.

That saying something might shift the mood.

Might turn something light into something heavy.

So I let it go.

Outwardly.

But it didn’t go anywhere.

It stayed.

In the body.

In the throat.

Right where it first landed.

And from there, it changed.

It picked up shape.

Tone.

Meaning.

It started connecting to other moments.

Other times I had done the same thing.

And now it wasn’t just this.

It was everything like this.

By the time I spoke again,

I was no longer in that moment.

I was in all of them.

And it came out like that.

Bigger than it needed to be.

Harder than I meant it.

And impossible to trace back

to where it actually started.

But I know where it started.

It started

when I chose

not to say it.`
    },
    {
      id: 10,
      title: "I Still Choose You",
      date: "10 April 2026",
      content: `It’s not as easy as it was.

That part is true.

We miss each other sometimes.

We land slightly off.

Things don’t always flow the way they used to.

And I feel it.

I notice the difference.

The small gaps where there weren’t any before.

For a moment, I want to fix it.

Or avoid it.

Or pretend it’s not happening.

But none of that is true either.

This is.

Something has changed.

Not everything.

Not the whole thing.

But enough that I can’t pretend

it’s still effortless.

And maybe that’s the part we never learned.

What happens when it’s not.

What happens when it needs something from us

that it didn’t before.

Because easy doesn’t ask anything.

It just works.

This does.

And I can feel the instinct to protect

what it used to be.

To stay quiet.

To keep things smooth.

To not risk shifting the ground any further.

But there’s another truth sitting underneath that.

I’m still here.

Not because it’s easy.

Not because it’s perfect.

But because I choose it.

I choose you.

Not the version of us

that never had to try.

But the version

that does.`
    },
    {
      id: 9,
      title: "The Violence in a Smile",
      date: "6 April 2026",
      content: `I looked up teeth whitening today.

A small, practical question. Price ranges, nearby places, how it works. One of those normal, adult decisions that sits somewhere between maintenance and self-improvement.

But it didn’t stay small for very long.

Because teeth are strange, when you really think about them.

They are bone, exposed. The only part of the skeleton we display without hesitation. We hide the rest of ourselves—cover, soften, protect—but the mouth we present freely. And then we refine it.

We polish it.

We make it brighter than bone has ever been.

There is something quietly revealing in that.

A smile is one of the most powerful signals we have. It communicates safety, openness, warmth. It says: you can come closer. It disarms. It invites. Entire interactions are shaped by it before a single word is spoken.

But underneath that signal is something else entirely.

Structure. Force. Capability.

The same teeth that form a smile are designed to tear, to break, to defend. The same mouth that reassures is the one that could harm. And somehow, we have learned to present only one side of that equation, as if the other does not exist.

Or perhaps more accurately, as if it must be hidden.

Because a smile is not just an expression. It is a controlled one.

Unlike many other reactions, it can be turned on deliberately. Held. Adjusted. Offered at the right moment. Withdrawn just as easily. It sits at the intersection of instinct and performance, which is why it carries so much weight.

It is both real and constructed at the same time.

And that is where things start to shift.

Because when something becomes both signal and performance, it becomes something we can optimise.

Refine.

Standardise.

We begin to ask: what does a “good” smile look like?

And the answers, over time, become strangely specific.

Whiter. Straighter. More uniform. More symmetrical. More controlled.

More acceptable.

There is nothing inherently wrong with care. Wanting to feel confident, to present well, to take ownership of how you move through the world—these are not shallow desires. They are human ones.

But there is a threshold.

A point where care becomes correction.

Where enhancement becomes replacement.

Where the signal stops communicating something true, and starts communicating something expected.

You can see it most clearly at the extreme.

The hyper-white teeth. The artificially deepened skin tone. The sharp contrast engineered for visual impact. A look so polished it begins to detach from the person wearing it.

It becomes a surface.

A performance of vitality rather than vitality itself.

And it’s not just about aesthetics. It’s about what we are trying to say through that aesthetic.

A smile, at its core, is a negotiation.

It says: I am safe enough. I am open enough. I am in control enough.

But also, quietly: I am choosing what you see.

That choice is where power lives.

And it is also where distortion can begin.

Because if the smile becomes entirely curated, entirely aligned with an external ideal, then something underneath it is being managed, or muted, or hidden.

The bite disappears.

Not physically, but symbolically.

And yet, the most compelling presence is not one that erases that duality.

It’s one that holds it.

A smile that is warm, but not submissive.

Open, but not naive.

Controlled, but not disconnected.

One that still belongs to the person wearing it.

I realised, somewhere in the middle of all of this, that I wasn’t really asking about teeth whitening.

I was asking a different question.

Not: how do I improve my smile?

But: what do I want my smile to say?

Power.

Approachability.

Truth.

Not one at the expense of the others, but all three held at once.

Because maybe the goal isn’t to perfect the signal.

Maybe it’s to make sure the signal is still yours.

Not something inherited.

Not something performed.

But something chosen, consciously, with full awareness of what sits beneath it.

A smile, after all, is not the absence of the bite.

It is the decision of what to do with it.`
    },
    {
      id: 8,
      title: "Everybody wants to be seen…right?",
      date: "5 April 2026",
      content: `He says something that is just 0.001% off what I truly feel, and I’m already correcting.

Trying to make sure he knows I have a brain.

I don’t even think of the 20 minutes before then,  when I just spoke freely. Sleep-deprived and kind of just wanting this thing to be over now.

Very irresponsible. Especially for my first big interview with a CEO at a recruitment agency. So I’m open, very open. Tired. More tired than I’ve been in over a decade. It’s been quite a few months.

And he addresses me differently than what I thought he would. In fact, the whole interaction is quite surreal in how he meets my level of consciousness.

He’s good at his job. He reads people; finds trends. And he pinpointed me in under ten minutes.

“Not safe, not safe”, my system screams.

It’s terrifying to be seen. And realizing that I’m more of a stereotype than I thought - not the precious snowflake of a personality that I thought I had so carefully curated.`
    },
    {
      id: 7,
      title: "When You’re in the Thick of It",
      date: "31 March 2026",
      content: `I’ve made the mistake.

It’s done. There’s no changing, fixing, or reframing.

It is what it is, and there is literally nothing I can do to change it now.

I just have to push through it.

The wave didn’t choose me. I decided on which direction I’m going, and it turned out it was the wrong way.

I swam out and got up onto that enormous body of water, and now, instead of gliding carelessly upon it, it’s crashing down onto me.

It’s not that the ocean is upset with me.

It’s just being what it is—doing what it does.

I am a tiny thing in a massive reality.

There comes a moment in the cycle where you have to pay for your bad decisions. It’s pure cause and effect, not even moral.

I’m going through the consequences now, and writing about it reminds me that it is temporary. It’s just part of a mechanism. It is not me.

It is not.

It is not.

But right now all I can do is repeat that last sentence over and over to drown out the other seventeen voices screaming that IT IS. IT IS IT IS IT IS IT IS IT IS.

This too shall pass. Everything does.`
    },
    {
      id: 6,
      title: "Both, And More. Part 2",
      date: "29 March 2026",
      content: `There’s a pattern I’ve come to recognise.

It isn’t constant, but it returns often enough now that I can’t call it accidental. A few times a month, something opens again. The same softening of whatever usually filters things out. And then the work comes—fast, structured, insistent.

It’s not chaotic. That’s the strange part. It arrives with form already inside it. Songs, sentences, connections between ideas. Not perfect, but coherent. As if something has already been arranged, and I’m just trying to keep up with the pace at which it reveals itself.

My hands don’t move fast enough for it. My systems don’t quite contain it. I jump between recording, writing, organising, trying to catch as much as I can before it shifts again. It feels urgent, but not anxious. Driven, but not forced.

And I stay with it.

Longer than I should, probably. I don’t sleep properly. I push through the signals that normally tell me to stop. Because in that state, stopping feels like interruption. Like walking away mid-sentence from something that matters.

There’s a physical cost to that. I feel it.

When I step out of it—even briefly—the exhaustion is immediate and heavy. Not subtle. Not negotiable. It’s as if the body has been postponed, and then returns all at once to collect what it’s owed.

But when the current is there, I don’t feel tired. I feel precise. Alert in a very specific way. Not jittery, not scattered. Focused, but without effort. Like everything I hear, everything I play, lands exactly where it’s meant to. The smallest details feel aligned. Sound becomes something I can almost step inside.

It feels good to make things in that state. More than good. It feels right.

And then afterwards, there’s always the question.

Was it actually good? Or did it just feel good?

I’ve learned to check. To come back to it later, with rest, with distance. Some of it doesn’t hold. That’s expected. But a surprising amount of it does. It builds. It connects to what I’ve already made. It isn’t random. It’s part of something consistent, even if the way it arrives isn’t.

That’s what I’m noticing more now. The consistency inside the inconsistency.

It’s not new. I can trace it back through my life in smaller ways. But over the past year, it’s become more frequent. More accessible, maybe. Or maybe I’ve simply made more space for it.

My studio is set up for it now. Everything within reach. Instruments, recording, writing, editing. It’s a contained environment where I can go fully into it without being physically unsafe. That matters. It means I can let it run without having to manage external risk at the same time.

But there are still boundaries.

I have a child. I have a life that continues outside of this. And I feel the tension between the two. The pull to stay in it longer, and the responsibility to step out. The awareness that something powerful is happening, and the simultaneous awareness that I can’t give myself over to it completely.

And maybe that’s part of why it works.

There’s also a quieter layer underneath it all. A question about what this actually is.

Sleep deprivation changes things. That much is known. The brain filters less. Associations come faster. The edges between things blur. That could explain some of it. It probably does explain some of it.

But it doesn’t explain the structure. Or the sense of coherence. Or the feeling that what’s coming through isn’t just noise, but something that can be shaped into something real.

I don’t need to define it completely. Not yet.

What I do know is that it comes, and it goes. That it gives something, and it takes something. That it feels expansive while it’s happening, and contracting when it passes.

Right now, I’m on the other side of it again.

Very tired. More aware of my body. Of time. Of everything that was temporarily quiet. There’s a slight uneasiness here. Not negative, just… exposed. Like the silence after something loud.

I can feel the pull of it still, somewhere in my chest and behind my eyes. But I can’t step back into it at will. Not in this state.

And maybe that’s the point.

It isn’t something I control. It’s something I meet when the conditions are right. Something I’ve learned to recognise, to work with, to question—but not to own completely.

A cycle, not a constant.

Both. And more.

And then… back again.`
    },
    {
      id: 5,
      title: "When You Do It Right… and Nothing Happens",
      date: "27 March 2026",
      content: `There’s a strange kind of gap that shows up when you start doing things more deliberately.

Not louder. Not faster. Just more intentionally.

You think things through. You refine. You stop rushing just to be seen. And then the response doesn’t quite match what you expect.

Not dramatically. Just… slightly off.

It’s difficult to read while you’re inside it.

Because the instinct is to adjust the work. To make it clearer, sharper, more appealing. That feels like the responsible thing to do.

But there’s another possibility.

That the work isn’t the issue.

That it’s simply not meeting the right context yet.

That’s harder to sit with.

Because it asks for patience, and for a kind of restraint that goes against the urge to keep fixing.

I’m still working out how to tell the difference.`
    },
    {
      id: 4,
      title: "The Past Doesn’t Ask Permission",
      date: "19 March 2026",
      content: `There are moments where I react to something small like it’s something big. Not logically, not proportionally—just immediately. Emotion first, reasoning later. And in those moments, it feels completely real.

But then I step back and look at what’s actually in front of me. And it doesn’t match.

I’m in a relationship where someone has proven themselves consistently over time. Not through words or promises, but through follow-through. Quietly. Repeatedly. And still, under pressure, something in me doesn’t fully trust it. That’s the part that’s difficult to admit.

Because it’s not just about what happened before. It’s about what I believed before.

There was a time where I was in something I thought was right. I thought it was good. I thought it was stable. I thought it was the one I was meant to be in. And I was wrong. Not immediately—at first it made sense. But slowly, things didn’t hold. Words didn’t match reality. Promises didn’t translate into action. And somewhere in that process, something shifted.

It’s not just that I learned not to trust what I’m told. It’s that I learned I can feel certain—and still be wrong.

That’s what stays.

So now, in moments of stress—when I’m tired, stretched, overwhelmed—that old pattern comes back online. Not as a thought, but as a feeling. A sense that something isn’t safe, even when there’s no clear reason for it. A doubt that doesn’t match the evidence in front of me.

The danger isn’t the past itself. It’s mistaking it for the present.

Because the person in front of me is not the person from before. The situation is not the same. The proof is different. But the body doesn’t always update as quickly as reality does.

And the work isn’t pretending that reaction isn’t there. It’s noticing it—and then checking it against what is actually true now. Not what feels familiar. Not what feels expected. What is true.

Because the past doesn’t disappear.

It waits.

And under pressure, it speaks.`
    },
    {
      id: 3,
      title: "Petrichor",
      date: "12 March 2026",
      content: `A Storm Outside the Mind

When a storm moves through the sky, my mind grows quiet.

I have always loved thunderstorms.

Not the soft drizzle people describe as peaceful, but the real storms — the kind where the sky darkens suddenly and the air changes. Heavy rain. Lightning cutting across the sky. Thunder rolling somewhere above the houses.

Most of the time my mind is busy. Observations rarely stay loose for long before they begin arranging themselves into something structured. Experiences become sentences. Thoughts become essays or songs. Meaning has a way of forming whether I intend it to or not.

But when a storm arrives, that impulse loosens its grip.

The rain occupies the sky. Thunder rolls through the air. And for a while the constant movement of thought slows down enough that I can simply sit inside the moment instead of trying to explain it.

I noticed this long before I had language for it.

When I was a teenager, my bedroom was on the top floor of the house where I lived with my parents. It was only a two-story house, but my room felt high enough that the sky seemed very close.

The room was large, with a balcony outside a sliding glass door. From there I could see the roofs of the surrounding houses and a wide stretch of open sky above them.

When storms rolled in, I would open the curtains and lie on my bed facing the glass door.

The room would become completely dark.

Then lightning would strike.

For a single second the entire world appeared — every house, every tree, every leaf suddenly sharp and illuminated. The sky would flash bright enough to fill the room, and then the light would vanish again just as quickly.

Darkness returned.

A few seconds later the thunder arrived.

That pause between the lightning and the thunder was always my favorite moment. The sky had already revealed itself, but the sound had not yet caught up.

Flash.

Silence.

Then the long rolling sound of the storm moving overhead.

Even now, whenever I have the chance, I watch storms.

Sometimes I step into them.

I have been sitting in restaurants when the rain begins and simply walked outside into the street, letting the rain fall without worrying about getting wet. There is something strangely freeing about that moment — as if adulthood pauses long enough to allow a simple impulse.

Other times I stay inside.

I sit near a window and watch the rain while wrapped in a blanket — even in summer, when the air cools just enough to make the room feel softer. Storms change the atmosphere of everything. The light shifts. The temperature drops. The world slows down.

And then there is the smell.

There is even a word for it.

Petrichor.

The word comes from ancient Greek — petra, stone, and ichor, the fluid said to run through the veins of the gods.

The blood of the earth, rising after rain.

Storms seem to carry a kind of release with them.

The air builds pressure all day. The sky grows heavy. And then the rain finally falls. Something in the world lets go.

Storms feel familiar because they form the same way thoughts do: pressure first, then release.

For a while I don’t feel the need to explain anything. I can sit quietly, watching the sky flash and listening to the thunder move across it, without trying to capture the moment in words.

The storm is already complete.

It does not need interpretation.

It simply arrives, moves through the sky with its own rhythm, and passes again.

And for a little while, sitting inside that rhythm, my mind rests.

When the storm moves through the sky, my mind no longer has to be one.`
    },
    {
      id: 2,
      title: "Silence in the Social Media Realm",
      date: "12 March 2026",
      content: `I gave it at least two days before checking the response—the comments, the likes. A larger part of me feels more detached from that validation these days. For years, it was simply the mechanism, the most obvious way to let people know something existed. If you create something and release it into the world, how else do you announce it?

But. The. Silence.

The strange quiet of the social media realm, where something can pass through dozens of screens and leave no visible trace of having been met. It feels different from criticism. Criticism at least acknowledges impact. Silence is harder to locate, as if something was seen briefly but not held, not engaged with, not responded to in any way that confirms it arrived somewhere.

And for reasons that run deeper than we like to admit, that kind of silence doesn’t land as neutral. We are not built for indifference. Long before platforms and algorithms, being unseen by the group carried consequences. To be ignored was to be excluded, and exclusion meant risk. That imprint doesn’t disappear just because the stage changes; it still lives somewhere in the body, responding before the mind has time to explain anything away. So when something we care about is met with silence, it doesn’t just feel quiet—it feels like something is missing, like we didn’t quite arrive.

A few days after posting the essay, I played a gig, and for the first time in years, I included my own music in the set. Afterwards, my husband said something that stopped me. We’ve known each other for almost five years—we met at one of my gigs—and he realised it was the first time, in all that time, that he had heard me play my original songs live.

I was surprised by how true that was, not because it wasn’t accurate, but because I hadn’t fully registered it myself. Somewhere along the way, I had become very good at something else: reading the room, holding energy, giving people what works, what lands, what keeps the atmosphere moving. I could make it work. I could make a night feel good.

But slowly, almost invisibly, the balance shifted. My own music became something I would get to next time. Next time, next time, next time—until years had passed.

It wasn’t a dramatic betrayal. It was incremental, practical, even understandable. This is, after all, how we are wired—to be received, to be included, to feel that what we offer lands somewhere outside of us. And when it doesn’t, we adjust. Slightly, then a little more. Not because we are inauthentic, but because we are human.

But there is a quiet cost to that. Because eventually, if you are not careful, the thing you were trying to share becomes the thing you keep postponing, and the silence you begin to feel is no longer coming from the outside.

When I make something, I put myself in it. And when I share it, I’m not just offering the work—I’m exposing something of myself. Which means the risk is never neutral. It’s not just that the work might not be received; it’s that I might feel rejected through it.

For a long time, whether I realised it or not, I chose to minimise that risk—not by stopping, but by shaping what I offered into something more easily received, something more predictable, more reliable, more likely to land. There is nothing inherently wrong with that. It kept me working, it kept me connected, it kept the music going. But it also came at a cost, because over time, the work that was actually mine became the work I kept postponing.

The silence I noticed online wasn’t unfamiliar. It was echoing something I had been creating myself.

So this time, the decision is different. Not about forcing a response or trying harder to be seen, but about what I choose to no longer postpone. Some things land immediately; others take years to find the people who need them. That part was never mine to control.

But this part is.

I will stop postponing the work that is actually mine.`
    },
    {
      id: 1,
      title: "Note Idea",
      date: null,
      content: `The “trauma”  and assumptions carried from one relationship to the next.

Morne’s - Dean

Even after 5 years, the trauma response/conclusions still come out during times of high stress.`
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
                  <button
                    onClick={() => handleNoteClick(note)}
                    className="w-full text-left py-8 border-b border-pale-gray/20 hover:border-charcoal/30 transition-all duration-300 ease-out"
                  >
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
                      </div>
                      <div className="opacity-0 group-hover:opacity-50 transition-opacity duration-300 ease-out">
                        <span className="text-accent text-sm font-light">→</span>
                      </div>
                    </div>
                  </button>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Note Popup Modal */}
      {selectedNote && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-charcoal/90 backdrop-blur-sm p-8"
          onClick={closeNote}
        >
          <div className="bg-off-white rounded-lg p-8 max-w-4xl mx-4 max-h-[80vh] overflow-y-auto">
            <div className="flex items-start justify-between mb-6">
              <h2 className="font-serif text-2xl sm:text-3xl font-light text-charcoal leading-tight mb-4">
                {selectedNote.title}
              </h2>
              <button
                onClick={closeNote}
                className="text-accent hover:text-accent/80 transition-colors duration-300"
              >
                Close
              </button>
            </div>
            {selectedNote.date && (
              <time className="font-sans text-xs text-medium-gray/50 tracking-[0.05em] block mb-6">
                {selectedNote.date}
              </time>
            )}
            <div className="font-sans text-sm text-medium-gray/80 leading-relaxed font-light tracking-[0.01em] space-y-4 prose prose-sm max-w-none">
              {selectedNote.content.split('\n\n').map((paragraph, pIndex) => (
                <p key={pIndex} className="text-justify">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Notes;
