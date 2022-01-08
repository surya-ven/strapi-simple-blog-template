# strapi-simple-blog-template
A simple strapi template with data fetching by slug (artcles and categories). Content types include article, category, global, homepage, and writer. 

Strapi v4 currently (08/01/2022) does not have built in support for fetching data through slugs for content types.

Therefore, I've modified the default controllers, added new services, and configured routes within the /src/api folder for both articles and categories to enable accessing data through slugs instead of ID.

Please note, this is a temporary "fix" as overriding the default conrollers, the findOne controller for example, might deactivate other default controller functionality. Strapi will likely update its v4 docs soon to include a guide on accessing data with slugs without restricting deafult controller functionality.
