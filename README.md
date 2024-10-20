# Interpol.ts

<img src="./assets/red_notice.svg" height="150px" /> 
<img src="./assets/yellow_notice.svg" height="150px" /> 
<img src="./assets/un_notice.svg" height="150px" />

A TypeScript library for easily interacting with the Interpol public Notices API. This library provides a convenient, type-safe way to access data on Red, Yellow, and possibly in the future, other Interpol notices.

## Contents

- [Features](#features)
- [About Interpol and its Notices](#about-interpol-and-its-notices)
- [Development Status](#development-status)
- [Installation](#installation)
- [Usage](#usage)
- [API Reference](#api-reference)
- [Error Handling](#error-handling)
- [License](#license)
- [Development](#development)
- [Testing](#testing)
- [Build](#build)
- [Contributing](#contributing)
- [Legal Notice](#legal-notice)

## Features

- **Type-safe:** Leverages TypeScript for improved code maintainability and developer experience. All API responses and requests are typed, reducing runtime errors and enhancing autocompletion.
- **Promise-based:** Uses promises for asynchronous operations, making it easy to integrate into modern JavaScript workflows.
- **Cancelable Requests:** Supports canceling in-flight requests to prevent unnecessary network usage.
- **Comprehensive Error Handling:** Provides detailed error objects with information about failed requests.
- **Easy to Use:** Simple and intuitive API for retrieving notice data.
- **Well-documented:** Clear and comprehensive documentation to guide you through usage and integration.

## About Interpol and its Notices

Interpol (International Criminal Police Organization) is an international organization that facilitates worldwide police cooperation and crime control. It issues notices, which are international requests for cooperation or alerts allowing police in member countries to share critical crime-related information. While Interpol issues several types of notices, this library currently focuses on (or plans to support) the following:

### Red Notice

A Red Notice is a request to law enforcement worldwide to locate and provisionally arrest a person pending extradition, surrender, or similar legal action. It is not an international arrest warrant. Red Notices are published by Interpol at the request of member countries, and they contain information that helps identify wanted persons, such as their names, dates of birth, nationalities, physical descriptions, photographs, fingerprints, and the offenses they are wanted for.

### Yellow Notice

A Yellow Notice is a global police alert for a missing person. It is used to help locate missing persons, often minors, or to help identify persons who are unable to identify themselves. These notices can be particularly helpful in cases of international parental child abduction.

### UN Notices (Security Council Special Notices)

Interpol, in close cooperation with the United Nations Security Council, publishes UN Security Council Special Notices. These notices are issued for individuals and entities associated with targeted sanctions, such as asset freezes and travel bans, imposed by the UN Security Council. These notices provide detailed information to assist law enforcement agencies in implementing these sanctions.

### Other Interpol Notices

Interpol issues several other types of notices in addition to Red, Yellow, and UN Notices, such as:

- **Blue Notices:** Used to collect additional information about a person's identity, location, or activities in relation to a crime.
- **Green Notices:** Provide warnings and intelligence about persons who are considered to be a threat to public safety.
- **Black Notices:** Seek information on unidentified bodies.
- **Orange Notices:** Warn of an event, a person, an object or a process representing a serious and imminent threat to public safety.
- **Purple Notices:** Provide information on modus operandi, objects, devices and concealment methods used by criminals.
- **INTERPOL-United Nations Security Council Special Notices:** Issued for groups and individuals who are the targets of UN Security Council Sanctions Committees.

These other notice types are not currently publicly accessible through the Interpol Notices API, and therefore are not currently supported by this library. For more information on all Interpol notices, please refer to the [official Interpol website](https://www.interpol.int/en/How-we-work/Notices).

It is important to note that Interpol notices are not international arrest warrants. They serve as requests for cooperation between law enforcement agencies in different countries. The decision to arrest or extradite an individual rests with the national authorities of the countries involved. For more detailed and official information about Interpol and its notices, please visit the [official Interpol website](https://www.interpol.int). This library aims to simplify access to the information contained within these publicly available notices. It does not provide legal advice and should not be used as a substitute for consulting with legal professionals.

## Development Status

Currently, this library focuses on retrieving and interacting with **Red Notices**. Support for **Yellow** and **UN Notices** is planned for future releases but is not yet implemented. Contributions are welcome to accelerate the development of these features!

You can track the progress of these planned features in the project's issue tracker. We encourage community involvement in prioritizing and implementing support for additional notice types.

## Installation

```bash
npm install @jakubrekowski/interpol.ts
# or
yarn add @jakubrekowski/interpol.ts
```

## Usage

```typescript
import { InterpolService } from "@jakubrekowski/interpol.ts";

async function getRedNotices() {
  try {
    const redNotices = await InterpolService.getRedNotices({
      name: "Doe",
      forename: "John",
    });
    console.log(redNotices);

    const noticeId = redNotices._embedded.notices[0].entity_id.replace(
      "/",
      "-"
    );
    const details = await InterpolService.getRedNoticeDetails(noticeId);
    console.log(details);

    const images = await InterpolService.getRedNoticeDetailImages(noticeId);
    console.log(images);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

getRedNotices();

async function getRedNoticesWithPagination() {
  try {
    const redNotices = await InterpolService.getRedNotices({
      page: 2,
      resultPerPage: 50,
    });
    console.log(redNotices);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

getRedNoticesWithPagination();

async function cancelRedNoticeRequest() {
  const cancelableRequest = InterpolService.getRedNotices();

  // Cancel the request after 1 second
  setTimeout(() => {
    cancelableRequest.cancel();
  }, 1000);

  try {
    const response = await cancelableRequest;
    console.log(response); //this will not be logged, as request will be canceled
  } catch (error) {
    if (error.isCancelled) {
      console.warn("Request cancelled by the user");
    } else {
      console.error("Error fetching Red Notices:", error);
    }
  }
}

cancelRedNoticeRequest();
```

## API Reference

### `InterpolService.getRedNotices(query?: RedNoticesQuery): CancelablePromise<RedNoticesEntitiy>`

Retrieves a list of Red Notices.

- **`query`**: Optional query parameters to filter the results (see `RedNoticesQuery` interface below).
- **Returns**: A `CancelablePromise` that resolves to a `RedNoticesEntitiy` object.

### `InterpolService.getRedNoticeDetails(noticeID: string): CancelablePromise<RedNoticeDetailsEntitiy>`

Retrieves details for a specific Red Notice.

- **`noticeID`**: The ID of the Red Notice.
- **Returns**: A `CancelablePromise` that resolves to a `RedNoticeDetailsEntitiy` object.

### `InterpolService.getRedNoticeDetailImages(noticeID: string): CancelablePromise<RedNoticeDetailImagesEntitiy>`

Retrieves images for a specific Red Notice.

- **`noticeID`**: The ID of the Red Notice.
- **Returns**: A `CancelablePromise` that resolves to a `RedNoticeDetailImagesEntitiy` object.

### `RedNoticesQuery` Interface

```typescript
interface RedNoticesQuery {
  forename?: string; // First name
  name?: string; // Last name
  nationality?: string; // Nationality (two-digit country code)
  ageMax?: number; // Maximum age
  ageMin?: number; // Minimum age
  freeText?: string; // Free text search
  sexId?: "F" | "M" | "U"; // Sex ID
  arrestWarrantCountryId?: string; // Country ID of arrest warrant (two-digit country code)
  page?: number; // Page number for pagination
  resultPerPage?: number; // Number of results per page
}
```

## Error Handling

The library throws `ApiError` objects for any API errors. These objects contain detailed information about the error, including the URL, status code, status text, response body, and the original request options.

## License

This project is licensed under the **EUPL-1.2**. See the [LICENSE.md](LICENSE.md) file for details. You are free to use, modify, and distribute this software under the terms of the EUPL-1.2 license.

## Development

```bash
#Clone Repository
git clone https://github.com/jakubrekowski/interpol.ts.git

#go to project directory
cd interpol.ts

#install dependencies
npm install
```

## Testing

```bash
npm test
```

## Build

```bash
npm run build
```

## Contributing

We welcome contributions from the community! Whether you're fixing a bug, adding a new feature, or improving documentation, your help is greatly appreciated. Please follow these guidelines:

1. **Fork the repository:** Create a fork of the project on GitHub.

2. **Create a branch:** Create a new branch for your changes. Use a descriptive name following the convention:

   - `feat/<issue-or-pr-number>/<short-description>` for new features
   - `fix/<issue-or-pr-number>/<short-description>` for bug fixes
   - `chore/<issue-or-pr-number>/<short-description>` for maintenance tasks
   - `docs/<issue-or-pr-number>/<short-description>` for documentation updates
   - For example: `feat/no-ref/add-yellow-notice-support`, `fix/#123/typo-in-readme`, `chore/#456/update-dependencies`

3. **Make your changes:** Implement your changes, ensuring your code is clear, concise, and well-documented.

4. **Write tests:** Add or update tests to cover your changes. Maintaining high test coverage is essential for project quality.

5. **Commit your changes:** Use [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) for your commit messages. This helps automate releases and keeps the commit history organized. Examples:

   - `feat: add support for Yellow Notices`
   - `fix: correct typo in README`
   - `chore: update dependencies`

6. **Push your branch:** Push your branch to your forked repository.

7. **Create a pull request:** Open a pull request against the `main` branch of the original repository. Provide a clear description of your changes and the issue they address.

This project uses `release-please` and `husky` with `commitlint` to enforce commit message conventions and automate releases. Please ensure your commits adhere to the Conventional Commits specification. Husky will run commitlint on each commit to verify the message format. After merging pull requests to the `main` branch, `release-please` will automatically generate release PRs based on the commit messages.

## Legal Notice

This library provides an interface to the publicly available Interpol Notices API. It is an independent open-source project and is **not affiliated with or endorsed by Interpol**.

The use of the Interpol name and notices emblems is subject to Interpol's intellectual property rights. This project uses the Interpol name solely for descriptive purposes to accurately reflect the data source and functionality provided. No endorsement or official association with Interpol is implied or intended.

This project is a non-commercial, open-source project and aims to facilitate access to public data. Any use of this library for commercial purposes should be carefully reviewed to ensure compliance with Interpol's terms and conditions regarding the use of their name and emblems. You are solely responsible for complying with any applicable regulations regarding the use of Interpol data.

For official information and guidelines regarding the use of the Interpol name, emblem, and data, please refer to the official Interpol website. This library is provided "as is" without any warranty. We are not responsible for any consequences arising from the use or misuse of this software or the data it retrieves.
