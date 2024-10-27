NodeJS Assignment
Servers and APIs




1. Without using a framework, build a web server to render html files:
   1. When I navigate to “/index.html”, I should see a simple webpage of the student. (Nothing fancy)
   2. Add another feature such that when I navigate to “{random}.html” it should return with a 404 page




2. Without using a framework, build an api server to manage inventory information. Api should be able to
   1. Create item
   2. Get all items
   3. Get one item
   4. Update item
   5. Delete item


Item should have the following attributes
* Name
* Price
* Size: small(s), medium(m) or large(l)
* Id




Things to note:
1. Return data structure should be consistent among the apis
2. Ensure code is modular
3. Handle errors where possible
4. No need to use database, use file system to persist data eg items.json