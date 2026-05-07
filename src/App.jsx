import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";

const iconPaths = {
  Activity: "M22 12h-4l-3 9L9 3l-3 9H2",
  CalendarDays: "M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm3 10h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01M16 18h.01",
  CheckCircle2: "M9 12l2 2 4-4M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z",
  Clock3: "M12 6v6l4 2M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z",
  Edit3: "M12 20h9M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z",
  Eye: "M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12zm10 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6z",
  LayoutDashboard: "M3 3h8v8H3V3zm10 0h8v5h-8V3zM3 13h8v8H3v-8zm10-3h8v11h-8V10z",
  Megaphone: "M3 11v2a2 2 0 0 0 2 2h2l4 4v-4l8 2V7l-8 2H5a2 2 0 0 0-2 2zm16-4l2-2M19 17l2 2",
  Palette: "M12 22a10 10 0 1 1 10-10c0 2.2-1.8 4-4 4h-1.5a1.5 1.5 0 0 0-1.3 2.25A2.5 2.5 0 0 1 12 22zM7.5 10.5h.01M10.5 7.5h.01M14.5 7.5h.01M17 11h.01",
  Plus: "M12 5v14M5 12h14",
  Save: "M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2zM7 21v-8h10v8M7 3v5h8",
  Settings: "M12 15.5A3.5 3.5 0 1 0 12 8a3.5 3.5 0 0 0 0 7.5zM19.4 15a1.7 1.7 0 0 0 .34 1.88l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06A1.7 1.7 0 0 0 15 19.4a1.7 1.7 0 0 0-1 .6V20a2 2 0 1 1-4 0v-.08a1.7 1.7 0 0 0-1-.6 1.7 1.7 0 0 0-1.88.34l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.7 1.7 0 0 0 4.6 15a1.7 1.7 0 0 0-.6-1H4a2 2 0 1 1 0-4h.08a1.7 1.7 0 0 0 .6-1 1.7 1.7 0 0 0-.34-1.88l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.7 1.7 0 0 0 9 4.6a1.7 1.7 0 0 0 1-.6V4a2 2 0 1 1 4 0v.08a1.7 1.7 0 0 0 1 .6 1.7 1.7 0 0 0 1.88-.34l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.7 1.7 0 0 0 19.4 9c.15.36.36.7.6 1H20a2 2 0 1 1 0 4h-.08a1.7 1.7 0 0 0-.52 1z",
  ShieldCheck: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10zM9 12l2 2 4-4",
  Sparkles: "M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3zM5 3v4M3 5h4M19 17v4M17 19h4",
  Trash2: "M3 6h18M8 6V4h8v2M6 6l1 15h10l1-15M10 11v6M14 11v6",
  Wrench: "M14.7 6.3a4 4 0 0 0-5 5L3 18l3 3 6.7-6.7a4 4 0 0 0 5-5l-2.9 2.9-2.1-2.1 2-2.8z",
};

function Icon({ name, className = "h-5 w-5" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d={iconPaths[name] || iconPaths.Sparkles} />
    </svg>
  );
}

const defaultData = {
  siteTitle: "Project Progress",
  heroTitle: "Event Horizon",
  heroSubtitle: "Track project updates, milestones, maintenance, and progress in one clean place.",
  projectName: "Retro You",
  projectDescription:
    "A focused study workflow project designed for smart, efficient, high-quality progress across Physics, Biology, Chemistry, and Mathematics.",
  status: "Active",
  progress: 64,
  startDate: "2026-05-05",
  endDate: "2026-05-10",
  primaryColor: "#16a34a",
  accentColor: "#22c55e",
  backgroundColor: "#ffffff",
  textColor: "#102015",
  cardColor: "#f7fff9",
  noticeTitle: "Current Notice",
  noticeText: "Work is progressing normally. Next update will focus on the final review and optimization stage.",
  steps: [
    { id: 1, title: "Project structure planned", description: "Main goals, timeline, and subject coverage defined.", status: "Done" },
    { id: 2, title: "Study workflow design", description: "Smart study method, priority system, and efficiency rules created.", status: "Done" },
    { id: 3, title: "Resource organization", description: "Materials are being arranged subject-wise for faster access.", status: "Working" },
    { id: 4, title: "Final quality check", description: "Testing the workflow and polishing the result before completion.", status: "Pending" },
  ],
  updates: [
    { id: 1, title: "Planning completed", type: "Update", date: "2026-05-05", note: "The project timeline and core direction have been finalized." },
    { id: 2, title: "Workflow phase started", type: "Progress", date: "2026-05-06", note: "Work has moved into resource setup and smart-study structure building." },
  ],
};

