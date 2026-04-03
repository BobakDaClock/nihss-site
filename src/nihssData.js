export const nihssItems = [
  {
    id: "1a",
    slug: "level-of-consciousness",
    title: "Level of Consciousness",
    points: "0-3",
    description: "Assesses alertness and responsiveness.",
    overview:
      "This item evaluates the patient’s baseline level of arousal and responsiveness to stimulation.",
    scoring: [
      "0 = Alert; keenly responsive",
      "1 = Not alert, but arousable by minor stimulation",
      "2 = Not alert; requires repeated or strong stimulation",
      "3 = Responds only with reflex motor or is totally unresponsive",
    ],
    tips: [
      "Score based on observed responsiveness, not assumptions.",
      "Differentiate reduced arousal from language impairment.",
      "Use the official NIHSS approach to stimulation.",
    ],
    images: {
      0: [{ src: "/Media/level-of-consciousness-0.png", caption: "" }],
      1: [{ src: "/Media/level-of-consciousness-1.png", caption: "" }],
      2: [{ src: "/Media/level-of-consciousness-2.png", caption: "" }],
      3: [
        {
          src: "/Media/level-of-consciousness-3.png",
          caption:
            "Example 1: Patient demonstrates no meaningful response to stimulation.",
        },
        {
          src: "/Media/level-of-consciousness-3b.png",
          caption:
            "Example 2: Patient displays only a reflexive or posturing movement.",
        },
      ],
    },
    faqs: [
      {
        question: "What if the patient is drowsy but arousable?",
        answer:
          "Score based on the actual response elicited. Drowsiness alone does not determine the score. I.E. A patient who seems lethargic, which would more likely prompt a score of 1, but opens their eyes the moment you walk in the room, would thus prompt a score of 0 or Alert.",
      },
      {
        question: "Patient is intubated.",
        answer:
          "Judge the patient on their consciousness, remember for this component we are testing their responsiveness to their environment. If the patient responds to your presence, or your prompting, quickly and demonstrates alertness, then score 0.",
      },
      {
        question: "Patient is sleeping.",
        answer:
          "This patient would initially score a 1 as they are not alert at the beginning of the test, but should they stay awake till your next test, and stay keenly responsive, they will be scored a 0 on their next exam. These exams can be as frequent as needed to demonstrate patient's most accurate exam as long as the order supports testing more frequently as needed.",
      },
      {
        question: "Patient is somnolent.",
        answer:
          "Does the patient wake easy? If you call their name or lightly touch them do they respond rather quickly? Then they will score a 1 even if they return to sleep rather quickly after the interaction. Does the patient require repeated or strong noxious stimuli? Then you will be scoring them as a 2.",
      },
      {
        question: "Patient is being actively sedated.",
        answer:
          "Remember, we are judging the patient's alertness. In this case it can be judged independent from their dosage of sedation; I.E. they may be on a higher dose of Dexmedetomidine, yet fully alert and briskly responsive.",
      },
      {
        question: "What is the official NIHSS approach to stimulation?",
        answer:
          "Observe first, attempt verbal stimulation, move to light tactile stimulation, then only if needed move to noxious stimulation. Do not jump straight to sternal rub.",
      },
    ],
    misconceptions: [
      {
        short: "Sleepy = severe",
        myth: "A sleepy patient is always severely impaired.",
        truth: "Score based on response to stimulation, not appearance.",
      },
      {
        short: "No response = coma",
        myth: "Lack of response means coma.",
        truth: "Proper stimulation must be applied before scoring.",
      },
      {
        short: "Baseline matters",
        myth: "Chronic mental status affects scoring.",
        truth:
          "Score what is observed now, NIHSS scores current impairment, not just the change caused by new event.",
      },
      {
        short: "Eyes open = alert",
        myth: "If eyes are open, patient is alert.",
        truth: "Alertness requires appropriate interaction.",
      },
      {
        short: "Pain = best test",
        myth: "Only painful stimuli should be used.",
        truth: "Start with least noxious stimulation, escalate as needed.",
      },
      {
        short: "Reflex = purposeful",
        myth: "Any movement counts as response.",
        truth:
          "Differentiate reflex from purposeful movement. Triple flexion reflex is not a purposeful withdrawal movement, and does not count as movement to painful stimulus.",
      },
    ],
  },
  {
    id: "1b",
    slug: "loc-questions",
    title: "LOC Questions",
    points: "0-2",
    description: "Evaluates orientation using standard questions.",
    overview:
      "This item tests ability to correctly answer standard NIHSS orientation questions.",
    scoring: [
      "0 = Answers both questions correctly",
      "1 = Answers one question correctly",
      "2 = Answers neither question correctly",
    ],
    tips: [
      "Only score the standard NIHSS questions.",
      "Do not give credit for near-correct answers.",
      "Consider language deficits separately from consciousness.",
    ],
    images: {
      0: [
        { src: "/Media/loc-questions-0a.png", caption: "" },
        { src: "/Media/loc-questions-0b.png", caption: "" },
      ],
      1: [{ src: "/Media/loc-questions-1.png", caption: "" }],
      2: [{ src: "/Media/loc-questions-2.png", caption: "" }],
    },
    faqs: [
      {
        question:
          "What should I do if the patient cannot answer clearly because of dysarthria?",
        answer:
          "Use the patient's best verbal attempt and score only what they can actually answer correctly.",
      },
      {
        question: "What if the patient answers partially correct?",
        answer:
          "Only fully correct answers count. Partial correctness does not receive credit.",
      },
      {
        question:
          "A receptively aphasic patient can not understand the questions you either ask or demonstrate through other means, what next?",
        answer:
          "A patient who is unable to comprehend the questions asked will score a 2.",
      },
      {
        question: "What if the patient is in a coma state? ",
        answer: "Patient is scored a 2 for this state.",
      },
      {
        question: "What if the patient has expressive (Broca's) aphasia?",
        answer:
          "As expressive aphasia can also affect writing ability, attempt to facilitate other means of communication. Does the patient nod appropriately to test questions? If so attempt to score based upon correct answers acquired through this method. If the patient is severely aphasic and can not demonstrate a correct answer in anyway, they are scored a 2.",
      },
      {
        question:
          "What if the patient has receptive (Wernicke's) aphasia and can not understand the questions asked?",
        answer:
          "If the patient can not understand the questions in this scenario, they are scored a 2.",
      },
      {
        question: "Patient is intubated.",
        answer:
          "Intubated patients unable to speak because of any physical or neurological barrier NOT secondary to aphasia are scored a 1.",
      },
    ],
    misconceptions: [
      {
        short: "Partial = correct",
        myth: "Partial answers count.",
        truth: "Only fully correct answers receive credit.",
      },
      {
        short: "Close counts",
        myth: "Near answers are acceptable.",
        truth: "Exact answers are required.",
      },
      {
        short: "Hints allowed",
        myth: "You can guide the patient.",
        truth: "No cues should be given.",
      },
      {
        short: "Extra questions help",
        myth: "You can ask additional orientation questions.",
        truth: "Only NIHSS standard questions count.",
      },
      {
        short: "Speech clarity matters",
        myth: "Slurring affects score.",
        truth:
          "Only correctness of answer matters, speech clarity is judged, or scored, in the NIHSS component of dysarthria.",
      },
      {
        short: "Delay = incorrect",
        myth: "Slow response equals wrong answer.",
        truth: "Delayed but correct is still correct.",
      },
    ],
  },
  {
    id: "1c",
    slug: "loc-commands",
    title: "LOC Commands",
    points: "0-2",
    description: "Tests ability to follow simple commands.",
    overview:
      "This item assesses whether the patient can correctly perform the standard NIHSS commands.",
    scoring: [
      "0 = Performs both tasks correctly",
      "1 = Performs one task correctly",
      "2 = Performs neither task correctly",
    ],
    tips: [
      "Use standard commands only.",
      "Repeat only as allowed by NIHSS instructions.",
      "Distinguish inability to understand from motor inability.",
    ],
    images: {
      0: [{ src: "/Media/loc-commands-0.png", caption: "" }],
      1: [{ src: "/Media/loc-commands-1.png", caption: "" }],
      2: [{ src: "/Media/loc-commands-2.png", caption: "" }],
    },
    faqs: [
      {
        question:
          "What should I do if the patient has difficulty with loc commands due to weakness?",
        answer:
          "Judge based on the patient's attempt, credit is given if the patient makes a discernible and clear effort to follow commands, but fails due to weakness.",
      },
      {
        question:
          "How many attempts does the patient receive to execute the command correctly",
        answer:
          "The patient's first attempt must be judged and scored, you may give the patient more time as needed, and repeat the command once. Additionally, after repeating the verbal command you may use pantomime to demonstrate the command once. At this point if the patient has not responded or attempted, they are scored a 1 for this command, if this occurs with the next command as well, they are scored a 2.",
      },
      {
        question: "What are the official NIHSS approved commands?",
        answer:
          "You may ask the patient to open and close their eyes as one command, and the second command should be a request for the patient to grip and release with their hand.",
      },
      {
        question:
          "What if the both hands are paretic or the patient has bilateral upper extremity amputations?",
        answer:
          "Substitute with another one-step command such as asking the patient to open their mouth or wiggle their toes.",
      },
      {
        question: "What if the patient is aphasic?",
        answer:
          "Demonstrate the command using pantomime and score the patient's first attempt.",
      },
      {
        question: "What if the patient is in a coma, or otherwise unarousable?",
        answer:
          "Patient's unable to follow commands due to level of consciousness barriers are scored a 2.",
      },
    ],
    misconceptions: [
      {
        short: "Effort = success",
        myth: "Any effort counts as correct.",
        truth:
          "Only correct effort counts, if asked to show a thumbs up, and a patient simply opens their hand or squeezes their hand, this is judged as a failure to follow.",
      },
      {
        short: "Repeat freely",
        myth: "Commands can be repeated multiple times.",
        truth:
          "Only limited repetition allowed, Total of verbal commands = 2, total pantomime = 1.",
      },
      {
        short: "Motor ignored",
        myth: "Failure is always cognitive.",
        truth: "Motor deficits must be considered.",
      },
      {
        short: "Partial = automatically correct",
        myth: "Partial movements count as they show attempt.",
        truth:
          "Must fully complete command, exception here is a clear discernible attempt at command is made but failed due to weakness.",
      },
      {
        short: "Demonstration not allowed",
        myth: "You must use verbal commands only.",
        truth:
          "You can use pantomime once to demonstrate command, after attempting verbal initially, and verbal once more for a total of two verbal and one pantomime.",
      },
      {
        short: "Wrong task okay",
        myth: "Doing a different task is acceptable.",
        truth: "Must make discernible effort to perform the exact command.",
      },
    ],
  },
  {
    id: "2",
    slug: "best-gaze",
    title: "Best Gaze",
    points: "0-2",
    description: "Assesses conjugate eye movement.",
    overview:
      "This item examines voluntary and reflex horizontal eye movements and gaze palsy.",
    scoring: [
      "0 = Normal",
      "1 = Partial gaze palsy",
      "2 = Forced deviation or total gaze paresis not overcome",
    ],
    tips: [
      "Focus on horizontal gaze.",
      "Differentiate ocular limitation from poor cooperation.",
      "Observe resting gaze and ability to track.",
    ],
    images: {
      0: [{ src: "/Media/best-gaze-0.png", caption: "" }],
      1: [{ src: "/Media/best-gaze-1.png", caption: "" }],
      2: [{ src: "/Media/best-gaze-2.png", caption: "" }],
    },
    faqs: [
      {
        question:
          "What should I do if the patient has difficulty with best gaze test instructions, such as following my hand?",
        answer:
          "Attempt and to test gaze by walking around bed, or having another nurse on the opposite side of the bed. See if the patient tracks you around the bed, or can switch from nurse to nurse on opposing sides of bed. You may hold their head still when having them track another individual, if they can not comprehend instructions but track.",
      },
      {
        question:
          "What if the patient has a conjugate (cooperative or uniform movement) deviation of the eyes but can overcome the gaze to track me, then goes back to gaze at rest?",
        answer:
          "This is scored a 1. The patient has a partial gaze palsy that can be overcome by voluntary or reflexive activity.",
      },
      {
        question:
          "What if the patient has a deviation or gaze, but is unable to follow directions, either comatose or obtunded, even lethargic and unable to maintain focus on task?",
        answer:
          "Then you must attempt an oculocephalic head movement reflex exam. Should the patient's eyes overcome the deviation or gaze when the head is moved, you will score a 1. If the eyes remain completely laterally fixed in either direction, score a 2.",
      },
      {
        question:
          "Can I test an aphasic patient who can't understand the exam?",
        answer:
          "Yes, you can either walk around the room while keeping the patient's attention to ensure they track you through their gaze or fields, or you use the oculocephalic head movement reflex exam. Should the patient's eyes overcome the deviation or gaze when the head is moved, you will score a 1. If the eyes remain completely laterally fixed in either direction, score a 2.",
      },
    ],
    misconceptions: [
      {
        short: "Head = gaze",
        myth: "Head turning equals eye movement.",
        truth: "Eyes must move independently of head.",
      },
      {
        short: "Tracking = normal",
        myth: "Any tracking means normal.",
        truth:
          "Partial palsy still scores abnormal and can involve tracking through half the field of eye movement.",
      },
      {
        short: "Effort = deficit",
        myth: "Poor effort means gaze palsy.",
        truth:
          "Confirm with reflex movements such as the oculocephalic head movement.",
      },
      {
        short: "One direction enough",
        myth: "Testing one side is sufficient.",
        truth: "Both directions must be assessed.",
      },
      {
        short: "Resting gaze ignored",
        myth: "Only movement matters.",
        truth:
          "Resting deviation is critical, a truly forced deviation will be obvious at rest.",
      },
      {
        short: "Eyes + head together",
        myth: "Combined movement is acceptable.",
        truth: "True gaze must isolate eye movement.",
      },
    ],
  },
  {
    id: "3",
    slug: "visual-fields",
    title: "Visual Fields",
    points: "0-3",
    description: "Screens for visual field deficits.",
    overview:
      "This item evaluates hemianopia and visual field loss using confrontation testing.",
    scoring: [
      "0 = No visual loss",
      "1 = Partial hemianopia",
      "2 = Complete hemianopia",
      "3 = Bilateral hemianopia (blind including cortical blindness)",
    ],
    tips: [
      "Test each quadrant appropriately.",
      "Account for neglect versus true field cut.",
      "Use a consistent confrontation method.",
    ],
    images: {
      0: [{ src: "/Media/visual-fields-0.png", caption: "" }],
      1: [{ src: "/Media/visual-fields-1.png", caption: "" }],
      2: [{ src: "/Media/visual-fields-2.png", caption: "" }],
      3: [{ src: "/Media/visual-fields-3.png", caption: "" }],
    },
    faqs: [
      {
        question:
          "The patient is missing only the top left field of their vision (Left superior quadrantanopia), or 1 quadrant of vision, how do I score this? ",
        answer:
          "First, have the patient cover their affected eye, left in this case, and test to verify the right eye is also affected. Now have them cover their right eye and repeat the test. Quadrantanopia almost always occurs bilaterally, generally a single eye defect or singular eye quadrant missing suggests damage to the eye or optic nerve rather than visual pathways.",
      },
      {
        question:
          "The patient is missing the top left and bottom left quadrant of both eyes, how is this scored? ",
        answer:
          "This is known as left homonymous hemianopia, a fancy way to say that the left side of the visual field is affected in both eyes. If it were the right side of both it would simply be right* homonymous hemianopia, a good visual of which is displayed above when you click 2 = Complete hemianopia, the score for this condition.",
      },
      {
        question:
          "What if the patient was blind from a previous event or another condition",
        answer:
          "According to the rules for scoring the NIHSS correctly, they would be scored a 3, to indicate all current deficits, although it may not be secondary to current neurological insult.",
      },
      {
        question:
          "What if during confrontation testing, the patient correctly identifies fingers in the left and right visual fields when tested individually, but fails to report the left side when both sides are presented simultaneously?",
        answer:
          "This is one of the more difficult aspects of scoring the visual component. In this situation, the patient is presenting inattention/extinction (item 11). Many people score this incorrectly as hemianopia which = 2, but in this case, you will score 1 for visual and use the results to now score item 11.",
      },
      {
        question:
          "The patient consistently misses stimuli in the upper left quadrant of both eyes, but correctly identifies in all other fields",
        answer:
          "This is a prime example of 1 = Partial hemianopia, not to be confused with 2 = Complete hemianopia which would indicate both upper AND lower left quadrants of BOTH eyes, or simply the left half of both eyes. The same scoring would occur if the deficits were as described, but right sided.",
      },
    ],
    misconceptions: [
      {
        short: "Eye movement proves",
        myth: "Looking proves intact fields.",
        truth:
          "Confrontation testing is required, patient may look into direction yet not have full field of view.",
      },
      {
        short: "Neglect = field cut",
        myth: "Missing side = hemianopia.",
        truth:
          "Neglect and field loss differ, although they may present at the same time, they are unique deficits.",
      },
      {
        short: "Poor effort = deficit",
        myth: "Misses always mean deficit.",
        truth: "Confirm with consistent testing.",
      },
      {
        short: "One miss = complete",
        myth: "One error = full hemianopia.",
        truth: "Pattern determines severity.",
      },
      {
        short: "Threat invalid",
        myth: "Visual threat is not valid.",
        truth: "It is acceptable when needed.",
      },
      {
        short: "Method irrelevant",
        myth: "Any test method works.",
        truth:
          "Consistency is critical, especially when testing with threat, one must maintain a consistent style.",
      },
      {
        short: "Can't test comatose patients",
        myth: "You can not test patients in comatose or otherwise altered states, even intubated patients can not confirm their vision so you score 0.",
        truth:
          "You can, and must test every patient for visual fields. Any patient that is unable to participate in testing actively must be tested using threat.",
      },
    ],
  },
  {
    id: "4",
    slug: "facial-palsy",
    title: "Facial Palsy",
    points: "0-3",
    description: "Evaluates facial symmetry and weakness.",
    overview: "This item assesses facial movement at rest and with activation.",
    scoring: [
      "0 = Normal symmetrical movement",
      "1 = Minor paralysis",
      "2 = Partial paralysis",
      "3 = Complete paralysis of one or both sides",
    ],
    tips: [
      "Look at both spontaneous and commanded movement.",
      "Differentiate mild flattening from clear asymmetry.",
      "Score what is present at exam time.",
    ],
    images: {
      0: [{ src: "/Media/facial-palsy-0.png", caption: "" }],
      1: [{ src: "/Media/facial-palsy-1.png", caption: "" }],
      2: [{ src: "/Media/facial-palsy-2.png", caption: "" }],
      3: [
        {
          src: "/Media/facial-palsy-3a.png",
          caption:
            "Example 1: Patient displays a complete paralysis of one side.",
        },
        {
          src: "/Media/facial-palsy-3b.png",
          caption:
            "Example 2: Patient displays a complete paralysis of both sides.",
        },
      ],
    },
    faqs: [
      {
        question: "The patient is intubated.",
        answer:
          "If they are alert ask them to raise eye brows and attempt to smile. If not alert, use stimuli such as a shoulder pinch or other noxious stimuli in a less noxious to more noxious methodology to cause the patient to grimace.",
      },
      {
        question:
          "What if the patient has baseline facial asymmetry, e.g., prior Bell's palsy or stroke",
        answer:
          "In certain circumstances, when the baseline is confirmed and supported by documentation, you may consider scoring a 0, but if you are unsure or lack supporting evidence, if there is any doubt, score what you see!",
      },
      {
        question:
          "The patient is displaying weakness or is sedated and lacks effort in facial expression, how do I score?",
        answer:
          "If you are able to see any movement at all, judge its symmetry. If the patient is attempting to follow your command, and follows other commands, but when asked to smile or raise eyebrows there is no movement at all, score = 3. Main differentiating factor here is if there is any movement we know complete paralysis not present, therefore we observe for equality.",
      },
      {
        question:
          "How do I tell the different between a patient who should be scored a 1 vs a 2",
        answer:
          "Pay close attention to the presence of noticeable movement, is the upper and lower side which is affected still moving, even if out of equal proportion to the other side? If this is so, score = 1. If the affected side displays near total movement loss, score = 2. Pay close attention to the lower portion of the face, it carries more testing weight so to speak, if it is mostly unmoving, or the top of the affected side moves and the bottom of the affected side does not, score = 2.",
      },
      {
        question: "Then what is the difference between a score of 2 vs 3",
        answer:
          "Once you've assessed that one side is unequal to the other, look closely and assess how much muscle tone or movement is present, some movement in upper side of affected face, little to none in the bottom, score = 2. Upper and lower portion of affected side show no movement what so ever score = 3. Upper affected side shows some slight movement, lower affected shows none score = 3.",
      },
    ],
    misconceptions: [
      {
        short: "Rest symmetry enough",
        myth: "Normal rest = normal function.",
        truth:
          "Must assess active movement, sometimes you can see a droop at rest, other times due to facial anatomy what appears to be the dropping is actually the unaffected side once the patient attempts to smile or speak.",
      },
      {
        short: "Mild ignored",
        myth: "Subtle changes are normal.",
        truth: "Minor deficits still count.",
      },
      {
        short: "Speech reflects face",
        myth: "Speech = facial strength.",
        truth:
          "They are separate functions, patient's can have dysarthria and no facial droop, or have a droop and no dysarthria.",
      },
      {
        short: "Only smile matters",
        myth: "Smile alone is enough.",
        truth: "Multiple movements required, raising eyebrows for example.",
      },
      {
        short: "Baseline ignored",
        myth: "Pre-existing asymmetry doesn’t matter.",
        truth: "Consider baseline if known and supported by documentation.",
      },
      {
        short: "Symmetry always clear",
        myth: "Facial deficits are obvious.",
        truth: "Subtle findings require attention.",
      },
    ],
  },
  {
    id: "5",
    slug: "motor-arm",
    title: "Motor Arm",
    points: "0-4",
    description: "Tests arm drift and strength.",
    overview:
      "This item assesses each arm for drift, effort against gravity, and absence of movement.",
    scoring: [
      "0 = No drift",
      "1 = Drift",
      "2 = Some effort against gravity",
      "3 = No effort against gravity",
      "4 = No movement",
    ],
    tips: [
      "Each limb is scored separately in the formal NIHSS exam.",
      "Use the proper testing position and time interval.",
      "Do not infer strength beyond what is demonstrated.",
    ],
    images: {
      0: [{ src: "/Media/motor-arm-0.png", caption: "" }],
      1: [{ src: "/Media/motor-arm-1.png", caption: "" }],
      2: [{ src: "/Media/motor-arm-2.png", caption: "" }],
      3: [{ src: "/Media/motor-arm-3.png", caption: "" }],
      4: [{ src: "/Media/motor-arm-4.png", caption: "" }],
    },
    faqs: [
      {
        question:
          "What if the patient raises their arm, it drops only a little bit, such as half an inch, and then stabilizes and shows no drift for the remainder of the 10 second hold?",
        answer:
          "Initial drift, not caused by something such as cables from SpO2 monitors, or other physical barriers is scored a 1, even if it is for just a moment once eyes close.",
      },
      {
        question:
          "What if the patient can not lift their arm to 90 degrees when sitting or 45 degrees when supine?",
        answer:
          "Lift the patient's arm for them. Let it go, and have them close their eyes. Once you let go of the arm zero drift = 0, even a moment of drift and recovery for the entire 10 seconds, will = 1. Going forward, if the arm drifts down to bed, but makes efforts against gravity during and after it hits the bed score = 2. If the arm immediately falls to bed score 3 or 4, depending on whether there is any movement or complete flaccidity/reflexive movement only respectively.",
      },
      {
        question:
          "What is the main difference between score of 1 and a score of 2?",
        answer:
          "The major deciding factors are whether the patient can raise the arm to the beginning point of 90 degrees when sitting or 45 degrees when supine, and whether or not the arm touches the bed within the 10 second hold period, even once. Should it touch the bed or railing score = 2, if it drifts all the way down but touches neither score = 1. If the patient can not reach starting height score depending on what happens once you release the arm at starting height.",
      },
      {
        question:
          "How would I score an aphasic patient that does not comprehend my instructions?",
        answer:
          "You can encourage the patient using urgency in your voice and pantomime but you are instructed to not utilize noxious stimulation, as this test is designed to test voluntary movement.",
      },
      {
        question: "How to score a comatose patient?",
        answer:
          "As per the NIHSS, technically a patient should not be tested using pain or noxious stimuli when in a comatose state, as such this patient should be scored a 3 or 4, for a stuporous patient who makes even a tiny movement in arm (scored 3), and a coma patient who makes no effort (scored 4).",
      },
    ],
    misconceptions: [
      {
        short: "Fast drop = 4",
        myth: "Quick drop = then no movement.",
        truth:
          "Assess effort against gravity, and if they touch bed or railing.",
      },
      {
        short: "Pain ignored",
        myth: "Pain doesn’t affect results.",
        truth:
          "Distinguish neurologic weakness. Some patients won't react to painful or noxious stimuli but will be observed moving limbs non-purposefully, this is what you score.",
      },
      {
        short: "Both arms together",
        myth: "Score arms together.",
        truth:
          "Each arm scored separately. Technically this is the correct method.",
      },
      {
        short: "Position flexible",
        myth: "Any position works.",
        truth: "Standard positioning required.",
      },
      {
        short: "Short hold enough",
        myth: "Brief lift is sufficient.",
        truth: "Must sustain for full duration.",
      },
      {
        short: "Compensation allowed",
        myth: "Using body momentum is fine.",
        truth: "Only true strength counts.",
      },
    ],
  },
  {
    id: "6",
    slug: "motor-leg",
    title: "Motor Leg",
    points: "0-4",
    description: "Tests leg drift and strength.",
    overview:
      "This item assesses each leg for drift, effort against gravity, and absence of movement.",
    scoring: [
      "0 = No drift",
      "1 = Drift",
      "2 = Some effort against gravity",
      "3 = No effort against gravity",
      "4 = No movement",
    ],
    tips: [
      "Each leg is scored separately in the formal NIHSS exam.",
      "Use the correct test position and timing.",
      "Observe actual performance, not assumed baseline.",
    ],
    images: {
      0: [{ src: "/Media/motor-leg-0.png", caption: "" }],
      1: [{ src: "/Media/motor-leg-1.png", caption: "" }],
      2: [{ src: "/Media/motor-leg-2.png", caption: "" }],
      3: [{ src: "/Media/motor-leg-3.png", caption: "" }],
      4: [{ src: "/Media/motor-leg-4.png", caption: "" }],
    },
    faqs: [
      {
        question:
          "What if the patient raises their leg, it drops a slight amount such as half an inch, and then stabilizes and shows no drift for the remainder of the 10 second hold?",
        answer:
          "Initial drift, not caused by something such as cables from SpO2 monitors, or other physical barriers is scored a 1, even if it is for just a moment once eyes close.",
      },
      {
        question:
          "What if the patient can not lift their leg to 30 degrees when supine?",
        answer:
          "Lift the patient's leg for them. Let it go, and have them close their eyes. At this point, zero drift = 0, any drift, even transient momentary drift and then 5 seconds maintained after is scored a 1. Going forward, if the arm drifts down to bed, but makes efforts against gravity during and after it hits the bed score = 2. If the arm immediately falls to bed score 3 or 4, depending on whether there is any movement or complete flaccidity/reflexive movement only respectively.",
      },
      {
        question:
          "What is the main difference between score of 1 and a score of 2?",
        answer:
          "The major deciding factor is whether or not the leg touches the bed within the 5 second hold period, even once. Should it touch the bed or railing score = 2, if it drifts all the way down but touches neither score = 1.",
      },
      {
        question: "How to score a comatose patient?",
        answer:
          "As per the NIHSS, technically a patient should not be tested using pain or noxious stimuli when in a comatose state, as such this patient should be scored a 3 or 4, for a stuporous patient who makes even a tiny movement in arm (scored 3), and a coma patient who makes no effort (scored 4). Of course, if there is witnessed movement at any point during care of the patient, you can use this to score the patient.",
      },
    ],
    misconceptions: [
      {
        short: "Bed support counts",
        myth: "Movement in bed equals strength.",
        truth: "Must test against gravity.",
      },
      {
        short: "Position irrelevant",
        myth: "Any position is fine.",
        truth: "Standard NIHSS positioning required.",
      },
      {
        short: "Fatigue = deficit",
        myth: "Fatigue equals weakness.",
        truth: "Differentiate effort vs deficit.",
      },
      {
        short: "Quick lift enough",
        myth: "Brief lift is sufficient.",
        truth: "Must hold for full duration.",
      },
      {
        short: "Both legs together",
        myth: "Score both legs together.",
        truth: "Each leg scored independently.",
      },
      {
        short: "Partial lift normal",
        myth: "Partial lift equals normal.",
        truth: "Full criteria must be met.",
      },
    ],
  },
  {
    id: "7",
    slug: "limb-ataxia",
    title: "Limb Ataxia",
    points: "0-2",
    description: "Checks cerebellar coordination deficits.",
    overview:
      "This item evaluates ataxia out of proportion to weakness using finger-nose-finger and heel-shin testing.",
    scoring: [
      "0 = Absent",
      "1 = Present in one limb",
      "2 = Present in two limbs",
    ],
    tips: [
      "Do not score ataxia if weakness prevents testing unless true ataxia is evident.",
      "Differentiate sensory or motor deficits from cerebellar dysfunction.",
      "Only count clear ataxia.",
    ],
    images: {
      0: [{ src: "/Media/limb-ataxia-0.png", caption: "" }],
      1: [{ src: "/Media/limb-ataxia-1.png", caption: "" }],
      2: [{ src: "/Media/limb-ataxia-2.png", caption: "" }],
    },
    faqs: [
      {
        question:
          "What should I do if the patient has difficulty with limb ataxia due to weakness?",
        answer:
          "Limb ataxia is one of the few components which are considered absent or a score of 0, if they can not be tested due to weakness or other barriers which prevent testing.",
      },
      {
        question:
          "What if the patient misses the target due to a visual deficit",
        answer:
          "You can not score ataxia if the error is due to visual impairment, ensure the patient can see the target you utilize. You must bring the target into a good visual field where sight for the patient is good, then score purely ataxic deficits in this component",
      },
      {
        question:
          "What if the patient is shaky, slow or movement is otherwise irregular?",
        answer:
          "You are scoring coordination, or the lack there of, not the abnormal movement quality, so if the patient is shaky or demonstrates an irregular movement, but lands perfectly on target, you score ataxia a 0. If the patient misses the target in one limb, score = 1, two limbs = 2.",
      },
      {
        question:
          "The NIHSS states - Only in the case of amputation or joint fusion, the examiner should record the score as untestable (UN), and clearly write the explanation for this choice. In case of blindness, test by having the patient touch nose from extended arm position. What does this really mean?",
        answer:
          "Ataxia is considered absent in a patient who cannot understand or is paralyzed, using (UN) is reserved for mechanical impossibilities, not neurologic inability, which is scored a 0. Remember, ataxia is meant to represent coordination dysfunction independent of strength.",
      },
    ],
    misconceptions: [
      {
        short: "Weakness = ataxia",
        myth: "Poor movement = ataxia.",
        truth:
          "Must be out of proportion to weakness, simply put, the coordination problem is greater than what you would expect from the level of weakness alone.",
      },
      {
        short: "Any miss counts",
        myth: "Small errors count.",
        truth: "Only clear dysmetria counts, if unable to test, ataxia = 0.",
      },
      {
        short: "Always test",
        myth: "Must test even if paralyzed.",
        truth: "Do not score if untestable.",
      },
      {
        short: "Speed matters",
        myth: "Slow movement = ataxia.",
        truth: "Coordination, not speed, matters.",
      },
      {
        short: "Single limb enough",
        myth: "Testing one limb is sufficient.",
        truth: "All limbs should be assessed.",
      },
      {
        short: "Vision irrelevant",
        myth: "Visual input doesn’t matter.",
        truth: "Vision affects coordination testing.",
      },
    ],
  },
  {
    id: "8",
    slug: "sensory",
    title: "Sensory",
    points: "0-2",
    description: "Assesses sensation to pinprick or noxious stimulus.",
    overview: "This item examines sensory loss attributable to stroke.",
    scoring: [
      "0 = Normal; no sensory loss",
      "1 = Mild-to-moderate sensory loss",
      "2 = Severe-to-total sensory loss",
    ],
    tips: [
      "Use standardized sensory testing.",
      "Separate neglect from primary sensory deficit.",
      "Score stroke-related loss, not chronic baseline issues when possible.",
    ],
    images: {
      0: [{ src: "/Media/sensory-0.png", caption: "" }],
      1: [{ src: "/Media/sensory-1.png", caption: "" }],
      2: [{ src: "/Media/sensory-2.png", caption: "" }],
    },
    faqs: [
      {
        question: "What should I do if the patient is in a coma (item 1a = 3)?",
        answer:
          "In this case, the patient is automatically scored a 2 on this component of the NIHSS.",
      },
      {
        question:
          "What happens if the patient withdraws from the stimulus, but states they do not feel it?",
        answer:
          "Score is based on what the patient endorses or reports, we are testing sensation not reflex or motor response. Motor response or reflex can be used but only in conjunction with a demonstration/endorsement of awareness to said stimuli.",
      },
      {
        question:
          "How does one test for sensation in an aphasic, intubated or otherwise unable to respond patient?",
        answer:
          "You must look for evidence of conscious awareness, not movement alone. If the patient who is alert and intubated, moves their arm reflexively but shows absolutely no awareness (grimace, glance at testing site, movement of eyes or other), then we must score them a 2. If the same patient shows some slight awareness, such as an eventual glance toward tested site, or perception of the stimuli shows barely in a subtle fashion, it is more appropriate to score a 1.",
        media: {
          type: "image",
          src: "/Media/Sensory-Movement-vs-awareness-FAQ3.png",
          caption: "Notice the patient's awareness in the second slide",
        },
      },
    ],
    misconceptions: [
      {
        short: "Subjective only",
        myth: "Patient report is enough.",
        truth:
          "Use standardized testing in conjunction with patient endorsement or denial.",
      },
      {
        short: "Neglect = sensory",
        myth: "Neglect equals sensory loss.",
        truth: "They are different.",
      },
      {
        short: "Old deficits count",
        myth: "Chronic loss affects score.",
        truth:
          "Score acute findings only unless you have exact evidenced or documented descriptions of previous baseline deficits, when in doubt score what you see!",
      },
      {
        short: "Light touch enough",
        myth: "Light touch alone is sufficient.",
        truth: "Use appropriate stimulus.",
      },
      {
        short: "Symmetry assumed",
        myth: "Symmetry is always normal.",
        truth: "Compare both sides carefully.",
      },
      {
        short: "Pain ignored",
        myth: "Pain doesn’t affect response.",
        truth: "Pain perception is part of testing.",
      },
    ],
  },
  {
    id: "9",
    slug: "best-language",
    title: "Best Language",
    points: "0-3",
    description: "Evaluates aphasia and language function.",
    overview:
      "This item assesses expressive and receptive language using naming, description, and comprehension tasks.",
    scoring: [
      "0 = No aphasia",
      "1 = Mild-to-moderate aphasia",
      "2 = Severe aphasia",
      "3 = Mute, global aphasia, or no usable speech/auditory comprehension",
    ],
    tips: [
      "Aphasia is not the same as dysarthria.",
      "Score language function, not articulation quality.",
      "Use all available language tasks in the standardized exam.",
    ],
    images: {
      0: [{ src: "/Media/best-language-0.png", caption: "" }],
      1: [{ src: "/Media/best-language-1.png", caption: "" }],
      2: [{ src: "/Media/best-language-2.png", caption: "" }],
      3: [{ src: "/Media/best-language-3.png", caption: "" }],
    },
    faqs: [
      {
        question:
          "What if the patient can not speak clearly, but demonstrates they understand all commands and conversation?",
        answer:
          "Slurred or unclear speech alone is not aphasia. In the Best Language component, you are assessing the patient’s ability to understand and produce meaningful language, not how clearly they can articulate words. Speech clarity affected by facial weakness, motor impairment or other physical barrier is scored under Dysarthria (Item 10). However, a patient may have both dysarthria and aphasia, so always evaluate whether the content and comprehension of language are intact. Assess the patient's receptive and expressive comprehension, not articulation.",
      },
      {
        question:
          "What if the patient is answering incorrectly, seemingly confused, but the answers are completely out of proportion to the questions ask?",
        answer:
          "If the patient is confused, they may answer incorrectly and this can demonstrate their confusion, but if the patient is answering with very abstract, fragmented responses, and shows an inability to name objects correctly they are most likely aphasic rather than confused.",
      },
      {
        question:
          "How do I differentiate aphasia from decreased consciousness?",
        answer:
          "You assessed LOC in item 1 (LOC), if the patient is drowsy or unresponsive and this correlates to your LOC findings, you can not make the assumption that it is aphasia. If the patient is awake and alert, even tracking you but simply does not respond to any prompting, they are most likely globally mute (Score = 3), or at the very least severely expressively aphasic (Score = 2), further testing should be conducted.",
      },
      {
        question:
          "What if the patient is in a coma, scored this way by Glasgow Coma Scale score of less than 8, or findings from NIHSS item 1a being scored a 3, indicating coma?",
        answer:
          "Patient is automatically scored a 3 = Mute, global aphasia on this item.",
      },
      {
        question: "What if the patient is intubated.",
        answer:
          "The patient must be tested by utilization of other techniques, such as writing answers to objects you show them.",
      },
      {
        question: "What if the patient exhibits total blindness?",
        answer:
          "Test by placing objects in the patient's hand for them to identify.",
      },
    ],
    misconceptions: [
      {
        short: "Slurring = aphasia",
        myth: "Slurred speech = aphasia.",
        truth: "That is dysarthria.",
      },
      {
        short: "Naming only",
        myth: "Naming determines score.",
        truth: "Must assess comprehension + fluency.",
      },
      {
        short: "Effort ignored",
        myth: "Any attempt counts.",
        truth: "Score actual ability.",
      },
      {
        short: "Accent matters",
        myth: "Accent affects scoring.",
        truth: "Only language function matters.",
      },
      {
        short: "Short answers fine",
        myth: "Brief answers are normal.",
        truth: "Content matters, not length.",
      },
      {
        short: "Comprehension assumed",
        myth: "If speaking, comprehension is intact.",
        truth: "Must test both separately.",
      },
    ],
  },
  {
    id: "10",
    slug: "dysarthria",
    title: "Dysarthria",
    points: "0-2",
    description: "Assesses clarity of speech articulation.",
    overview:
      "This item measures slurring and articulation impairment, not language comprehension.",
    scoring: [
      "0 = Normal",
      "1 = Mild-to-moderate dysarthria",
      "2 = Severe dysarthria",
      "3 = UN = Intubated",
    ],
    tips: [
      "Dysarthria concerns articulation, not word choice or comprehension.",
      "If speech is clear despite aphasia, dysarthria may still be 0.",
      "Differentiate inability to speak from inability to articulate.",
    ],
    images: {
      0: [{ src: "/Media/dysarthria-0.png", caption: "" }],
      1: [{ src: "/Media/dysarthria-1.png", caption: "" }],
      2: [
        {
          src: "/Media/dysarthria-2.png",
          caption: "Patient may be completely incomprehensible",
        },
        {
          src: "/Media/dysarthria-2b.png",
          caption: "Or the Patient may be entirely mute, both are scored a 2 ",
        },
      ],
      3: [{ src: "/Media/dysarthria-3.png", caption: "" }],
    },
    faqs: [
      {
        question:
          "What if the patient can not speak due to intubation or other mechanical barrier?",
        answer:
          "This is not dysarthria, and if testing speech is impossible then we use the score of UN = Intubated.",
      },
      {
        question:
          "What if the patient's speech is very slurred, but the words and meaning inferred or understanding achieved from utilizing methods such as writing shows complete comprehension?",
        answer:
          "This is exactly what dysarthria is, language and understanding are to be separate from speech articulation, which we are testing here. Language and comprehension were tested in the NIHSS component of best language. Score based on level of dysarthria only, if the patient slurs or slowly responds, but is mostly understood with some difficulty, score = 1. If the patient's speech is so slurred as to become fragmentary requiring great need for inference, question, or guessing, score = 2.  ",
      },
      {
        question:
          "What if the patient is also aphasic to some degree, how do I score dysarthria from their answers or item identifications if they are incorrect?",
        answer:
          "As you are scoring their speech here, you must score its articulation and intelligibility out of proportion to any dysphasia. Is the speech unintelligibility worse than what their aphasia alone would explain? Essentially, if the patient understands everything but speech is completely unintelligible, score = 2. If the patient has some language impairment, but speech is far more slurred than expected, score = 2.",
      },
      {
        question:
          "The patient is answering all my questions wrong, or with random words, what now?",
        answer:
          "If the articulation of the wrong answers is clear, score = 0, as we are not testing comprehension, that is tested in the NIHSS component of best language.",
      },
      {
        question:
          "Dysarthria vs Aphasia when a patient is producing very limited amounts of speech.",
        answer:
          "In best language, did the patient understand? could they write and gesture correctly? This would most likely be dysarthria and hesitation to speak due to perceived deficit. If the patient can not form correct words, uses incorrect or nonsensical language, or can not comprehend, but speech is clear, this is likely aphasia.",
      },
      {
        question: "What if the patient just stares at me and does not respond?",
        answer:
          "Did the patient follow commands when you used pantomime, do they track you and are alert? If you answered yes, and they will not respond verbally, then you score them a 2 = Severe dysarthria.",
      },
      {
        question:
          "What if the patient is in a coma or sedated to a very low RASS score?",
        answer: "We can not assume dysarthria and as such score = 0.",
      },
    ],
    misconceptions: [
      {
        short: "Language = speech",
        myth: "Word choice affects dysarthria.",
        truth: "Only articulation matters.",
      },
      {
        short: "Mute = dysarthria",
        myth: "No speech = dysarthria.",
        truth:
          "Could be aphasia or LOC, cause of no speech can be something other than articulation issues.",
      },
      {
        short: "Accent confusion",
        myth: "Accent affects score.",
        truth: "Only clarity matters.",
      },
      {
        short: "Volume matters",
        myth: "Quiet speech = dysarthria.",
        truth: "Clarity, not volume, is assessed.",
      },
      {
        short: "Speed matters",
        myth: "Slow speech = dysarthria.",
        truth: "Articulation defines scoring.",
      },
      {
        short: "Understanding needed",
        myth: "Must understand patient.",
        truth: "Only clarity of sounds matters.",
      },
    ],
  },
  {
    id: "11",
    slug: "extinction-inattention",
    title: "Extinction / Inattention",
    points: "0-2",
    description: "Screens for neglect or inattention.",
    overview:
      "This item evaluates extinction to bilateral stimulation and spatial or sensory neglect.",
    scoring: [
      "0 = No abnormality",
      "1 = Visual, tactile, auditory, spatial, or personal inattention",
      "2 = Profound hemi-inattention or extinction in multiple modalities",
    ],
    tips: [
      "Use bilateral simultaneous stimulation when appropriate.",
      "Distinguish sensory loss from neglect.",
      "Observe behavior throughout the exam, not just one moment.",
    ],
    images: {
      0: [{ src: "/Media/extinction-inattention-0.png", caption: "" }],
      1: [
        {
          src: "/Media/extinction-inattention-1.png",
          caption:
            "Patient feels right side when tested alone, but does not attend to it once tested simultaneously with left.",
        },
      ],
      2: [
        {
          src: "/Media/extinction-inattention-2.png",
          caption:
            "Patient does not attend to right side at all and throughout all attempts at stimulation.",
        },
      ],
    },
    faqs: [
      {
        question:
          "What if the patient detects stimuli on each side when tested individually, but misses one side when tested simultaneously?",
        answer: "This is classic extinction, score = 1.",
      },
      {
        question:
          "If the patient has a field cut identified in item 3: Visual, how do I differentiate from true inattention (neglect)?",
        answer:
          "If the patient can not see the missing visual field even when tested alone, it is a visual field cut. If the patient initially identifies the field, but ignores it when simultaneously tested, this is extinction/inattention and will be scored a 1.",
      },
      {
        question:
          "What if my patient denies ownership of a limb or does not recognize it as their own?",
        answer:
          "This may be anosognosia, where the patient is unaware or does not comprehend their condition, or asomatognosia, where the patient feels as though the limb is missing or not belonging to them. Both of these are scored as a 2 = Profound hemi-inattention or extinction.",
      },
    ],
    misconceptions: [
      {
        short: "Miss = sensory",
        myth: "Missed stimulus = sensory loss.",
        truth: "Could be neglect.",
      },
      {
        short: "Single test enough",
        myth: "One test confirms neglect.",
        truth: "Multiple modalities needed.",
      },
      {
        short: "Visual only",
        myth: "Neglect is only visual.",
        truth: "Can be tactile, auditory, spatial.",
      },
      {
        short: "Attention constant",
        myth: "Attention doesn’t fluctuate.",
        truth: "Performance may vary.",
      },
      {
        short: "Symmetry assumed",
        myth: "Equal response = normal.",
        truth: "Subtle extinction can exist.",
      },
      {
        short: "One modality enough",
        myth: "Testing one sense is enough.",
        truth: "Multiple modalities improve accuracy.",
      },
    ],
  },
];
