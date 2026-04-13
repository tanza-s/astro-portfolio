---
title: On View Bay
caption: An interactive arts events platform for the Bay Area
publishDate: 2026-04-01
img: /assets/work/onview_map.png
img_alt: Screenshot of the On View Bay homepage showing a map of the Bay Area with venue markers
description: |
  A map-based platform connecting Bay Area arts organizations with audiences — built by a curator, for the community.
tags:
  - End-to-End Design
  - Personal Project
  - Community-Centered
---

# On View Bay
#### Personal Project | Active Development

The Bay Area arts scene runs on word-of-mouth: newsletters, Instagram accounts, and personal networks. There's no central tool that collects exhibition and event information and puts it on a map. In a region as geographically fragmented as the Bay, being able to visualize your evening is of utmost importance. I built On View Bay to fill that gap, drawing on my own experience as a curator and collaborator with local arts spaces.

## Problem

Finding arts events in the Bay Area requires knowing the right people or following the right accounts. Discovery is decentralized and inconsistent, which means audiences miss things and smaller venues get less visibility than they deserve. Existing tools like Instagram or Eventbrite aren't built around how arts organizations actually communicate: exhibitions as the primary unit, with openings, closings, and interstitial events like artist talks organized around them.

I was inspired by LA's curate.la, which provides a map-based view of current exhibitions across the city. Nothing comparable exists for the Bay Area, despite having one of the most active arts ecosystems in the country.

## Solution

I designed and built On View Bay as a full-stack web application using Next.js, TypeScript, Supabase, and Mapbox. The core design decision was to structure the data model around exhibitions rather than individual events, because that's how arts organizations think about their programming. An exhibition has an opening reception, a closing reception, and potentially several events in between. Building around that structure rather than flattening everything into a generic event feed made the platform immediately more legible to arts orgs as a potential tool.

The map view is central to the experience, not an afterthought. Because the Bay is broken into many neighborhoods that are proximal but not always easy to traverse, seeing where things are geographically is genuinely useful information for audiences planning their time.

I built this as a member of the community, as someone who has curated shows, collaborated with arts spaces, and navigated this landscape firsthand. That informed every design decision, from the data model to the submission flow to the visual identity.

## Outcomes

On View Bay is in active development. The platform currently features venues and exhibitions from Bay Area arts organizations, with a map view, event calendar, and submission flow for organizations to add their own programming. The project is ongoing, with a focus on building the community of participating organizations and refining the experience based on real use.

**Stack:** Next.js, TypeScript, Supabase, Mapbox

**Live:** [onview-bayarts.vercel.app](https://onview-bayarts.vercel.app)