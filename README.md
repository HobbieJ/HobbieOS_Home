# Jacob Hobbie's Website

This is the source code for my website, hosted at my website, [JacobHobbie.com](https://jacobhobbie.com). Content updates will be distributed in the following manner through branches:

* master - The most up-to-date version of the website, and what runs on the live site.
* code - Any changes that occur outside of *_posts*, including *_config.yml*, *travis.yml*.
* write - Any posts that will be published in the official blog. All content will be uploaded within *_posts*.

## Installation/Requirements

Before I begin, I should mention that this specific version of Jekyll is customized perfectly for my website. Instead of explaining how to install my website, I want to help anyone who is interested in starting their own Jekyll blog by explaining how to get started with a clean instance of Jekyll with their default theme, *Minima*, which you can also find [here](https://github.com/jekyll/minima).

If you want to install the theme I made for my website, *Hobbies*, you can go [here](https://github.com/HobbieJ/Hobbies) to download it, or to find out how to install it from [RubyGems.org](https://rubygems.org). This theme is designed for my website, but feel free to use it for your own Jekyll instance!

Finally, if you would like a better tutorial on how to install Jekyll, you can find better documentation from Jekyll themselves in their [documentation](https://jekyllrb.com/docs/home/).

### Requirements

*Installation instructions will be for my development environment: A Windows 10 machine with the Windows Linux Subsystem (Ubuntu) installed.*

I will assume you already are comfortable with the command line, (Bash) and have installed the Windows Linux Subsystem, with the Ubuntu variant of Linux. To learn how to enable the Windows Linux Subsystem and install Ubuntu on your Windows machine, follow the link [here](https://docs.microsoft.com/en-us/windows/wsl/install-win10) to Microsoft's documentation, and follow the instructions. You'll have to restart, so make sure you've saved anything important you're working on. Or better yet, work in the cloud whenever you can!

You'll also need to install the following:
* Ruby ([Instructions](https://www.ruby-lang.org/en/documentation/installation/#apt))
* RubyGems ([Instructions](https://rubygems.org/pages/download))
* GCC
* Make

### Installation

*These instructions are my own way of talking through Jekyll's official [quickstart guide](https://jekyllrb.com/docs/quickstart/).*

1. Open Bash (Starting off easy)
2. **(Optional)** I reccomend working in your home directory so you can change things without using *sudo* multiple times. To do that, you can type the following:
```
cd ~
```
3. Install Jekyll & Bundle! You can do that with the following command:
```
gem install jekyll bundler
```
4. Create your new website/blog! You'll end up making a brand new folder with the name you choose for your blog. Replace "myblog" in the command with whatever you choose to name your blog, (without quotes):
```
jekyll new myblog
```
5. Your blog is created! You can either edit the files, or *cd* into your new blog. If you do decide to run your new blog first things first, go ahead and *cd* into your blog, and type the following command:
```
bundle exec jekyll serve
```
6. Now if you visit your localhost, (http://localhost:4000), you'll see your brand new website! Now unless you want your Jekyll blog to look very similar to others on the internet, I'd suggest theming it, either with [Hobbies](https://github.com/HobbieJ/Hobbies), one of the other public themes, or better yet, building your own theme! If you're interested in building your own theme, you can look at [Jekyll's guide](https://jekyllrb.com/docs/themes/), or one of the other tutorials online.

## Final Words

This site and its source code is published using the [MIT License](https://github.com/HobbieJ/HobbieBlog/blob/master/LICENSE) by Jacob Hobbie.

Thank you for visiting my source code for [JacobHobbie.com](https://jacobhobbie.com). I hope you enjoy it, and might be using it to help you think of how to build your own site!