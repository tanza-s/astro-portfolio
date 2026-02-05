---
title: Graduating Student's Showcase
publishDate: 2026-02-04 00:00:00
img: /assets/work/showcase_2024.png
img_alt: Screenshot of the 2024 CCA graduating student's showcase
description: |
  Providing remote exhibition space for 2020 seniors and beyond
tags:
  - Frontend
  - Supporting Artists
  - High-Stakes Collabs
---

# 2020 Graduating Students Showcase
#### Portal | Q2 2020

CCA needed a way to celebrate 539 graduating students across 22 undergraduate and 11 graduate programs after COVID-19 forced campus closures and canceled in-person commencement. I built a digital showcase platform in five weeks that became the centerpiece of the college's remote commencement, allowing students to share their work globally during a pivotal moment.

## Problem

When the pandemic hit in March 2020, CCA had to cancel its traditional multi-day commencement exhibition and program-specific thesis shows. The college needed a way to honor graduating students and showcase their work across disciplines ranging from painting and architecture to interaction design, furniture, photography, writing, and film. The timeline was impossibly short (five weeks from requirements to deployment), and the solution needed to handle complex eligibility rules (including fall and summer graduates), integrate with Workday data, and provide both broad discovery and individual student galleries.


## Solution
I adapted an unfinished side project (a profile gallery for user profiles) into a full-fledged showcase platform. Working with our PM who gathered requirements across departments, I built a searchable index filterable by program, division, and minor, plus individual student galleries that supported multiple media types. I created a pattern for integrating Wagtail CMS content into a React single-page application, allowing the showcase to function as a microsite with its own design identity while still living within Portal. This meant marketing could customize banners and content, while academic affairs and exhibitions could configure eligibility. I handled the frontend for the search index and individual galleries, which included both masonry layouts and slideshow functionality using lightGallery. The senior developer completed the gallery editor I'd started, working with our integrations engineer on image handling and Workday integration.

## Outcomes
The showcase launched on time, featuring work from over 300 students and allowing a global audience to celebrate the Class of 2020 during shelter-in-place. The CMS integration pattern I developed became standard practice for future projects on both Portal and cca.edu. The platform was reused for graduating classes from 2020-2025, with each year getting its own distinct design identity through the flexible CMS architecture. The project demonstrated how quickly we could pivot to meet urgent institutional needs while building reusable infrastructure for the future.

### Press
- ["The Class of 2020 Showcase brings the CCA community home"](https://www.cca.edu/newsroom/class-2020-showcase-brings-cca-home/), CCA Newsroom
- ["Bay Area higher education art students show work online"](https://www.sfexaminer.com/culture/bay-area-higher-education-art-students-show-work-online/article_a6373a32-9449-50b0-8c50-07d2a30b6fe4.html), SF Examiner

### Highlights

#### Individual Student Portfolios

Student galleries were filterable by program, devision, and minor. In addition to images, they also have space to share an Artist Statement. The gallery itself showed both images and videos, and met WCAG3 Accessibility standards, including special controls for keyboard users.

![Example of student gallery from the 2020 showcase](/assets/work/showcase_gallery.png)

#### Showcase 2021
![The first page of the 2020 graduating student showcase, taken fromt he Wayback Machine](/assets/work/showcase_wayback2021.png)

#### Showcase 2024
This view also showcases the available filters.
![The first page of the 2024 graduating student showcase, taken fromt he Wayback Machine](/assets/work/showcase_wayback2024.png)

