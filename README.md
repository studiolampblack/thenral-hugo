# Thenral Hugo

Ported from Pehtheme Hugo, Thenral Hugo is an open-source Hugo theme inspired by [Material Design v3](https://m3.material.io/), lovingly crafted using Tailwind CSS.

## Live Demo

Check out the live demo: [Thenral Hugo Live Demo](https://millennierd.com/).

## Performance Testing

To assess the performance of your website using Thenral Hugo, utilize the PageSpeed Insights tool. Click the button below to run a PageSpeed Insights test:

## Features

- Built with Tailwind CSS
- Featured posts displayed on the homepage (To showcase featured posts on the homepage, the Hugo theme uses `feature` tags data)
- Horizontal menus, content tags list
- No JavaScript dependencies
- Vanilla JS toggle button
- Two-column blog layout
- Sidebar with a list of recent posts
- Semantic HTML
- Sidebar Ads box

## Installation

To get started with Thenral Hugo, follow these steps:

1. Install Hugo and create a new site. For detailed instructions, refer to [Hugo's Quick Start Guide](https://gohugo.io/getting-started/quick-start/).

2. Add Thenral Hugo to your project:

    ```bash
    $ git clone https://github.com/studiolampblack/thenral-hugo.git
    ```

3. Simply copy the following 2 folders and 1 content from the `exampleSite` directory to the root of your project:

    ```bash
    exampleSite/
    ├── assets/
    ├── content/
    └── hugo.toml
    ``` 

4. Start Hugo:

    ```bash
    hugo server
    ```

## Configuration

You can configure the following settings in your Hugo project:

- `paginate` = '6' (Set the desired number of home posts per page)
- `summaryLength` = '20' (Approximately 160 characters for 20 words)

## Custom Theme

1. Ensure you have NodeJS installed on your desktop.

2. Copy the Node.js configuration files from the `exampleSite` directory to the root of your Hugo project:

    ```bash
        exampleSite/
        ├── package.json
        ├── postcss.config.js
        └── tailwind.config.js
    ``` 

3. Additionally, copy the `exampleSite/input.css` file to the `assets/input.css` directory of your Hugo project.

4. Run the following command to install necessary dependencies:

    ```bash
    npm install
    ```

5. Customize the theme with Tailwind CSS using the following command:

    ```bash
    npm run dev
    ```

6. To build the website, execute the command:

    ```bash
    npm run build
    ```

## License

Thenral Hugo is MIT Licensed. For more details, see the [LICENSE](https://github.com/studiolampblack/thenral-hugo/blob/main/LICENSE) file.

## Logo Icon

Egg fried icon source: [Bootstrap Icons - Egg Fried](https://icons.getbootstrap.com/icons/egg-fried/)

## Photo Credits

Image credits used in the live preview:

    ```
    Images resource:
    - https://unsplash.com/photos/Smeer5L0tXM
    - https://unsplash.com/photos/2q6C5zDJOsg
    - https://unsplash.com/photos/UNd3lRKhwSw
    - https://unsplash.com/photos/Ed2AELHKYBw
    - https://unsplash.com/photos/rTZW4f02zY8
    - https://unsplash.com/photos/OtXJhYjbKeg
    - https://unsplash.com/photos/ZPP-zP8HYG0
    - https://unsplash.com/photos/ydGRmobx5jA
    - https://pixabay.com/vectors/email-newsletter-email-marketing-3249062/
    ```