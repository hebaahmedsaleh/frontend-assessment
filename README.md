# Otida's Frontend Assessment

**Instructions:**

1) Init a Git repo with the extracted files.
2) Create a **private** repo under your GitHub account.
3) Share the repo with hossam.eldeen@instadiet.me (From repo -> Settings -> Collaborators -> Add people)
4) Start working in this repo as you'd in real life. Please, notify us when you're done.

The assessment consists of two tasks. Each task's description can be found below.

To make things less time-consuming for you, we've prepared a `components/task-x.tsx` that can be used as an entrypoint for each task.

Please, feel free to add, edit, or remove code or files however you want. For example, if you want to create a new hook or component in a separate file, feel free to do so. Or, e.g., you can add a new library in `package.json`, if needed.

## Task-1

**Requirements:**

- Make http requests to https://jsonplaceholder.typicode.com/posts & https://jsonplaceholder.typicode.com/users
- Show the list of the posts. Each post should show:
  - The post's title from `title` field in `/posts`
  - The post's body from `body` field in `/posts`
  - The post author's name from `name` field in `/users`

For example, for this post:

```json
{
  "userId": 2,
  "id": 11,
  "title": "et ea vero quia laudantium autem",
  "body": "delectus reiciendis molestiae occaecati non minima eveniet qui voluptatibus\naccusamus in eum beatae sit\nvel qui neque voluptates ut commodi qui incidunt\nut ani"
}
```

The title is `et ea...`. The body is `delectus reiciendis...`.  And the author's name is `Ervin Howell` since the `userId` is `2` and the user with `id=2` in `/posts` has their `name` field equal to `Ervin Howell`:

```json
{
  "id": 2,
  "name": "Ervin Howell",
  ...
}
```

**Notes:**

- You can find initial code with sample hardcoded data in `components/task-1.tsx`
- Feel free to use any http client you're comfortable with. E.g., `fetch` or `axios`.
- You can assume that `/posts` & `/users` APIs have no filtering capabilities. They just return the list of all posts and all users.
- No need to care about UI/CSS. Task-2 will cover this aspect.

## Task-2

**Requirements:**

- Convert [Sale Dashboard.fig](https://drive.google.com/file/d/1gkgPUnvq_7NCjpZBZH-GGOCPPn_lQl_D/view?usp=sharing) to React code.
- Make sure it works on different screen sizes, not just the one set in the Figma design.

The design is targeting Desktops, and your code doesn't need to look well on small devices like mobile phones. However, it needs to look well on different _reasonable_ Desktop sizes. E.g., resizing the browser's window shouldn't break it.

How you'd achieve that is up to you. E.g., you could increase or decrease the number of food items in each row, or you could make other decisions. You're the expert here.

You can find the Figma file at [this link](https://drive.google.com/file/d/1gkgPUnvq_7NCjpZBZH-GGOCPPn_lQl_D/view?usp=sharing). Please, make `/components/task-2.tsx` the entrypoint to your code.

**Notes:**

- You can hardcode the user data in your code.
- Feel free to choose whichever styling technology you're most comfortable with. E.g., CSS/SASS/CSS-in-JS/Styled Components, ... etc.? (I'm not even sure if the example technologies I've written here are correct)
- Again: Feel free to add new files and code outside `/components/task-2.tsx`
- Feel free to make assumptions for any part that is not clear.

Credits for the Figma file: [Sale Dashboard Design](https://uistore.org/product/sales-dashboard-design/).
