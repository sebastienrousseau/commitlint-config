# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Security

- `package-lock.json` moves fast-uri 3.1.8 to 3.1.9 (GHSA-w74x-v6f9-j3xg,
  GHSA-xhq7-xmqj-769h, GHSA-wjr9-j795-jxcr, GHSA-333x-w4r6-6crp).

## [0.0.7] - 2026-09-10

### Added

- `engines.node` declaring the supported floor. The README and its badge advertised
  a floor that no manifest stated; CI now proves it across Node 20, 22, 24 on
  Linux, macOS and Windows.
- Shared conformance suite via `@sebastienrousseau/config-kit`, replacing the
  per-repository boilerplate. It checks packaging, declared types against runtime
  shapes, dependency resolvability, tarball contents, licence headers, version
  coherence and documentation links.
- `.github/CODEOWNERS`, `.pre-commit-config.yaml`, `docs/packaging.md` and
  `docs/adr/` architecture decision records.
- `sideEffects: false`, so bundlers can drop the package when it is unused.

### Changed

- `index.mjs` now re-exports `index.cjs` instead of duplicating it, which makes the
  two entrypoints identical by construction.
- CI, publish, security and docs workflows are thin callers of reusable workflows in
  `sebastienrousseau/config`, so a gate added once applies to the whole family.
- The release pipeline no longer marks the npm publish step `continue-on-error`; a
  failed publish now fails the job instead of reporting green.

### Fixed

- `index.d.ts` is asserted against the runtime export shape in CI.
- Corrected the OpenSSF Best Practices badge, which pointed at another project.

## [0.0.4] - 2026-09-07

### Added
- Repository Gold Standard compliance files (`AGENTS.md`, `DEVELOPMENT.md`, `GOVERNANCE.md`, `SUPPORT.md`, `CITATION.cff`, `KEYS.asc`, `Makefile`).
- Architecture documentation in `docs/ARCHITECTURE.md`.
- Dual licensing under Apache-2.0 OR MIT terms.
