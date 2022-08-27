Installation steps
git clone https://github.com/bdd-training-clt/clt-bdd-ui.git into your workspace directory (example: open git bash and type cd /c/users/your-username/workspace)
cd clt-bdd-ui
execute the below npm command
npm install --chromedriver_skip_download=true
execute the below command 
node index.js -s ./step-definitions
node index.js -s ./step-definitions -- --tags @tag1 @tag2 @tag3 - Multiple Feature Files and Step-Definitons
node index.js -s ./step-definitions -t @tag1,@tag2,@tag3 - Multiple files(Feature, Step-Def)(Run in alphabetaical order)
node index.js -s ./step-definitions/smartSubmissions.js -f ./features/smartsubmissions-signup-signin.feature - Particular Feature File and Step Def