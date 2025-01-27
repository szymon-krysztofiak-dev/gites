# Gites

This is Gites - the best place to search through GitHub repositories. It is a simple and easy-to-use search engine that allows you to find the repositories you need.

## Getting Started

1. Rename `.env.local.example` to `.env.local`
2. Install deps npm install
3. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Architecture Decisions

**Provider vs. URL State**
Using context and a provider makes sense in many cases, especially when the application is too small to introduce a complex state management library. On the other hand, it is almost always too large to use useState for everything.

I tested both approaches for a while, and in the case of the first one, too much load shifts to the client side. Additionally, introducing context and a provider necessitates installing additional libraries, increases the amount of code, and reduces its readability. I opted to keep the search parameters in the URL, which also allows for easy sharing of search input data.

Cache
By using a provider that had to operate on the client side, communication with the API would also need to be handled in the browser. Initially, I considered using the client-side library React Query for working with the API and caching. The choice between API types for such a small application is insignificant to me, so I followed how queries are handled in Fourthwall and chose REST API.

If I had chosen, for example, the GraphQL GitHub API, I would still have selected the React Query library because the library supporting Apollo Client in SSR has been in the experimental phase for over a year. Moreover, the basic library is heavy (unpacked 7.3 MB).

I focused on an implementation based on SSR and caching, which was introduced with the new version of the Next framework (from v13). This approach provided benefits in:

- Application speed
- Simplicity and code readability
- Easy management of search state (URL)

## Technical Choice Explanation

**Framework Next.js:** My choice was guided by several factors:

- Team stack: The tech stack of the team I am joining (resources).
- Time to complete the task (resources).
- Type of application: If we were to focus more on static content, I might consider Astro due to excellent solutions like Frontend Islands. In this case, there isn't much of that content, and Next.js also offers many features, such as SSR.

**TypeScript:** Standard for avoidyng many type related errors.

**Tailwind CSS:** A utility framework that allows me to focus on more important aspects of building the application. Due to limited time, I chose this solution.

## Future Improvements

- [ ] The `RepositoriesTable` component could be replaced with a generic `Table` using appropriate props and generic types.
- [ ] Instead of disabling the search, display a message that is more user-friendly. The user doesn't necessarily need to immediately associate the disabled button with the lack of a search query.
- [ ] Add more columns for sorting. We can sort the results of our query by the number of stars, forks, help-wanted-issues, or how recently the items were updated. Since we only have stars, we can only manage the order.
- [ ] not-found page
- [ ] Error states
- [ ] Cache settings
- [ ] More info in results table
- [ ] Loading states
- [ ] Better transitions
- [ ] Better loading states
- [ ] Tests - since it is a super small app, I’ll do it only if I have some time left
  - [ ] Vitest ft React Testing Library
- [ ] Adding repo to favorites
- [ ] Repository detailed preview (nested views)
  - [ ] Latest commits etc.
- [ ] Light/Dark theme
- [ ] Search history
- [ ] Search type between repos an users
- [ ] Add Github Auth to synchronise favorites repos
- [ ] Log errors in Sentry or AppSignal
- [ ] Integration with OpenAI API for a simple repo summary

## Known Limitations

- Scale: For a more complex application, I would consider dividing it into multiple contexts, but it would need to be something significantly larger with several distinct features.
