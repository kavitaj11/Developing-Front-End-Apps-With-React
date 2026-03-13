# Vibium Demo Lab

A lightweight dashboard for quickly testing any React app in this repository.

## What it does

- Lists each app folder with a dedicated localhost port.
- Checks whether each app looks reachable.
- Loads a selected app in an iframe for quick visual smoke testing.

## Suggested dev ports

To make the dashboard links work, start each app with one of these ports:

- `myfirstapp` → `5173`
- `todo_list` → `5174`
- `custom_hook` → `5175`
- `feedback_form` → `5176`
- `event_planner` → `5177`
- `conference_event_planner` → `5178`
- `content_rating` → `5179`
- `ecommerce_rtk` → `5180`
- `e-plantShopping` → `5181`

Example start command from an app folder:

```bash
npm run dev -- --port 5174
```

## Run the dashboard

From repo root:

```bash
python3 -m http.server 8088
```

Then open:

- `http://localhost:8088/vibium_demo/`
