---
title: Portal Frontend Refactor
caption: Three-year React modernization serving 2,000+ users
publishDate: 2026-02-04
img: /assets/work/Portal2.png
img_alt: The extravagant cake topper used to celebrate the Portal 2.0 work
description: |
  A React 16 -> 19 upgrade of our intranet Portal, or how I paid eight years of institutional technical debt
tags:
  - Full-Stack
  - Architecture
  - Project Ownership
---

# Portal 2.0 - Frontend refactor
#### Portal | Q2 2021

CCA's internal Portal platform was running on outdated dependencies and abandoned libraries (Redux Form, Searchkit) that blocked new feature development. The platform needed a complete frontend refactor, not just version upgrades. I led a three-year modernization effort that rebuilt the React architecture from class-based components to hooks, replaced deprecated libraries, and consolidated fragmented code into a reusable component system. After team layoffs reduced the web development team from five people to one, I completed this work solo while balancing ongoing feature development for the marketing team. The phased rollout maintained zero downtime for 2,000+ users across multiple search indexes, profile systems, and content management tools.

## Problem

Portal relied on outdated and abandoned dependencies (React 16, Redux Form, Searchkit) that blocked feature development and created maintenance risks. A simple version upgrade wasn't possible because critical libraries had been deprecated or fundamentally changed. The previous "feature-first, debt-later" development approach left us with duplicate code and haphazard implementations that all needed modernizing. A user survey revealed navigation issues that required search improvements, but those improvements depended on replacing Searchkit entirely. Midway through planning, team layoffs reduced the web development team from five people to one, turning what should have been a team effort into a solo project I had to balance with ongoing .EDU work.

## Solution
I broke the work into phases that could fit between .EDU development cycles. First, I upgraded the React/Redux/Router rendering system from class-based components to React 17+ with hooks. Then I replaced Redux Form with React Final Form, starting with the complex profile and gallery forms. I rebuilt the entire search infrastructure by migrating from the abandoned Searchkit library to Elasticsearch UI, creating a unified component library that reduced code duplication across seven different search indexes (course catalog, events calendar, knowledge base, policies, people directory, alumni directory, showcase). I upgraded Bootstrap and build tooling, migrated the avatar editor from vanilla JavaScript to React, and consolidated fragmented implementations into reusable patterns. Throughout the three-year process, I maintained feature parity and documented everything for future developers. I also took over management over the Web Team's student work-study and led the extensive QA required for a project of this scale.

## Outcomes
Portal 2.0 deployed in September 2025 with zero downtime, serving 2,000+ users. The refactor reduced codebase complexity, eliminated duplicate code through the component library, and established modern patterns for future development. The unified search infrastructure made it easier to maintain seven different search indexes. The work positioned Portal to handle less frequent attention going forward, since the modern dependencies and architecture are more stable and actively maintained. Most critically, I delivered this independently while continuing feature work for the Marketing and Communications team, proving the platform could be maintained by a solo developer when properly architected.

### Highlights

#### Search Index Redesign
Consolidated search indexes into a single, modular component set with configurable boilerplate code. The following are a handful of the public-facing indexes included in this upgrade.

- Shops Catalog
![Old Shops](/assets/work/Portal2_shopsold.png)
![New Shops](/assets/work/Portal2_shopsnew.png)

- Event Calendar
![Old Events](/assets/work/Portal2_eventsold.png)
![New Events](/assets/work/Portal2_eventsnew.png)

- Course Catalog
![Old catalog](/assets/work/Portal2_catalogold.png)
![New catalog](/assets/work/Portal2_catalognew.png)

- Site-wide Search
![Old search](/assets/work/Portal2_unifiedold.png)
![New search](/assets/work/Portal2_unifiednew.png)

