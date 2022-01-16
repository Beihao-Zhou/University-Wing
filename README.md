# University-Wing
A blog app that allows university students from all around world to share their application experiences and new life with high school students

## Inspiration
When I was in Grade 12 and planned to apply for universities, I was pretty confused at the beginning. I may have access to the information of many programs and universities through their official websites and webinars; however, it is still difficult to find the answers to many questions. How about students’ daily life in particular universities/programs? What extracurricular activities did students participate in before applying for university? What kind of contests are valuable to help me stand out among thousands of applicants? Personally, I believe these questions can only be answered by experienced senior university students.

I hope that there is a platform that can connect senior university representative students and highschool students, sharing more detailed and valuable information to more highschool students and supporting them on their way to apply for universities.

## What it does
University Wing is essentially a web blog app that shares university students’ application experiences, which can support more highschool students, guide them on the right track and develop their skills as early as possible. All of the comments and posts would be sent to the content management system for review before being released, protecting students from any inappropriate content. There are many information categories, which include interview preparation, application process, extracurricular resources and much more. I believe highschool students can definitely gain valuable and helpful information here for their university applications.

## How I built it
The front-end part of this full-stack web app is developed using React.js and Next.js, and the design is completed by Tailwind CSS. Meanwhile, I implemented the back-end using GraphQL to fetch and post data through GraphCMS, which is a content management system that can administrate all the contents of my web app, allowing me to create models and generate API request.

## Challenges I ran into
- This is the first time I incorporate a content management system to my project. Although I was unfamiliar with it at the beginning, I eventually learnt how to create models and play around API with it.
- I encountered many difficulties when posting requests using GraphQL, including the authentication setting, improper data formatting when submitting and much more. Fortunately, after spending some time on debugging and research, all bugs were fixed.

## Accomplishments that I've proud of
- Successfully connected the web application with a content management system, ensuring the content exposed to students are all appropriate.
- Managed to create a information platform that can deal with the real-world problem.

## What we learned
- Use GraphCMS to restore data and user information, ensuring content are always safe and appropriate.
- Develop bank-end using GraphQL with predefined schema and API directly generated by GraphCMS.
- Generate pages with dynamic routes using getStaticPaths and fetch data at the build time using getStaticProps.

## What's next for University Wing
Currently, this web app only allows the authorized users, i.e. university representatives to access the content management system, meaning that they have to collect information from many students of different backgrounds. Obviously, writing these posts may impose great workload on these university representatives; therefore, I may develop the login and sign up features, and allow users to post in the University Wing themselves. As a result, we only need to review posts rather than edit them ourselves, which not only reduces our stress, but also brings more valuable content to the platform.

## Video Pitch[https://youtu.be/C5ZHTzCoomY]
