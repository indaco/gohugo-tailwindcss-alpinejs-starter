# Hugo Starter with Tailwind CSS and GitHub Actions

Starter project with Hugo as CMS, TailwindCSS and Alpinejs.

- set up to use latest Tailwind CSS - 3.2.+
- includes the @tailwindcss/typography, @tailwindcss/form, @tailwindcss/line-clamp plugins
- use Hugo Pipes to build and load css based on dev or build environment
- purge unused css classes with PurgeCSS for build, but not in dev
- Alpinejs v3 + `@alpine-collective/toolkit-scroll`
- GitHub Actions to build and deploy to FTP servers (staging and production)

It provides two GitHub actions for building and deploy over FTP.

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
