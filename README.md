# 🌉 Bridge Pattern — Revision Guide

This document is a **quick revision guide** for the **Bridge Design Pattern**, written to help you re‑understand the idea fast when you come back later.

---

## 🎯 What problem does Bridge solve?

Bridge solves the problem of **class explosion** caused by inheritance when you have **two dimensions that vary independently**.

Example of the problem:

* Different **types of remotes**
* Different **types of devices**

If you combine them with inheritance, you end up with many classes:

* BasicRemoteForTV
* AdvancedRemoteForTV
* BasicRemoteForProjector
* AdvancedRemoteForProjector

This grows exponentially and becomes unmaintainable.

---

## 🧠 Core Idea (the one sentence to remember)

> **Bridge separates abstraction from implementation so both can change independently.**

Or even simpler:

> **Bridge separates *what* the system does from *how* it does it.**

---

## 🧩 The two sides of Bridge

### 1️⃣ Abstraction

* Represents **high‑level control logic**
* Knows *what actions exist*
* Does **not** know concrete implementations

Example:

* Remote control

---

### 2️⃣ Implementation

* Represents **low‑level execution logic**
* Knows *how actions are performed*
* Is hidden behind an interface

Example:

* TV
* Projector
* DataShow

---

## 🌉 Where the “Bridge” actually is

The bridge is **composition**, not inheritance.

The abstraction **has a reference** to the implementation:

* Remote → Device (interface)

The abstraction **delegates work** to the implementation.

If the abstraction does not call the implementation, **there is no Bridge**.

---

## 🎬 Cinema Example (mental model)

* **Remote** = abstraction (user control logic)
* **Device** = implementation (cinema equipment)

The remote:

* Knows when to change volume
* Knows when to toggle power

The device:

* Knows how volume works
* Knows how power works

The client:

* Talks only to the remote
* Never touches the device directly

---

## 🔄 Correct call flow

Client → Remote → Device

Example:

* Client calls `remote.volumeUp()`
* Remote updates internal state
* Remote calls `device.setVolume()`
* Device executes the action

---

## ❌ Common mistakes

* Overriding methods in the abstraction and **not delegating** to the implementation
* Letting the client call device methods directly
* Using inheritance instead of composition
* Using Bridge when only **one thing varies**

---

## ✅ When to use Bridge

Use Bridge when:

* You have **two independent dimensions of change**
* Inheritance would cause class explosion
* You want to add new abstractions or implementations **without modifying existing code**

---

## 🚫 When NOT to use Bridge

Do NOT use Bridge when:

* Only one dimension changes
* The system is simple
* There is no risk of combinatorial growth

Bridge is a **design tool**, not a default solution.

---

## 🧠 Final checklist (quick self-test)

Ask yourself:

* Do I have two things that change independently?
* Does my abstraction delegate to an interface?
* Can I add a new implementation without touching abstractions?
* Can I add a new abstraction without touching implementations?

If all answers are **yes**, you’re using Bridge correctly.

---

## 🏁 One sentence to remember forever

> **If the abstraction does not call the implementation, the Bridge is broken.**

---

Happy revising 🚀
