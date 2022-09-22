# Swork

A planning board developed by Indic Amigo Akademi build in CodeIgniter.

## Setup

-   Copy `env` to `.env` and tailor for your app, specifically the baseURL and any database settings.
-   Uncomment the line with CI_ENVIRONMENT on it, and change `production` to `development`.
-   Running Development Server
``

## Server Requirements

PHP version 7.4 or higher is required, with the following extensions installed:

-   [intl](http://php.net/manual/en/intl.requirements.php)
-   [libcurl](http://php.net/manual/en/curl.requirements.php) if you plan to use the HTTP\CURLRequest library

Additionally, make sure that the following extensions are enabled in your PHP:

-   json (enabled by default - don't turn it off)
-   [mbstring](http://php.net/manual/en/mbstring.installation.php)
-   [mysqlnd](http://php.net/manual/en/mysqlnd.install.php)
-   xml (enabled by default - don't turn it off)
