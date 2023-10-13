# Nxpkg Chat

<p align="center">
<b>A NxPKG Chat Application</b>
</p>

<p align="center">
<a href="https://github.com/nxpkg/nxpkg-chat/actions?query=workflow%3ACI" target="__blank"><img src="https://github.com/nxpkg/nxpkg-chat/workflows/CI/badge.svg" alt="NPM version"></a>
</p>

<p align="center">
  <a href="https://replit.com/new/github/nxpkg/nxpkg-chat"><img src="https://replit.com/badge?caption=Try%20Nxpkg%20on%20Replit" alt="Replit"></a> 
</p>


## About

This repository includes the server application from the [official Nxpkg chat guide](https://nxpkg.khulnasoft.com/guides/basics/generator.html) as well as chat frontend examples for different frameworks.

## API server

### TypeScript

The TypeScript version of the chat API server can be found in the [nxpkg-chat-ts](./nxpkg-chat-ts/). To start it install the dependencies like this:

```
cd nxpkg-chat-ts
npm install
```

Then compile the source code and run the database migration which will initialize an SQLite database in the `nxpkg-chat.sqlite` file.

```
npm run compile
npm run migrate
```

It can now be started with:

```
npm start
```

Or in development mode with

```
npm run dev
```

Now go to [http://localhost:3030](http://localhost:3030) to start chatting 🕊️

## Frontend

### Plain JavaScript

A plain JavaScript frontend can be found in the [public](./public/) folder which is hosted statically by the [api server examples](#api-server).

### React

TBD

### VueJS

TBD
