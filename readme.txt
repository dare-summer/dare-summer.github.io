

### Building and testing

1. Executing the command below will build and start a local server for the site. The specific Ruby configuration can be found in the Gemfile in the root folder.
    - Run `bundle exec jekyll serve` on the root folder.
2. For the live server it suffices to copy the `_site` folder contents to your web server.

### Changing contents.

There are different places where content should be added/deleted/changed.

1- The top menubar is in root/_config.yml
2- The root/_data/ folder has important dates and the program schedule. By design of the template, details of the program information is also in other folders such as root/_talks and root/_demos for the lectures and practical sessions respectively.
3- The root/assets folder contains the images (logos, banners, speaker portraits, etc.) and lectures' slides.



