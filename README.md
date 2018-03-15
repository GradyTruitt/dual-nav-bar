# Gatsby Starter MLABS
A Gatsby Starter we use here at Merchant Labs

## Table of Contents
- [Getting Started](#getting-started)
- [Folder Structure](#folder-structure)
- [SEO](#seo)
- [Using SVGs](#using-svgs)
- [API Endpoints](#api-endpoints)
- [Deployment](#deployment)
- [Content Management](#content-management)
- [Image Optimization](#image-optimization)
- [Other Features](#other-features)

## Get Started
Start using this starter (assuming Gatsby is installed) by running from your CLI:
```bash
gatsby new <repo-name> https://github.com/merchantlabs/gatsby-starter-mlabs
```

*Site Configuration* update things like site name, logo, url, etc in `data/site-config.js`

## Folder Structure
For an overview of the project structure please refer to the [Gatsby documentation - Building with Components](https://www.gatsbyjs.org/docs/building-with-components/)

## SEO
*The SEO component is a work in progress and hasn't been tested to make sure it is working right yet.*
Use the SEO component in `src/components`


## Using SVGs
Simply put any svg icons you want to use in `src/icons` and then ues them as a normal React component anywhere in your project.

## API Endpoints
Uses Netlify functions which are currently in [beta](https://functions-beta--www.netlify.com/docs/lambda-functions/).

## Deployment
Project is all set-up to deploy using [Netlify](https://www.netlify.com/).

## Content Management
Allow your client to modify their own content with [Netlify CMS](https://www.netlifycms.org/).

## Other Features
- [Styled Components](https://www.styled-components.com/docs)
- JS and CSS linting with [stylelint](https://stylelint.io/) and [eslint](https://eslint.org/)
