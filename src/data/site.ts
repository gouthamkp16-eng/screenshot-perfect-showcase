export const CONTACT_EMAIL = "internship@techliciouslabs.com";

export const socials = [
  { name: "LinkedIn", url: "https://www.linkedin.com/company/techlicious-labs" },
  { name: "Instagram", url: "https://www.instagram.com/techliciouslabs" },
  { name: "Facebook", url: "https://www.facebook.com/profile.php?id=61594126600838" },
];

export const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Internships", to: "/internships" },
  { label: "Projects / R&D", to: "/projects" },
  { label: "Why Us", to: "/why-us" },
  { label: "Contact", to: "/contact" },
] as const;

export const tracks = [
  {
    icon: "cpu",
    title: "PCB Design",
    blurb:
      "Schematic to fabrication in KiCad — footprints, routing, DRC and a board you actually send out.",
    tools: ["KiCad", "LTspice", "DFM review"],
  },
  {
    icon: "code",
    title: "Embedded Firmware",
    blurb:
      "ESP32 and ESP-IDF from first boot to multi-task firmware, with real debugging habits.",
    tools: ["ESP-IDF", "Arduino", "FreeRTOS", "PlatformIO"],
  },
  {
    icon: "bot",
    title: "Robotics & Mechanical Design",
    blurb:
      "Gait control, actuators and 3D-printed parametric mechanisms tested on real hardware.",
    tools: ["PCA9685", "Servo control", "3D printing"],
  },
  {
    icon: "brain",
    title: "Python + AI/ML",
    blurb:
      "From clean Python to models that run on sensor data — training, evaluation and deployment.",
    tools: ["Python", "NumPy", "scikit-learn", "Edge inference"],
  },
  {
    icon: "layers",
    title: "Full-Stack Development",
    blurb:
      "Ship working products: React front ends, real databases, auth and deployment pipelines.",
    tools: ["React", "Vite", "Firebase", "REST APIs"],
  },
  {
    icon: "flask",
    title: "Simulation & Prototyping",
    blurb:
      "Prove the circuit before you solder it — simulate, iterate, then build the real thing.",
    tools: ["Wokwi", "LTspice", "Bench testing"],
  },
];

export const projects = [
  {
    title: "RoboDog — Quadruped Robot",
    summary:
      "Our flagship build: a four-legged robot that walks on firmware we wrote, on a board we designed. A FreeRTOS gait engine drives the legs while a Flutter app steers it over BLE.",
    detail:
      "Custom KiCad PCB around a XIAO ESP32-S3 and PCA9685 PWM driver, with 3D-printed parametric legs using a spring-passive knee for shock absorption.",
    stack: ["KiCad", "ESP32-S3", "FreeRTOS", "BLE", "Flutter"],
    badge: "Flagship",
  },
  {
    title: "PetDog Voice-Command Assistant",
    summary:
      "Say \"Hi Jolly\" and it listens — entirely on-device. Wake-word detection and command recognition run on the chip itself, with no cloud and no latency.",
    detail:
      "Built on ESP-SR (WakeNet9 + MultiNet) over ESP-IDF, tuned for noisy rooms and low-power always-on listening.",
    stack: ["ESP-IDF", "ESP-SR", "WakeNet9", "MultiNet"],
    badge: "Edge AI",
  },
  {
    title: "AI-Powered Crop Quality Sorting System",
    summary:
      "A working agri-tech line that weighs, measures and sorts produce in real time — scoring every item and pushing results live to a dashboard.",
    detail:
      "ESP32 core with an HX711 load cell, ultrasonic sizing, servo-driven sorting gates and live Firebase Realtime Database scoring.",
    stack: ["ESP32", "HX711", "Ultrasonic", "Firebase RTDB"],
    badge: "IoT",
  },
  {
    title: "Suraksha-Setu — Emergency SOS App",
    summary:
      "A hyper-local emergency alert app that fires SMS and email alerts the moment it matters — including native Android dispatch when data is patchy.",
    detail:
      "Flutter app with a Kotlin SmsManager MethodChannel for native SMS, plus automated email alerts through EmailJS.",
    stack: ["Flutter", "Kotlin", "MethodChannel", "EmailJS"],
    badge: "Mobile",
  },
  {
    title: "ASP-TECH Assembly Line Web App",
    summary:
      "Production software running on a real factory floor: component mapping, batch management and exports that a team depends on every shift.",
    detail:
      "Vite + React front end on Firebase Firestore, with CSV/XLSX export and secure passkey access.",
    stack: ["Vite", "React", "Firestore", "XLSX export"],
    badge: "Industry",
  },
  {
    title: "Smart India Hackathon 2024 — National Winner",
    summary:
      "National-level win against thousands of teams — the clearest proof that what we teach holds up under pressure and deadlines.",
    detail:
      "Hardware, firmware and software built end-to-end by the same team that mentors our interns.",
    stack: ["National Winner", "SIH 2024"],
    badge: "Award",
  },
];

export const whyUs = [
  {
    icon: "cpu",
    title: "Real Hardware, Not Just Slides",
    blurb: "Every track ends with something that powers on, moves or ships.",
  },
  {
    icon: "wrench",
    title: "Industry-Standard Tools",
    blurb: "KiCad, ESP-IDF, FreeRTOS, PlatformIO, Wokwi, LTspice — the real stack.",
  },
  {
    icon: "users",
    title: "Mentorship from Practicing Engineers",
    blurb: "You are guided by people currently designing boards and firmware.",
  },
  {
    icon: "trophy",
    title: "Hackathon-Winning Track Record",
    blurb: "Smart India Hackathon 2024 national winners on the mentoring team.",
  },
  {
    icon: "shield",
    title: "Defence-Grade PCB Experience",
    blurb: "Design discipline carried over from high-reliability board work.",
  },
  {
    icon: "badge",
    title: "Project-Based Certification",
    blurb: "Certification tied to a built project, not attendance.",
  },
];

export const stats = [
  { value: 250, suffix: "+", label: "Students Trained" },
  { value: 40, suffix: "+", label: "Projects Built" },
  { value: 1, suffix: "", label: "National Hackathon Win" },
  { value: 5, suffix: "", label: "Internship Tracks" },
];
