This project is about testing a https://fe-delivery.tallinn-learning.ee/ login page only with negative testing to exercise with frontend automation testing

Instructions:
Install:

clone repo 
git clone https://github.com/PavelOrnovskis/playwright-ui1.git

npm init

Install playwright 
npx playwright install

Add environment variable:
Windows:
set APP_URL=https://fe-delivery.tallinn-learning.ee/
macOS:
export APP_URL=https://fe-delivery.tallinn-learning.ee/

Run tests:
npx playwright test tests/tallinndelivery.spec.ts

you can also use --debug for a step to step instructions and --project=[browserenginename] if you want
