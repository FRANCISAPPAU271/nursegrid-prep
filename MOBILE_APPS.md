# NurseGrid Prep — Android & iOS App Guide

NurseGrid Prep is a full-stack Next.js app (auth, PostgreSQL, live API routes),
so the native Android and iOS apps are built with **Capacitor**: a thin native
shell that loads your deployed production website in a native WebView, plus
real native capabilities (push notifications, native status bar, hardware
back button handling). This is the same pattern used by many production
apps that started as a web app — it is fully accepted by both the Play Store
and App Store as long as the app provides a good native experience (which
this setup does).

The native projects already exist in this repo:

```
android/    ← Android Studio project (Gradle)
ios/        ← Xcode project
capacitor.config.ts   ← shared native config
assets/     ← 1024x1024 icon.png + splash.png used to generate all native sizes
mobile-shell/          ← tiny local fallback page (used only if the live site is unreachable)
```

Icons and splash screens for **every** required size (Android mipmap
densities, adaptive icons, iOS AppIcon set, iOS splash) have already been
generated from `assets/icon.png` using `@capacitor/assets`.

## 1. One-time setup before you build

1. **Deploy NurseGrid Prep to a permanent HTTPS domain** (this sandbox preview
   URL is temporary and will not work for a store submission).
2. Update the production URL in `capacitor.config.ts`:
   ```ts
   const PRODUCTION_URL = process.env.NEXT_PUBLIC_APP_URL || "https://app.nursegridprep.com";
   ```
   Replace the fallback with your real domain, or set `NEXT_PUBLIC_APP_URL`
   in your environment before running `npx cap sync`.
3. Re-run sync so native projects pick up the change:
   ```bash
   npx cap sync
   ```

## 2. Android — Google Play

**Requirements:** Android Studio, a Google Play Developer account ($25
one-time), a Mac/PC/Linux machine (Android builds work on any OS).

```bash
npx cap open android      # opens android/ in Android Studio
```

In Android Studio:
1. Let Gradle sync finish.
2. `Build → Generate Signed Bundle / APK` → choose **Android App Bundle**.
3. Create (or reuse) a signing keystore — **back this up somewhere safe**,
   you'll need the same key for every future update.
4. Build the release `.aab` file.
5. Go to [Google Play Console](https://play.google.com/console) → create app
   → fill out the store listing (screenshots, description, privacy policy
   URL, content rating questionnaire) → upload the `.aab` under
   **Production → Create release**.
6. Submit for review (typically hours to a few days).

A privacy policy page is required — NurseGrid Prep collects account info
(name/email), study progress, and push tokens; make sure your deployed site
has a `/privacy` page describing this before submitting.

## 3. iOS — Apple App Store

**Requirements:** a Mac with Xcode installed, an Apple Developer account
($99/year), and a physical or simulator iOS device for testing.

Since Xcode only runs on macOS, you'll need to run these steps on a Mac —
this repo already contains the full generated `ios/` Xcode project, so you
don't need to regenerate it there (just `git pull` / copy the project over).

```bash
cd ios/App
pod install                # installs CocoaPods dependencies (first time only)
cd ../..
npx cap open ios           # opens ios/App/App.xcworkspace in Xcode
```

In Xcode:
1. Select the `App` target → **Signing & Capabilities** → choose your Apple
   Developer team and let Xcode manage signing.
2. If you want push notifications live, enable the **Push Notifications**
   capability and set up an APNs key in your Apple Developer account (the
   app already requests permission and registers a device token via
   `@capacitor/push-notifications`; wiring up an actual APNs sender is a
   backend task for later).
3. `Product → Archive` to build a release archive.
4. Use the **Organizer** window → **Distribute App** → **App Store Connect**
   to upload the build.
5. In [App Store Connect](https://appstoreconnect.apple.com), fill out the
   app listing (screenshots for required device sizes, description, privacy
   policy URL, App Privacy questionnaire) and submit the build for review.

Apple's review is stricter about "is this just a website?" — this app already
includes genuine native behavior (push notifications, native status bar
theming, hardware back button handling on Android, home screen icon/splash)
which satisfies Apple's guidelines, but also make sure the reviewer can log
in easily: keep the demo account credentials handy in your App Store Connect
review notes:

```
demo@nursegrid.app / password123   (premium/full access account)
free@nursegrid.app / password123   (free-tier account)
```

## 4. Updating the app after code changes

Every time you change the web app and redeploy:

```bash
npx cap sync
```

Then rebuild/re-archive in Android Studio / Xcode and upload a new version.
You do **not** need to regenerate the `android/` or `ios/` folders again
unless you change `capacitor.config.ts` significantly (app ID, name) or add
a new native plugin.

## 5. Regenerating icons/splash screens

If you want a different logo:

1. Replace `assets/icon.png` (1024x1024, full-bleed, no rounded corners —
   the stores apply their own mask) and optionally `assets/splash.png`
   (2732x2732).
2. Run:
   ```bash
   npx capacitor-assets generate --android --ios
   npx cap sync
   ```

## 6. Useful commands

| Command | What it does |
|---|---|
| `npx cap sync` | Copies web config + plugins into native projects |
| `npx cap open android` | Opens the Android Studio project |
| `npx cap open ios` | Opens the Xcode project |
| `npx capacitor-assets generate --android --ios` | Regenerates all icon/splash sizes |
| `npx cap doctor` | Diagnoses environment/config issues |
