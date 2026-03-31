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
          "Score based on the actual response elicited. Drowsiness alone does not determine the score.",
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
        truth: "Score what is observed now.",
      },
      {
        short: "Eyes open = alert",
        myth: "If eyes are open, patient is alert.",
        truth: "Alertness requires appropriate interaction.",
      },
      {
        short: "Pain = best test",
        myth: "Only painful stimuli should be used.",
        truth: "Start with least noxious stimulation.",
      },
      {
        short: "Reflex = purposeful",
        myth: "Any movement counts as response.",
        truth: "Differentiate reflex from purposeful movement.",
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
          "What should I do if the patient cannot answer clearly because of aphasia or confusion?",
        answer:
          "Use the patient's best verbal attempt and score only what they can actually answer correctly.",
      },
      {
        question: "What if the patient answers partially correct?",
        answer:
          "Only fully correct answers count. Partial correctness does not receive credit.",
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
        truth: "Only correctness of answer matters.",
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
          "What should I do if the patient has difficulty with loc commands?",
        answer:
          "Use the best valid bedside method available and score only what is actually demonstrated.",
      },
    ],
    misconceptions: [
      {
        short: "Effort = success",
        myth: "Trying counts as correct.",
        truth: "Only correct execution counts.",
      },
      {
        short: "Repeat freely",
        myth: "Commands can be repeated multiple times.",
        truth: "Only limited repetition allowed.",
      },
      {
        short: "Motor ignored",
        myth: "Failure is always cognitive.",
        truth: "Motor deficits must be considered.",
      },
      {
        short: "Partial = correct",
        myth: "Partial movement counts.",
        truth: "Must fully complete command.",
      },
      {
        short: "Demonstration allowed",
        myth: "You can show the action.",
        truth: "Commands must be verbal only.",
      },
      {
        short: "Wrong task okay",
        myth: "Doing a different task is acceptable.",
        truth: "Must perform the exact command.",
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
          "What should I do if the patient has difficulty with best gaze?",
        answer:
          "Use the best valid bedside method available and score only what is actually demonstrated.",
      },
    ],
    misconceptions: [
      {
        short: "Head = gaze",
        myth: "Head turning equals eye movement.",
        truth: "Eyes must move independently.",
      },
      {
        short: "Tracking = normal",
        myth: "Any tracking means normal.",
        truth: "Partial palsy still scores abnormal.",
      },
      {
        short: "Effort = deficit",
        myth: "Poor effort means gaze palsy.",
        truth: "Confirm with reflex movements.",
      },
      {
        short: "One direction enough",
        myth: "Testing one side is sufficient.",
        truth: "Both directions must be assessed.",
      },
      {
        short: "Resting gaze ignored",
        myth: "Only movement matters.",
        truth: "Resting deviation is critical.",
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
          "What should I do if the patient has difficulty with visual fields?",
        answer:
          "Use the best valid bedside method available and score only what is actually demonstrated.",
      },
    ],
    misconceptions: [
      {
        short: "Eye movement proves",
        myth: "Looking proves intact fields.",
        truth: "Confrontation testing is required.",
      },
      {
        short: "Neglect = field cut",
        myth: "Missing side = hemianopia.",
        truth: "Neglect and field loss differ.",
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
        truth: "Consistency is critical.",
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
        question:
          "What should I do if the patient has difficulty with facial palsy?",
        answer:
          "Use the best valid bedside method available and score only what is actually demonstrated.",
      },
    ],
    misconceptions: [
      {
        short: "Rest symmetry enough",
        myth: "Normal rest = normal function.",
        truth: "Must assess active movement.",
      },
      {
        short: "Mild ignored",
        myth: "Subtle changes are normal.",
        truth: "Minor deficits still count.",
      },
      {
        short: "Speech reflects face",
        myth: "Speech = facial strength.",
        truth: "They are separate functions.",
      },
      {
        short: "Only smile matters",
        myth: "Smile alone is enough.",
        truth: "Multiple movements required.",
      },
      {
        short: "Baseline ignored",
        myth: "Pre-existing asymmetry doesn’t matter.",
        truth: "Consider baseline if known.",
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
          "What should I do if the patient has difficulty with motor arm?",
        answer:
          "Use the best valid bedside method available and score only what is actually demonstrated.",
      },
    ],
    misconceptions: [
      {
        short: "Fast drop = 4",
        myth: "Quick drop = no movement.",
        truth: "Assess effort against gravity.",
      },
      {
        short: "Pain ignored",
        myth: "Pain doesn’t affect results.",
        truth: "Distinguish neurologic weakness.",
      },
      {
        short: "Both arms together",
        myth: "Score arms together.",
        truth: "Each arm scored separately.",
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
          "What should I do if the patient has difficulty with motor leg?",
        answer:
          "Use the best valid bedside method available and score only what is actually demonstrated.",
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
          "What should I do if the patient has difficulty with limb ataxia?",
        answer:
          "Use the best valid bedside method available and score only what is actually demonstrated.",
      },
    ],
    misconceptions: [
      {
        short: "Weakness = ataxia",
        myth: "Poor movement = ataxia.",
        truth: "Must be out of proportion to weakness.",
      },
      {
        short: "Any miss counts",
        myth: "Small errors count.",
        truth: "Only clear dysmetria counts.",
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
        question:
          "What should I do if the patient has difficulty with sensory?",
        answer:
          "Use the best valid bedside method available and score only what is actually demonstrated.",
      },
    ],
    misconceptions: [
      {
        short: "Subjective only",
        myth: "Patient report is enough.",
        truth: "Use standardized testing.",
      },
      {
        short: "Neglect = sensory",
        myth: "Neglect equals sensory loss.",
        truth: "They are different.",
      },
      {
        short: "Old deficits count",
        myth: "Chronic loss affects score.",
        truth: "Score acute findings.",
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
          "What should I do if the patient has difficulty with best language?",
        answer:
          "Use the best valid bedside method available and score only what is actually demonstrated.",
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
    ],
    tips: [
      "Dysarthria concerns articulation, not word choice or comprehension.",
      "If speech is clear despite aphasia, dysarthria may still be 0.",
      "Differentiate inability to speak from inability to articulate.",
    ],
    images: {
      0: [{ src: "/Media/dysarthria-0.png", caption: "" }],
      1: [{ src: "/Media/dysarthria-1.png", caption: "" }],
      2: [{ src: "/Media/dysarthria-2.png", caption: "" }],
    },
    faqs: [
      {
        question:
          "What should I do if the patient has difficulty with dysarthria?",
        answer:
          "Use the best valid bedside method available and score only what is actually demonstrated.",
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
        truth: "Could be aphasia or LOC.",
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
      1: [{ src: "/Media/extinction-inattention-1.png", caption: "" }],
      2: [{ src: "/Media/extinction-inattention-2.png", caption: "" }],
    },
    faqs: [
      {
        question:
          "What should I do if the patient has difficulty with extinction / inattention?",
        answer:
          "Use the best valid bedside method available and score only what is actually demonstrated.",
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
