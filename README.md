## Set timer

A simple web app to help you keep count of your sets at the gym: https://gym-set-timer.pages.dev

<img height=400 src="https://user-images.githubusercontent.com/6415223/186563777-5445c317-3c0e-43e5-b4e6-442141631e97.png">

I recommend installing it as a Progressive Web App (On iOS: Share menu -> Add to Home Screen), so it's a standalone app that's easy to navigate into and not a tab in Safari. The set count and timer is retained in local storage, so it will continue where you left off even if you force close the app.

Upon marking a set as complete, a timer is started to let you know how long you've been resting, and once you're ready for the next set, press "Done resting" to stop the timer. This 'double toggle' also serves as a way to make it very difficult to accidentally under or over count.

### Development

- `npm install` to install dependencies
- `npm run dev` to run the app -> visit http://localhost:3000

### Deployment

- `npm run export` exports as a static site to `./out`, and you can upload to any static file hosting such as GitHub Pages or Cloudflare Pages.
- Or `npm i -g vercel` to install the Vercel CLI and run `vercel` in the root directory to deploy to Vercel.
