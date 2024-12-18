# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]
### Added
- Support GTM consent v2 (thanks to @francoisbruneau).
- Doc for customiseDescription string.

### Fixed
- Use expires setting value to set cookie (#8).
- Fix issue on reduce config in GTM javascript environment (#19).

## [1.2.4] - 2023-11-30
### Added
- Add new optional description for the Settings panel

## [1.2.3] - 2023-10-11
- Add documentation for i18n (first approach)

### Added
- Add classes to override default settings banner style

## [1.2.1] - 2023-09-25
### Fixed
- Change build system for iife format and more logic scoping (fix "jQuery conflicts")

### Removed
- Remove useless Vite.js

### Changed
- change default settings to use real examples (analytics + ads)

## [1.2.0] - 2023-08-22
### Added
- Added an option to 'Auto Load' Leckerli from a GTM tag

## [1.1.1] - 2023-07-27
### Changed
- Split config of permissions and settings screen strings.

## [1.1.0] - 2023-07-19
### Added
- Add classes to override default banner style
- Add cookie expires property and possiblity to override it

### Changed
- Ensure title, description and customise btn are optionnal elements
- Ensure description can contains whitelisted HTML

## [1.0.7] - 2023-06-29
### Changed
- Settings scrollbar

## [1.0.6] - 2023-06-29
### Added
- Add optional GTM consent support

## [1.0.5] - 2023-06-28
### Added
- Overridable cookie domain

## [1.0.4] - 2023-06-28
### Changed
- Improve visual

### Added
- Restrict cookie to current domain

## [1.0.3] - 2023-06-28
### Fixed
- Fix build config and linter warnings

## [1.0.2] - 2023-06-28
### Changed
- Improve documentation
- Improve Events

## [1.0.1] - 2023-06-27
### Changed
- Improve documentation

## [1.0.0] - 2023-06-27
### Added
- First POC

[Unreleased]: https://github.com/antistatique/leckerli/compare/v1.2.4...HEAD
[1.2.4]: https://github.com/antistatique/leckerli/compare/v1.2.3...v1.2.4
[1.2.3]: https://github.com/antistatique/leckerli/compare/v1.2.1...v1.2.3
[1.2.1]: https://github.com/antistatique/leckerli/compare/v1.2.0...v1.2.1
[1.2.0]: https://github.com/antistatique/leckerli/compare/v1.1.1...v1.2.0
[1.1.1]: https://github.com/antistatique/leckerli/compare/v1.1.0...v1.1.1
[1.1.0]: https://github.com/antistatique/leckerli/compare/v1.0.7...v1.1.0
[1.0.7]: https://github.com/antistatique/leckerli/compare/v1.0.6...v1.0.7
[1.0.6]: https://github.com/antistatique/leckerli/compare/v1.0.5...v1.0.6
[1.0.5]: https://github.com/antistatique/leckerli/compare/v1.0.4...v1.0.5
[1.0.4]: https://github.com/antistatique/leckerli/compare/v1.0.3...v1.0.4
[1.0.3]: https://github.com/antistatique/leckerli/compare/v1.0.2...v1.0.3
[1.0.2]: https://github.com/antistatique/leckerli/compare/v1.0.1...v1.0.2
[1.0.1]: https://github.com/antistatique/leckerli/compare/v1.0.0...v1.0.1
[1.0.0]: https://github.com/antistatique/leckerli/releases/tag/v1.0.0
