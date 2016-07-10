Tuesday when we return we must have a blueprint ready for review by a mentor.

1. Must be MEAN Stack and use each of those.
2. Must have one REF.

*When in doubt solve a problem for a business
*Clone existing website. Employers can see how you solve real world problems
*Auth is NOT a requirement
*Do the things that software does best
*This is the first and largest portfolio project you will do entirely on your own
*Make it look PRETTY!
*M.V.P Minimum Viable Product
*Color code your views!*


Pitfalls
A. Third Party API's and new Technologies (RULE: Must show mentor on TUESDAY your prototype of that new technology)

B. Going silent for too long.


Prep
==========================
1. Update Git @ https://confluence.atlassian.com/bitbucketserver/installing-and-upgrading-git-776640906.html

Project
==========================
1. Create Procfile
   'web: node server/server.js'

2. Update config.js
   'PORT: process.env.PORT || 7200,
    MONGO_URI: process.env.MONGO_LABS_URI'

3. Comment Out cors

MLab
==========================
1. Signup

2. Create Database

3. Create User

4. Copy MONGO_URI for later:

Heroku
==========================
1. Signup

2. Download Heroku Toolbelt @ https://devcenter.heroku.com/articles/getting-started-with-nodejs#set-up

3. Run 'heroku login'

4. In Project, run "heroku create <Project Name>"

5. 'git push heroku master'

6. Add config Vars 'MONGO_URI' = Saved MONGO_URI

heroku auth:token
username : blank

password : heroku auth token
