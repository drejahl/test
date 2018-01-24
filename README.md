# Getting started
Once the app is in `Running` state, click on the `Open App` button to check out the running app.
Also, click on `Console` to open or close the console window.

Use the list on the left to select which source file to edit. After you have made changes
to the source code, click on the `Restart` button to restart the application process.

There are two special entries on the left side list: `Package` and `Config`.
- Go to `Package` to install and uninstall NPM packages.
- Go to `Config` to define environment variables used by the running app.
All variables in `Config` are private even when the source
code is public. It is a good place to keep credentials such as API keys and
passwords.

# Files
- `index.js`: the "main" file of the app. Postverta runs the app with `node index.js`, which
then starts an HTTP server and listens to incoming requests.