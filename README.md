# DJ Information Systems, Inc. Website

Modern static React website for DJ Information Systems, Inc., built with Vite, React Router, plain CSS, and Docker/Nginx for production deployment.

## What Is Included

- Home, About Us, and Contact / Pricing pages
- Responsive header with mobile navigation
- Professional service, credibility, Microsoft 365, hosting, process, pricing, and contact sections
- Frontend-only contact form using `mailto:projects@djinfosys.com`
- DJ Information Systems, Inc. logo assets
- CDC, KR3, and United Global Technologies logo assets in the project experience section
- Docker multi-stage build served by Nginx
- React Router refresh fallback for `/about` and `/contact-pricing`

## Run Locally

Install dependencies:

```bash
npm install
```

Start the Vite development server:

```bash
npm run dev
```

Vite will print a local URL, usually:

```text
http://localhost:5173
```

## Build Locally

Create a production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Docker Build and Run

Build the Docker image:

```bash
docker build -t dj-information-systems-website .
```

Run the container:

```bash
docker run --rm -p 8080:80 dj-information-systems-website
```

Open:

```text
http://localhost:8080
```

The container exposes port `80`.

## Coolify Deployment Notes

Use Coolify's Dockerfile deployment option.

- Repository/build context: project root
- Dockerfile path: `Dockerfile`
- Exposed port: `80`
- No database is required
- No backend services are required
- No paid APIs are required

The included `nginx.conf` uses `try_files $uri $uri/ /index.html;` so direct refreshes on React Router routes like `/about` and `/contact-pricing` work correctly.

## cPanel Deployment Notes

Build the static site:

```bash
npm run build
```

Upload the contents of the generated `dist` folder to your cPanel document root, usually:

```text
public_html
```

The build includes `public/.htaccess`, which Vite copies to `dist/.htaccess`. This file lets React Router routes like `/about` and `/contact-pricing` load correctly when refreshed directly on Apache/cPanel hosting.

## Contact Form Note

The contact form is frontend-only and submits through `mailto:projects@djinfosys.com`. General contact is available at `contact@djinfosys.com`, and hosting support is available at `support@djhostingsolutions.com`. A backend form handler, serverless function, or third-party form endpoint can be added later when production form processing is needed.

## Logo Note

The current logo assets are located in:

```text
src/assets/logos/
```

Keep descriptive `alt` text for accessibility when replacing or adding logo files.

## Service Brand Note

Hosting, VPS, server, and infrastructure services are referenced as DJ Hosting Solutions:

```text
https://djhostingsolutions.com
```
