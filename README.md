# Hugo Starter with Tailwind CSS and GitHub Actions

Starter project with Hugo as CMS, TailwindCSS and Alpinejs.

- Hugo v0.112.7
- Tailwind CSS v3.3.x + `@tailwindcss/typography`, `@tailwindcss/form` and `@tailwindcss/aspect-ration` plugins
- Alpinejs v3 + `@alpine-collective/toolkit-scroll` plugin
- Purge unused css classes with PurgeCSS for build, but not in dev
- GitHub Actions to build and deploy to FTP servers (staging and production)

## Dev-Staging-Production

The branches strategy is the following:

- `master` is for development. Any push on it will not trigger any build and deploy
- `staging` branch for staging
- `stable` branch for production

Simply edit the actions to reflect your setup.

### FTP server and secrets

The automate deploying of the website leverages [FTP Deploy action](https://github.com/marketplace/actions/ftp-deploy)

Create the following secrets on your repo's setting:

#### Staging

- staging_ftp_hostname
- staging_ftp_username
- staging_ftp_password
- staging_server_folder

#### Production

- production_ftp_hostname
- production_ftp_username
- production_ftp_password
- production_server_folder

`*_server_folder` secret is the folder to upload to (on the server), must end with trailing slash. e.g. `public_html/`