function safeNumber(value, fallback = 0) {
  const number = Number(value);
  if (Number.isNaN(number)) return fallback;
  return Math.max(0, Math.min(100, number));
}

function cloneData(data) {
  return JSON.parse(JSON.stringify(data));
}

function createEmptyStep() {
  return { id: Date.now() + Math.random(), title: "New step", description: "Describe this step here.", status: "Pending" };
}

function createEmptyUpdate() {
  const today = new Date().toISOString().slice(0, 10);
  return { id: Date.now() + Math.random(), title: "New update", type: "Update", date: today, note: "Write the update note here." };
}

function runDeveloperTests() {
  console.assert(safeNumber(50) === 50, "safeNumber keeps valid numbers");
  console.assert(safeNumber(-10) === 0, "safeNumber clamps low values to 0");
  console.assert(safeNumber(150) === 100, "safeNumber clamps high values to 100");
  console.assert(safeNumber("bad", 42) === 42, "safeNumber uses fallback for invalid values");
  const original = { nested: { value: 1 } };
  const copy = cloneData(original);
  copy.nested.value = 2;
  console.assert(original.nested.value === 1, "cloneData creates a deep copy");
  console.assert(createEmptyStep().status === "Pending", "new steps start as Pending");
  console.assert(createEmptyUpdate().type === "Update", "new timeline items start as Update");
}

if (typeof window !== "undefined" && !window.__PROJECT_PROGRESS_TESTS_RAN__) {
  window.__PROJECT_PROGRESS_TESTS_RAN__ = true;
  runDeveloperTests();
}

function Field({ label, value, onChange, type = "text", min, max, textarea = false, placeholder }) {
  return (
    <label className="block space-y-2">
      <span className="text-xs font-semibold uppercase tracking-wide text-slate-500">{label}</span>
      {textarea ? (
        <textarea
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder={placeholder}
          rows={4}
          className="w-full resize-none rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-emerald-400 focus:ring-4 focus:ring-emerald-100"
        />
      ) : (
        <input
          value={value}
          onChange={(event) => onChange(event.target.value)}
          type={type}
          min={min}
          max={max}
          placeholder={placeholder}
          className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-emerald-400 focus:ring-4 focus:ring-emerald-100"
        />
      )}
    </label>
  );
}

function SelectField({ label, value, onChange, options }) {
  return (
    <label className="block space-y-2">
      <span className="text-xs font-semibold uppercase tracking-wide text-slate-500">{label}</span>
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-emerald-400 focus:ring-4 focus:ring-emerald-100"
      >
        {options.map((option) => (
          <option key={option} value={option}>{option}</option>
        ))}
      </select>
    </label>
  );
}

function ColorField({ label, value, onChange }) {
  return (
    <label className="block space-y-2">
      <span className="text-xs font-semibold uppercase tracking-wide text-slate-500">{label}</span>
      <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-3 py-2">
        <input
          type="color"
          value={value}
          onChange={(event) => onChange(event.target.value)}
          className="h-10 w-12 cursor-pointer rounded-xl border-0 bg-transparent p-0"
        />
        <input
          value={value}
          onChange={(event) => onChange(event.target.value)}
          className="min-w-0 flex-1 bg-transparent text-sm outline-none"
        />
      </div>
    </label>
  );
}

function StatusBadge({ status, primaryColor }) {
  const iconName = status === "Maintenance" ? "Wrench" : status === "Completed" ? "CheckCircle2" : "Activity";
  return (
    <span
      className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-white shadow-sm"
      style={{ backgroundColor: primaryColor }}
    >
      <Icon name={iconName} className="h-4 w-4" />
      {status}
    </span>
  );
}

