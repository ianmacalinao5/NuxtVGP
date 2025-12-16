# Project Report

## Approach

I approached the exam by first setting up and understanding the provided starter
project, then implementing the required features incrementally. I followed Nuxt’s
file-based routing conventions, used composables for reusable filtering and
sorting logic, and managed global state using Pinia to keep the application
structure clean and maintainable.

## Challenges

One of the main challenges was working with Nuxt, Vuetify, and GraphQL together,
as this stack was not my primary experience prior to this exam. I addressed this
by studying how Nuxt differs from a traditional Vue SPA, reviewing documentation
and tutorials related to Nuxt and GraphQL, and applying these concepts gradually
throughout the project.

For Vuetify, my familiarity with Bootstrap helped ease the transition, as both
follow a component-based approach to building UI. I also broke features into
smaller parts, kept components focused on presentation, and isolated business
logic into composables to maintain clarity and readability.

## Unique Feature

Although a search feature was not explicitly required, I added one to improve
accessibility and usability, allowing users to quickly search for specific
rockets, launches, or missions. I also added a home page and skeleton loading
states to enhance the user experience by providing visual feedback during data
loading and improving perceived performance.

I initially planned to implement a timeline page to visually present launches
in chronological order. However, due to time constraints and to ensure the core
requirements were completed within the deadline, I prioritized delivering a
stable and complete feature set. The timeline view is a feature I would
consider adding next if given more time.