function PublicView({ data, setMode }) {
  const completedSteps = data.steps.filter((step) => step.status === "Done").length;
  const progress = safeNumber(data.progress);

  return (
    <div style={{ backgroundColor: data.backgroundColor, color: data.textColor }} className="min-h-screen">
      <header className="sticky top-0 z-30 border-b border-black/5 bg-white/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
          <div className="flex items-center gap-3">
            <div
              className="flex h-11 w-11 items-center justify-center rounded-2xl text-white shadow-lg shadow-emerald-200"
              style={{ backgroundColor: data.primaryColor }}
            >
              <Icon name="Sparkles" className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm font-black tracking-tight sm:text-base">{data.siteTitle}</p>
              <p className="text-xs text-slate-500">Live project status</p>
            </div>
          </div>
          <button
            onClick={() => setMode("admin")}
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm transition hover:scale-[1.02] hover:shadow-md"
          >
            <Icon name="Settings" className="h-4 w-4" />
            <span className="hidden sm:inline">Admin Panel</span>
          </button>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:py-12">
        <section className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-stretch">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="overflow-hidden rounded-[2rem] border border-black/5 p-6 shadow-xl shadow-emerald-100/60 sm:p-8 lg:p-10"
            style={{ backgroundColor: data.cardColor }}
          >
            <div className="mb-6 flex flex-wrap items-center gap-3">
              <StatusBadge status={data.status} primaryColor={data.primaryColor} />
              <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-600 shadow-sm">
                <Icon name="CalendarDays" className="h-4 w-4" />
                {data.startDate} → {data.endDate}
              </span>
            </div>

            <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-slate-500">{data.projectName}</p>
            <h1 className="max-w-3xl text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              {data.heroTitle}
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">{data.heroSubtitle}</p>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">{data.projectDescription}</p>

            <div className="mt-8 rounded-3xl bg-white p-5 shadow-sm">
              <div className="mb-3 flex items-center justify-between gap-4">
                <p className="text-sm font-bold text-slate-600">Overall Progress</p>
                <p className="text-2xl font-black" style={{ color: data.primaryColor }}>{progress}%</p>
              </div>
              <div className="h-4 overflow-hidden rounded-full bg-slate-100">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="h-full rounded-full"
                  style={{ background: `linear-gradient(90deg, ${data.primaryColor}, ${data.accentColor})` }}
                />
              </div>
            </div>
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1"
          >
            <div className="rounded-[2rem] border border-black/5 bg-white p-6 shadow-lg shadow-slate-100">
              <div className="flex items-center gap-3">
                <div className="rounded-2xl bg-emerald-50 p-3" style={{ color: data.primaryColor }}>
                  <Icon name="CheckCircle2" className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-3xl font-black">{completedSteps}/{data.steps.length}</p>
                  <p className="text-sm text-slate-500">Steps completed</p>
                </div>
              </div>
            </div>
            <div className="rounded-[2rem] border border-black/5 bg-white p-6 shadow-lg shadow-slate-100">
              <div className="flex items-center gap-3">
                <div className="rounded-2xl bg-emerald-50 p-3" style={{ color: data.primaryColor }}>
                  <Icon name="Megaphone" className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-3xl font-black">{data.updates.length}</p>
                  <p className="text-sm text-slate-500">Public updates</p>
                </div>
              </div>
            </div>
            <div className="rounded-[2rem] border border-black/5 bg-white p-6 shadow-lg shadow-slate-100">
              <div className="flex items-center gap-3">
                <div className="rounded-2xl bg-emerald-50 p-3" style={{ color: data.primaryColor }}>
                  <Icon name="Clock3" className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-3xl font-black">Live</p>
                  <p className="text-sm text-slate-500">Status board</p>
                </div>
              </div>
            </div>
          </motion.aside>
        </section>

        <section className="mt-6 rounded-[2rem] border border-black/5 bg-white p-6 shadow-lg shadow-slate-100 sm:p-7">
          <div className="flex items-start gap-4">
            <div className="rounded-2xl p-3 text-white" style={{ backgroundColor: data.primaryColor }}>
              <Icon name="Megaphone" className="h-5 w-5" />
            </div>
            <div>
              <h2 className="text-xl font-black tracking-tight">{data.noticeTitle}</h2>
              <p className="mt-2 leading-7 text-slate-600">{data.noticeText}</p>
            </div>
          </div>
        </section>

        <section className="mt-8 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-2xl font-black tracking-tight">Progress Steps</h2>
              <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-500">Milestones</span>
            </div>
            <div className="space-y-4">
              {data.steps.map((step, index) => {
                const isDone = step.status === "Done";
                const isWorking = step.status === "Working";
                return (
                  <motion.div
                    key={step.id}
                    initial={{ opacity: 0, x: -14 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.35, delay: index * 0.04 }}
                    className="rounded-3xl border border-black/5 bg-white p-5 shadow-md shadow-slate-100"
                  >
                    <div className="flex gap-4">
                      <div
                        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl text-white"
                        style={{ backgroundColor: isDone ? data.primaryColor : isWorking ? data.accentColor : "#cbd5e1" }}
                      >
                        {isDone ? <Icon name="CheckCircle2" className="h-5 w-5" /> : isWorking ? <Icon name="Activity" className="h-5 w-5" /> : <Icon name="Clock3" className="h-5 w-5" />}
                      </div>
                      <div className="min-w-0">
                        <div className="flex flex-wrap items-center gap-2">
                          <h3 className="font-black tracking-tight">{step.title}</h3>
                          <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-bold text-slate-500">{step.status}</span>
                        </div>
                        <p className="mt-2 text-sm leading-6 text-slate-600">{step.description}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          <div>
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-2xl font-black tracking-tight">Latest Updates</h2>
              <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-500">Timeline</span>
            </div>
            <div className="space-y-4">
              {data.updates.map((update, index) => (
                <motion.article
                  key={update.id}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: index * 0.04 }}
                  className="rounded-3xl border border-black/5 bg-white p-5 shadow-md shadow-slate-100"
                >
                  <div className="mb-3 flex flex-wrap items-center gap-2">
                    <span className="rounded-full px-3 py-1 text-xs font-black text-white" style={{ backgroundColor: data.primaryColor }}>{update.type}</span>
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-500">{update.date}</span>
                  </div>
                  <h3 className="text-lg font-black tracking-tight">{update.title}</h3>
                  <p className="mt-2 leading-7 text-slate-600">{update.note}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

function AdminView({ data, setData, setMode }) {
  const [draft, setDraft] = useState(() => cloneData(data));
  const [savedPulse, setSavedPulse] = useState(false);

  function updateField(key, value) {
    setDraft((previous) => ({ ...previous, [key]: key === "progress" ? safeNumber(value) : value }));
  }

  function updateStep(id, key, value) {
    setDraft((previous) => ({
      ...previous,
      steps: previous.steps.map((step) => (step.id === id ? { ...step, [key]: value } : step)),
    }));
  }

  function addStep() {
    setDraft((previous) => ({
      ...previous,
      steps: [...previous.steps, createEmptyStep()],
    }));
  }

  function removeStep(id) {
    setDraft((previous) => ({ ...previous, steps: previous.steps.filter((step) => step.id !== id) }));
  }

  function updateTimeline(id, key, value) {
    setDraft((previous) => ({
      ...previous,
      updates: previous.updates.map((update) => (update.id === id ? { ...update, [key]: value } : update)),
    }));
  }

  function addUpdate() {
    setDraft((previous) => ({
      ...previous,
      updates: [createEmptyUpdate(), ...previous.updates],
    }));
  }

  function removeUpdate(id) {
    setDraft((previous) => ({ ...previous, updates: previous.updates.filter((update) => update.id !== id) }));
  }

  function saveChanges() {
    setData(cloneData(draft));
    setSavedPulse(true);
    window.setTimeout(() => setSavedPulse(false), 1300);
  }

  function resetDemo() {
    setDraft(cloneData(defaultData));
    setData(cloneData(defaultData));
  }

  const completionPreview = useMemo(() => safeNumber(draft.progress), [draft.progress]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-600 text-white shadow-lg shadow-emerald-200">
              <Icon name="LayoutDashboard" className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm font-black tracking-tight sm:text-base">Visual Admin Panel</p>
              <p className="text-xs text-slate-500">Control everything without touching the database</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setMode("public")}
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm transition hover:scale-[1.02] hover:shadow-md"
            >
              <Icon name="Eye" className="h-4 w-4" />
              <span className="hidden sm:inline">Preview</span>
            </button>
            <button
              onClick={saveChanges}
              className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-emerald-200 transition hover:scale-[1.02] hover:bg-emerald-700"
            >
              <Icon name="Save" className="h-4 w-4" />
              Save
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto grid max-w-7xl gap-6 px-4 py-6 sm:px-6 lg:grid-cols-[280px_1fr]">
        <aside className="h-fit rounded-[2rem] border border-slate-200 bg-white p-5 shadow-sm lg:sticky lg:top-24">
          <div className="mb-5 rounded-3xl p-5 text-white" style={{ background: `linear-gradient(135deg, ${draft.primaryColor}, ${draft.accentColor})` }}>
            <p className="text-sm font-semibold opacity-90">Preview progress</p>
            <p className="mt-1 text-4xl font-black">{completionPreview}%</p>
            <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/30">
              <div className="h-full rounded-full bg-white" style={{ width: `${completionPreview}%` }} />
            </div>
          </div>

          <nav className="space-y-2 text-sm font-semibold text-slate-600">
            <a href="#content" className="flex items-center gap-3 rounded-2xl px-4 py-3 hover:bg-slate-50"><Icon name="Edit3" className="h-4 w-4" /> Content</a>
            <a href="#theme" className="flex items-center gap-3 rounded-2xl px-4 py-3 hover:bg-slate-50"><Icon name="Palette" className="h-4 w-4" /> Theme</a>
            <a href="#steps" className="flex items-center gap-3 rounded-2xl px-4 py-3 hover:bg-slate-50"><Icon name="CheckCircle2" className="h-4 w-4" /> Steps</a>
            <a href="#updates" className="flex items-center gap-3 rounded-2xl px-4 py-3 hover:bg-slate-50"><Icon name="Megaphone" className="h-4 w-4" /> Updates</a>
            <a href="#security" className="flex items-center gap-3 rounded-2xl px-4 py-3 hover:bg-slate-50"><Icon name="ShieldCheck" className="h-4 w-4" /> Security note</a>
          </nav>

          {savedPulse && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-5 rounded-2xl bg-emerald-50 px-4 py-3 text-sm font-semibold text-emerald-700"
            >
              Changes saved locally.
            </motion.div>
          )}
        </aside>

        <section className="space-y-6">
          <div id="content" className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
              <div>
                <h2 className="text-2xl font-black tracking-tight">Main Content</h2>
                <p className="mt-1 text-sm text-slate-500">Edit the website text, status, timeline, and progress.</p>
              </div>
              <button onClick={resetDemo} className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-600 hover:bg-slate-50">
                Reset demo
              </button>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <Field label="Website title" value={draft.siteTitle} onChange={(value) => updateField("siteTitle", value)} />
              <Field label="Hero title" value={draft.heroTitle} onChange={(value) => updateField("heroTitle", value)} />
              <Field label="Project name" value={draft.projectName} onChange={(value) => updateField("projectName", value)} />
              <SelectField label="Status" value={draft.status} onChange={(value) => updateField("status", value)} options={["Active", "Maintenance", "Paused", "Completed"]} />
              <Field label="Start date" type="date" value={draft.startDate} onChange={(value) => updateField("startDate", value)} />
              <Field label="End date" type="date" value={draft.endDate} onChange={(value) => updateField("endDate", value)} />
              <Field label="Progress percentage" type="number" min="0" max="100" value={draft.progress} onChange={(value) => updateField("progress", value)} />
              <Field label="Notice title" value={draft.noticeTitle} onChange={(value) => updateField("noticeTitle", value)} />
              <div className="md:col-span-2">
                <Field label="Hero subtitle" textarea value={draft.heroSubtitle} onChange={(value) => updateField("heroSubtitle", value)} />
              </div>
              <div className="md:col-span-2">
                <Field label="Project description" textarea value={draft.projectDescription} onChange={(value) => updateField("projectDescription", value)} />
              </div>
              <div className="md:col-span-2">
                <Field label="Notice text" textarea value={draft.noticeText} onChange={(value) => updateField("noticeText", value)} />
              </div>
            </div>
          </div>

          <div id="theme" className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <div className="mb-5">
              <h2 className="text-2xl font-black tracking-tight">Theme Control</h2>
              <p className="mt-1 text-sm text-slate-500">Default is white and green. Change colors anytime.</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <ColorField label="Primary color" value={draft.primaryColor} onChange={(value) => updateField("primaryColor", value)} />
              <ColorField label="Accent color" value={draft.accentColor} onChange={(value) => updateField("accentColor", value)} />
              <ColorField label="Background color" value={draft.backgroundColor} onChange={(value) => updateField("backgroundColor", value)} />
              <ColorField label="Text color" value={draft.textColor} onChange={(value) => updateField("textColor", value)} />
              <ColorField label="Card color" value={draft.cardColor} onChange={(value) => updateField("cardColor", value)} />
            </div>
          </div>

          <div id="steps" className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
              <div>
                <h2 className="text-2xl font-black tracking-tight">Steps</h2>
                <p className="mt-1 text-sm text-slate-500">Add, remove, and edit project milestones.</p>
              </div>
              <button onClick={addStep} className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-emerald-100 hover:bg-emerald-700">
                <Icon name="Plus" className="h-4 w-4" /> Add Step
              </button>
            </div>
            <div className="space-y-4">
              {draft.steps.map((step, index) => (
                <div key={step.id} className="rounded-3xl border border-slate-200 bg-slate-50 p-4">
                  <div className="mb-4 flex items-center justify-between gap-3">
                    <p className="text-sm font-black text-slate-500">Step {index + 1}</p>
                    <button onClick={() => removeStep(step.id)} className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-xs font-bold text-red-500 shadow-sm hover:bg-red-50">
                      <Icon name="Trash2" className="h-4 w-4" /> Remove
                    </button>
                  </div>
                  <div className="grid gap-4 md:grid-cols-2">
                    <Field label="Step title" value={step.title} onChange={(value) => updateStep(step.id, "title", value)} />
                    <SelectField label="Step status" value={step.status} onChange={(value) => updateStep(step.id, "status", value)} options={["Pending", "Working", "Done"]} />
                    <div className="md:col-span-2">
                      <Field label="Step description" textarea value={step.description} onChange={(value) => updateStep(step.id, "description", value)} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div id="updates" className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
              <div>
                <h2 className="text-2xl font-black tracking-tight">Updates</h2>
                <p className="mt-1 text-sm text-slate-500">Post announcements, maintenance notes, and progress messages.</p>
              </div>
              <button onClick={addUpdate} className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-emerald-100 hover:bg-emerald-700">
                <Icon name="Plus" className="h-4 w-4" /> Add Update
              </button>
            </div>
            <div className="space-y-4">
              {draft.updates.map((update) => (
                <div key={update.id} className="rounded-3xl border border-slate-200 bg-slate-50 p-4">
                  <div className="mb-4 flex items-center justify-between gap-3">
                    <p className="text-sm font-black text-slate-500">Timeline item</p>
                    <button onClick={() => removeUpdate(update.id)} className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-xs font-bold text-red-500 shadow-sm hover:bg-red-50">
                      <Icon name="Trash2" className="h-4 w-4" /> Remove
                    </button>
                  </div>
                  <div className="grid gap-4 md:grid-cols-2">
                    <Field label="Update title" value={update.title} onChange={(value) => updateTimeline(update.id, "title", value)} />
                    <SelectField label="Update type" value={update.type} onChange={(value) => updateTimeline(update.id, "type", value)} options={["Update", "Progress", "Maintenance", "Warning", "Completed"]} />
                    <Field label="Date" type="date" value={update.date} onChange={(value) => updateTimeline(update.id, "date", value)} />
                    <div className="md:col-span-2">
                      <Field label="Note" textarea value={update.note} onChange={(value) => updateTimeline(update.id, "note", value)} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div id="security" className="rounded-[2rem] border border-emerald-200 bg-emerald-50 p-5 shadow-sm sm:p-6">
            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-600 text-white">
                <Icon name="ShieldCheck" className="h-6 w-6" />
              </div>
              <div>
                <h2 className="text-xl font-black tracking-tight text-emerald-950">Ready for real backend connection</h2>
                <p className="mt-2 leading-7 text-emerald-900">
                  This prototype saves changes in your browser for preview. For a real public website, connect this panel to Supabase Auth and database so only you can edit and everyone else can view the latest saved version.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default function ProjectProgressWebsite() {
  const [mode, setMode] = useState("public");
  const [data, setData] = useState(() => {
    try {
      const saved = typeof localStorage !== "undefined" ? localStorage.getItem("project-progress-demo") : null;
      return saved ? JSON.parse(saved) : defaultData;
    } catch {
      return defaultData;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem("project-progress-demo", JSON.stringify(data));
    } catch {
      // Local storage can fail in private browser modes. The app still works during the session.
    }
  }, [data]);

  return mode === "admin" ? (
    <AdminView data={data} setData={setData} setMode={setMode} />
  ) : (
    <PublicView data={data} setMode={setMode} />
  );
}
